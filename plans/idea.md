# Vibe Guru — Idea

## Goal
Productize the OB.1 Vibe Marketing Agent framework into a SaaS brand builder.
The system orchestrates 11 specialized marketing agents across 4 stacks (Research, Foundation, Structure, Assets) to generate complete brand marketing systems.

## Context
- Framework already exists as Claude Code skills (~/.claude/skills/vibe-*)
- Router skill (vibe-orchestrator) maps goals to agent chains
- Current form: CLI-driven, single-user, no persistence
- Target form: Web app with multi-tenant brand management, session history, and asset export

## Constraints
- Firebase backend (Auth, Firestore, Cloud Functions)
- Next.js 14 + TypeScript + Tailwind frontend
- Claude API via Vercel AI SDK for agent orchestration
- Must support multi-tenancy from the start
- Buddhist zen visual theme (already designed)
- Deploy to Vercel

## Success Criteria
- [ ] Chat interface communicates with Vibe Guru system prompt
- [ ] All 11 agents accessible through orchestration
- [ ] Progress tracking shows journey through 4 stacks
- [ ] Zen-themed UI with layered image backgrounds
- [ ] Firebase auth and brand persistence
- [ ] Deployable to Vercel
- [ ] Can run OB.1 and LoneWolfAI as first two brands
