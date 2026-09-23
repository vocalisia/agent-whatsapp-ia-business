import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, CircleAlert, LockKeyhole, LogOut, Mail, Send, ShieldCheck, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { getResend } from "@/lib/resend";
import { courseEmailSequence, courseTrackingConvention } from "@/lib/course-launch";
import {
  isCourseDashboardAuthenticated,
  isCourseDashboardConfigured,
} from "@/lib/course-dashboard-auth";
import { signInCourseDashboard, signOutCourseDashboard } from "./actions";

export const metadata: Metadata = {
  title: "Pilotage email — Claude Code en pratique",
  robots: { index: false, follow: false },
};

type AudienceSnapshot = {
  visibleContacts: number | null;
  hasMore: boolean;
  error: boolean;
};

async function getAudienceSnapshot(): Promise<AudienceSnapshot> {
  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();
  if (!audienceId || !process.env.RESEND_API_KEY) {
    return { visibleContacts: null, hasMore: false, error: false };
  }

  try {
    const result = await getResend().contacts.list({ audienceId, limit: 100 });
    if (result.error || !result.data) {
      return { visibleContacts: null, hasMore: false, error: true };
    }

    return {
      visibleContacts: result.data.data.length,
      hasMore: result.data.has_more,
      error: false,
    };
  } catch {
    return { visibleContacts: null, hasMore: false, error: true };
  }
}

function ReadinessBadge({ ready }: { ready: boolean }) {
  return ready ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
      <CheckCircle2 size={14} aria-hidden="true" /> Prêt
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
      <CircleAlert size={14} aria-hidden="true" /> À configurer
    </span>
  );
}

function DashboardLogin({ hasError }: { hasError: boolean }) {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <LockKeyhole className="text-emerald-300" size={30} aria-hidden="true" />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-emerald-300">Espace opérateur</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">Pilotage de la séquence email</h1>
        <p className="mt-4 leading-7 text-slate-300">
          Cet espace contient les éléments de lancement et les informations d’audience. Il est réservé à l’équipe qui gère la campagne.
        </p>
        {hasError && (
          <p className="mt-5 rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
            Le code d’accès est invalide.
          </p>
        )}
        <form action={signInCourseDashboard} className="mt-7 space-y-4">
          <label className="block text-sm font-semibold text-slate-200" htmlFor="token">
            Code d’accès
          </label>
          <input
            id="token"
            name="token"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30"
          />
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300">
            Ouvrir le dashboard
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </main>
  );
}

export default async function CourseSequenceDashboard({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  if (locale !== "fr" || !isCourseDashboardConfigured()) notFound();

  const authenticated = await isCourseDashboardAuthenticated();
  if (!authenticated) {
    const { error } = await searchParams;
    return <DashboardLogin hasError={error === "1"} />;
  }

  const audience = await getAudienceSnapshot();
  const resendReady = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID);
  const checkoutReady = Boolean(process.env.COURSE_CHECKOUT_URL?.startsWith("https://"));
  const deliveryReady = Boolean(process.env.COURSE_DELIVERY_URL?.startsWith("https://"));
  const canSchedule = resendReady && checkoutReady && deliveryReady && !audience.error && (audience.visibleContacts ?? 0) > 0;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-100 px-5 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">Lancement · Claude Code en pratique</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Dashboard de la séquence email</h1>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Une séquence de cinq emails pour une audience consentante. Les envois ne sont jamais déclenchés depuis cet écran sans les prérequis de livraison, de paiement et d’audience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/fr/formation-claude-code" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold transition hover:border-emerald-500">
              Voir la landing <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <form action={signOutCourseDashboard}>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold transition hover:border-rose-400 hover:text-rose-700">
                <LogOut size={16} aria-hidden="true" /> Se déconnecter
              </button>
            </form>
          </div>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="État du lancement">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Mail className="text-emerald-700" size={22} aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Séquence prête</p>
            <p className="mt-1 text-3xl font-black">5 emails</p>
            <p className="mt-2 text-sm text-slate-600">J0, J2, J4, J6 et J8</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Users className="text-emerald-700" size={22} aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Audience consentante</p>
            <p className="mt-1 text-3xl font-black">
              {audience.visibleContacts === null ? "—" : audience.hasMore ? `${audience.visibleContacts}+` : audience.visibleContacts}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              {audience.error ? "Lecture Resend indisponible" : resendReady ? "Contacts visibles dans Resend" : "Resend et l'audience ne sont pas configurés"}
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <Send className="text-emerald-700" size={22} aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Envois</p>
            <p className="mt-1 text-3xl font-black">0</p>
            <p className="mt-2 text-sm text-slate-600">Aucun envoi automatique activé</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ShieldCheck className="text-emerald-700" size={22} aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-slate-500">Autorisation d’envoi</p>
            <p className="mt-1 text-2xl font-black">{canSchedule ? "Prête" : "Bloquée"}</p>
            <p className="mt-2 text-sm text-slate-600">Contrôle de sécurité avant campagne</p>
          </article>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">Pré-requis de mise en route</p>
              <h2 className="mt-2 text-2xl font-black">La campagne reste bloquée tant que ces éléments ne sont pas au vert.</h2>
            </div>
            <p className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-600">Aucun destinataire ni identifiant n’est affiché ici.</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold">1. Audience et expéditeur Resend</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Configurer `RESEND_API_KEY` et `RESEND_AUDIENCE_ID`, puis importer uniquement des inscrits consentants.</p>
              <div className="mt-4"><ReadinessBadge ready={resendReady && !audience.error} /></div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold">2. Paiement sécurisé</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Configurer `COURSE_CHECKOUT_URL` avec le Payment Link qui correspond au programme et à ses conditions.</p>
              <div className="mt-4"><ReadinessBadge ready={checkoutReady} /></div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="font-bold">3. Livraison après inscription</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Configurer `COURSE_DELIVERY_URL` vers l’espace ou le processus où l’acheteur reçoit effectivement son programme.</p>
              <div className="mt-4"><ReadinessBadge ready={deliveryReady} /></div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">Séquence prête à relire</p>
              <h2 className="mt-2 text-2xl font-black">Les cinq messages et leur rôle dans le lancement</h2>
            </div>
            <p className="text-sm text-slate-600">UTM : {courseTrackingConvention.source} / {courseTrackingConvention.medium}</p>
          </div>
          <div className="mt-6 grid gap-4">
            {courseEmailSequence.map((email) => (
              <article key={email.id} className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[100px_1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black text-emerald-700">{email.id.toUpperCase()}</p>
                  <p className="mt-1 text-sm text-slate-600">Jour {email.day}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">{email.angle}</p>
                  <h3 className="mt-1 text-lg font-black">{email.subject}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{email.preview}</p>
                  <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Objectif :</span> {email.objective}</p>
                </div>
                <div className="lg:text-right">
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{email.cta}</span>
                  <p className="mt-3 text-xs text-slate-500">utm_campaign={email.campaign}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
