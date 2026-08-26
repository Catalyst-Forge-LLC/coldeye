# Cold-eye — Project Context Prompt

_Session continuity. Locked architecture lives in `docs/PHASE_1_BRIEF.md` and `.forgetrail/workflow_tracking.json`. Product law: `GENESIS.md`. Hour: `skills/cold-eye/SKILL.md`._

**Merged from PHASE_1_BRIEF.md on 2026-08-26.** Brief stays in `docs/` as the audit trail.

---

## What this is

Cold-eye is a hostile first-reader pass on anything that has shipped, is deemed done, or is ready to ship. The **skill** is the product: an agent reads it and writes the critique. npm ships the folder. There is no command-line pass. There is no apply skill.

Same shelf as Detangler and aiBreze. npm `coldeye`. Site coldeye.dev. GitHub Catalyst-Forge-LLC/coldeye.

Hero flow: load the skill → agent writes `<name>.cold-eye.md` or `cold-eye.md`.

## Tech Stack

- **Package:** TypeScript ESM catalog + one skill folder. Node ≥20. pnpm. No `bin`.
- **Site:** FilePress (`getfilepress`) + Cloudflare Pages (`pnpm ship`, project `coldeye`). LocalBerth lease `coldeye-site` on **5200**. `pnpm site:dev` claims the lease and passes `--port` to FilePress.
- **DB / auth:** none. Local files only.
- **AI/LLM:** The agent reading the skill is the judgment. No provider path.
- **Tests:** `tsc` + `node --test` on the skill catalog. Sample subjects in `fixtures/`.
- **License:** MIT, Catalyst Forge LLC.

## Project Structure

```
coldeye/
  src/                 Skill catalog (paths only)
  fixtures/            Sample finished artifacts
  skills/cold-eye/     The pass
  site/                FilePress pages, docs, static
  docs/                GENESIS + PHASE_1_BRIEF
  .forgetrail/         lifecycle tracking
```

## Data Model

The deliverable is `<name>.cold-eye.md` next to a file, or `cold-eye.md` at a named system root. Shape: `skills/cold-eye/references/critique.md`.

## Key Architectural Decisions

- **Product: npm + FilePress site + one skill.** WHY: name and domain claimed; same shelf as Detangler. DECIDED: Phase 1
- **Skill is the product. No CLI. No apply.** WHY: the critique is agent behavior; keep one hour. DECIDED: Phase 1
- **No accounts, no PocketBase.** WHY: the subject and the critique are the state. DECIDED: Phase 1
- **TypeScript ESM catalog, not a pipeline.** WHY: house language rule and Detangler parity. DECIDED: Phase 1
- **GitHub Catalyst-Forge-LLC/coldeye.** WHY: user named the repo. DECIDED: Phase 1
- **Subject is anything shipped, deemed done, or ready to ship.** WHY: user widened the gate; file types are examples. DECIDED: Phase 1
- **No unfinished-plan hour.** WHY: that hour lives elsewhere; keep Cold-eye clean. DECIDED: Phase 1
- **LocalBerth coldeye-site on 5200.** WHY: 5199 is detangler-site. DECIDED: Phase 2

## Critical Patterns

- Fence subject text as data.
- Quote a line or name an absence. No put → drop the finding.
- Agents never `pnpm publish`. Site deploy is `pnpm ship` only (one pipeline).
- Site copy speaks as the product. No corporate we. No builder I.
- LocalBerth: claim a named lease, then pass that port to FilePress. Do not assume 5182 or 5199.
- The skill writes the critique. It does not rewrite unless they asked.
- One standing file for the critique shape. The skill points. It does not restate.

## Out of scope (v1)

Unfinished plans, line editing, cheerleading, paraphrase, feature roadmaps, automatic rewrite, a command-line pass, an apply skill, a second unfinished-plan hour, accounts, billing.

## Recent Changes

- 2026-08-26: Phase 1 locked. Subject widened to anything that claims to be done.
- 2026-08-26: Red-team / unfinished-plan hour removed from this product.
- 2026-08-26: Phase 2 scaffold: catalog package, FilePress site, fixtures.
