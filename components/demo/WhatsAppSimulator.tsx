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
} from "lucide-react";

/* ─── Public types ─── */

export interface QuickReply {
  label: string;
  value: string;
}

export interface BotResponse {
  text: string;
  delay: number;
  quickReplies?: QuickReply[];
}

export interface SimulatorConfig {
  botName: string;
  botAvatar?: string;
  welcomeMessage: string;
  initialQuickReplies: QuickReply[];
  intents: Record<string, BotResponse>;
  keywords: Record<string, string[]>;
  fallback: BotResponse;
}

/* ─── Internal types ─── */

interface ChatMessage {
  id: string;
  from: "user" | "bot";
  text: string;
  time: string;
}

/* ─── Helpers ─── */

function getTimestamp(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function findBotResponse(input: string, config: SimulatorConfig): BotResponse {
  const normalized = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // Direct intent match
  for (const [key, response] of Object.entries(config.intents)) {
    if (normalized === key || normalized.includes(key)) {
      return response;
    }
  }

  // Keyword match
  for (const [intent, keywords] of Object.entries(config.keywords)) {
    if (keywords.some((kw) => normalized.includes(kw))) {
      const response = config.intents[intent];
      if (response) return response;
    }
  }

  return config.fallback;
}

/* ─── Sub-components ─── */

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
            style={{
              animation: "typing-dot 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function WhatsAppSimulator({ config }: { config: SimulatorConfig }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      from: "bot",
      text: config.welcomeMessage,
      time: getTimestamp(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(config.initialQuickReplies);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isTyping) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        from: "user",
        text: text.trim(),
        time: getTimestamp(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setQuickReplies([]);
      setIsTyping(true);

      const response = findBotResponse(text, config);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          from: "bot",
          text: response.text,
          time: getTimestamp(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setQuickReplies(response.quickReplies ?? []);
      }, response.delay);
    },
    [isTyping, config]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute -inset-4 bg-wa/8 rounded-[3rem] blur-3xl" />

        <div className="relative bg-[#050A14] rounded-[2.5rem] border-2 border-surface-3 overflow-hidden shadow-2xl">
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
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Video size={18} className="text-slate-400" />
              <Phone size={16} className="text-slate-400" />
              <MoreVertical size={18} className="text-slate-400" />
            </div>
          </div>

          {/* Chat */}
          <div
            ref={chatContainerRef}
            className="h-[480px] overflow-y-auto px-3 py-3 flex flex-col gap-2.5 scroll-smooth"
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
                  className={`flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"} animate-[slideUp_0.3s_ease-out]`}
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
                    <p className="text-[13px] leading-relaxed text-slate-200 whitespace-pre-line">
                      {msg.text.split(/(\*\*.*?\*\*)/).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong key={i} className="text-white font-semibold">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        if (part.startsWith("*") && part.endsWith("*")) {
                          return (
                            <em key={i} className="text-slate-300">
                              {part.slice(1, -1)}
                            </em>
                          );
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

          {/* Input */}
          <form onSubmit={handleSubmit} className="bg-surface px-2 py-2 flex items-center gap-2 border-t border-surface-2">
            <Smile size={20} className="text-slate-500 flex-shrink-0" />
            <div className="flex-1 flex items-center bg-surface-2 rounded-full px-3 py-2 gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tapez un message..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
                disabled={isTyping}
              />
              <Paperclip size={16} className="text-slate-500 flex-shrink-0" />
              <Camera size={16} className="text-slate-500 flex-shrink-0" />
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
              <div className="w-9 h-9 bg-wa rounded-full flex items-center justify-center flex-shrink-0">
                <Mic size={16} className="text-white" />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
