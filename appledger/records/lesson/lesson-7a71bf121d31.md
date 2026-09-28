---
format_version: 0.1.0
id: lesson-7a71bf121d31
kind: lesson
title: localberth claim fails on this Windows shell when --notes has a space
  (shell:tru
record_status: active
created_at: 2026-08-26T16:08:00Z
updated_at: 2026-08-26T16:08:00Z
recorded_by:
  id: migration-import
  type: import
visibility: internal
relations: []
claims: []
data:
  context: Imported from workflow tracking gotchas[].
  problem: localberth claim fails on this Windows shell when --notes has a space
    (shell:true splits it) or when --notes=value is combined with --or-next.
  resolution: ensure-lease.mjs claims with --port and --or-next, then retries
    without --or-next. Never pass --notes with a space (Windows shell:true
    splits it). If the port is already listening, localberth still records the
    lease.
  limits: Imported as a historical assertion. Verification was not recorded.
  generalization_status: observed
---


