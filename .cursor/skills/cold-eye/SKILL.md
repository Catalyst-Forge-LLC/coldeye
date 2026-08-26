---
name: cold-eye
description: >-
  Hostile read of anything shipped, deemed done, or ready to
  ship — a skill, a spec, a site, a package, a repo. Checks
  whether a cold agent can run the job without inventing it,
  and whether the files describe one system. Use when the
  author asks for a cold-eye pass, a hostile read, extreme
  scrutiny, or whether what they shipped would survive a picky
  editor. Not for plans, decisions, or work still on the
  table. Not for line editing, cheerleading, or a second
  paraphrase of the same draft.
---

# Cold-eye

## Words

- **Subject** — anything shipped, deemed done, or ready to
  ship. One file or a system.
- **Card** — one finished file. A skill, a spec, a procedure,
  a page, a README. Not only operator files.
- **System** — more than one surface. A repo, a package, a
  site.
- **Hour** — the job the subject tells someone to run: start,
  read, write, stop.
- **Law** — standing rules one file owns. Copies drift.
- **Lockup** — the product name plus the one line under it,
  read as if that were the whole page.
- **Pitch** — a card that sells instead of instructing.
- **Brochure** — the public buyer page (site home, npm README).

The first reader who was not in the room: extreme scrutiny, no
credit for intent. A brochure can be sharp and still fail. So can a pitch. The
test is what a cold agent or a picky editor still has to invent
after reading the file. When the subject is a system, whether the
files describe one product.

This hour is for something that has shipped, is deemed done, or
is ready to ship. A direction you might still change is out of
scope.

## The hour

1. Locate the subject (a card, a system, or what they pasted).
   If none, ask.
2. Read by the path below. Nothing from the thread that
   produced the files.
3. Run the ten tests, in order.
4. Write the critique using `references/critique.md`. Read
   `references/examples.md` before you emit a finding. If
   either file is missing, stop and say so. Do not invent a
   shape.
5. Hand the file over. Stop. Do not rewrite the subject unless
   they asked.

**Write to:**

- One file → `<name>.cold-eye.md` next to it (`SKILL.md` →
  `SKILL.cold-eye.md`).
- A system → `cold-eye.md` at the root they named.
- They said chat only → stay in chat, same shape.

A system path needs the tree and a shell. If you cannot open
files or run commands, run the one-card path on what they
pasted and write the missing-tree marker that
`references/critique.md` specifies.

## How to read

**One card.** Start on that file. Open only what it tells you to
open, then the tools it names.

**A system.** Do not start in the spec. The author lives there.
Read in first-reader order, then open what shipped:

1. The lockup, as if that were the whole page. A metaphor that
   works under a hero can fail next to the name alone.
2. The public page a buyer hits first. For a package, that is
   also the npm README, not only the marketing site.
3. The artifact the operator card says to read first.
4. The operator cards.
5. The spec.
6. The named tools — actually open them. "Match the system" is
   not a memory check. Open `package.json` `files`. Then run
   `npm pack --dry-run` (or `pnpm pack --dry-run`). That list
   is what ships. What only lives in the repo is another
   surface. They can lie in different ways.

A lie the first reader hits costs more than a lie in the spec.

## The test

Ask, in order:

1. **Pitch or procedure?** Stages and principles are not an
   hour. Can the reader run the job as steps: start, read,
   write, stop?
2. **What still has to be invented?** Schema, file names,
   write-back, done-looks-like, refuse list. If the reader must
   guess, it fails. A placeholder (`<stem>`, `draft.md`) the
   hour never binds is a guess.
3. **Does it match the system it describes?** Flags, commands,
   and "the model will…" claims against what the code or tools
   actually do. Then file against file. Two locally coherent
   files that contradict each other fail as a system. Drift is
   a defect, not a tone note. A status marker (`locked`,
   `current`, `done`) that contradicts what shipped is a
   first-reader lie unless it says it is history.
4. **Is a required step invisible?** If a claimed check needs a
   second command, that command must sit next to the claim. A
   landing-page command that does not finish the checks listed
   under it is a false must-fix waiting for a buyer.
5. **Are the references load-bearing?** Definitions without a
   worked example and a do-not-emit example will mint false
   certainty. On a brochure: does the worked example match the
   injury the spec names? A milder cousin is a weaker sale and
   a false picture of must-fix.
6. **Is discovery copy mixed with the next job?** A description
   that names a sibling skill will fire on the sibling's asks.
   WHAT + WHEN + refuse. Third person. No "you can use this."
   Refuse the sibling job in the description; put the sibling's
   **name** in the body. Same test on an install page: two hours
   in one box. If the package ships two folders, say which hour
   is first.
7. **Where is the law copied?** Two files that restate the same
   rules will drift. One standing file. Artifacts may list this
   run and point at it. A standing file the main card never
   tells you to open is a landmine, worse than two copies that
   both point. Two buyer URLs for the same job are the same
   defect. Pick one. Point the nav at it. Sibling critique
   skills that each restate a finding shape will drift the
   same way.
8. **Is this sentence only for the maintainer?** Ports, leases,
   who publishes, "agents must not." Fine in an agent rule. A
   fail on the page a buyer reads first.
9. **Does the hour paper over a tool bug?** If the procedure
   says write X and the named tool destroys X, name both. Do
   not only rewrite the prose.
10. **How does the hour end?** Re-check, handoff, or stop. A
    pass that never closes will start the next pass in the
    same breath.

Protect what already holds. Do not flatten dialect or
distinctive lines that are doing a job.

## What "done" looks like

The author can take the ranked list to a rewrite. A cold agent
could run the *revised* job without a side channel. On a
system, the revised files would describe one product. You have
not rewritten the subject unless they said to.

## Refuse

- Line edits dressed as scrutiny
- A second paraphrase that agrees harder
- A feature roadmap. Missing capability is a defect in the
  claim unless the author asked you to design the missing piece
- Scope that turns a review into a product redesign
  unless the file's own claims force it
- A direction still on the table
