# Plan — Vibe Guru

## Phase 1: MVP Chat Interface (Current Sprint)
- [x] 5-file project scaffold
- [ ] Next.js 14 + TypeScript + Tailwind setup
- [ ] Install dependencies (ai, @ai-sdk/anthropic, framer-motion, lucide-react)
- [ ] Zen theme CSS (globals.css with ink-wash gradients, fonts)
- [ ] Tailwind config (jade/ink/lotus/gold/sand palette, animations)
- [ ] Root layout + main page with zen backgrounds
- [ ] Chat API route with full Vibe Guru system prompt
- [ ] ChatInterface component with markdown + streaming
- [ ] ProgressTracker sidebar component
- [ ] AgentMap expandable panel
- [ ] ZenDecorations SVG components
- [ ] Copy zen images to public/
- [ ] Build verification
- [ ] Deploy to Vercel

## Phase 2: Firebase Integration
- [ ] Firebase project setup
- [ ] Auth (Google + email)
- [ ] Firestore schema for brands, sessions, outputs
- [ ] Multi-tenant brand switching
- [ ] Session persistence

## Phase 3: Brand Builder
- [ ] Brand onboarding flow
- [ ] Asset export (PDF, markdown, zip)
- [ ] Run OB.1 brand through system
- [ ] Run LoneWolfAI brand through system
- [ ] Iterate based on real usage

## Phase 4: SaaS
- [ ] Stripe billing integration
- [ ] Self-serve onboarding
- [ ] Usage metering
- [ ] Admin dashboard

## Acceptance Criteria
- Chat works with Claude API streaming
- All 11 agents accessible via orchestration
- Zen UI renders correctly with image backgrounds
- Deploys successfully to Vercel
