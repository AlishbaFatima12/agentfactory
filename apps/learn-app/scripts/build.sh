#!/bin/bash
set -euo pipefail

# Build script for Docusaurus with i18n support
#
# Docusaurus has a known memory leak between locale builds (gray-matter cache,
# MDX processor cache, webpack compiler objects) — see:
# https://github.com/facebook/docusaurus/issues/10944
#
# Strategy: Build each locale in a SEPARATE Node process so leaked memory is
# reclaimed by the OS between builds. Heap is set to 7 GB to use most of
# Vercel's standard 8 GB build machines (leaving ~1 GB for OS + tooling).
#
# @docusaurus/faster flags (SWC + Lightning CSS) are enabled for speed.
# rspackBundler is intentionally DISABLED — it leaks more memory per locale.

# Change to learn-app directory (parent of scripts/)
cd "$(dirname "$0")/.."

# Flashcard validation + Anki generation run via nx dependsOn (project.json)
# before this script is invoked — no need to duplicate here.

NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')

# 7 GB heap — with 1,824 docs + search index + OG images, 4 GB is insufficient
HEAP_SIZE="--max-old-space-size=7168"

# Node.js 25+ requires --localstorage-file flag
EXTRA_FLAGS=""
if [ "$NODE_VERSION" -ge 25 ]; then
  EXTRA_FLAGS="--localstorage-file=/tmp/docusaurus-localstorage"
fi

export NODE_OPTIONS="$HEAP_SIZE $EXTRA_FLAGS"

echo "==> Building locale: en (default)"
npx docusaurus build --locale en

echo "==> Build complete"
