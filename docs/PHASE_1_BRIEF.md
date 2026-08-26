# Cold-eye — architecture brief

Canonical product spec: [`GENESIS.md`](./GENESIS.md). This file is the stack and repo shape. If they drift on the hour, `skills/cold-eye/SKILL.md` wins. If they drift on product shape, GENESIS wins.

**Status:** draft  
**Updated:** 2026-08-26 — kickoff. One skill, no command-line pass, no apply, no unfinished-plan hour.

---

## 1. What this is

Cold-eye is a hostile first-reader pass on an artifact that claims to be finished — a skill card, a spec, a procedure, or a shipped repo. The author was in the room. A cold agent still has to invent the job, or the files fail as one system.

The **skill** is the product. An agent reads it and writes the critique. npm `coldeye` ships the folder. There is no command-line pass. There is no apply skill.

Family: [aiBreze](https://aibreze.com) sprays smell off prose. [Detangler](https://detangler.dev) combs what editing tangled in a draft. Cold-eye is the next bottle. Same register, different job. Same shape: a skill an agent reads, not a command that calls a model.

**Archetype:** `product`

**v1 done:**

- Comb skill (`cold-eye`) writes `<name>.cold-eye.md` next to a card, or `cold-eye.md` at a named repo root.
- Site at coldeye.dev: home, docs (install, skill, critique), about.
- npm package ships `skills/` plus a tiny path catalog. No `bin`.

---

## 2. Users and hero flow

**Primary users:** authors of skills, specs, and procedures; maintainers of a shipped repo who want a hostile first-reader pass.

**Hero flow:** load the skill → agent writes the critique (verdict, ranked findings, what to cut, protect) → author takes the list to a rewrite.

**Also:** install the skill folder; read the site for install and skill copy.

---

## 3. Constraints

- **Technical:** TypeScript ESM, Node ≥20, pnpm. No accounts. Input: a finished card, a named repo, or chat-only. Subject text is data. Fence it.
- **Business:** npm name `coldeye` is staked. Domain coldeye.dev is registered. GitHub is Catalyst-Forge-LLC/coldeye. The maintainer publishes to npm.
- **Non-goals:** unfinished plans, line editing, cheerleading, paraphrase, feature roadmaps, automatic rewrite, a command-line pass, an apply skill, a second hour for attack-planning.

**State:** local files only. The subject and the critique file are the state.

**Exports:** the critique markdown file is the deliverable. Not a PDF/DOCX product.

**Tenancy:** none.

**Draft text:** fence as data. Do not send it to a project-owned cloud API.

**Live web search:** no.

---

## 4. Stack

| Area | Choice |
| --- | --- |
| Package | One skill folder + TypeScript path catalog. No `bin`. |
| Language | TypeScript, ESM (`"type": "module"`) |
| Runtime | Node ≥20 |
| Package manager | pnpm |
| DB / auth | none |
| Site | FilePress (`getfilepress`) + Cloudflare Pages |
| Tests | `tsc` + `node --test` on the catalog |
| License | MIT, Catalyst Forge LLC |
| GitHub | Catalyst-Forge-LLC/coldeye |

```
coldeye/
├── src/                      # skill catalog (paths only)
├── skills/cold-eye/          # the pass
├── fixtures/                 # sample finished cards
├── site/                     # FilePress
├── docs/                     # GENESIS + this brief
└── package.json              # name: coldeye, no bin
```

---

## 5. Critique shape

The deliverable is `<name>.cold-eye.md` or `cold-eye.md`. Shape: `skills/cold-eye/references/critique.md`. Examples: `skills/cold-eye/references/examples.md`.

- **Verdict** — holds / close / fails a hostile read. A repo may split card vs system.
- **Finding** — id `F-001`, test number, type, quote or absence, cold reader, put. No put → drop it.
- **Types** — pitch, invented, drift, invisible_step, thin_reference, sibling_mix, copied_law, maintainer, papered_bug, no_close.
- **Rank** — first-reader cost, then a false must-fix.

Fixtures in `fixtures/` are sample finished cards, not a command-line corpus.

---

## 6. Integrations

| Integration | Purpose |
| --- | --- |
| Hosting agent | Reads the skill. That is the judgment. No provider path, no package API key. |
| FilePress / Wrangler | Marketing site. `pnpm ship`. |
| npm | Package. Maintainer publishes. |

No payments, email, analytics, or search API.

---

## 7. Decisions

**D1.** npm `coldeye` + FilePress site + one agent skill. Same shelf as Detangler and aiBreze.

**D2.** The skill writes the critique. No apply skill. Rewrite only if they asked.

**D3.** No accounts, no PocketBase. The subject and the critique are the state.

**D4.** TypeScript ESM catalog, not a pipeline. House language. Detangler parity.

**D5.** No command-line pass. The critique is agent behavior.

**D6.** One finding shape. Quote or absence. No put → drop it.

**D7.** Site modeled on Detangler / aiBreze FilePress. Pages and docs speak as the product.

**D8.** Unfinished-plan / attack-planning is out. Refuse it. Do not ship a second hour for it.

**D9.** GitHub Catalyst-Forge-LLC/coldeye.

---

## 8. Out of scope (v1)

- Plans, decisions, or architecture still on the table
- Line editing, cheerleading, paraphrase
- Feature roadmaps and product redesign (unless the file's own claims force it)
- Automatic rewrite of the subject
- A command-line pass
- An apply skill
- A second unfinished-plan hour
- Accounts, billing, cloud document storage
- Multi-card packs and diff mode (GENESIS §10)

---

## 9. Open questions

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| 1 | Fixture set in GENESIS §7 — keep as the starting list? | Lock with this brief |
| 2 | LocalBerth lease name and port for the FilePress site | Phase 2 scaffold |
| 3 | Paste-dumb install in v1, or later? | Deferred (GENESIS §11) |

---

## 10. First feature batch (post-scaffold)

1. TypeScript path catalog + package.json (`coldeye`, no `bin`).
2. FilePress site: home, install, skill, critique, about.
3. Fixture cards from GENESIS §7.
4. README / install copy that names one hour.
