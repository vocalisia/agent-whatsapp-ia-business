"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, Calendar, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Une erreur est survenue.");
      } else {
        setSuccess(true);
        reset();
      }
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "#";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Contact</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Parlons de votre projet</h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          30 minutes pour analyser vos besoins. Proposition personnalisée sous 48h.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          {success ? (
            <div className="bg-wa/10 border border-wa/30 rounded-2xl p-10 text-center">
              <CheckCircle className="text-wa mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-bold text-white mb-2">Message envoyé !</h2>
              <p className="text-slate-400">
                Nous avons bien reçu votre message et reviendrons vers vous sous 48h.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 text-wa hover:underline text-sm font-medium"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-surface rounded-2xl p-8 border border-surface-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nom complet <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full bg-bg border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa transition-colors"
                    placeholder="Jean Dupont"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" },
                    })}
                    type="email"
                    className="w-full bg-bg border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa transition-colors"
                    placeholder="jean@societe.fr"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Société</label>
                  <input
                    {...register("company")}
                    className="w-full bg-bg border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa transition-colors"
                    placeholder="Ma Société SARL"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Téléphone</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-bg border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa transition-colors"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Le message est requis" })}
                  rows={5}
                  className="w-full bg-bg border border-surface-2 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-wa transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos volumes de messages, vos besoins d'intégration..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-wa hover:bg-wa-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
              >
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>

        {/* Side panel */}
        <div className="space-y-6">
          <div className="bg-surface rounded-2xl p-6 border border-surface-2">
            <h3 className="font-bold text-white text-lg mb-4">Réponse rapide garantie</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nous répondons à tous les messages sous 48h ouvrées. Pour une réponse immédiate, contactez-nous directement sur WhatsApp.
            </p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center"
            >
              <MessageCircle size={18} />
              Écrire sur WhatsApp
            </a>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-surface-2">
            <h3 className="font-bold text-white text-lg mb-4">Préférez un appel ?</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Réservez directement un diagnostic gratuit de 30 minutes avec notre équipe.
            </p>
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-wa text-wa hover:bg-wa hover:text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center"
            >
              <Calendar size={18} />
              Réserver un créneau
            </a>
          </div>

          <div className="bg-wa/5 rounded-2xl p-6 border border-wa/20">
            <h3 className="font-semibold text-white mb-3">Ce qui vous attend</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                "Analyse de vos scénarios WhatsApp",
                "Recommandations techniques",
                "Proposition de formule adaptée",
                "Devis détaillé sous 48h",
                "Sans engagement",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-wa">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
