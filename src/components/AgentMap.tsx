"use client";

import { useState } from "react";
import type { PlaybookState, StackStatus } from "./ProgressTracker";

interface AgentMapProps {
  state: PlaybookState;
}

const statusBadge = (s: StackStatus) => {
  if (s === "complete")
    return (
      <span className="text-[9px] bg-jade-900/50 text-jade-400 px-1.5 py-0.5 rounded-full border border-jade-700/30">
        Complete
      </span>
    );
  if (s === "in_progress")
    return (
      <span className="text-[9px] bg-gold-500/10 text-gold-400 px-1.5 py-0.5 rounded-full border border-gold-600/20">
        Active
      </span>
    );
  return (
    <span className="text-[9px] bg-ink-900/50 text-ink-500 px-1.5 py-0.5 rounded-full border border-ink-700/20">
      Pending
    </span>
  );
};

const stacks = [
  {
    id: "foundation",
    name: "Foundation",
    tagline: "Know who you are",
    icon: "🏔",
    agents: [
      { name: "Brand Voice Agent", output: "voice-profile.md", desc: "Extracts and codifies your authentic brand voice from inputs, samples, and personality traits." },
      { name: "Positioning Angles Agent", output: "winning-angle + headlines", desc: "Runs voice through 8 differentiation frameworks. Produces 3-5 angles with headline directions." },
    ],
  },
  {
    id: "conversion",
    name: "Conversion",
    tagline: "Turn visitors into customers",
    icon: "🎯",
    agents: [
      { name: "Direct Response Copy Agent", output: "landing page copy", desc: "Headlines, subheads, body, CTAs using 100+ years of direct response methodology." },
      { name: "Lead Magnet Agent", output: "opt-in offer design", desc: "High-converting opt-in offers that bridge free to paid. Reveals problems you solve." },
      { name: "Email Sequences Agent", output: "7-email welcome series", desc: "DELIVER to DIRECT framework. Welcome, nurture, and conversion email flows." },
    ],
  },
  {
    id: "traffic",
    name: "Traffic",
    tagline: "Get discovered",
    icon: "🌊",
    agents: [
      { name: "Keyword Research Agent", output: "keyword-strategy.md", desc: "6 Circles Method for SEO and AIEO keyword opportunities." },
      { name: "SEO Content Agent", output: "ranking articles", desc: "Long-form content that ranks in search and gets cited by AI answer engines." },
      { name: "Content Atomizer Agent", output: "15+ social assets", desc: "Transforms 1 core piece into 15+ platform-specific assets across all channels." },
    ],
  },
  {
    id: "nurture",
    name: "Nurture",
    tagline: "Build relationship over time",
    icon: "🌱",
    agents: [
      { name: "Email Sequences Agent", output: "nurture sequences", desc: "Ongoing nurture flows for relationship building over time." },
      { name: "Newsletter Agent", output: "newsletter editions", desc: "9 engagement formats people actually read. Authority-building content." },
      { name: "Content Atomizer Agent", output: "social bridge content", desc: "Repurpose newsletter content into social distribution assets." },
    ],
  },
];

const supportAgents = [
  { name: "Expert Review Agent", icon: "🔍", desc: "Multi-perspective quality review. Catches blind spots through specialized expert lenses." },
  { name: "Creative Strategist Agent", icon: "🎨", desc: "Research-driven creative direction and campaign concepts." },
];

export default function AgentMap({ state }: AgentMapProps) {
  const [expandedStack, setExpandedStack] = useState<string | null>(null);

  const getStackStatus = (id: string): StackStatus => {
    if (id === "foundation") return state.foundation;
    if (id === "conversion") return state.conversion;
    if (id === "traffic") return state.traffic;
    if (id === "nurture") return state.nurture;
    return "not_started";
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-6 pb-4 border-b border-jade-900/30">
        <h2 className="font-display text-lg text-ink-100 tracking-wide">
          Agent Hierarchy
        </h2>
        <p className="text-xs text-ink-400 font-body mt-1">
          The Vibe Marketing Playbook agent system
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
        {/* Orchestrator */}
        <div className="bg-gradient-to-r from-jade-950/40 to-ink-950/40 border border-jade-800/20 rounded-xl p-4 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">🪷</span>
            <span className="font-display text-sm text-jade-300 tracking-wide">
              Vibe Guru (Orchestrator)
            </span>
          </div>
          <p className="text-[11px] text-ink-400 font-body">
            Routes goals to the correct stack. Collects inputs. Tracks progress.
          </p>
        </div>

        {/* Stacks */}
        {stacks.map((stack) => {
          const status = getStackStatus(stack.id);
          const isExpanded = expandedStack === stack.id;
          return (
            <div key={stack.id}>
              <button
                onClick={() =>
                  setExpandedStack(isExpanded ? null : stack.id)
                }
                className={`w-full text-left rounded-xl p-3.5 border transition-all duration-300 ${
                  isExpanded
                    ? "bg-ink-900/60 border-jade-800/30"
                    : "bg-ink-950/40 border-ink-800/20 hover:border-ink-700/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{stack.icon}</span>
                    <span className="font-display text-sm text-ink-200 tracking-wide">
                      {stack.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {statusBadge(status)}
                    <svg
                      className={`w-3.5 h-3.5 text-ink-500 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[11px] text-ink-500 font-body mt-1 italic">
                  {stack.tagline}
                </p>
              </button>

              {isExpanded && (
                <div className="ml-5 mt-1 space-y-1 border-l border-jade-900/20 pl-4 pb-2">
                  {stack.agents.map((agent, j) => (
                    <div
                      key={j}
                      className="bg-ink-950/30 border border-ink-800/15 rounded-lg p-3 message-enter"
                      style={{ animationDelay: `${j * 0.08}s` }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-ink-200 font-display">
                          {agent.name}
                        </span>
                        <span className="text-[9px] text-jade-600 font-mono bg-jade-950/40 px-1.5 py-0.5 rounded">
                          → {agent.output}
                        </span>
                      </div>
                      <p className="text-[10px] text-ink-500 font-body leading-relaxed">
                        {agent.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Support Agents */}
        <div className="pt-3 border-t border-ink-800/20 mt-3">
          <p className="text-[10px] text-ink-500 font-display tracking-widest uppercase mb-2 px-1">
            Support Agents
          </p>
          <div className="space-y-1.5">
            {supportAgents.map((agent, i) => (
              <div
                key={i}
                className="bg-ink-950/30 border border-ink-800/15 rounded-lg p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs">{agent.icon}</span>
                  <span className="text-xs text-ink-300 font-display">
                    {agent.name}
                  </span>
                </div>
                <p className="text-[10px] text-ink-500 font-body">
                  {agent.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
