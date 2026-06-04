/* eslint-disable */
import type { EmailTemplate, EmailVariables } from "../types";

export const roiEn: EmailTemplate[] = [
  {
    id: "roi-en-1",
    subjectVariants: [
      "Quick question about {{company}}",
      "{{firstName}}, one number that should bother you",
      "WhatsApp leads {{company}} loses every day",
    ],
    body: ({ firstName, company }: EmailVariables) => `Hi ${firstName},

Took a quick look at ${company} — interesting positioning.

One stat we keep hitting in your space: 47% of WhatsApp customer messages never get a reply. On a typical average basket, that is a measurable revenue leak toward the competitor who answers faster.

We built a WhatsApp AI that replies in 8 seconds (voice, photos, docs), auto-qualifies BANT and fills the calendar. Live in 14 days.

Want to see the ROI math on ${company}? 30 min, no pitch.

→ https://agentic-whatsup.com/en/roi?utm_source=cold&utm_campaign=roi-en&utm_content=e1

Laurent
Agentic WhatsApp
`,
  },
  {
    id: "roi-en-2",
    delayDays: 3,
    subjectVariants: ["Re: Quick question about {{company}}", "{{firstName}} — two more stats", "A competitor already switched"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Quick bump with two numbers I forgot last time:

1. Avg B2B WhatsApp reply time = 4h12. After 1h, conversion drops by half.
2. Our clients bring it down to 8 seconds. Outcome: +2.3× conversion.

Personalized ROI math for ${company}: 30 min, free.

Slot here: https://agentic-whatsup.com/en/roi?utm_source=cold&utm_campaign=roi-en&utm_content=e2

Laurent
`,
  },
  {
    id: "roi-en-3",
    delayDays: 7,
    subjectVariants: ["Closing the {{company}} thread?", "Last try — {{firstName}}", "{{firstName}}, archiving?"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Last note, promise.

Either WhatsApp AI isn't priority for ${company} this year → I'll close the thread.
Or you want to see the ROI math before deciding → 30 min online.

Just reply "yes" or "no" and I adjust.

→ https://agentic-whatsup.com/en/roi?utm_source=cold&utm_campaign=roi-en&utm_content=e3

Laurent
`,
  },
];

export const urgentEn: EmailTemplate[] = [
  {
    id: "urgent-en-1",
    subjectVariants: ["73% of {{company}}'s WhatsApp leads go to competitors", "{{firstName}} — silent revenue bleeding", "What {{company}} loses this weekend"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Direct question: when a prospect messages ${company} on WhatsApp at 7pm on a Friday, who answers?

73% of B2B WhatsApp leads go to the competitor who replies within 1h. Your team can't run 24/7. Our AI can.

Our AI replies in 8 seconds to everything — voice, photos, docs. BANT-qualifies. Hands off only hot leads to your humans.

If stopping the bleed matters: 30 min free audit. We show you exactly how much you lose + how to recover it.

→ https://agentic-whatsup.com/en/urgent?utm_source=cold&utm_campaign=urgent-en&utm_content=e1

Laurent
`,
  },
  {
    id: "urgent-en-2",
    delayDays: 3,
    subjectVariants: ["{{firstName}}, 3 leads lost since Friday", "Re: bleed at {{company}}", "Every hour matters"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Bumping this up.

While you read this, 2-3 prospects have probably DMed ${company} on WhatsApp since Friday night. No reply = competitor wins.

HubSpot study: after 4h without reply, lead is clinically dead.

The 30-min audit measures THIS precisely on your business. You see the weekly loss volume, numbers not vibes.

→ https://agentic-whatsup.com/en/urgent?utm_source=cold&utm_campaign=urgent-en&utm_content=e2

Laurent
`,
  },
  {
    id: "urgent-en-3",
    delayDays: 7,
    subjectVariants: ["Archiving — {{firstName}}", "Last bump {{company}}", "OK I'll back off"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Last note.

Either "WhatsApp lead bleed" isn't a problem for ${company} — fine, I archive.
Or you want the exact weekly loss number — 30 min, free, quantified.

A "no" and I let you be.

→ https://agentic-whatsup.com/en/urgent?utm_source=cold&utm_campaign=urgent-en&utm_content=e3

Laurent
`,
  },
];

export const socialEn: EmailTemplate[] = [
  {
    id: "social-en-1",
    subjectVariants: ["340 European SMBs — is {{company}} missing out?", "{{firstName}}, your sector is moving fast", "47 real estate, 38 clinics, 52 SaaS — and {{company}}?"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

340 European SMBs already run a WhatsApp AI to qualify leads and book meetings. Of those: 47 real estate agencies, 38 clinics, 52 marketing agencies.

6-month results: lead→booking conversion from 14% to 31% (+2.3×). Human team freed from 50% admin load.

I'm shortlisting 3-4 SMBs in your sector to deploy this quarter. If ${company} is interested, 30 min free audit to check fit.

→ https://agentic-whatsup.com/en/social?utm_source=cold&utm_campaign=social-en&utm_content=e1

Laurent
Agentic WhatsApp
`,
  },
  {
    id: "social-en-2",
    delayDays: 3,
    subjectVariants: ["{{firstName}}, 2 slots left this quarter", "Re: your sector is moving", "One of your competitors replied"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Bumping this quickly.

Internal study on our 340 deployed SMBs: companies that wait 6+ months lose ~8% of market share to those who switched.

Simple reason: AI answers while humans sleep. Your competitor captures YOUR prospect on Thursday night.

The 30-min audit tells you exactly where ${company} sits vs the 340 SMBs already deployed. Real sector benchmarks.

→ https://agentic-whatsup.com/en/social?utm_source=cold&utm_campaign=social-en&utm_content=e2

Laurent
`,
  },
  {
    id: "social-en-3",
    delayDays: 7,
    subjectVariants: ["Archiving {{company}} — {{firstName}}", "Last chance this quarter", "Talk or no?"],
    body: ({ firstName, company }: EmailVariables) => `${firstName},

Last message before archiving.

The 340 deployed SMBs aren't a closed club — but slots this quarter capped at ~30 new companies (team capacity).

Either ${company} wants sector benchmarks — 30 min free.
Or bad timing — I'll circle back in 6 months.

Just reply a word.

→ https://agentic-whatsup.com/en/social?utm_source=cold&utm_campaign=social-en&utm_content=e3

Laurent
`,
  },
];
