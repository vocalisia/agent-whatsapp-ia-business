"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

export default function CourseSubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/course-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: form.get("firstName"),
        email: form.get("email"),
        consent: form.get("consent") === "on",
        website: form.get("website"),
      }),
    }).catch(() => null);

    const payload = response ? await response.json().catch(() => null) : null;
    if (!response?.ok || !payload?.success) {
      setStatus("error");
      setMessage(payload?.error ?? "Une erreur est survenue. Réessayez dans un instant.");
      return;
    }

    setStatus("success");
    setMessage("Vous êtes bien inscrit·e. Nous vous enverrons le programme et les informations de lancement.");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-6 text-emerald-50">
        <CheckCircle2 size={24} className="text-emerald-300" aria-hidden="true" />
        <p className="mt-3 font-bold">Inscription confirmée</p>
        <p className="mt-2 text-sm leading-6 text-emerald-50">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={subscribe} className="rounded-2xl border border-slate-700 bg-slate-950 p-6" noValidate>
      <div className="flex items-center gap-2 text-emerald-300">
        <Mail size={20} aria-hidden="true" />
        <p className="font-bold">Recevoir le programme et la séquence de lancement</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">Une seule séquence de lancement, puis uniquement les informations liées à cette formation. Désinscription possible à tout moment.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-200">
          Prénom
          <input name="firstName" autoComplete="given-name" maxLength={80} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-white outline-none focus:border-emerald-300" />
        </label>
        <label className="text-sm font-semibold text-slate-200">
          Email
          <input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-white outline-none focus:border-emerald-300" />
        </label>
      </div>
      <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-300">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-emerald-400" />
        J’accepte de recevoir par email le programme et les informations de lancement de la formation Claude Code en pratique.
      </label>
      <label className="sr-only" aria-hidden="true">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {status === "error" && <p className="mt-4 text-sm text-rose-300" role="alert">{message}</p>}
      <button disabled={status === "loading"} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-70">
        <Send size={18} aria-hidden="true" />
        {status === "loading" ? "Inscription…" : "Recevoir le programme"}
      </button>
    </form>
  );
}
