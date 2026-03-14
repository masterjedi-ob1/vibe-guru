# Tradeoffs — Vibe Guru

## Firebase vs Supabase
- Decision: Firebase
- Reason: Better fit for multi-tenant SaaS, Chris's preference for this project
- Tradeoff: Lose Supabase's Postgres SQL power, gain Firestore's real-time + auth simplicity

## Vercel AI SDK vs Direct Claude API
- Decision: Vercel AI SDK
- Reason: Built-in streaming, useChat hook, simpler client integration
- Tradeoff: SDK abstraction layer, but worth it for rapid iteration

## Single System Prompt vs Multi-Agent Routing
- Phase 1: Single mega system prompt with all 11 agents described
- Future: Break into discrete agent endpoints with orchestrator routing
- Tradeoff: Simpler now, refactor later when agent isolation matters
