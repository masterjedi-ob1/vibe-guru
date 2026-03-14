"use client";

export function EnsoCircle({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <path
        d="M60 10 C90 10, 110 30, 110 60 C110 90, 90 110, 60 110 C30 110, 10 90, 10 60 C10 35, 25 15, 50 11"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.15"
      />
    </svg>
  );
}

export function LotusIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3C12 3 9 8 9 12C9 16 12 19 12 19C12 19 15 16 15 12C15 8 12 3 12 3Z" fill="currentColor" opacity="0.8" />
      <path d="M12 19C12 19 6 17 4 13C2 9 5 5 5 5C5 5 8 8 9 12C10 15 12 19 12 19Z" fill="currentColor" opacity="0.5" />
      <path d="M12 19C12 19 18 17 20 13C22 9 19 5 19 5C19 5 16 8 15 12C14 15 12 19 12 19Z" fill="currentColor" opacity="0.5" />
      <path d="M9 14C9 14 4 14 2 11C0 8 2 4 2 4C2 4 5 6 7 10C8 12 9 14 9 14Z" fill="currentColor" opacity="0.3" />
      <path d="M15 14C15 14 20 14 22 11C24 8 22 4 22 4C22 4 19 6 17 10C16 12 15 14 15 14Z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function BambooDecor({ className = "" }: { className?: string }) {
  return (
    <svg width="40" height="200" viewBox="0 0 40 200" fill="none" className={className}>
      <rect x="17" y="0" width="6" height="200" rx="3" fill="currentColor" opacity="0.06" />
      <rect x="15" y="40" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
      <rect x="15" y="90" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
      <rect x="15" y="140" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.1" />
      <path d="M23 38 C30 30, 38 32, 36 38 C34 42, 26 40, 23 38Z" fill="currentColor" opacity="0.08" />
      <path d="M17 88 C10 80, 2 82, 4 88 C6 92, 14 90, 17 88Z" fill="currentColor" opacity="0.08" />
      <path d="M23 138 C30 130, 38 132, 36 138 C34 142, 26 140, 23 138Z" fill="currentColor" opacity="0.08" />
    </svg>
  );
}
