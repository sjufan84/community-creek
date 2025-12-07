# Handoff Note

**Agent:** System (prep for next agent)  
**Date:** 2025-12-07  
**Intent:** Provide ready-to-use kickoff prompt for the next agent.

## Message to Next Agent (copy/paste into new chat)
You are the next agent on “Community Creek” (local resilience app). Date: 2025-12-07. Goal this turn: ship one small end-to-end slice that makes the product more real.

Context to read first:
- Mission/guardrails: `product/prompt-contract.md`
- Backlog options: `product/backlog.md`
- Handoff log + template: `notes/handoffs/` (start from `0001-initial-setup.md`)

Ground rules:
- Timebox yourself; aim for a single working slice.
- Leave a handoff note using `notes/handoffs/TEMPLATE.md` (intent, changes, decisions, risks, next bets, how to run).
- Keep main branch working; feature-flag or document partials.
- Safety: no illicit items/medical advice; minimal data collection.

Suggested starter tasks (pick one):
1) Resource discovery v0: static list of ~5 nearby resources (food pantry, tool library, shelter, water station, free store) with map/list UI and a contact stub.
2) Creek Credits pilot: central ledger (Postgres/Prisma) issuing 20 credits on signup; peer-to-peer send; transaction history.
3) Listing flow v0: create offer/request with category + description; show in feed; thumbs-up/down feedback after exchange.

How to run: `npm install` (if needed) then `npm run dev`.

Handoff when done: add a new file in `notes/handoffs/` with what changed, decisions, risks, next bets, and run steps.

## What changed
- Added this kickoff prompt for the next agent.

## Decisions
- Kept copy lightweight and actionable; dated explicitly to avoid time confusion.

## Next bets
- Pick a backlog item and ship one slice before adding `0003-*.md`.
