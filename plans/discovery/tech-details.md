# Tech Details — Vibe Guru

## Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS + custom zen palette
- Vercel AI SDK (ai@3.4, @ai-sdk/anthropic@0.0.56)
- Firebase (Auth, Firestore, Cloud Functions)
- Framer Motion for animations
- Lucide React for icons

## Fonts
- Noto Serif JP (headings, zen aesthetic)
- Crimson Pro (body text, readability)

## Color Palette
- Jade: greens (#2d5016 to #dcfce7)
- Ink: charcoals (#1a1a2e to #f5f5f5)
- Lotus: pinks (#831843 to #fce7f3)
- Gold: ambers (#78350f to #fef3c7)
- Sand: warm neutrals (#44403c to #faf5f0)

## API Pattern
- Chat route at /api/chat using Vercel AI SDK streamText
- Claude claude-sonnet-4-20250514 as default model
- System prompt contains full Vibe Marketing Playbook
