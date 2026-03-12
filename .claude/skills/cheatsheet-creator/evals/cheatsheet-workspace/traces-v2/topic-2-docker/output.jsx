import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 150,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function DockerCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core & Build", "Page 2: Compose V2 & Production"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          Docker{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          CLI · BuildKit · Compose V2 · Multi-Stage Builds — 2026 Edition
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1: Core & Build */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* 1 — Core CLI Commands */}
          <SectionCard number="1" title="Core CLI Commands">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">ESSENTIAL</Tag>
            </div>
            <RefRow cmd="docker run" desc="Create and start a new container" />
            <RefRow cmd="docker ps" desc="List running containers (-a for all)" />
            <RefRow cmd="docker exec -it" desc="Run command in running container" />
            <RefRow cmd="docker logs -f" desc="Follow container log output" />
            <RefRow cmd="docker inspect" desc="Show detailed object metadata (JSON)" />
            <RefRow cmd="docker system df" desc="Show disk usage by Docker objects" />
          </SectionCard>

          {/* 2 — Container Lifecycle */}
          <SectionCard number="2" title="Container Lifecycle">
            <RefRow cmd="docker create" desc="Create container without starting" />
            <RefRow cmd="docker start" desc="Start a stopped container" />
            <RefRow cmd="docker stop" desc="Graceful shutdown (SIGTERM, then SIGKILL)" />
            <RefRow cmd="docker kill" desc="Force stop (immediate SIGKILL)" />
            <RefRow cmd="docker rm" desc="Remove stopped container" />
            <RefRow cmd="docker rm -f" desc="Force remove (stop + remove)" />
            <Code>{`# One-shot container (auto-remove)
docker run --rm -it alpine sh

# Detached with name and restart policy
docker run -d --name myapp \\
  --restart unless-stopped \\
  -p 8080:80 nginx:alpine`}</Code>
          </SectionCard>

          {/* 3 — Image Management */}
          <SectionCard number="3" title="Image Management">
            <RefRow cmd="docker images" desc="List local images" />
            <RefRow cmd="docker pull" desc="Download image from registry" />
            <RefRow cmd="docker tag" desc="Create an alias for an image" />
            <RefRow cmd="docker rmi" desc="Remove local image" />
            <RefRow cmd="docker image prune" desc="Remove dangling images" />
            <RefRow cmd="docker system prune -a" desc="Remove ALL unused objects" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Tip:</strong> Use <code>docker image ls --format</code> with Go templates for custom output</Bullet>
            </div>
          </SectionCard>

          {/* 4 — Dockerfile Essentials */}
          <SectionCard number="4" title="Dockerfile Essentials">
            <Code>{`FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
HEALTHCHECK CMD wget -q --spider \\
  http://localhost:3000/health
USER node
CMD ["node", "server.js"]`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="FROM" v="Base image (always pin a version tag)" />
              <KV k="COPY vs ADD" v="COPY for files; ADD for URLs and tar extraction" />
              <KV k="RUN" v="Execute commands (combine with && to reduce layers)" />
              <KV k="CMD vs ENTRYPOINT" v="CMD = default command; ENTRYPOINT = fixed executable" />
            </div>
          </SectionCard>

          {/* 5 — BuildKit Fundamentals */}
          <SectionCard number="5" title="BuildKit Fundamentals">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">BUILDKIT</Tag>
              <Tag color="#7a5a8a">NEW SYNTAX</Tag>
            </div>
            <Bullet><strong>Enabled by default</strong> in Docker Desktop and Docker 23.0+</Bullet>
            <Bullet>Set <code>DOCKER_BUILDKIT=1</code> on older Docker versions to enable</Bullet>
            <Bullet>Parallel stage execution — independent stages build concurrently</Bullet>
            <Bullet>Better caching — content-addressed, skips unchanged layers</Bullet>
            <Code>{`# syntax=docker/dockerfile:1
# ^ Required header for advanced features

# Build with progress output
docker build --progress=plain .

# Build with specific target stage
docker build --target builder .`}</Code>
          </SectionCard>

          {/* 6 — BuildKit Advanced Features */}
          <SectionCard number="6" title="BuildKit Cache & Secrets">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">BUILDKIT</Tag>
              <Tag color="#8a6a3a">ADVANCED</Tag>
            </div>
            <Code>{`# Cache mounts (persist between builds)
RUN --mount=type=cache,target=/root/.npm \\
  npm ci

# Secret mounts (never in image layers)
RUN --mount=type=secret,id=npmrc,\\
target=/root/.npmrc \\
  npm ci

# SSH forwarding for private repos
RUN --mount=type=ssh \\
  git clone git@github.com:org/repo`}</Code>
            <Bullet><strong>Cache mount</strong> — survives between builds, great for package managers</Bullet>
            <Bullet><strong>Secret mount</strong> — ephemeral, never baked into image layers</Bullet>
            <Bullet><strong>SSH mount</strong> — forwards host SSH agent to build step</Bullet>
            <Bullet>Pass secrets at build time: <code>docker build --secret id=npmrc,src=.npmrc .</code></Bullet>
          </SectionCard>

          {/* 7 — Multi-Stage Builds */}
          <SectionCard number="7" title="Multi-Stage Builds">
            <Code>{`# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: Production (tiny image)
FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
CMD ["node", "dist/server.js"]`}</Code>
            <Bullet><strong>COPY --from=</strong> copies files between named stages</Bullet>
            <Bullet>Final image only contains the last stage — build tools excluded</Bullet>
            <Bullet>Use <code>--target=builder</code> to stop at a specific stage for debugging</Bullet>
            <Bullet>Can also copy from external images: <code>COPY --from=nginx:alpine /etc/nginx .</code></Bullet>
          </SectionCard>

          {/* 8 — Volumes & Mounts */}
          <SectionCard number="8" title="Volumes & Bind Mounts">
            <Code>{`# Named volume
docker volume create mydata
docker run -v mydata:/app/data myapp

# Bind mount (host path)
docker run -v $(pwd)/src:/app/src myapp

# New --mount syntax (recommended)
docker run --mount \\
  type=bind,source=./src,target=/app/src \\
  myapp

# tmpfs mount (in-memory only)
docker run --mount \\
  type=tmpfs,target=/tmp,tmpfs-size=64m \\
  myapp`}</Code>
            <Bullet><strong>Named volumes</strong> — managed by Docker, persist across restarts</Bullet>
            <Bullet><strong>Bind mounts</strong> — map host directory into container</Bullet>
            <Bullet><strong>tmpfs</strong> — in-memory filesystem, data lost on stop</Bullet>
            <Bullet>Prefer <code>--mount</code> syntax over <code>-v</code> — it is more explicit and less error-prone</Bullet>
          </SectionCard>

          {/* 9 — Networking */}
          <SectionCard number="9" title="Networking">
            <RefRow cmd="docker network ls" desc="List all networks" />
            <RefRow cmd="docker network create" desc="Create user-defined network" />
            <RefRow cmd="docker network connect" desc="Attach container to network" />
            <RefRow cmd="docker network inspect" desc="Show network details and IPs" />
            <Code>{`# Create network and run connected
docker network create mynet
docker run -d --network mynet \\
  --name api myapp
docker run -d --network mynet \\
  --name db postgres:16

# api can reach db via hostname "db"`}</Code>
            <Bullet>Containers on the same user-defined network get automatic DNS resolution by container name</Bullet>
          </SectionCard>

          {/* 10 — Environment & Configuration */}
          <SectionCard number="10" title="Environment & Configuration">
            <Code>{`# Inline env vars
docker run -e NODE_ENV=production myapp

# Env file
docker run --env-file .env myapp

# Build args (available at build time)
docker build --build-arg VERSION=1.2 .

# In Dockerfile
ARG VERSION=latest
ENV APP_VERSION=${'${VERSION}'}`}</Code>
            <Bullet><strong>-e / --env</strong> — set single environment variable at runtime</Bullet>
            <Bullet><strong>--env-file</strong> — load KEY=VALUE pairs from a file</Bullet>
            <Bullet><strong>ARG</strong> — build-time only, not in final image unless copied to ENV</Bullet>
            <Bullet><strong>ENV</strong> — persists in the image and runtime containers</Bullet>
          </SectionCard>

          {/* 11 — Old vs New Syntax */}
          <SectionCard number="11" title="Old vs New Syntax Guide" span={2}>
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">LEGACY</Tag>
              <Tag color="#5a8a3c">MODERN</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Old / Legacy</div>
                <RefRow cmd="docker-compose" desc="Standalone binary (V1)" />
                <RefRow cmd="-v host:container" desc="Bind mount shorthand" />
                <RefRow cmd="--link" desc="Legacy container linking" />
                <RefRow cmd="docker build" desc="Legacy builder (no BuildKit)" />
                <RefRow cmd="MAINTAINER" desc="Deprecated Dockerfile instruction" />
                <RefRow cmd="docker run --privileged" desc="Full host access (avoid)" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: palette.dark, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>New / Recommended</div>
                <RefRow cmd="docker compose" desc="Integrated plugin (V2, no hyphen)" />
                <RefRow cmd="--mount type=bind" desc="Explicit mount syntax" />
                <RefRow cmd="--network" desc="User-defined networks + DNS" />
                <RefRow cmd="docker buildx build" desc="BuildKit-native builder" />
                <RefRow cmd="LABEL" desc="Metadata via key-value labels" />
                <RefRow cmd="--cap-add / --cap-drop" desc="Granular capabilities" />
              </div>
            </div>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Key change:</strong> <code>docker-compose</code> (hyphen) is V1 and deprecated. <code>docker compose</code> (space) is V2 and ships with Docker CLI</Bullet>
              <Bullet><strong>BuildKit note:</strong> <code>docker buildx build</code> replaces <code>docker build</code> for advanced features. Plain <code>docker build</code> uses BuildKit by default since Docker 23.0</Bullet>
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Compose V2 & Production */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* 12 — Compose V2 CLI */}
          <SectionCard number="12" title="Compose V2 CLI">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">COMPOSE V2</Tag>
              <Tag color="#7a5a8a">CLI PLUGIN</Tag>
            </div>
            <RefRow cmd="docker compose up -d" desc="Start all services (detached)" />
            <RefRow cmd="docker compose down" desc="Stop and remove containers + networks" />
            <RefRow cmd="docker compose ps" desc="List running Compose services" />
            <RefRow cmd="docker compose logs -f" desc="Follow logs for all services" />
            <RefRow cmd="docker compose exec" desc="Run command in running service" />
            <RefRow cmd="docker compose build" desc="Build or rebuild all services" />
            <RefRow cmd="docker compose pull" desc="Pull latest images for services" />
            <Bullet><strong>V2 difference:</strong> <code>docker compose</code> is a CLI plugin — no separate binary needed</Bullet>
          </SectionCard>

          {/* 13 — Compose File Structure */}
          <SectionCard number="13" title="Compose File Structure">
            <Code>{`# compose.yaml (recommended name)
name: myproject

services:
  web:
    build: ./web
    ports:
      - "3000:3000"
    depends_on:
      db:
        condition: service_healthy
    environment:
      - DATABASE_URL=postgres://db:5432

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      retries: 5

volumes:
  pgdata:`}</Code>
            <Bullet><strong>compose.yaml</strong> is the recommended filename (replaces docker-compose.yml)</Bullet>
            <Bullet><strong>depends_on</strong> now supports health check conditions in V2</Bullet>
          </SectionCard>

          {/* 14 — Compose Services Config */}
          <SectionCard number="14" title="Compose Services Config">
            <Code>{`services:
  app:
    image: node:20-alpine
    command: ["node", "server.js"]
    working_dir: /app
    restart: unless-stopped
    ports:
      - "3000:3000"     # host:container
      - "127.0.0.1:9229:9229"  # debug
    expose:
      - "3000"           # internal only
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: "0.50"
          memory: 512M`}</Code>
            <KV k="restart" v="no | always | on-failure | unless-stopped" />
            <KV k="ports" v="Publish to host; expose = internal only" />
            <KV k="deploy.replicas" v="Scale service to N containers" />
            <KV k="deploy.resources" v="Set CPU and memory limits" />
          </SectionCard>

          {/* 15 — Compose Networking */}
          <SectionCard number="15" title="Compose Networking">
            <Code>{`services:
  frontend:
    networks:
      - public
      - internal
  api:
    networks:
      - internal
  db:
    networks:
      internal:
        aliases:
          - database

networks:
  public:
    driver: bridge
  internal:
    internal: true  # no external access`}</Code>
            <Bullet>Compose auto-creates a default network for all services in the project</Bullet>
            <Bullet>Services resolve each other by service name as hostname</Bullet>
            <Bullet><strong>internal: true</strong> blocks external connectivity — ideal for databases</Bullet>
            <Bullet>Network <strong>aliases</strong> add alternative DNS names for a service</Bullet>
          </SectionCard>

          {/* 16 — Compose Volumes & Storage */}
          <SectionCard number="16" title="Compose Volumes & Storage">
            <Code>{`services:
  app:
    volumes:
      # Named volume
      - appdata:/app/data
      # Bind mount (short syntax)
      - ./config:/app/config:ro
      # Bind mount (long syntax)
      - type: bind
        source: ./logs
        target: /app/logs
      # tmpfs
      - type: tmpfs
        target: /tmp
        tmpfs:
          size: 64000000

volumes:
  appdata:
    driver: local`}</Code>
            <Bullet><strong>:ro</strong> suffix makes bind mounts read-only in the container</Bullet>
            <Bullet>Long syntax is more explicit — preferred for complex mounts</Bullet>
            <Bullet>Top-level <code>volumes:</code> declares named volumes shared across services</Bullet>
            <Bullet>Use <code>docker compose down -v</code> to also remove named volumes</Bullet>
          </SectionCard>

          {/* 17 — Compose Build Config */}
          <SectionCard number="17" title="Compose Build Config">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">BUILDKIT</Tag>
              <Tag color="#3a6ea5">COMPOSE V2</Tag>
            </div>
            <Code>{`services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.prod
      target: production
      args:
        NODE_ENV: production
      cache_from:
        - type=registry,ref=myapp:cache
      cache_to:
        - type=registry,ref=myapp:cache
      secrets:
        - npm_token
      ssh:
        - default

secrets:
  npm_token:
    file: ./secrets/npm_token.txt`}</Code>
            <Bullet><strong>cache_from / cache_to</strong> — BuildKit remote cache in Compose</Bullet>
            <Bullet><strong>secrets</strong> — mount secrets during build without leaking to layers</Bullet>
            <Bullet><strong>target</strong> — build a specific multi-stage target</Bullet>
            <Bullet><strong>ssh</strong> — forward SSH agent for private dependency access</Bullet>
          </SectionCard>

          {/* 18 — Compose Profiles & Overrides */}
          <SectionCard number="18" title="Profiles & Overrides">
            <Code>{`# compose.yaml
services:
  app:
    image: myapp
  debug:
    image: myapp
    profiles: ["dev"]
    command: ["node", "--inspect", "server.js"]
    ports:
      - "9229:9229"

# compose.override.yaml (auto-loaded)
services:
  app:
    volumes:
      - ./src:/app/src`}</Code>
            <Bullet><strong>Profiles</strong> — only start tagged services when explicitly activated</Bullet>
            <Bullet>Activate: <code>docker compose --profile dev up</code></Bullet>
            <Bullet><strong>Override files</strong> — compose.override.yaml is auto-merged on top of compose.yaml</Bullet>
            <Bullet>Use <code>-f compose.yaml -f compose.prod.yaml</code> for explicit file merging</Bullet>
          </SectionCard>

          {/* 19 — Compose Watch & Dev */}
          <SectionCard number="19" title="Compose Watch (Dev Mode)">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">NEW IN V2</Tag>
              <Tag color="#2a7a7a">DEV</Tag>
            </div>
            <Code>{`services:
  web:
    build: .
    develop:
      watch:
        - action: sync
          path: ./src
          target: /app/src
        - action: rebuild
          path: ./package.json
        - action: sync+restart
          path: ./config
          target: /app/config`}</Code>
            <Bullet><strong>sync</strong> — hot-sync file changes into running container (like bind mount)</Bullet>
            <Bullet><strong>rebuild</strong> — rebuild and recreate the service on change</Bullet>
            <Bullet><strong>sync+restart</strong> — sync files then restart the container</Bullet>
            <Bullet>Start with: <code>docker compose watch</code> or <code>docker compose up --watch</code></Bullet>
          </SectionCard>

          {/* 20 — Registry & Distribution */}
          <SectionCard number="20" title="Registry & Distribution">
            <RefRow cmd="docker login" desc="Authenticate with a registry" />
            <RefRow cmd="docker push img:tag" desc="Push image to registry" />
            <RefRow cmd="docker pull img:tag" desc="Pull image from registry" />
            <RefRow cmd="docker manifest" desc="Inspect multi-arch manifests" />
            <Code>{`# Build and push multi-platform image
docker buildx create --use
docker buildx build \\
  --platform linux/amd64,linux/arm64 \\
  --tag myrepo/myapp:latest \\
  --push .`}</Code>
            <Bullet><strong>buildx</strong> enables multi-platform builds via QEMU emulation or cross-compilation</Bullet>
          </SectionCard>

          {/* 21 — Logging & Debugging */}
          <SectionCard number="21" title="Logging & Debugging">
            <RefRow cmd="docker logs --tail 50" desc="Show last 50 lines of logs" />
            <RefRow cmd="docker logs --since 1h" desc="Logs from the last hour" />
            <RefRow cmd="docker stats" desc="Live CPU/memory/IO per container" />
            <RefRow cmd="docker top" desc="Show running processes in container" />
            <RefRow cmd="docker diff" desc="Show filesystem changes in container" />
            <Code>{`# Shell into running container
docker exec -it myapp /bin/sh

# Copy files out for inspection
docker cp myapp:/app/logs ./debug-logs

# Inspect exit code
docker inspect myapp --format \\
  '{{.State.ExitCode}}'`}</Code>
          </SectionCard>

          {/* 22 — Security Best Practices */}
          <SectionCard number="22" title="Security Best Practices">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">SECURITY</Tag>
            </div>
            <Bullet>Run as <strong>non-root user</strong> — add <code>USER node</code> or <code>USER 1001</code> in Dockerfile</Bullet>
            <Bullet>Use <strong>read-only filesystem</strong>: <code>--read-only --tmpfs /tmp</code></Bullet>
            <Bullet>Drop all capabilities and add only needed ones: <code>--cap-drop ALL --cap-add NET_BIND_SERVICE</code></Bullet>
            <Bullet>Never store secrets in ENV or ARG — use BuildKit <code>--mount=type=secret</code></Bullet>
            <Bullet>Pin image digests for reproducibility: <code>FROM node:20@sha256:abc...</code></Bullet>
            <Code>{`# Minimal security flags
docker run --rm \\
  --read-only \\
  --tmpfs /tmp \\
  --cap-drop ALL \\
  --security-opt no-new-privileges \\
  myapp`}</Code>
          </SectionCard>

          {/* 23 — Resource Constraints */}
          <SectionCard number="23" title="Resource Constraints">
            <Code>{`# CLI resource limits
docker run --rm \\
  --memory=512m \\
  --cpus=1.5 \\
  --pids-limit=100 \\
  myapp

# Compose equivalent
deploy:
  resources:
    limits:
      cpus: "1.5"
      memory: 512M
    reservations:
      cpus: "0.25"
      memory: 128M`}</Code>
            <KV k="--memory" v="Hard memory limit (container killed if exceeded)" />
            <KV k="--cpus" v="Fractional CPU allocation (e.g. 1.5 = one and a half cores)" />
            <KV k="--pids-limit" v="Max number of processes (prevents fork bombs)" />
            <KV k="reservations" v="Guaranteed minimum resources for scheduling" />
          </SectionCard>

          {/* 24 — Quick Decision Guide */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "docker run", when: "Quick one-off tasks", best: "Testing images, debugging, throwaway containers", icon: "▶" },
                { title: "Dockerfile", when: "Building custom images", best: "App packaging, CI/CD pipelines, reproducible builds", icon: "📦" },
                { title: "Compose", when: "Multi-service apps", best: "Dev environments, integration testing, local stacks", icon: "🔗" },
                { title: "BuildKit", when: "Optimized builds", best: "Caching, secrets, multi-platform, parallel stages", icon: "⚡" },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 8 }}>
              {[
                { title: "Named Volumes", when: "Persistent data", best: "Databases, file uploads, cache that survives restarts", icon: "💾" },
                { title: "Bind Mounts", when: "Dev hot-reload", best: "Source code mounting, config files, local development", icon: "📁" },
                { title: "Compose Watch", when: "Smart dev sync", best: "Auto-rebuild on package.json, sync source, restart on config", icon: "👁" },
                { title: "Multi-Stage", when: "Slim production images", best: "Exclude build tools, reduce attack surface, smaller deploys", icon: "🏗" },
              ].map(({ title, when, best, icon }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        Docker Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Covers Docker Engine 24+, BuildKit, Compose V2 · Always check docs.docker.com for latest changes
        </span>
      </div>
    </div>
  );
}
