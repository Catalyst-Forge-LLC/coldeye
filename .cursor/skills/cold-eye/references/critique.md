# Critique shape

You write the file the card's Write-to block names. This file
owns the shape.

A system subject may need a **split verdict**. Do not flatten
that into one word. Use the second form. Include
`**System:** not attempted` only when the card's missing-tree
fallback fired.

**Verdict forms** (pick one):

- One subject: `**Verdict:** holds` or `close` or `fails a hostile read.`
- A system: `**Verdict:** <card> as a card, <system> as a system.`
  `<card>` and `<system>` each take one of the three values above.

**What each verdict means:**

- **holds** — a cold reader can run the job from the files as
  shipped. Ranked changes may still exist. None of them stops the
  job or plants a false must-fix.
- **close** — at least one change stops the job or misleads the
  first reader, and every such change is an edit to a file that
  already exists: a missing command, a named output file, a
  contradiction resolved one way. The author can make them without
  redesigning the procedure.
- **fails a hostile read** — a cold reader cannot finish the job,
  and the fix needs something the subject does not have yet: a
  procedure where there is only a pitch, a schema nobody wrote, a
  tool that does not do what the files say.

Pick the verdict from the worst ranked change, not from the count.
One missing launch command is `close`. Ten wording notes are not
findings at all.

**Types** (one per test, not freeform):

| Test | Type |
| --- | --- |
| 1 | `pitch` |
| 2 | `invented` |
| 3 | `drift` |
| 4 | `invisible_step` |
| 5 | `thin_reference` |
| 6 | `sibling_mix` |
| 7 | `copied_law` |
| 8 | `maintainer` |
| 9 | `papered_bug` |
| 10 | `no_close` |

```markdown
# Cold-eye — <subject>

**Verdict:** <one form from above>

## Ranked changes

1. **F-001** · test <N> — <type>
   > quoted offending line
   Cold reader: <what they do instead>
   Put: <what to put in the file>

2. **F-002** · test <N> — <type>
   Absent: <location> — <what is not there>
   Cold reader: <what they do instead>
   Put: <what to put in the file>

## What to cut

- …

## Protect

- …
```

**What to cut** lists lines that mislead or belong on another
surface: a maintainer note on the brochure, a pitch inside a
procedure, a status marker that contradicts what shipped. Say where
the line goes if it belongs elsewhere. Wording you would only
tighten is not a cut. Write `None.` when nothing qualifies.

The second finding is the absence form. Use it when there is
no line to quote. Quote the line, or name the location and
state what is not there. No quote and no absence claim → drop
it.

Rank by first-reader cost, then by a false must-fix. A buyer
who only reads the lockup, or the npm README, or who runs the
one command on the page, or an agent who trusts the file the
hour says to read first, outranks a spec-internal lie. When
unsure, say so and put the item lower.

If the tool is wrong, say so — claims that are not shipped
are defects in the claim, not a backlog.

Do not implement unless asked. Do not offer a cheerleader close.
