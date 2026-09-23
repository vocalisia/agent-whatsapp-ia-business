import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleAlert,
  FileCheck2,
  FolderGit2,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import CourseSubscribeForm from "@/components/course/CourseSubscribeForm";

const COURSE_URL = "https://agentic-whatsup.com/fr/formation-claude-code";
const ORDER_BY_WHATSAPP =
  "https://wa.me/41799394222?text=Bonjour%2C%20je%20souhaite%20recevoir%20le%20programme%20et%20le%20lien%20d%27inscription%20%C3%A0%20la%20formation%20Claude%20Code%20en%20pratique.";

type Module = {
  number: string;
  title: string;
  outcome: string;
  description: string;
};

const modules: Module[] = [
  {
    number: "01",
    title: "Fondations : installer et cadrer Claude Code",
    outcome: "Vous partez d'un environnement sain et d'un premier projet utile.",
    description:
      "Installation, authentification, dossier de travail, Git et critères d'acceptation : les bases pour transformer une idée en livrable contrôlable.",
  },
  {
    number: "02",
    title: "Permissions et zones de travail",
    outcome: "Vous savez ce qu'une IA peut consulter, modifier ou ne doit jamais voir.",
    description:
      "Permissions, secrets, sauvegardes et projets de test : accélérer sans normaliser les accès illimités ni exposer vos données.",
  },
  {
    number: "03",
    title: "Instructions de projet et Skills",
    outcome: "Vous transformez vos méthodes métier en consignes et capacités réutilisables.",
    description:
      "Contexte de projet, brief testable et skills ciblés : moins de conversations répétées, plus de méthodes que votre équipe peut réemployer.",
  },
  {
    number: "04",
    title: "Automatiser les opérations récurrentes",
    outcome: "Vous repérez les tâches qui méritent d'être automatisées en premier.",
    description:
      "Rapports, préparation de contenus, contrôles de fichiers et documentation : choisir un workflow fréquent, réversible et réellement utile.",
  },
  {
    number: "05",
    title: "Commandes et boucles de contrôle",
    outcome: "Vous pilotez une séquence : analyser, planifier, modifier, vérifier.",
    description:
      "Découpage, revue de diff, tests et retour arrière : l'IA accélère l'exécution tandis que vous gardez la décision et le contrôle qualité.",
  },
  {
    number: "06",
    title: "Acquisition et campagnes Meta",
    outcome: "Vous préparez des hypothèses de campagne à faire valider avant de dépenser.",
    description:
      "Angles, variantes de messages, créas, pages et tableau d'apprentissage : organiser des tests, mesurer et corriger sans déléguer la réflexion.",
  },
  {
    number: "07",
    title: "SEO, données structurées et visibilité IA",
    outcome: "Vous mettez en place un système éditorial fondé sur des sources et des contrôles.",
    description:
      "Briefs éditoriaux, vérifications techniques, maillage et données structurées : améliorer un contenu utile sans promettre une position ou un trafic fictifs.",
  },
  {
    number: "08",
    title: "Transformer une expertise en formats vidéo",
    outcome: "Vous créez une chaîne de production réutilisable, de l'idée à la relecture.",
    description:
      "Scripts, découpages, sous-titres et listes de contrôle : accélérer la préparation de formats courts tout en gardant une validation éditoriale humaine.",
  },
  {
    number: "09",
    title: "Prototyper une offre ou un e-commerce",
    outcome: "Vous savez cadrer un MVP commercial avant de connecter des paiements ou des données réelles.",
    description:
      "Catalogue, pages, parcours et critères de recette : construire une première version, vérifier l'expérience et traiter conformité, paiement et support comme des sujets distincts.",
  },
  {
    number: "10",
    title: "Ressources et système de mise à jour",
    outcome: "Vous maintenez vos workflows à mesure que les outils et vos processus changent.",
    description:
      "Bibliothèque de modèles, journal des décisions, veille officielle et revue périodique : votre autonomie ne repose plus sur un prompt isolé.",
  },
];

const included = [
  "10 modules progressifs avec exercices d'application",
  "Canevas de brief, checklist de revue et modèles de consignes",
  "Guide de sécurité : secrets, permissions, sauvegardes et validation",
  "Mises à jour du programme pendant la période de lancement",
];

const delegationFriction = [
  {
    task: "Une évolution de site ou d'outil",
    current: "Un aller-retour, un devis, un délai, puis une nouvelle dépendance pour la moindre correction.",
    course: "Vous savez cadrer le changement, le faire produire sur un périmètre limité et le vérifier avant de le publier.",
  },
  {
    task: "Une nouvelle campagne ou un nouveau contenu",
    current: "Il faut réunir stratégie, textes, créas, page et mesure avant même de pouvoir apprendre ce qui fonctionne.",
    course: "Vous préparez une première version complète et des hypothèses de test que votre équipe ou un expert peut valider.",
  },
  {
    task: "Une opération interne répétitive",
    current: "Le besoin reste dans une liste de tâches parce qu'il paraît trop petit pour un prestataire et trop technique pour l'équipe.",
    course: "Vous repérez un workflow réversible, documentez les règles et construisez un premier système de contrôle.",
  },
];

const rightForYou = [
  "Vous dirigez une activité et souhaitez que les petites idées deviennent des livrables, pas des tickets qui s'accumulent.",
  "Vous travaillez déjà avec des prestataires, mais voulez reprendre les tâches de préparation, de contrôle et d'itération au quotidien.",
  "Vous n'êtes pas développeur et ne cherchez pas à le devenir : vous voulez piloter, vérifier et décider avec plus d'autonomie.",
];

const objections = [
  {
    question: "Dois-je savoir développer ?",
    answer:
      "Non. Vous devez savoir décrire un résultat métier, vérifier une proposition et décider quand un humain doit reprendre. Le cours explique les notions techniques utiles au moment où elles deviennent nécessaires.",
  },
  {
    question: "Est-ce une formation pour donner des accès illimités à l'IA ?",
    answer:
      "Non. Les permissions sont traitées comme un sujet de gouvernance. Les exercices partent d'un périmètre limité, de fichiers de test et d'une revue avant toute action importante.",
  },
  {
    question: "Que puis-je obtenir à la fin ?",
    answer:
      "Un premier workflow documenté, un cadre de validation et une manière reproductible de confier des tâches à Claude Code. Le résultat dépend de votre contexte, de vos données et de vos contrôles.",
  },
  {
    question: "Comment recevoir le lien de paiement ?",
    answer:
      "Le bouton vous met directement en relation avec l'équipe. Un lien de paiement sécurisé et les modalités d'accès vous sont transmis avant tout règlement.",
  },
];

function getCheckoutUrl() {
  const checkoutUrl = process.env.COURSE_CHECKOUT_URL;
  return checkoutUrl?.startsWith("https://") ? checkoutUrl : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "fr") {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: "Claude Code en pratique — formation pour dirigeants | AgenticWhatsup",
    description:
      "Une formation française pour cadrer, piloter et vérifier des workflows Claude Code sans déléguer le contrôle de vos opérations.",
    alternates: { canonical: COURSE_URL },
    openGraph: {
      title: "Claude Code en pratique : reprendre la main sur vos workflows IA",
      description:
        "Dix modules pour cadrer, piloter et vérifier des livrables avec Claude Code, avec une méthode centrée sur la sécurité et le contrôle qualité.",
      type: "website",
      url: COURSE_URL,
    },
  };
}

export default async function ClaudeCodeTrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "fr") {
    notFound();
  }

  const checkoutUrl = getCheckoutUrl();
  const waitlistEnabled = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID);
  const purchaseUrl = checkoutUrl ?? ORDER_BY_WHATSAPP;
  const purchaseLabel = checkoutUrl
    ? "S'inscrire à la formation — 297 €"
    : "Recevoir le programme et le lien d'inscription";
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Claude Code en pratique — piloter des workflows IA avec contrôle",
    description:
      "Formation en français destinée aux dirigeants et indépendants qui veulent cadrer, piloter et vérifier des workflows Claude Code sans abandonner le contrôle de leurs opérations.",
    url: COURSE_URL,
    inLanguage: "fr",
    provider: {
      "@type": "Organization",
      name: "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
    },
    ...(checkoutUrl
      ? {
          offers: {
            "@type": "Offer",
            price: "297",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: checkoutUrl,
          },
        }
      : {}),
  };

  return (
    <div className="bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.2),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Sparkles size={16} aria-hidden="true" />
              Formation Claude Code · 10 modules · en français
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-6xl">
              Internalisez vos projets numériques avec Claude Code, sans céder le contrôle de votre entreprise.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Du site aux automatisations, de l’acquisition à la production de contenu : une méthode
              opérationnelle pour cadrer une demande, obtenir un livrable vérifiable et décider ce qui
              mérite réellement d’être automatisé — sans devenir développeur ni donner un accès illimité à vos outils.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {purchaseLabel}
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <Link
                href="#programme"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Voir le programme
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              {checkoutUrl
                ? "Paiement sécurisé · modalités d'accès communiquées après inscription"
                : "Demande sans engagement · le paiement n'est jamais demandé sur WhatsApp"}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8">
          {[
            ["Pour qui", "Dirigeants et indépendants non techniques"],
            ["Format", "10 modules, exercices et modèles de travail"],
            ["Approche", "Périmètre limité, revue humaine, traces utiles"],
          ].map(([label, value]) => (
            <div key={label} className="border-l border-emerald-300/40 pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">{label}</p>
              <p className="mt-1 font-medium text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <div>
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">La dépendance qui ralentit tout</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Une idée rentable ne devrait pas attendre une chaîne de devis pour devenir un premier test.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">
            L’objectif n’est pas d’éliminer les experts. C’est de reprendre les micro-décisions, les premières versions et les contrôles qui immobilisent votre équipe entre deux interventions externes.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {delegationFriction.map((item) => (
              <article key={item.task} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-bold text-white">{item.task}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">Aujourd’hui : {item.current}</p>
                <p className="mt-4 border-t border-slate-800 pt-4 text-sm leading-6 text-emerald-100">Avec la méthode : {item.course}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-white">
            À 297 €, la formation doit vous rendre capable de livrer et contrôler une première tâche utile — pas de vous promettre une entreprise sans humains.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">Le vrai problème</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ce n’est pas l’outil qui manque. C’est une méthode fiable pour lui confier une tâche.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              [FolderGit2, "Une demande floue", "Une IA sans contexte produit une réponse difficile à vérifier."],
              [LockKeyhole, "Un accès trop large", "La rapidité devient un risque si les permissions et les données ne sont pas cadrées."],
              [FileCheck2, "Aucune recette", "Un résultat n'a de valeur que si vous savez le relire, le tester et revenir en arrière."],
            ].map(([Icon, title, description]) => {
              const CardIcon = Icon as typeof FolderGit2;
              return (
                <article key={title as string} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <CardIcon className="text-emerald-300" size={24} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-white">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{description as string}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="programme" className="border-y border-slate-800 bg-white py-20 text-slate-900">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-700">Le programme</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Dix modules pour passer de l’intention à des projets numériques que vous savez contrôler.
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {modules.map((module) => (
                <article key={module.number} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <span className="rounded-lg bg-emerald-100 px-3 py-2 text-sm font-black text-emerald-800">
                      {module.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{module.title}</h3>
                      <p className="mt-2 font-medium leading-6 text-emerald-800">{module.outcome}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{module.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">Ce qui est inclus</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Un cadre de travail réutilisable, pas une collection de prompts « magiques ».
            </h2>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-slate-200">
                  <Check className="mt-0.5 shrink-0 text-emerald-300" size={21} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-200">Prix de lancement</p>
            <p className="mt-4 text-5xl font-black text-white">297 €</p>
            <p className="mt-3 leading-7 text-emerald-50">
              Un paiement unique pour le programme, les modèles associés et les mises à jour prévues pendant le lancement.
            </p>
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-950"
            >
              {purchaseLabel}
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-emerald-100">
              {checkoutUrl
                ? "Avant de payer, vérifiez que le format et les modalités d'accès correspondent à votre besoin."
                : "Vous recevez les modalités avant toute décision de paiement."}
            </p>
          </aside>
        </section>

        {waitlistEnabled && (
          <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
            <CourseSubscribeForm />
          </section>
        )}

        <section className="border-y border-slate-200 bg-slate-50 py-20 text-slate-900">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-700">Cette formation est faite pour vous si…</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
               Vous voulez redevenir l’opérateur de vos projets, sans jouer à l’expert dans les domaines qui exigent une vraie expertise.
            </h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {rightForYou.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-white p-6 leading-7 text-slate-700 shadow-sm">
                  <Check className="mb-4 text-emerald-700" size={24} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900 py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-300">Questions utiles avant de s’inscrire</p>
            <div className="mt-8 divide-y divide-slate-700 rounded-2xl border border-slate-700 bg-slate-950 px-6">
              {objections.map((item) => (
                <article key={item.question} className="py-6">
                  <h2 className="flex gap-3 text-lg font-bold text-white">
                    <BadgeCheck className="mt-0.5 shrink-0 text-emerald-300" size={20} aria-hidden="true" />
                    {item.question}
                  </h2>
                  <p className="mt-3 pl-8 leading-7 text-slate-300">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
          <ShieldCheck className="mx-auto text-emerald-300" size={32} aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Commencez par un premier workflow sûr, utile et vérifiable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            L’objectif n’est pas de remplacer votre jugement. C’est de mieux transformer vos connaissances en livrables concrets, sans perdre la maîtrise des données et des décisions.
          </p>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <MessageCircle size={19} aria-hidden="true" />
            {purchaseLabel}
          </a>
          {!checkoutUrl && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
              <CircleAlert size={16} aria-hidden="true" />
              Le lien de paiement n’est transmis qu’après confirmation du format et de la livraison.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
