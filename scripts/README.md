# Scripts

Operational scripts for the agentfactory repo. These are machine-independent — they use relative paths and read secrets from `.env`.

## sync-sso-mirror.sh

Syncs `panaversity/agentfactory` main branch to the `panaversity-global/sso-mirror-mono` repo, which triggers Vercel deployment.

### Why this exists

The GitHub Actions workflow (`Sync to SSO Mirror`) handles this automatically, but is blocked when GitHub Actions billing lapses. This script is the manual/VPS fallback.

### Prerequisites

- `git`, `curl`, `python3` installed
- `.env` file in repo root with:
  ```
  SSO_SYNC_PAT=ghp_your_token_here
  ```
  The PAT needs push access to `panaversity-global/sso-mirror-mono`.

### Usage

```bash
# Force sync right now
./scripts/sync-sso-mirror.sh

# Only sync if new commits exist (idempotent, safe for cron)
./scripts/sync-sso-mirror.sh --check
```

### VPS cron setup

```bash
# Clone repo on VPS
git clone https://github.com/panaversity/agentfactory.git /opt/agentfactory
echo "SSO_SYNC_PAT=ghp_xxx" >> /opt/agentfactory/.env

# Add cron (every 30 min)
crontab -e
# Add:
*/30 * * * * cd /opt/agentfactory && ./scripts/sync-sso-mirror.sh --check >> /var/log/sso-sync.log 2>&1
```

### How it works

1. Fetches latest `origin/main`
2. In `--check` mode, compares against mirror's last synced SHA via GitHub API — exits if already in sync
3. Clones the mirror, resets to source content, adds a CHANGELOG commit as `panaversity-global`
4. **Single force push** — one push = one Vercel build (avoids the double-deploy bug from the original two-push approach)

### Double-deploy fix

The original CI workflow and first version of this script did two pushes per sync:
1. Force push source content (triggers Vercel build #1)
2. Push CHANGELOG commit (triggers Vercel build #2)

This script combines both into a single push, halving Vercel build minutes.
