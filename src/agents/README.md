# agents/

Agent-facing entry metadata.

| File | Consumed by |
|---|---|
| `../AGENTS.md` | Canonical rules. Copied to the skill root and appended to the project's `AGENTS.md`, `CLAUDE.md`, or IDE rules file by the installer in `bin/` |
| `CLAUDE.md` | Pointer for Claude Code readers browsing the skill folder |
| `openai.yaml` | Interface metadata for registries (display name, default prompt) |

There is one copy of the rules. Edit `../AGENTS.md`.
