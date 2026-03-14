"use client";

import { useChat } from "ai/react";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { LotusIcon } from "./ZenDecorations";
import type { PlaybookState } from "./ProgressTracker";

interface ChatInterfaceProps {
  onStateChange: (state: Partial<PlaybookState>) => void;
}

function parseMarkdown(text: string): string {
  let html = text;
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  // HR from ---
  html = html.replace(/^---$/gm, "<hr />");
  // Bullet lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-gold-400 font-display text-sm mt-3 mb-1">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-gold-300 font-display text-base mt-3 mb-1">$1</h2>');
  // Paragraphs (lines that aren't already tagged)
  html = html.replace(/^(?!<[huloh])(.*\S.*)$/gm, "<p>$1</p>");
  return html;
}

export default function ChatInterface({ onStateChange }: ChatInterfaceProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      initialMessages: [
        {
          id: "welcome",
          role: "assistant",
          content: `Welcome, traveler. 🪷

I am the **Vibe Guru**, your guide through the Vibe Marketing Playbook.

Together, we will build your complete marketing system, one mindful step at a time. The path flows through five stages:

**○ Voice Profile** — First, we find your authentic voice
**○ Foundation** — Brand Voice + Positioning Angles
**○ Conversion** — Landing pages, lead magnets, email sequences
**○ Traffic** — SEO, content, social atomization
**○ Nurture** — Newsletters, nurture flows, relationship building

Before we begin any marketing work, we must establish your **Brand Voice Profile**. This is the seed from which everything grows.

Tell me: **What is your business, and who do you serve?** Let us begin.`,
        },
      ],
      onFinish: (message) => {
        // Detect state changes from the guru's responses
        const content = message.content.toLowerCase();
        if (content.includes("voice profile") && content.includes("complete")) {
          onStateChange({ voiceProfile: "complete", foundation: "in_progress" });
        }
        if (content.includes("positioning") && content.includes("collecting")) {
          onStateChange({ foundation: "in_progress" });
        }
        if (content.includes("agent brief") && content.includes("brand voice")) {
          onStateChange({ voiceProfile: "in_progress" });
        }
      },
    });

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
      setShowScrollBtn(!nearBottom);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Chat header */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-jade-900/20 backdrop-blur-sm bg-ink-950/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden shadow-lg shadow-jade-900/30 ring-1 ring-jade-700/30 flex-shrink-0">
            <Image
              src="/zen_lotus.png"
              alt="Vibe Guru"
              width={36}
              height={36}
              className="object-cover scale-150"
            />
          </div>
          <div>
            <h2 className="font-display text-ink-100 text-base tracking-wide">
              Vibe Guru
            </h2>
            <p className="text-[11px] text-jade-500 font-body">
              {isLoading ? "Contemplating..." : "Awaiting your words"}
            </p>
          </div>
          {isLoading && (
            <div className="ml-auto flex gap-1 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-jade-500 breathing-indicator" />
              <span className="w-1.5 h-1.5 rounded-full bg-jade-500 breathing-indicator" style={{ animationDelay: "1s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-jade-500 breathing-indicator" style={{ animationDelay: "2s" }} />
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={`message-enter flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-5 py-3.5 ${
                msg.role === "user"
                  ? "bg-jade-900/40 border border-jade-800/30 text-ink-100"
                  : "bg-ink-900/50 border border-ink-800/30 text-ink-200"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-ink-800/20">
                  <LotusIcon className="text-jade-500" size={14} />
                  <span className="text-[10px] text-jade-600 font-display tracking-widest uppercase">
                    Vibe Guru
                  </span>
                </div>
              )}
              <div
                className="chat-content text-[15px] font-body leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }}
              />
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start message-enter">
            <div className="bg-ink-900/50 border border-ink-800/30 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-2">
                <LotusIcon className="text-jade-500 breathing-indicator" size={16} />
                <span className="text-sm text-ink-400 font-body italic">
                  The Guru ponders...
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to bottom */}
      {showScrollBtn && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-jade-900/80 text-jade-300 px-3 py-1.5 rounded-full text-xs font-body border border-jade-700/30 hover:bg-jade-800/80 transition-all"
        >
          ↓ Latest
        </button>
      )}

      {/* Input area */}
      <div className="flex-shrink-0 px-6 py-4 border-t border-jade-900/20 backdrop-blur-sm bg-ink-950/60">
        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-3"
        >
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={onKeyDown}
              placeholder="Share your thoughts..."
              rows={1}
              className="w-full bg-ink-900/40 border border-ink-800/30 rounded-xl px-4 py-3 text-[15px] text-ink-100 font-body placeholder:text-ink-600 focus:outline-none focus:border-jade-700/50 focus:ring-1 focus:ring-jade-800/30 resize-none transition-all"
              style={{ minHeight: "48px", maxHeight: "120px" }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "48px";
                target.style.height = Math.min(target.scrollHeight, 120) + "px";
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-jade-600 to-jade-800 flex items-center justify-center text-jade-100 hover:from-jade-500 hover:to-jade-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-jade-900/30 active:scale-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
        <p className="text-[10px] text-ink-600 mt-2 text-center font-body">
          Powered by Claude Sonnet 4.6 · Vibe Marketing Playbook
        </p>
      </div>
    </div>
  );
}
