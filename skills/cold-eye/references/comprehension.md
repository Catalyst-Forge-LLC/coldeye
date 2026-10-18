# Newcomer comprehension

At the lockup and brochure steps, reconstruct the public promise before reading internal specifications:

> For [person or situation], this [product form] takes [input or starting point] and produces [bounded result], which helps them [next action or outcome]. The first step is [action].

Use only public evidence. Mark an absent element as missing, rather than filling it from the author's intent or this conversation. An obvious interface can supply an implicit answer. Preserve the reconstruction, then compare it against setup instructions and the shipped artifact. Put a concise reconstruction with source locations below the verdict in the critique. For subjects without a public entry surface, say not applicable and give the reason.

This is a reading step, not an eleventh test. A concrete defect uses an existing test and type:

| Consequence | Existing test |
| --- | --- |
| Reader has to invent required input, product form, or output | 2, invented |
| Public promise contradicts the instructions or shipped artifact | 3, drift |
| Starting the promised job needs an undisclosed prerequisite | 4, invisible_step |
| Example gives a false picture of the claimed job | 5, thin_reference |
| Maintainer-only language displaces the information needed to begin | 8, maintainer |

Do not fail a runnable procedure because the sales pitch is weak, the benefit is modest, or a specialist term is unfamiliar to a general audience. Missing persuasion alone is not a readiness defect. Emit a finding only when the public omission or contradiction has a concrete consequence under an existing test. Preserve holds, close, fails a hostile read, split verdicts, and the ten test IDs.

## Calibration

- Clear specialist: an XLIFF linter names its audience, accepted file, command, diagnostics file, and stopping condition. Preserve the specialist language. No finding for lacking a general-purpose pitch.
- Obvious utility: a visible stopwatch has Start, Pause, and Reset. Its job and next action are inferable. No finding for a missing persona or slogan.
- Unsupported promise: a page says every file is restored, while its procedure only lists recovery candidates. Test 3, drift. Correct the promise, rather than inventing a guarantee or a new feature.
- Runnable but weak marketing: a page says “A useful formatter” but gives the exact input, command, output, and end. Holds if the rest agrees. Weak persuasion alone adds no ranked change.
- Complete page: audience, form, result, prerequisites, and example agree with the artifact. Holds, ranked changes None. Protect the accurate explanation.
