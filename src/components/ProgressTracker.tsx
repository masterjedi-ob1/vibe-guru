"use client";

import { LotusIcon } from "./ZenDecorations";

export type StackStatus = "not_started" | "in_progress" | "complete";

export interface PlaybookState {
  voiceProfile: StackStatus;
  foundation: StackStatus;
  conversion: StackStatus;
  traffic: StackStatus;
  nurture: StackStatus;
}

const statusIcon = (s: StackStatus) => {
  if (s === "complete") return "●";
  if (s === "in_progress") return "◐";
  return "○";
};

const statusColor = (s: StackStatus) => {
  if (s === "complete") return "text-jade-400";
  if (s === "in_progress") return "text-gold-400";
  return "text-ink-500";
};

interface ProgressTrackerProps {
  state: PlaybookState;
}

export default function ProgressTracker({ state }: ProgressTrackerProps) {
  const stacks = [
    {
      key: "voiceProfile" as const,
      label: "Voice Profile",
      sub: "Pre-step foundation",
      icon: "🪷",
    },
    {
      key: "foundation" as const,
      label: "Foundation",
      sub: "Brand Voice + Positioning",
      icon: "🏔",
    },
    {
      key: "conversion" as const,
      label: "Conversion",
      sub: "Copy + Lead Magnet + Email",
      icon: "🎯",
    },
    {
      key: "traffic" as const,
      label: "Traffic",
      sub: "SEO + Content + Atomizer",
      icon: "🌊",
    },
    {
      key: "nurture" as const,
      label: "Nurture",
      sub: "Email + Newsletter + Social",
      icon: "🌱",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 border-b border-jade-900/30">
        <div className="flex items-center gap-2.5 mb-1">
          <LotusIcon className="text-jade-400" size={20} />
          <span className="font-display text-lg text-ink-100 tracking-wide">
            The Path
          </span>
        </div>
        <p className="text-xs text-ink-400 font-body leading-relaxed">
          Your journey through the Vibe Marketing Playbook
        </p>
      </div>

      {/* Stack Progress */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
        {stacks.map((stack, i) => {
          const status = state[stack.key];
          return (
            <div key={stack.key} className="relative">
              {/* Connector line */}
              {i < stacks.length - 1 && (
                <div
                  className={`absolute left-[11px] top-[32px] w-[1px] h-[calc(100%)] ${
                    status === "complete" ? "bg-jade-700/50" : "bg-ink-800/40"
                  }`}
                />
              )}
              <div
                className={`relative flex items-start gap-3 p-3 rounded-lg transition-all duration-300 ${
                  status === "in_progress"
                    ? "bg-jade-950/30 border border-jade-800/20"
                    : ""
                }`}
              >
                {/* Status dot */}
                <span
                  className={`text-sm mt-0.5 flex-shrink-0 ${statusColor(status)} ${
                    status === "in_progress" ? "breathing-indicator" : ""
                  }`}
                >
                  {statusIcon(status)}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{stack.icon}</span>
                    <span
                      className={`text-sm font-display tracking-wide ${
                        status === "complete"
                          ? "text-jade-300"
                          : status === "in_progress"
                          ? "text-ink-100"
                          : "text-ink-500"
                      }`}
                    >
                      {stack.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-500 mt-0.5 font-body">
                    {stack.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer wisdom */}
      <div className="px-5 py-4 border-t border-jade-900/30">
        <p className="text-[11px] text-ink-500 italic font-body leading-relaxed text-center">
          &ldquo;Before speaking, consider whether it is an improvement upon silence.&rdquo;
        </p>
      </div>
    </div>
  );
}
