# Seed Backlog (choose one per turn)

## End-to-End Slices
- **Resource discovery v0**: static dataset of 5 local resources (food pantry, tool library, shelter, water station, free store); map/list view; contact action stub.
- **Listing flow v0**: create an offer or request with category, description, contact method; store in DB; show in feed.
- **Creek Credits pilot**: central ledger with issue-on-signup (20 credits), send between users, transaction history.
- **Lending flow**: borrower requests an item; owner approves; escrow credits; mark returned; add thumbs-up/down.

## Trust & Safety
- **Report content**: button to flag a listing; admin review queue (manual).
- **Reputation seed**: thumbs up/down + short note; aggregate score on profile.

## Resilience Content
- **Crisis kit page**: static checklist for outage/heatwave; local orgs list; SMS/email call-to-action (no real send).

## Infrastructure / Data
- **Geo lookup**: add PostGIS or spatial indexing later; for now, city/zip text filter.
- **Open data ingestion**: script to pull public food bank/shelter data into resources table.

## Experiments
- **Demurrage credits**: credits decay 2%/month to encourage circulation.
- **Quest system**: weekly missions (list 3 items, fulfill 1 request) with small credit rewards.
