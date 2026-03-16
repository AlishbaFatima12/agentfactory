#!/bin/bash
set -euo pipefail

# Build script for Docusaurus with i18n support
#
# Docusaurus has a known memory leak between locale builds (gray-matter cache,
# MDX processor cache, webpack compiler objects) — see:
# https://github.com/facebook/docusaurus/issues/10944
#
# Strategy: Build each locale in a SEPARATE Node process so leaked memory is
# reclaimed by the OS between builds. This keeps peak usage under 4 GB,
# fitting comfortably on Vercel's standard 8 GB build machines.
#
# @docusaurus/faster flags (SWC + Lightning CSS) are enabled for speed.
# rspackBundler is intentionally DISABLED — it leaks more memory per locale.
#
# Locales are read from i18n-config.json (shared with docusaurus.config.ts).
# To add a new locale: update i18n-config.json and run
# `pnpm docusaurus write-translations --locale <code>`. The next build picks it up.

# Change to learn-app directory (parent of scripts/)
cd "$(dirname "$0")/.."

# ---------------------------------------------------------------------------
# lastUpdatedAt is disabled on Vercel (via VERCEL env var check in
# docusaurus.config.ts) so no fake git history is needed.
# ---------------------------------------------------------------------------

# Cross-platform sharp check: when building on Linux (WSL or CI) from a
# Windows-installed node_modules, the linux-x64 sharp binary may be missing.
# Warn loudly so the developer/CI can fix their environment setup.
# NOTE: Do NOT install packages here — that mutates workspace dependencies
# during build. Fix the environment/bootstrap setup instead.
if [ "$(uname -s)" = "Linux" ]; then
  if [ -d "../../node_modules/.pnpm" ]; then
    SHARP_LINUX_DIR=$(find ../../node_modules/.pnpm -maxdepth 1 -name '@img+sharp-linux-x64@*' 2>/dev/null | head -1 || true)
  else
    SHARP_LINUX_DIR=""
  fi
  if [ -z "$SHARP_LINUX_DIR" ]; then
    echo "WARNING: sharp linux-x64 platform binary is missing."
    echo "Image optimization may be slower. To fix:"
    echo "  pnpm add -w --save-optional @img/sharp-linux-x64"
  fi
fi

# Flashcard validation + Anki generation run via nx dependsOn (project.json)
# before this script is invoked — no need to duplicate here.

NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')

# 4 GB heap per locale — each build runs in its own process
HEAP_SIZE="--max-old-space-size=4096"

# Node.js 25+ requires --localstorage-file flag
EXTRA_FLAGS=""
if [ "$NODE_VERSION" -ge 25 ]; then
  EXTRA_FLAGS="--localstorage-file=/tmp/docusaurus-localstorage"
fi

export NODE_OPTIONS="$HEAP_SIZE $EXTRA_FLAGS"

# ---------------------------------------------------------------------------
# Read locales from i18n-config.json — single source of truth shared with
# docusaurus.config.ts. No regex parsing, no fragile string matching.
# Adding a new locale: update i18n-config.json and run write-translations.
# ---------------------------------------------------------------------------
DEFAULT_LOCALE=$(node -e "const c = require('./i18n-config.json'); console.log(c.defaultLocale)")

ALL_LOCALES=$(node -e "
const c = require('./i18n-config.json');
if (!c.locales || c.locales.length === 0) { console.error('ERROR: locales array is empty in i18n-config.json'); process.exit(1); }
console.log(c.locales.join(' '));
")

if [ -z "$ALL_LOCALES" ]; then
  echo "ERROR: Failed to detect locales from i18n-config.json. Refusing to build English-only silently."
  exit 1
fi

# Validate that each non-default locale has a matching i18n/ directory
for locale in ${ALL_LOCALES}; do
  if [ "${locale}" = "${DEFAULT_LOCALE}" ]; then
    continue
  fi
  if [ ! -d "i18n/${locale}" ]; then
    echo "ERROR: Locale '${locale}' declared in config but i18n/${locale}/ directory is missing."
    echo "Run: pnpm docusaurus write-translations --locale ${locale}"
    exit 1
  fi
done

echo "==> Detected locales: ${ALL_LOCALES}  (default: ${DEFAULT_LOCALE})"

# Resolve the site-wide base URL (e.g. "/agent-factory-book/" on GitHub Pages, "/" on Vercel).
# Strip the trailing slash so we can append locale paths cleanly.
SITE_BASE="${BASE_URL:-/}"
SITE_BASE="${SITE_BASE%/}"

# ---------------------------------------------------------------------------
# Build default locale
# ---------------------------------------------------------------------------
echo "==> Building locale: ${DEFAULT_LOCALE} (default)  [baseUrl=${SITE_BASE}/]"
npx docusaurus build --locale "${DEFAULT_LOCALE}"

# ---------------------------------------------------------------------------
# Build each non-default locale in its own process, then merge into build/
#
# When building a single non-default locale separately, Docusaurus uses the
# configured baseUrl for all asset and link references — it does NOT add the
# locale path prefix automatically. We override BASE_URL so all generated URLs
# (assets, docs, canonical) correctly reference <base>/<locale>/... paths.
#
# The locale build outputs files at the ROOT of its out-dir (not inside a
# locale subdirectory). We copy them into build/<locale>/ so the server serves
# them at /<base>/<locale>/ matching the links in the HTML.
# ---------------------------------------------------------------------------
for locale in ${ALL_LOCALES}; do
  if [ "${locale}" = "${DEFAULT_LOCALE}" ]; then
    continue
  fi

  echo "==> Building locale: ${locale}  [baseUrl=${SITE_BASE}/${locale}/]"
  BASE_URL="${SITE_BASE}/${locale}/" npx docusaurus build --locale "${locale}" --out-dir "build-${locale}"

  mkdir -p "build/${locale}"
  cp -r "build-${locale}/"* "build/${locale}/"
  rm -rf "build-${locale}"
done

echo "==> Build complete (all locales merged into build/)"
