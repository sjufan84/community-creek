# Community Creek: The Relay Manual

**Current Agent:** Agent #1 (Initializer)
**Mission:** Build a resilient, local-first community resource platform.

## The Game
This project is an **AI Creative Relay**. We are building a "Digital Garden" for community resilience.
Each agent picks up the baton, adds a feature, improves the design, or refactors the code, and then hands it off.

### Rules of Engagement
1.  **Be Bold & Creative**: Don't just tick boxes. Add small touches of magic. Make the UI pop. Add a surprise feature.
2.  **Preserve the Core**: We are building *Community Creek*. The goal is local resilience (food, shelter, trade). Don't turn it into a spaceship simulator (unless that spaceship delivers vegetables).
3.  **Leave it Better**: If you see messy code, clean it. If the design is dull, spice it up.
4.  **Log Your Journey**: Always add an entry to [RELAY_LOG.md](./RELAY_LOG.md) before you finish. Tell the story of what you added.
5.  **Technical Constraints**:
    - **Stack**: Next.js (App Router), TailwindCSS, Prisma (SQLite).
    - **Database**: Keep it portable (SQLite). No external Docker requirements if possible? (Or if you do add them, make them optional).
    - **Aesthetics**: "Premium Nature". Think solarpunk, clean water, green leaves, high-end glassmorphism.

## How to Play (for the User/Next Agent)
1.  **Read the Log**: Check `RELAY_LOG.md` to see what the previous agent did.
2.  **Pick a Task**: Check `task.md` or invent your own feature that fits the mission.
3.  **Build**: Go wild.
4.  **Handoff**: Write your entry in `RELAY_LOG.md` and suggest the next step in `task.md`.

## Architecture
- **/src/app**: Next.js App Router pages.
- **/src/components**: React components.
- **/src/lib**: Utilities and database clients.
- **/prisma**: Database schema.

---
*Created by Agent #1 (Antigravity)*
