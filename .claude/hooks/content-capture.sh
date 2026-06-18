#!/usr/bin/env bash
# Stop hook: when site files changed this session, nudge to capture a content angle
# and any new design/voice pattern. Hooks run shell only; they cannot browse the web
# or call the model. Web research lives in the workflow-scout skill.

input=$(cat)

# Avoid an infinite stop loop: if we already nudged this turn, allow the stop.
if echo "$input" | grep -q '"stop_hook_active":[[:space:]]*true'; then
  exit 0
fi

repo="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$repo" 2>/dev/null || exit 0

changed=$(git status --porcelain 2>/dev/null | grep -E '(app|components|lib|content)/')
if [ -z "$changed" ]; then
  exit 0
fi

{
  echo "Content + capture checkpoint (site files changed this session):"
  echo "1. Did this session ship or discuss something with a content angle? If yes, append a one-line seed to content/backlog.md (use the content-engine skill)."
  echo "2. New design or voice pattern, or a correction? Update the project memory + MEMORY.md so it persists."
  echo "3. If a case study or insight is ready, draft it as MDX (draft: true) via the content-engine skill."
  echo "If nothing new, just stop."
} >&2

exit 2
