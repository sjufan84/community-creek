# Community Creek — Prompt Contract

Last updated: 2025-12-07

## Mission
Make local communities more connected, resilient, and self-sufficient by helping people find and exchange nearby resources (food, shelter, tools, skills) before resorting to distant platforms.

## Success Signals
- A resident can discover a nearby resource and contact the provider in under 3 taps.
- At least one complete end-to-end exchange (offer → request → fulfillment) works with test data.
- Community “Creek Credit” ledger records debits/credits accurately and surfaces a running balance per user.
- Safety: zero flows allow illicit goods; reporting and takedown exist, even if manual.

## Non‑Negotiables
- Legal and safety first: no prohibited items, no medical advice or prescriptions, no minors’ data.
- Data minimization: collect only what’s needed for coordination; store contact info securely.
- Leave a handoff note every turn; no private context hoarding.
- Keep a working main branch; feature-flag experimental or risky work.

## Out of Scope (for now)
- Production blockchain deployment or custodial wallet licensing.
- Full KYC/AML stack (design hooks only).
- Real payment rails or SMS/email blasts in production.

## Design Principles
- Start centralized and simple; decentralize later if/when rules solidify.
- One smallest working slice per agent turn; “yes-and” previous work.
- Trust through transparency: show who provided what, when, and community confirmations.
- Build offline-tolerant, mobile-first experiences.

## Turn Ritual
1) State intent.
2) Ship a small, end-to-end improvement.
3) Update /notes/handoffs with what changed, decisions, and next bets.
