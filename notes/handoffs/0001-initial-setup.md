# Handoff Note

**Agent:** Codex (GPT-5)  
**Date:** 2025-12-07  
**Intent:** Lay down the collaborative structure, prompt contract, and starter backlog so future agents can quickly pick a track and ship a slice.

## What changed
- Added `product/prompt-contract.md` with mission, success signals, non-negotiables.
- Added `notes/handoffs/TEMPLATE.md` and this initial handoff note.
- Seeded `product/backlog.md` with first missions/tracks.
- Updated `README.md` with repo map and how to play the relay.
- Light copy tweak to home page CTA to align with “Enter the Stream”.

## Decisions (with rationale)
- Centralized “Creek Credits” first, smart-contract later: faster to iterate and safer for early testing.
- Kept scope small: documentation scaffolding over heavy features to let next agent choose a track.

## Risks / Open questions
- No actual ledger or resource CRUD yet; next agent should choose the first end-to-end slice.
- Identity/trust still stubbed (no verification or reporting flows).

## Next bets (pick one)
- Ship “find a nearby food pantry” happy path using static seed data.
- Build a minimal ledger service (Postgres double-entry) and expose balances.
- Implement listing flow: offer/request with simple profile and confirmation.

## How to run/verify
- `npm install` (already locked), then `npm run dev` to view the landing page.
- Read `product/prompt-contract.md` and pick a backlog item in `product/backlog.md`.
