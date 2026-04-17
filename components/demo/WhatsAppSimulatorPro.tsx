"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Send,
  CheckCheck,
  Camera,
  Mic,
  Paperclip,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  Smile,
  Globe,
  PartyPopper,
} from "lucide-react";
import type { SimulatorConfig, QuickReply } from "./WhatsAppSimulator";

/* ─── Sector photos ─── */

interface SectorPhoto {
  emoji: string;
  label: string;
  triggerText: string; // sent as user message
}

const SECTOR_PHOTOS: Record<string, SectorPhoto[]> = {
  general: [
    { emoji: "📄", label: "Facture", triggerText: "envoyer photo" },
    { emoji: "🪪", label: "Carte d'identite", triggerText: "envoyer photo" },
    { emoji: "📦", label: "Colis endommage", triggerText: "envoyer photo" },
  ],
  ecommerce: [
    { emoji: "👗", label: "Robe defectueuse", triggerText: "photo produit" },
    { emoji: "📦", label: "Colis abime", triggerText: "photo produit" },
    { emoji: "👟", label: "Mauvaise taille", triggerText: "photo produit" },
  ],
  coach: [
    { emoji: "📋", label: "Objectifs client", triggerText: "photo document" },
    { emoji: "📊", label: "Bilan competences", triggerText: "photo document" },
    { emoji: "🎯", label: "Vision board", triggerText: "photo document" },
  ],
  assurance: [
    { emoji: "🚗", label: "Degats voiture", triggerText: "photo sinistre" },
    { emoji: "🏠", label: "Degats des eaux", triggerText: "photo sinistre" },
    { emoji: "🔥", label: "Incendie", triggerText: "photo sinistre" },
  ],
  immobilier: [
    { emoji: "🏡", label: "Maison a vendre", triggerText: "photo bien" },
    { emoji: "🏢", label: "Appartement T3", triggerText: "photo bien" },
    { emoji: "🏗️", label: "Terrain constructible", triggerText: "photo bien" },
  ],
  restaurant: [
    { emoji: "🍽️", label: "Plat du jour", triggerText: "photo plat" },
    { emoji: "🍷", label: "Carte des vins", triggerText: "photo plat" },
    { emoji: "🎂", label: "Dessert maison", triggerText: "photo plat" },
  ],
  medical: [
    { emoji: "🩹", label: "Eruption cutanee", triggerText: "photo symptome" },
    { emoji: "💊", label: "Ordonnance", triggerText: "photo symptome" },
    { emoji: "🦷", label: "Douleur dentaire", triggerText: "photo symptome" },
  ],
  fitness: [
    { emoji: "💪", label: "Progression physique", triggerText: "photo progression" },
    { emoji: "🏋️", label: "Posture exercice", triggerText: "photo progression" },
    { emoji: "📏", label: "Mensurations", triggerText: "photo progression" },
  ],
  automobile: [
    { emoji: "🚙", label: "Vehicule occasion", triggerText: "photo vehicule" },
    { emoji: "🔧", label: "Panne moteur", triggerText: "photo vehicule" },
    { emoji: "💥", label: "Carrosserie rayee", triggerText: "photo vehicule" },
  ],
  juridique: [
    { emoji: "📜", label: "Contrat de bail", triggerText: "photo document" },
    { emoji: "⚖️", label: "Mise en demeure", triggerText: "photo document" },
    { emoji: "📑", label: "Statuts societe", triggerText: "photo document" },
  ],
  hotel: [
    { emoji: "🛏️", label: "Chambre standard", triggerText: "photo chambre" },
    { emoji: "🏊", label: "Vue piscine", triggerText: "photo chambre" },
    { emoji: "🍳", label: "Petit-dejeuner", triggerText: "photo chambre" },
  ],
};

/* ─── Sector voice messages ─── */

interface SectorVoice {
  transcript: string;
  triggerText: string; // what to send to bot intent matching
  duration: string; // display duration
}

const SECTOR_VOICES: Record<string, SectorVoice[]> = {
  general: [
    { transcript: "Bonjour, je voudrais en savoir plus sur vos agents IA WhatsApp", triggerText: "comment ca marche", duration: "0:04" },
    { transcript: "Quels sont vos tarifs pour une PME de 10 personnes ?", triggerText: "tarif", duration: "0:03" },
    { transcript: "Est-ce que vous pouvez cloner ma voix pour l'agent ?", triggerText: "clonage vocal", duration: "0:03" },
  ],
  ecommerce: [
    { transcript: "Bonjour, ma commande numero 4829 n'est toujours pas arrivee", triggerText: "suivi commande", duration: "0:04" },
    { transcript: "Je voudrais retourner la robe que j'ai recue, elle est trop petite", triggerText: "retour", duration: "0:05" },
    { transcript: "Vous avez le modele en bleu taille M en stock ?", triggerText: "stock", duration: "0:03" },
  ],
  coach: [
    { transcript: "Bonjour, j'aimerais prendre un rendez-vous pour une seance decouverte", triggerText: "seance decouverte", duration: "0:04" },
    { transcript: "Quels sont vos programmes de coaching disponibles ?", triggerText: "programmes", duration: "0:03" },
    { transcript: "Je me sens bloque dans ma carriere, vous pouvez m'aider ?", triggerText: "objectifs", duration: "0:04" },
  ],
  assurance: [
    { transcript: "J'ai eu un accident de voiture ce matin, comment declarer le sinistre ?", triggerText: "declarer sinistre", duration: "0:05" },
    { transcript: "Je voudrais un devis pour mon assurance habitation", triggerText: "devis", duration: "0:03" },
    { transcript: "Ou en est mon dossier de sinistre numero SIN-2026-04 ?", triggerText: "suivi dossier", duration: "0:04" },
  ],
  immobilier: [
    { transcript: "Je cherche un appartement 3 pieces a Paris dans le 11eme", triggerText: "recherche bien", duration: "0:04" },
    { transcript: "Combien vaut mon appartement de 65 metres carres a Lyon ?", triggerText: "estimation", duration: "0:04" },
    { transcript: "Je voudrais visiter le bien rue de la Paix samedi matin", triggerText: "visite", duration: "0:04" },
  ],
  restaurant: [
    { transcript: "Bonjour, je voudrais reserver une table pour 4 personnes samedi soir", triggerText: "reservation", duration: "0:05" },
    { transcript: "Quel est le menu du jour ?", triggerText: "menu", duration: "0:02" },
    { transcript: "Est-ce que vous avez des options vegetariennes ?", triggerText: "vegetarien", duration: "0:03" },
  ],
  medical: [
    { transcript: "Bonjour, je voudrais prendre rendez-vous avec le docteur Martin", triggerText: "prise rdv", duration: "0:04" },
    { transcript: "Je dois renouveler mon ordonnance pour le Levothyrox", triggerText: "ordonnance", duration: "0:04" },
    { transcript: "Est-ce que la teleconsultation est possible ce soir ?", triggerText: "teleconsultation", duration: "0:03" },
  ],
  fitness: [
    { transcript: "Quels abonnements proposez-vous et a quel prix ?", triggerText: "abonnement", duration: "0:03" },
    { transcript: "Je voudrais essayer votre salle, vous avez un essai gratuit ?", triggerText: "essai gratuit", duration: "0:04" },
    { transcript: "J'aimerais prendre un coach personnel pour perdre du poids", triggerText: "coach", duration: "0:04" },
  ],
  automobile: [
    { transcript: "Je cherche un SUV familial avec un budget de 30 000 euros", triggerText: "vehicule", duration: "0:04" },
    { transcript: "Combien vous reprenez ma Peugeot 3008 de 2021 ?", triggerText: "reprise", duration: "0:03" },
    { transcript: "Je voudrais faire un essai route du nouveau Cupra Formentor", triggerText: "essai", duration: "0:04" },
  ],
  juridique: [
    { transcript: "J'ai un probleme avec mon proprietaire qui refuse de faire les reparations", triggerText: "bail", duration: "0:05" },
    { transcript: "Je voudrais creer une SAS, quelles sont les etapes ?", triggerText: "creation entreprise", duration: "0:04" },
    { transcript: "Mon voisin me doit 3000 euros, comment envoyer une mise en demeure ?", triggerText: "mise en demeure", duration: "0:05" },
  ],
  hotel: [
    { transcript: "Je voudrais reserver une chambre double du 15 au 18 mai", triggerText: "reservation", duration: "0:04" },
    { transcript: "A quelle heure est le check-in et le check-out ?", triggerText: "check in", duration: "0:03" },
    { transcript: "Vous avez un service spa et massage ?", triggerText: "spa", duration: "0:02" },
  ],
};

/* ─── Types ─── */

interface ChatMessage {
  id: string;
  from: "user" | "bot";
  text: string;
  time: string;
  isPhoto?: boolean;
  isVocal?: boolean;
  photoEmoji?: string;
  vocalDuration?: string;
}

export interface SimulatorEvent {
  type: "user_message" | "bot_response" | "typing_start" | "typing_end";
  responseTimeMs?: number;
  messageCount?: number;
  leadScore?: number;
  sentiment?: "positive" | "neutral" | "negative";
  language?: string;
}

interface WhatsAppSimulatorProProps {
  config: SimulatorConfig;
  onEvent?: (event: SimulatorEvent) => void;
  selectedSector?: string;
  sectorKey?: string;
}

/* ─── Score heuristics ─── */

const SCORE_KEYWORDS: Record<string, number> = {
  rdv: 25, reserver: 25, book: 25, rendez: 25,
  tarif: 15, prix: 15, combien: 15, pricing: 15,
  demo: 10, essai: 10, tester: 10,
  comment: 5, marche: 5, fonctionne: 5,
  oui: 20, absolument: 20, parfait: 15, genial: 15,
  "confirmer rdv": 35, "lundi": 30, "mardi": 30,
};

const SENTIMENT_KEYWORDS = {
  positive: ["merci", "super", "genial", "parfait", "bravo", "excellent", "top", "oui", "absolument", "impressionnant"],
  negative: ["non", "probleme", "reclamation", "erreur", "mauvais", "nul", "cher", "arnaque"],
};

function detectLanguage(text: string): string {
  const lower = text.toLowerCase();
  if (/\b(the|and|how|what|yes|no|please|thank)\b/.test(lower)) return "EN";
  if (/\b(und|wie|was|ja|nein|bitte|danke)\b/.test(lower)) return "DE";
  if (/\b(y|como|que|si|no|por favor|gracias)\b/.test(lower)) return "ES";
  if (/\b(en|het|hoe|wat|ja|nee|dank)\b/.test(lower)) return "NL";
  return "FR";
}

function computeLeadDelta(text: string): number {
  const lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let delta = 0;
  for (const [kw, score] of Object.entries(SCORE_KEYWORDS)) {
    if (lower.includes(kw)) delta = Math.max(delta, score);
  }
  return delta;
}

function detectSentiment(text: string): "positive" | "neutral" | "negative" {
  const lower = text.toLowerCase();
  const pos = SENTIMENT_KEYWORDS.positive.some((w) => lower.includes(w));
  const neg = SENTIMENT_KEYWORDS.negative.some((w) => lower.includes(w));
  if (pos && !neg) return "positive";
  if (neg && !pos) return "negative";
  return "neutral";
}

/* ─── Helpers ─── */

function getTimestamp(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function findBotResponse(input: string, config: SimulatorConfig) {
  const normalized = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  for (const [key, response] of Object.entries(config.intents)) {
    if (normalized === key || normalized.includes(key)) return response;
  }
  for (const [intent, keywords] of Object.entries(config.keywords)) {
    if (keywords.some((kw) => normalized.includes(kw))) {
      const response = config.intents[intent];
      if (response) return response;
    }
  }
  return config.fallback;
}

/* ─── Confetti ─── */

function Confetti({ active }: { active: boolean }) {
  if (!active) return null;
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    color: ["#25D366", "#6366F1", "#F59E0B", "#EF4444", "#10B981"][i % 5],
    size: 4 + Math.random() * 6,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `confettiFall 2s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Typing Indicator ─── */

function TypingIndicator({ avatar }: { avatar?: string }) {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-wa to-emerald-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
        {avatar ?? "AI"}
      </div>
      <div className="bg-surface-2 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 bg-wa/70 rounded-full"
            style={{ animation: "typing-dot 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Speed Badge ─── */

function SpeedBadge({ ms }: { ms: number }) {
  if (ms <= 0) return null;
  const secs = (ms / 1000).toFixed(1);
  return (
    <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full z-10 hidden lg:flex items-center gap-1.5 bg-surface border border-wa/30 rounded-lg px-2.5 py-1.5 shadow-lg animate-[slideUp_0.3s_ease-out]">
      <div className="w-1.5 h-1.5 bg-wa rounded-full animate-pulse" />
      <span className="text-[10px] text-wa font-mono font-bold">{secs}s</span>
      <span className="text-[9px] text-slate-500">vs 45min humain</span>
    </div>
  );
}

/* ─── Main Component ─── */

export default function WhatsAppSimulatorPro({ config, onEvent, selectedSector, sectorKey = "general" }: WhatsAppSimulatorProProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", from: "bot", text: config.welcomeMessage, time: getTimestamp() },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(config.initialQuickReplies);
  const [lastResponseMs, setLastResponseMs] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [totalScore, setTotalScore] = useState(10);
  const [msgCount, setMsgCount] = useState(1);
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);
  const [showVoicePicker, setShowVoicePicker] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const typingStartRef = useRef(0);

  // Reset on config change
  useEffect(() => {
    setMessages([{ id: "welcome", from: "bot", text: config.welcomeMessage, time: getTimestamp() }]);
    setQuickReplies(config.initialQuickReplies);
    setInput("");
    setIsTyping(false);
    setLastResponseMs(0);
    setShowConfetti(false);
    setTotalScore(10);
    setMsgCount(1);
  }, [config]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping]);

  // Play notification sound
  const playSound = useCallback(() => {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch {}
  }, []);

  const triggerConfetti = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        from: "user",
        text: text.trim(),
        time: getTimestamp(),
      };

      const newMsgCount = msgCount + 1;
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setQuickReplies([]);
      setIsTyping(true);
      setMsgCount(newMsgCount);
      typingStartRef.current = Date.now();

      const lang = detectLanguage(text);
      const sentiment = detectSentiment(text);
      const scoreDelta = computeLeadDelta(text);
      const newScore = Math.min(100, totalScore + scoreDelta);
      setTotalScore(newScore);

      onEvent?.({
        type: "user_message",
        messageCount: newMsgCount,
        leadScore: newScore,
        sentiment,
        language: lang,
      });
      onEvent?.({ type: "typing_start" });

      const response = findBotResponse(text, config);

      setTimeout(() => {
        const responseTime = Date.now() - typingStartRef.current;
        setIsTyping(false);
        setLastResponseMs(responseTime);

        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          from: "bot",
          text: response.text,
          time: getTimestamp(),
        };

        const finalCount = newMsgCount + 1;
        setMessages((prev) => [...prev, botMsg]);
        setQuickReplies(response.quickReplies ?? []);
        setMsgCount(finalCount);
        playSound();

        // Confetti on RDV confirmed or high score
        const lower = text.toLowerCase();
        if (lower.includes("confirmer") || lower.includes("lundi") || lower.includes("mardi") || lower.includes("jeudi") || lower.includes("vendredi") || newScore >= 80) {
          triggerConfetti();
        }

        onEvent?.({
          type: "bot_response",
          responseTimeMs: responseTime,
          messageCount: finalCount,
          leadScore: newScore,
        });
        onEvent?.({ type: "typing_end" });
      }, response.delay);
    },
    [isTyping, config, onEvent, playSound, triggerConfetti, msgCount, totalScore]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  /* ─── Voice message sender ─── */
  const sendVoice = useCallback((voice: SectorVoice) => {
    if (isTyping) return;
    setShowVoicePicker(false);

    // Show vocal bubble from user
    const voiceMsg: ChatMessage = {
      id: `user-voice-${Date.now()}`,
      from: "user",
      text: voice.transcript,
      time: getTimestamp(),
      isVocal: true,
      vocalDuration: voice.duration,
    };
    setMessages((prev) => [...prev, voiceMsg]);
    const newCount = msgCount + 1;
    setMsgCount(newCount);
    setQuickReplies([]);
    setIsTyping(true);
    typingStartRef.current = Date.now();

    const lang = detectLanguage(voice.transcript);
    const sentiment = detectSentiment(voice.transcript);
    const scoreDelta = computeLeadDelta(voice.transcript);
    const newScore = Math.min(100, totalScore + scoreDelta);
    setTotalScore(newScore);

    onEvent?.({ type: "user_message", messageCount: newCount, leadScore: newScore, sentiment, language: lang });
    onEvent?.({ type: "typing_start" });

    const response = findBotResponse(voice.triggerText, config);

    setTimeout(() => {
      const responseTime = Date.now() - typingStartRef.current;
      setIsTyping(false);
      setLastResponseMs(responseTime);

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        from: "bot",
        text: "**Vocal transcrit :**\n\"" + voice.transcript + "\"\n\n" + response.text,
        time: getTimestamp(),
      };
      const finalCount = newCount + 1;
      setMessages((prev) => [...prev, botMsg]);
      setQuickReplies(response.quickReplies ?? []);
      setMsgCount(finalCount);
      playSound();

      if (newScore >= 80) triggerConfetti();

      onEvent?.({ type: "bot_response", responseTimeMs: responseTime, messageCount: finalCount, leadScore: newScore });
      onEvent?.({ type: "typing_end" });
    }, response.delay + 800); // +800ms for "transcription" effect
  }, [isTyping, config, onEvent, playSound, triggerConfetti, msgCount, totalScore]);

  /* ─── Photo picker ─── */
  const sendPhoto = useCallback((photo: SectorPhoto) => {
    if (isTyping) return;
    setShowPhotoPicker(false);

    const photoMsg: ChatMessage = {
      id: `user-photo-${Date.now()}`,
      from: "user",
      text: photo.label,
      time: getTimestamp(),
      isPhoto: true,
      photoEmoji: photo.emoji,
    };
    setMessages((prev) => [...prev, photoMsg]);
    const newCount = msgCount + 1;
    setMsgCount(newCount);
    setQuickReplies([]);
    setIsTyping(true);
    typingStartRef.current = Date.now();

    const scoreDelta = computeLeadDelta(photo.triggerText);
    const newScore = Math.min(100, totalScore + scoreDelta);
    setTotalScore(newScore);

    onEvent?.({ type: "user_message", messageCount: newCount, leadScore: newScore, sentiment: "neutral", language: "FR" });
    onEvent?.({ type: "typing_start" });

    const response = findBotResponse(photo.triggerText, config);

    setTimeout(() => {
      const responseTime = Date.now() - typingStartRef.current;
      setIsTyping(false);
      setLastResponseMs(responseTime);

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        from: "bot",
        text: response.text,
        time: getTimestamp(),
      };
      const finalCount = newCount + 1;
      setMessages((prev) => [...prev, botMsg]);
      setQuickReplies(response.quickReplies ?? []);
      setMsgCount(finalCount);
      playSound();

      if (newScore >= 80) triggerConfetti();

      onEvent?.({ type: "bot_response", responseTimeMs: responseTime, messageCount: finalCount, leadScore: newScore });
      onEvent?.({ type: "typing_end" });
    }, response.delay);
  }, [isTyping, config, onEvent, playSound, triggerConfetti, msgCount, totalScore]);

  const currentPhotos = SECTOR_PHOTOS[sectorKey] ?? SECTOR_PHOTOS.general;
  const currentVoices = SECTOR_VOICES[sectorKey] ?? SECTOR_VOICES.general;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute -inset-4 bg-wa/8 rounded-[3rem] blur-3xl" />

        <div className="relative bg-[#050A14] rounded-[2.5rem] border-2 border-surface-3 overflow-hidden shadow-2xl">
          <Confetti active={showConfetti} />

          {/* Status bar */}
          <div className="bg-[#050A14] px-6 pt-3 pb-1 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-medium">{getTimestamp()}</span>
            <div className="w-20 h-5 bg-surface rounded-full" />
            <div className="flex gap-1 items-center">
              <div className="text-[8px] text-slate-500">5G</div>
              <div className="w-4 h-2 border border-slate-500 rounded-sm relative">
                <div className="absolute inset-0.5 bg-wa rounded-[1px]" style={{ width: "70%" }} />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="bg-surface px-3 py-2.5 flex items-center gap-2 border-b border-surface-2">
            <ArrowLeft size={18} className="text-slate-400" />
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-wa to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {config.botAvatar ?? "AI"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate" style={{ fontFamily: "Onest, sans-serif" }}>
                {config.botName}
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-wa rounded-full animate-pulse" />
                <span className="text-[10px] text-wa">en ligne</span>
                {selectedSector && (
                  <span className="text-[9px] text-slate-500 ml-1">• {selectedSector}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Video size={18} className="text-slate-400" />
              <Phone size={16} className="text-slate-400" />
              <MoreVertical size={18} className="text-slate-400" />
            </div>
          </div>

          {/* Chat + Speed badge */}
          <div className="relative">
            <SpeedBadge ms={lastResponseMs} />

            <div
              ref={chatContainerRef}
              className="h-[460px] overflow-y-auto px-3 py-3 flex flex-col gap-2.5 scroll-smooth"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02eiIgZmlsbD0iIzI1RDM2NiIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+\")",
              }}
            >
              <div className="flex justify-center mb-1">
                <span className="bg-surface-2/80 text-[10px] text-slate-400 px-3 py-1 rounded-lg">
                  Aujourd&apos;hui
                </span>
              </div>

              {messages.map((msg) => {
                const isBot = msg.from === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-1.5 ${isBot ? "justify-start" : "justify-end"} animate-[slideUp_0.3s_ease-out]`}
                  >
                    {isBot && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-wa to-emerald-400 flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0 mb-1">
                        {config.botAvatar ?? "AI"}
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-3 py-2 max-w-[85%] ${
                        isBot
                          ? "bg-surface-2 border border-surface-3 rounded-bl-sm"
                          : "bg-wa/20 border border-wa/30 rounded-br-sm"
                      }`}
                    >
                      {/* Photo bubble */}
                      {msg.isPhoto && (
                        <div className="mb-1.5">
                          <div className="w-full h-24 bg-surface-3/50 rounded-lg flex items-center justify-center text-4xl mb-1">
                            {msg.photoEmoji}
                          </div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <Camera size={10} className="text-wa" />
                            <span className="text-[10px] text-wa font-medium">Photo envoyee</span>
                          </div>
                        </div>
                      )}
                      {/* Vocal bubble */}
                      {msg.isVocal && (
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 bg-wa rounded-full flex items-center justify-center flex-shrink-0">
                            <Mic size={12} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex gap-0.5 mb-0.5">
                              {Array.from({ length: 18 }, (_, i) => (
                                <div key={i} className="w-0.5 bg-wa/60 rounded-full" style={{ height: `${3 + Math.sin(i * 0.8) * 5 + Math.random() * 3}px` }} />
                              ))}
                            </div>
                            <span className="text-[9px] text-wa font-mono">{msg.vocalDuration ?? "0:03"}</span>
                          </div>
                        </div>
                      )}
                      <p className="text-[13px] leading-relaxed text-slate-200 whitespace-pre-line">
                        {msg.isVocal && <span className="text-[10px] text-slate-400 block mb-0.5">Transcription :</span>}
                        {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) => {
                          if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                          }
                          if (part.startsWith("*") && part.endsWith("*")) {
                            return <em key={i} className="text-slate-300">{part.slice(1, -1)}</em>;
                          }
                          return part;
                        })}
                      </p>
                      <div className={`flex items-center gap-1 mt-1 ${isBot ? "justify-start" : "justify-end"}`}>
                        <span className="text-[9px] text-slate-500">{msg.time}</span>
                        {!isBot && <CheckCheck size={10} className="text-wa" />}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && <TypingIndicator avatar={config.botAvatar} />}
              <div />
            </div>
          </div>

          {/* Quick replies */}
          {quickReplies.length > 0 && !isTyping && (
            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-surface-2 bg-surface/50">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => sendMessage(reply.value)}
                  className="text-[11px] text-wa border border-wa/40 rounded-full px-3 py-1.5 hover:bg-wa/10 transition-colors active:scale-95"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          {/* Photo picker overlay */}
          {showPhotoPicker && (
            <div className="px-3 py-3 border-t border-surface-2 bg-surface">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 font-medium">Choisir une photo a envoyer</span>
                <button onClick={() => setShowPhotoPicker(false)} className="text-[10px] text-slate-500 hover:text-white">✕</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {currentPhotos.map((photo) => (
                  <button
                    key={photo.label}
                    onClick={() => sendPhoto(photo)}
                    className="flex flex-col items-center gap-1 bg-surface-2 border border-surface-3 rounded-xl p-3 hover:border-wa/40 hover:bg-surface-3 transition-all active:scale-95"
                  >
                    <span className="text-2xl">{photo.emoji}</span>
                    <span className="text-[9px] text-slate-400 text-center leading-tight">{photo.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Voice picker overlay */}
          {showVoicePicker && (
            <div className="px-3 py-3 border-t border-surface-2 bg-surface">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] text-slate-400 font-medium">Simuler un message vocal</span>
                <button onClick={() => setShowVoicePicker(false)} className="text-[10px] text-slate-500 hover:text-white">✕</button>
              </div>
              <div className="flex flex-col gap-2">
                {currentVoices.map((voice) => (
                  <button
                    key={voice.transcript}
                    onClick={() => sendVoice(voice)}
                    className="flex items-center gap-2.5 bg-surface-2 border border-surface-3 rounded-xl px-3 py-2.5 hover:border-wa/40 hover:bg-surface-3 transition-all active:scale-[0.98] text-left"
                  >
                    <div className="w-8 h-8 bg-wa rounded-full flex items-center justify-center flex-shrink-0">
                      <Mic size={14} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex gap-0.5 mb-0.5">
                        {Array.from({ length: 14 }, (_, i) => (
                          <div key={i} className="w-0.5 bg-wa/50 rounded-full" style={{ height: `${3 + Math.sin(i * 0.7) * 4 + Math.random() * 2}px` }} />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 line-clamp-1">&ldquo;{voice.transcript}&rdquo;</span>
                    </div>
                    <span className="text-[9px] text-slate-500 flex-shrink-0">{voice.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="bg-surface px-2 py-2 flex items-center gap-2 border-t border-surface-2">
            <Smile size={20} className="text-slate-500 flex-shrink-0" />
            <div className="flex-1 flex items-center bg-surface-2 rounded-full px-3 py-2 gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tapez un message..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                disabled={isTyping}
              />
              <button
                type="button"
                onClick={() => { setShowPhotoPicker(!showPhotoPicker); setShowVoicePicker(false); }}
                disabled={isTyping}
                className={`transition-colors disabled:opacity-50 flex-shrink-0 ${showPhotoPicker ? "text-wa" : "text-slate-500 hover:text-wa"}`}
              >
                <Camera size={16} />
              </button>
            </div>
            {input.trim() ? (
              <button
                type="submit"
                disabled={isTyping}
                className="w-9 h-9 bg-wa rounded-full flex items-center justify-center flex-shrink-0 hover:bg-wa-hover transition-colors active:scale-95 disabled:opacity-50"
              >
                <Send size={16} className="text-white ml-0.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setShowVoicePicker(!showVoicePicker); setShowPhotoPicker(false); }}
                disabled={isTyping}
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95 disabled:opacity-50 ${
                  showVoicePicker
                    ? "bg-indigo-500 shadow-lg shadow-indigo-500/30"
                    : "bg-wa hover:bg-wa-hover"
                }`}
              >
                <Mic size={16} className="text-white" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
