#!/usr/bin/env python3
"""
translate-blog.py
Traduction articles blog FR -> EN/DE/NL via Mammouth AI (gpt-4o).

- Skip fichiers déjà présents (idempotent).
- Nomme sortie avec slug FR (compat SSR actuel: lib/mdx.ts readPost).
- Génère aussi propositions de slugs SEO natifs -> content/blog/slug-mapping.json.
"""

import json
import os
import sys
import time
from pathlib import Path
from typing import Optional

import urllib.request
import urllib.error

# --- Config ---
API_URL = "https://api.mammouth.ai/v1/chat/completions"
API_KEY = os.environ.get("MAMMOUTH_API_KEY", "sk-OIW5l3prNgJ7ZtVRA0g5RA")
MODEL = "gpt-4o"

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = REPO_ROOT / "content" / "blog"
MAPPING_FILE = BLOG_DIR / "slug-mapping.json"

LOCALES = [
    ("en", "English"),
    ("de", "German"),
    ("nl", "Dutch"),
]

# FR slugs (13) — source de vérité
FR_SLUGS = [
    "5-cas-usage-agent-ia-whatsapp",
    "agent-ia-whatsapp-business",
    "agent-ia-whatsapp-immobilier",
    "agent-ia-whatsapp-vs-chatbot",
    "analyser-photos-clients-ia-whatsapp",
    "automatisation-whatsapp-ecommerce",
    "chatbot-whatsapp-entreprise-automatisation",
    "combien-coute-agent-ia-whatsapp-2026",
    "comment-fonctionne-agent-ia-whatsapp",
    "qualification-leads-whatsapp-b2b",
    "rgpd-whatsapp-ia-guide",
    "whatsapp-marketing-ia-campagnes-automatisees",
    "whatsapp-vs-email-marketing-2026",
]

# --- Tracking tokens ---
TOTAL_TOKENS = {"prompt": 0, "completion": 0, "total": 0}


def call_mammouth(system: str, user: str, max_tokens: int = 4096, temperature: float = 0.3) -> str:
    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "temperature": temperature,
        "max_tokens": max_tokens,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        API_URL,
        data=data,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}",
        },
        method="POST",
    )
    last_err: Optional[Exception] = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=180) as resp:
                body = resp.read().decode("utf-8")
                parsed = json.loads(body)
                usage = parsed.get("usage", {}) or {}
                TOTAL_TOKENS["prompt"] += usage.get("prompt_tokens", 0)
                TOTAL_TOKENS["completion"] += usage.get("completion_tokens", 0)
                TOTAL_TOKENS["total"] += usage.get("total_tokens", 0)
                return parsed["choices"][0]["message"]["content"]
        except urllib.error.HTTPError as e:
            last_err = e
            detail = ""
            try:
                detail = e.read().decode("utf-8")[:400]
            except Exception:
                pass
            print(f"  [HTTP {e.code}] attempt {attempt+1}/3: {detail}", file=sys.stderr)
            time.sleep(3 + attempt * 3)
        except Exception as e:
            last_err = e
            print(f"  [ERR] attempt {attempt+1}/3: {e}", file=sys.stderr)
            time.sleep(3 + attempt * 3)
    raise RuntimeError(f"Mammouth call failed after retries: {last_err}")


def strip_code_fence(text: str) -> str:
    t = text.strip()
    if t.startswith("```"):
        lines = t.splitlines()
        # drop first line (``` or ```mdx)
        lines = lines[1:]
        # drop trailing fence
        if lines and lines[-1].strip().startswith("```"):
            lines = lines[:-1]
        t = "\n".join(lines)
    return t.strip() + "\n"


def translate_article(fr_content: str, target_lang_name: str, target_locale: str) -> str:
    system = (
        "You are a professional SEO translator. You translate French MDX blog articles "
        f"into {target_lang_name} while preserving native SEO intent, MDX frontmatter, "
        "Markdown structure, internal link patterns, and brand voice."
    )
    user = f"""Translate this French MDX article to {target_lang_name} preserving:
- MDX frontmatter structure (translate title and description; KEEP date, author, readTime unchanged; frontmatter keys in English like title:/description:/date:/author:/readTime: MUST stay in English).
- Markdown formatting (##, ###, bullets, tables, bold, blockquotes) exactly.
- SEO intent: adapt keywords to native {target_lang_name} search intent (NOT literal word-for-word).
- Internal links: rewrite any /blog/SLUG link to /{target_locale}/blog/SLUG (keep the same FR slug — do NOT translate slugs; SSR routing uses FR slugs as canonical).
- Any /fr/... link -> /{target_locale}/... (replace locale prefix only).
- Tone: expert, data-driven, actionable.
- Brand: "AgenticWhatsup" stays unchanged in every language.
- Currency: keep € for all locales (EU consistency).
- Numbers, stats, company names, proper nouns: keep identical.

OUTPUT RULES:
- Return ONLY the raw MDX file content.
- Do NOT wrap in code fences, do NOT add commentary, do NOT prefix with a language label.
- Start directly with the frontmatter delimiter `---`.

--- SOURCE ARTICLE (French MDX) ---
{fr_content}
"""
    raw = call_mammouth(system, user, max_tokens=8000, temperature=0.3)
    return strip_code_fence(raw)


def propose_slug(title: str, target_lang_name: str, target_locale: str) -> str:
    system = (
        "You output ONE SEO-optimized URL slug. No explanation, no punctuation other than hyphens, "
        "lowercase, ASCII, max 60 chars, no trailing dot."
    )
    user = (
        f"Give me the best SEO slug in {target_lang_name} (locale: {target_locale}) "
        f"for a blog article with title: {title}\n"
        "Output ONLY the slug, nothing else."
    )
    raw = call_mammouth(system, user, max_tokens=40, temperature=0.2)
    slug = raw.strip().splitlines()[0].strip().strip("`\"' ").lower()
    # sanitize
    allowed = "abcdefghijklmnopqrstuvwxyz0123456789-"
    slug = "".join(c if c in allowed else "-" for c in slug)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-")[:60]


def extract_title(mdx: str) -> str:
    for line in mdx.splitlines():
        if line.startswith("title:"):
            return line.split("title:", 1)[1].strip().strip('"').strip("'")
    return ""


def main() -> None:
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    for loc, _ in LOCALES:
        (BLOG_DIR / loc).mkdir(parents=True, exist_ok=True)

    # Load existing mapping if any
    if MAPPING_FILE.exists():
        mapping = json.loads(MAPPING_FILE.read_text(encoding="utf-8"))
    else:
        mapping = {"fr-to-en": {}, "fr-to-de": {}, "fr-to-nl": {}}

    created: list[str] = []
    skipped: list[str] = []

    for fr_slug in FR_SLUGS:
        fr_path = BLOG_DIR / f"{fr_slug}.mdx"
        if not fr_path.exists():
            print(f"[WARN] Missing FR source: {fr_slug}", file=sys.stderr)
            continue
        fr_content = fr_path.read_text(encoding="utf-8")
        fr_title = extract_title(fr_content)

        for target_locale, target_lang_name in LOCALES:
            out_path = BLOG_DIR / target_locale / f"{fr_slug}.mdx"
            if out_path.exists():
                skipped.append(str(out_path))
                # fill mapping if empty
                key = f"fr-to-{target_locale}"
                if fr_slug not in mapping.get(key, {}):
                    # keep same slug (SSR constraint) but also propose native slug for future
                    try:
                        native = propose_slug(fr_title, target_lang_name, target_locale)
                        mapping[key][fr_slug] = native
                    except Exception as e:
                        print(f"  [slug propose fail] {fr_slug}->{target_locale}: {e}", file=sys.stderr)
                continue

            print(f"[TRANSLATE] {fr_slug} -> {target_locale}")
            try:
                translated = translate_article(fr_content, target_lang_name, target_locale)
                out_path.write_text(translated, encoding="utf-8")
                created.append(str(out_path))
            except Exception as e:
                print(f"  [FAIL] {fr_slug}->{target_locale}: {e}", file=sys.stderr)
                continue

            # Propose native slug for mapping
            try:
                native = propose_slug(fr_title, target_lang_name, target_locale)
                mapping[f"fr-to-{target_locale}"][fr_slug] = native
            except Exception as e:
                print(f"  [slug propose fail] {fr_slug}->{target_locale}: {e}", file=sys.stderr)

            # small pacing
            time.sleep(0.5)

    # persist mapping
    MAPPING_FILE.write_text(json.dumps(mapping, indent=2, ensure_ascii=False), encoding="utf-8")

    # Report
    print("\n=== REPORT ===")
    print(f"Created : {len(created)}")
    for p in created:
        print(f"  + {p}")
    print(f"Skipped (already exist): {len(skipped)}")
    print(f"Tokens prompt    : {TOTAL_TOKENS['prompt']}")
    print(f"Tokens completion: {TOTAL_TOKENS['completion']}")
    print(f"Tokens total     : {TOTAL_TOKENS['total']}")
    print(f"Mapping written  : {MAPPING_FILE}")


if __name__ == "__main__":
    main()
