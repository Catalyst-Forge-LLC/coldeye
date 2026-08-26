# Cold-eye: Build Specification

Version 0.2. Product spec.

Package: `coldeye` on npm. Site: coldeye.dev. GitHub: Catalyst-Forge-LLC/coldeye. Same shelf as Detangler and aiBreze.

## 0. Name and metaphor

A cold eye is the first reader who was not in the room. No credit for intent. The file looks finished to the author. The test is what a stranger still has to invent.

The metaphor carries the design, so state it everywhere the product is described:

- **Finished, not forming.** The subject claims to be done. A direction you might still change is out of scope. Do not add a second hour for attack-planning.
- **Read, then write the critique.** The skill is the pass. An agent reads it and writes the critique file. It does not rewrite the subject unless they asked.
- **Family resemblance.** aiBreze sprays smell off prose. Detangler combs what editing tangled in a draft. Cold-eye is the next bottle: hostile-read what has shipped, is deemed done, or is ready to ship. Same register, different job. Same shape: a skill an agent reads, not a command that calls a model.

Header lockup: *A hostile read of what claims to be done.*

Hero may still use: *What a cold agent still has to invent.* That line is opaque in the header by itself.

Product shape: one skill. npm `coldeye` ships the folder. There is no command-line pass. There is no apply skill.

Naming rule: use "Cold-eye" for the product. Package, domain, and repo are `coldeye`. The skill folder is `cold-eye`. Do not invent a second brand.

## 1. Purpose

Cold-eye is a hostile first-reader pass on anything that has shipped, is deemed done, or is ready to ship — a skill, a spec, a procedure, a page, a README, a package, a site, a repo. The list is examples, not a closed set. The gate is the claim: done, or ready. The author was in the room. The file looks finished. A cold agent or a picky editor still has to invent the job: schema, filenames, write-back, what done looks like, when to refuse. On a system, locally coherent files can still fail as one product.

A brochure can be sharp and still fail. So can a pitch.

The first release produces a critique. The skill writes it. It does not rewrite.

It is deliberately not a line editor, not a cheerleader, and not a second paraphrase. Missing capability is a defect in the claim, not a feature roadmap. Scope that turns a review into a product redesign is out unless the file's own claims force it.

One injury it catches is the invented step: the hour names a check and never binds the command, the filename, or the shape. That is not the whole job. The same pass finds a pitch that never becomes start / read / write / stop, two files that contradict as a system, a landing-page command that does not finish the checks under it, discovery copy that would fire on a sibling's job, standing rules copied until they drift, maintainer notes on a buyer page, a procedure that papers over a tool bug, an hour that never closes.

The method is first-reader order plus ten tests. An editor's trick and a software habit, run together as one pass.

## 2. Scope

### In scope

- Anything shipped, deemed done, or ready to ship. One file or a system.
- Examples, not a closed set: a skill, a spec, a procedure, a page, a README, a package, a site, a repo.
- Chat-only, same critique shape, when they said stay in chat.
- One subject per run.

### Out of scope

- Plans, decisions, or work still on the table.
- Line editing, cheerleading, or a second paraphrase that agrees harder.
- A feature roadmap. Missing capability is a defect in the claim unless they asked you to design the missing piece.
- Automatic rewrite. The skill reports. Rewrite only if they asked.
- A command-line pass. The critique is agent behavior.
- An apply skill. Keep this product one hour.
- A second public name or a second npm package.

## 3. Design principles

1. **No credit for intent.** Nothing from the thread that produced the files. Rebuild from what a first reader hits.
2. **Findings are a to-do list.** Quote the offending line, or name the location and the absence. No quote and no absence → drop it. Every finding has a put.
3. **Rank by first-reader cost.** A buyer who only reads the lockup, or the npm README, or who runs the one command on the page, or an agent who trusts the file the hour says to read first, outranks a spec-internal lie. Then a false must-fix.
4. **The agent reading the skill is the judgment.** There is no command-line pass and no model API. The ten tests are the hour in `skills/cold-eye/SKILL.md`.
5. **Protect what already holds.** Do not flatten dialect or distinctive lines that are doing a job. A wording preference is not something a cold reader has to invent.
6. **One standing file for the law.** Copies drift. The critique shape lives in `references/critique.md`. Worked examples live in `references/examples.md`. The skill points. It does not restate.

## 4. The hour

The agent locates the subject, reads by the path below, runs the ten tests in order, writes the critique, and stops.

**Write to:**

- One file → `<name>.cold-eye.md` next to it (`SKILL.md` → `SKILL.cold-eye.md`).
- A system → `cold-eye.md` at the root they named.
- Chat only → stay in chat, same shape.

A system path needs the tree and a shell. If those are missing, run the one-card path on what they pasted and write the missing-tree marker that `references/critique.md` specifies.

If `references/critique.md` or `references/examples.md` is missing, stop and say so. Do not invent a shape.

### How to read

**One card.** Start on that file. Open only what it tells you to open, then the tools it names.

**A system.** Do not start in the spec. The author lives there. Read in first-reader order, then open what shipped:

1. The lockup, as if that were the whole page.
2. The public page a buyer hits first. For a package, that is also the npm README, not only the marketing site.
3. The artifact the operator card says to read first.
4. The operator cards.
5. The spec.
6. The named tools — actually open them. Open `package.json` `files`. Then run `npm pack --dry-run` (or `pnpm pack --dry-run`). That list is what ships. What only lives in the repo is another surface.

A lie the first reader hits costs more than a lie in the spec.

### The ten tests

Ask, in order. Types are owned by `references/critique.md`. Do not invent types.

1. **Pitch or procedure?** (`pitch`) Stages and principles are not an hour. Can the reader run the job as steps: start, read, write, stop?
2. **What still has to be invented?** (`invented`) Schema, file names, write-back, done-looks-like, refuse list. A placeholder the hour never binds is a guess.
3. **Does it match the system it describes?** (`drift`) Flags, commands, and "the model will…" against what the code or tools actually do. Then file against file. Two locally coherent files that contradict each other fail as a system. A status marker that contradicts what shipped is a first-reader lie unless it says it is history.
4. **Is a required step invisible?** (`invisible_step`) If a claimed check needs a second command, that command must sit next to the claim.
5. **Are the references load-bearing?** (`thin_reference`) Definitions without a worked example and a do-not-emit example will mint false certainty. On a brochure: does the worked example match the injury the spec names?
6. **Is discovery copy mixed with the next job?** (`sibling_mix`) WHAT + WHEN + refuse. Third person. Refuse the sibling job in the description; put the sibling's name in the body.
7. **Where is the law copied?** (`copied_law`) Two files that restate the same rules will drift. One standing file. A standing file the main card never tells you to open is a landmine.
8. **Is this sentence only for the maintainer?** (`maintainer`) Ports, leases, who publishes, "agents must not." Fine in an agent rule. A fail on the page a buyer reads first.
9. **Does the hour paper over a tool bug?** (`papered_bug`) If the procedure says write X and the named tool destroys X, name both.
10. **How does the hour end?** (`no_close`) Re-check, handoff, or stop. A pass that never closes will start the next pass in the same breath.

## 5. Finding shape

The critique is markdown. Shape: `skills/cold-eye/references/critique.md`. Read `skills/cold-eye/references/examples.md` before you emit a finding.

Verdict forms (pick one):

- One subject: `**Verdict:** holds` or `close` or `fails a hostile read.`
- A system: `**Verdict:** <card> as a card, <system> as a system.` Each side takes one of the three values.

Include `**System:** not attempted` only when the missing-tree fallback fired.

Every finding: id (`F-001`), test number, type from the table, then either a quoted line or an absence. Cold reader: what they do instead. Put: what to put in the file. No action-shaped put → drop it.

A line edit dressed as scrutiny is not a finding. The three verdict words already work. Do not invent a type named `wording`.

## 6. Critique format

The author reads the critique file. Sections:

1. **Title** — `Cold-eye — <subject>`
2. **Verdict** — one form from above
3. **Ranked changes** — findings in first-reader-cost order
4. **What to cut**
5. **Protect** — dialect and lines that are doing a job

Do not implement unless asked. Do not offer a cheerleader close.

## 7. Sample subjects

`fixtures/` are finished artifacts (or tiny systems) with injected faults, for trying the skill. Each folder has the subject file. `expected.md`, where present, names the injected faults. Nothing here is a command-line corpus.

| Folder | Injected fault | What the skill should catch |
|---|---|---|
| `pitch-stages` | Principles and stages, no start / read / write / stop | `pitch` |
| `unbound-output` | Hour never names the output file | `invented` |
| `invisible-pack` | Claims "open the tarball" with no command | `invisible_step` |
| `sibling-description` | Description names a sibling skill | `sibling_mix` |
| `copied-rules` | Two files restate the same standing rules | `copied_law` |
| `no-close` | Hour never says stop | `no_close` |
| `clean` | Finished card that holds | Zero findings that a cold reader must invent |

A finding on `clean` that is only a wording preference is a miss of the product.

## 8. Skill packaging

The skill **is** the pass. An agent reads it and writes the critique. npm ships the folder. No command-line pass, no Python scripts, no model API.

```
skills/cold-eye/
├── SKILL.md
└── references/
    ├── critique.md
    └── examples.md
```

**SKILL.md description** (make it pushy; agents undertrigger): "Hostile read of anything shipped, deemed done, or ready to ship — a skill, a spec, a site, a package, a repo. Checks whether a cold agent can run the job without inventing it, and whether the files describe one system. Use when the author asks for a cold-eye pass, a hostile read, extreme scrutiny, or whether what they shipped would survive a picky editor. Not for plans, decisions, or work still on the table. Not for line editing, cheerleading, or a second paraphrase of the same draft."

**SKILL.md body:** the hour (locate, read, ten tests, write the critique, stop), pointers to the reference files, refuse unfinished work in the description. Do not name another product's hour in the description.

## 9. Site and package

- npm `coldeye` ships `skills/` plus a tiny TypeScript path catalog. No `bin`.
- Site at coldeye.dev: FilePress (`getfilepress`) + Cloudflare Pages. Home, docs (install, skill, critique), about.
- License: MIT, Catalyst Forge LLC.
- Agents never publish. The maintainer publishes to npm. Site deploy is `pnpm ship`.

## 10. Future extensions

Not in the first build. Listed so the method does not preclude them.

- Multi-card packs: one critique that ranks across a family of skills without folding them into one hour.
- Diff mode: two versions of a card, report only findings introduced between them.
- A public sample critique on the homepage, from a real shipped subject run in the open. First public proof is "we ran this on X and here is the critique."

Do not add an apply skill. Do not add an unfinished-plan hour.

## 11. Open decisions

1. Fixture set in §7 is a starting list. Tune after the first real critiques.
2. Site lockup vs hero: lockup is the sentence next to the name. Keep the invent-line for the hero if it stays opaque alone.
3. Paste-dumb install (copy `SKILL.md` with no `skills/` directory) can widen the audience later. Do not block v1 on it.
