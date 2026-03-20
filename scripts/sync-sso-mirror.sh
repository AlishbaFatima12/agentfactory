#!/bin/bash
# Sync agentfactory main → sso-mirror-mono with a SINGLE push (no double deploy).
#
# Why single push matters: Two pushes = two Vercel builds = double build minutes.
# This script clones the mirror, resets to origin/main content, adds the
# deploy-trigger CHANGELOG as panaversity-global, then force pushes ONCE.
#
# Reads SSO_SYNC_PAT from .env in repo root (gitignored).
#
# Usage:
#   ./scripts/sync-sso-mirror.sh          # force sync now
#   ./scripts/sync-sso-mirror.sh --check  # only sync if new commits exist
#
# VPS cron (every 30 min):
#   */30 * * * * cd /path/to/agentfactory && ./scripts/sync-sso-mirror.sh --check

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
MIRROR_REPO="panaversity-global/sso-mirror-mono"
LOG_FILE="${LOG_FILE:-/tmp/sso-sync.log}"

# Log to file only (no tee) — cron redirects stdout to same file, tee would double-write
log() { echo "$(date -u '+%Y-%m-%d %H:%M:%S UTC') $1" >> "$LOG_FILE"; }

# Load PAT from .env
if [[ ! -f "$REPO_DIR/.env" ]]; then
  log "ERROR: $REPO_DIR/.env not found"
  exit 1
fi
SSO_SYNC_PAT=$(grep '^SSO_SYNC_PAT=' "$REPO_DIR/.env" | cut -d'=' -f2-)
if [[ -z "$SSO_SYNC_PAT" ]]; then
  log "ERROR: SSO_SYNC_PAT not set in .env"
  exit 1
fi

MIRROR_URL="https://x-access-token:${SSO_SYNC_PAT}@github.com/${MIRROR_REPO}.git"

cd "$REPO_DIR"
git fetch origin --quiet
ORIGIN_SHA=$(git rev-parse origin/main)

# --check mode: only sync if mirror is behind (fail-closed: API error = skip, not sync)
if [[ "${1:-}" == "--check" ]]; then
  MIRROR_MSG=$(curl -sf -H "Authorization: token ${SSO_SYNC_PAT}" \
    "https://api.github.com/repos/${MIRROR_REPO}/commits/main" | \
    python3 -c "import sys,json; print(json.load(sys.stdin)['commit']['message'])" 2>/dev/null) || true

  if [[ -z "$MIRROR_MSG" ]]; then
    log "SKIP: could not reach mirror API (network error or rate limit)"
    exit 0
  fi

  if echo "$MIRROR_MSG" | grep -q "$ORIGIN_SHA"; then
    log "IN SYNC at ${ORIGIN_SHA:0:8}"
    exit 0
  fi
  log "OUT OF SYNC: origin ${ORIGIN_SHA:0:8}"
fi

log "SYNCING origin/main (${ORIGIN_SHA:0:8}) to ${MIRROR_REPO}..."

# Single-push strategy: clone mirror, reset to source content, add CHANGELOG, push once.
# This avoids the double-deploy caused by force-push + separate CHANGELOG push.
TMPDIR=$(mktemp -d)
trap "rm -rf $TMPDIR" EXIT

# Clone mirror (shallow) — suppress stderr to avoid leaking PAT in error messages
git clone --depth 1 "$MIRROR_URL" "$TMPDIR" --quiet 2>/dev/null || {
  log "ERROR: failed to clone mirror (check PAT validity)"
  exit 1
}

# Fetch source content into the mirror clone
cd "$TMPDIR"
git remote add source "$REPO_DIR"
git fetch source origin/main --quiet 2>/dev/null

# Reset mirror to match source exactly
git reset --hard FETCH_HEAD --quiet 2>/dev/null || git reset --hard FETCH_HEAD

# Configure as panaversity-global (Vercel-authorized user)
git config user.name "panaversity-global"
git config user.email "panaversity-global@users.noreply.github.com"

# Add deploy-trigger CHANGELOG on top
echo "Synced from panaversity/agentfactory at $(date -u '+%Y-%m-%d %H:%M:%S UTC')" > CHANGELOG.md
echo "Source commit: $ORIGIN_SHA" >> CHANGELOG.md
git add CHANGELOG.md
git commit -m "sync: trigger deploy from $ORIGIN_SHA" --quiet

# Single force push — one push, one Vercel build
git push origin main --force --quiet 2>/dev/null

log "DONE: ${ORIGIN_SHA:0:8} synced (single push)"
