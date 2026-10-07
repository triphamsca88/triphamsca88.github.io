#!/usr/bin/env sh
# Scan the repo for forbidden personal strings (see CLAUDE.md, "Quyen rieng tu").
# The pattern list lives in .privacy-patterns, which is gitignored so the strings never reach the public repo.
cd "$(dirname "$0")/.." || exit 1
if [ ! -f .privacy-patterns ]; then echo "Missing .privacy-patterns" >&2; exit 2; fi
PATTERNS=$(head -n 1 .privacy-patterns)
if grep -rIEn --exclude-dir=_source --exclude-dir=node_modules --exclude-dir=.git \
     --exclude=CLAUDE.md --exclude=.privacy-patterns "$PATTERNS" . ; then
  echo "PRIVACY SCAN FAILED: forbidden string found" >&2
  exit 1
fi
echo "Privacy scan passed: no forbidden strings."
