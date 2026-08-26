# Examples

Read before you emit a finding.

## Emit

The subject says: `Open package.json files (or the tarball).`

```markdown
1. **F-001** · test 4 — invisible_step
   > Open package.json files (or the tarball).
   Cold reader: skips the tarball, or invents a command.
   Put: Run `npm pack --dry-run`. That list is what ships.
```

The check needed a second command. The command was not on the
line. That is test 4.

## Absence

The subject never names an output file.

```markdown
1. **F-002** · test 2 — invented
   Absent: after the hour — output destination and shape
   Cold reader: writes to chat, or invents a filename.
   Put: Name the file and the finding shape.
```

There is no line to quote. The defect is what is not there.

## Do not emit

The subject says: `Lead with the verdict: holds, close, or fails.`

```markdown
1. **F-003** · test 1 — pitch
   > Lead with the verdict: holds, close, or fails.
   Cold reader: understands the three verdicts.
   Put: Lead with the verdict: stands, close, or fails.
```

That is a line edit dressed as scrutiny. The three words already
work. A wording preference is not something a cold reader has
to invent. Drop it. (`pitch` is the test-1 type; do not invent
`wording`.)

## Rank

Two findings on the same card:

1. No output file (test 2, invented). A cold agent cannot
   finish the hour.
2. A metaphor in the lockup that only works under the hero
   (test 3, drift). A buyer is confused, then can still run
   the job.

F-001 goes first. First-reader cost is the agent who cannot
write the deliverable. The lockup lie is real and ranks
second. Do not lead with the sharper sentence if the missing
file blocks the hour.
