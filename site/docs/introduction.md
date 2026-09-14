---
title: What it does
---

**Cold-eye** is an installable skill for AI agents. It checks whether a newcomer can understand and use what you are about to ship.

Give it a finished artifact. An agent reads the skill and writes a critique of missing instructions, contradictions, and unsupported claims.

**[Get started](/docs/install)** — install the skill in your agent, then use it.

You were in the room. The file looks finished. Locally coherent files can still fail as one product.

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A finished skill, spec, page, package, site, or repo |
| Writes | `<name>.cold-eye.md` next to a file, or `cold-eye.md` at a system root |
| Changes | Nothing, unless you separately ask for an edit |

| Verdict | Means |
| --- | --- |
| **holds** | A newcomer can run the job |
| **close** | A few edits to the file would close the gap |
| **fails a hostile read** | Too much still has to be invented |

The gate is the claim: done, or ready. A direction you might still change is out of scope.

This is a readiness pass. It is not a code audit, a security audit, or a comprehensive test run, unless those actions are the subject's own claimed checks.

The skill file uses **hour** for the procedure the subject tells someone to run: start, read, write, stop. Public pages say procedure or job for the same thing.

The [critique shape](/docs/critique).
