"use client";

import { useState } from "react";
import Image from "next/image";
import ChatInterface from "@/components/ChatInterface";
import ProgressTracker, { type PlaybookState } from "@/components/ProgressTracker";
import AgentMap from "@/components/AgentMap";

type Panel = "progress" | "agents";

export default function Home() {
  const [playbookState, setPlaybookState] = useState<PlaybookState>({
    voiceProfile: "not_started",
    foundation: "not_started",
    conversion: "not_started",
    traffic: "not_started",
    nurture: "not_started",
  });

  const [activePanel, setActivePanel] = useState<Panel>("progress");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleStateChange = (update: Partial<PlaybookState>) => {
    setPlaybookState((prev) => ({ ...prev, ...update }));
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-ink-950">
      {/* === LAYERED BACKGROUND IMAGERY === */}
      {/* Mountain panorama - main atmospheric bg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/zen_mountains.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.12]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950/95" />
      </div>

      {/* Enso circle - floating decoration top-right */}
      <div className="absolute top-4 right-8 z-[1] pointer-events-none hidden lg:block">
        <Image
          src="/zen_circle_mountains.png"
          alt=""
          width={180}
          height={180}
          className="opacity-[0.18] animate-float"
        />
      </div>

      {/* Lotus - small accent bottom-left of chat area */}
      <div className="absolute bottom-8 left-[320px] z-[1] pointer-events-none hidden xl:block">
        <Image
          src="/zen_lotus.png"
          alt=""
          width={80}
          height={100}
          className="opacity-[0.12]"
        />
      </div>

      {/* Top bar */}
      <header className="h-14 flex items-center justify-between px-6 border-b border-jade-900/15 backdrop-blur-md bg-ink-950/70 relative z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-ink-400 hover:text-ink-200 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* Enso as logo mark */}
            <div className="w-9 h-9 rounded-lg overflow-hidden shadow-md shadow-jade-900/40 flex-shrink-0">
              <Image
                src="/zen_circle_mountains.png"
                alt="Vibe Guru"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-display text-base text-ink-100 tracking-wide leading-tight">
                Vibe Marketing Playbook
              </h1>
              <p className="text-[10px] text-ink-500 font-body">
                Guided orchestration via Claude Code
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-ink-600 font-body hidden sm:inline">
            Agent Engine: Claude Sonnet 4.6
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-jade-500 breathing-indicator" />
        </div>
      </header>

      {/* Main content */}
      <div className="flex h-[calc(100vh-3.5rem)] relative z-10">
        {/* Sidebar with bamboo background */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 absolute lg:relative z-30 lg:z-auto w-72 h-full backdrop-blur-md border-r border-jade-900/15 transition-transform duration-300 flex flex-col overflow-hidden`}
        >
          {/* Bamboo background layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/zen_bamboo.png"
              alt=""
              fill
              className="object-cover opacity-[0.06]"
            />
            <div className="absolute inset-0 bg-ink-950/92" />
          </div>

          {/* Panel switcher */}
          <div className="flex border-b border-jade-900/20 relative z-10">
            <button
              onClick={() => setActivePanel("progress")}
              className={`flex-1 py-2.5 text-[11px] font-display tracking-widest uppercase transition-all ${
                activePanel === "progress"
                  ? "text-jade-400 border-b-2 border-jade-500"
                  : "text-ink-500 hover:text-ink-300"
              }`}
            >
              Journey
            </button>
            <button
              onClick={() => setActivePanel("agents")}
              className={`flex-1 py-2.5 text-[11px] font-display tracking-widest uppercase transition-all ${
                activePanel === "agents"
                  ? "text-jade-400 border-b-2 border-jade-500"
                  : "text-ink-500 hover:text-ink-300"
              }`}
            >
              Agents
            </button>
          </div>

          {/* Panel content */}
          <div className="flex-1 overflow-hidden relative z-10">
            {activePanel === "progress" ? (
              <ProgressTracker state={playbookState} />
            ) : (
              <AgentMap state={playbookState} />
            )}
          </div>
        </aside>

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden absolute inset-0 z-20 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Chat area */}
        <main className="flex-1 min-w-0">
          <ChatInterface onStateChange={handleStateChange} />
        </main>
      </div>
    </div>
  );
}
