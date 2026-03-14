# Project Context — Vibe Guru

## Goal
Productize the Vibe Marketing Agent framework (11 agents, 4 stacks) into a multi-tenant brand builder SaaS.
Evolution: Internal tool → Run OB.1 brands → Client brand builder → SaaS product.

## Revenue Connection
Direct product revenue. This IS the product.
- Phase 1: Internal tool proving the framework works
- Phase 2: Client engagements using the tool ($500-$75K range)
- Phase 3: Self-serve SaaS (recurring revenue)

## Active Files
See @plans/progress.md for current sprint state
See @plans/plan.md for phased roadmap
See @plans/idea.md for project scope

## Backend
Firebase (Auth, Firestore, Cloud Functions). NOT Supabase for this project.
- Multi-tenant brand isolation from day one
- Firestore collections: brands/, users/, sessions/, outputs/

## Client or Partner Context
- OB.1 AI Solutions is the first "client" brand to run through the system
- LoneWolfAI is the second brand (Chris's personal recovery-minded solopreneur brand)
- Future: client brands onboarded through the tool

## Project-Specific Rules
- Firebase SDK, not Supabase
- Design all data models for multi-tenancy from the start
- Agent framework must be modular (add/remove agents per brand)
- Every UI decision should work for self-serve onboarding eventually
