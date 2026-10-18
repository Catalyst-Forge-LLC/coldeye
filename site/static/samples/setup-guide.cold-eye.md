# Cold-eye — fictional Notes setup guide

Illustrative complete report, written to explain the format. This is not a recorded agent run, a runnable application, or a measured usability result.

## Evidence supplied for this example

The fictional README's Quick start section says:

> Run `npm install`.
> Launch the app.

The fictional application's package.json defines `"start": "node server.mjs"`. In this example the server prints a local URL and serves a page headed Notes. Those details are supplied as the example's context; a real review must establish the command and expected result from the actual project.

**Verdict:** close

**Newcomer understanding:** A reader of README.md → Quick start can install the app's dependencies, but cannot tell how to launch the Notes interface. The needed start command exists in package.json, but the guide does not name it.

## Ranked changes

1. **F-001** · test 2 — invented
   Location: README.md → Quick start
   > Launch the app.
   Cold reader: Installs the dependencies, then has to guess how to open the app.
   Put: Add `npm start`, the command defined in package.json, and say how to recognize a successful launch: open the local URL printed in the terminal and look for the Notes page.

## What to cut

None.

## Protect

- Keep the dependency-install step before the launch step.
- Use the start command the project already defines.

The verdict is close because the repair fits in the existing guide. It needs no new application feature. This report proposes the edit; it does not apply it or certify the application.
