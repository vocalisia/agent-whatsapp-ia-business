"use client";
import { useState, useEffect } from "react";
import { Camera, Mic, CheckCheck } from "lucide-react";

interface Message {
  id: number;
  from: "user" | "bot";
  type: "text" | "image" | "audio" | "typing";
  text?: string;
  delay: number;
  status?: "sent" | "delivered" | "read";
}

const CONVERSATION: Message[] = [
  { id: 1, from: "user", type: "image", text: "📸 document_identite.jpg", delay: 800, status: "read" },
  { id: 2, from: "bot", type: "typing", delay: 1600 },
  { id: 3, from: "bot", type: "text", text: "✅ Document analysé !\n\n**Carte d'identité détectée**\nPrénom : Marie\nNom : Dupont\nExpiration : 2028\n\nDossier pré-rempli automatiquement.", delay: 3200 },
  { id: 4, from: "user", type: "audio", text: "🎙️  ━━━━━━●━━━  0:08", delay: 5800, status: "read" },
  { id: 5, from: "bot", type: "typing", delay: 6600 },
  { id: 6, from: "bot", type: "text", text: "🎧 *Vocal transcrit :*\n\"Bonjour, mon RDV est confirmé ?\"\n\nOui Marie ! Votre RDV est confirmé pour **lundi 7 avril à 14h**. Vous recevrez un rappel 1h avant. 📅", delay: 8200 },
];

const WAVEFORM_HEIGHTS = [4, 8, 6, 10, 5, 9, 7, 11, 4, 8, 6, 10, 5, 9, 7, 11, 4, 8, 6, 10];

function TypingBubble() {
  return (
    <div className="flex items-end gap-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-wa to-emerald-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        AI
      </div>
      <div className="bg-surface-2 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-wa rounded-full inline-block"
            style={{
              animation: `typing-dot 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isBot = msg.from === "bot";

  if (msg.type === "image") {
    return (
      <div className="flex justify-end message-in">
        <div className="bg-wa/20 border border-wa/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
          <div className="flex items-center gap-2 mb-1">
            <Camera size={14} className="text-wa" />
            <span className="text-xs text-wa font-medium">Photo envoyée</span>
          </div>
          <div className="w-48 h-28 bg-surface-3 rounded-lg flex items-center justify-center mb-2">
            <Camera size={24} className="text-slate-500" />
          </div>
          <span className="text-xs text-slate-400">{msg.text}</span>
          <div className="flex justify-end mt-1">
            <CheckCheck size={12} className="text-wa" />
          </div>
        </div>
      </div>
    );
  }

  if (msg.type === "audio") {
    return (
      <div className="flex justify-end message-in">
        <div className="bg-wa/20 border border-wa/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-wa rounded-full flex items-center justify-center flex-shrink-0">
              <Mic size={14} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-mono text-wa mb-1">{msg.text}</div>
              <div className="flex gap-0.5">
                {WAVEFORM_HEIGHTS.map((h, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-wa/60 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <CheckCheck size={12} className="text-wa" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-2 message-in ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-wa to-emerald-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
          AI
        </div>
      )}
      <div
        className={`rounded-2xl px-4 py-2.5 max-w-[85%] ${
          isBot
            ? "bg-surface-2 border border-surface-3 rounded-bl-sm text-slate-200"
            : "bg-wa/20 border border-wa/30 rounded-br-sm text-slate-200"
        }`}
      >
        <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>
        {!isBot && (
          <div className="flex justify-end mt-1">
            <CheckCheck size={12} className="text-wa" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function WhatsAppMockup() {
  const [visible, setVisible] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function runConversation() {
      setVisible([]);
      setShowTyping(false);

      CONVERSATION.forEach((msg) => {
        if (msg.type === "typing") {
          timeouts.push(
            setTimeout(() => setShowTyping(true), msg.delay)
          );
        } else {
          timeouts.push(
            setTimeout(() => {
              setShowTyping(false);
              setVisible((v) => [...v, msg.id]);
            }, msg.delay)
          );
        }
      });

      // Restart after conversation ends
      timeouts.push(
        setTimeout(() => {
          runConversation();
        }, 12000)
      );
    }

    runConversation();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative animate-float" style={{ animationDuration: "7s" }}>
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 bg-wa/10 rounded-[3rem] blur-3xl scale-110" />

      {/* Phone frame */}
      <div className="relative w-72 bg-[#050A14] rounded-[3rem] border-2 border-surface-3 overflow-hidden shadow-2xl glow-wa-sm">
        {/* Status bar */}
        <div className="bg-[#050A14] px-6 pt-3 pb-1 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-medium">9:41</span>
          <div className="w-20 h-5 bg-surface rounded-full" />
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full border border-slate-600" />
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="bg-surface px-4 py-3 flex items-center gap-3 border-b border-surface-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-wa to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AI
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-white" style={{ fontFamily: "Syne, sans-serif" }}>WhatsAgent IA</div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-wa rounded-full animate-pulse-wa" />
              <span className="text-[10px] text-wa">en ligne</span>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-96 overflow-hidden px-3 py-4 flex flex-col gap-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjMgMCAxMiA1LjM3IDEyIDEyaC02eiIgZmlsbD0iIzI1RDM2NiIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')]">
          {CONVERSATION.filter(
            (m) => m.type !== "typing" && visible.includes(m.id)
          ).map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
          {showTyping && <TypingBubble />}
        </div>

        {/* Input bar */}
        <div className="bg-surface px-3 py-2 flex items-center gap-2 border-t border-surface-2">
          <div className="flex-1 bg-surface-2 rounded-full px-4 py-2 text-[11px] text-slate-500">
            Message...
          </div>
          <div className="w-8 h-8 bg-wa rounded-full flex items-center justify-center">
            <Mic size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-16 top-16 bg-surface border border-wa/30 rounded-xl px-3 py-2 text-xs text-wa font-medium flex items-center gap-2 shadow-lg glow-wa-sm">
        <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
        Photo analysée ✓
      </div>
      <div className="absolute -right-16 bottom-28 bg-surface border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-indigo-400 font-medium shadow-lg">
        🎙️ Vocal transcrit ✓
      </div>
    </div>
  );
}
