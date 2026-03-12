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
        width: 145,
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
  const pages = ["Page 1: Core & Compose v2", "Page 2: BuildKit & Advanced"];

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
          Compose v2 · BuildKit · Old vs New Syntax — 2026 Edition
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

      {/* Page 1: Core & Compose v2 */}
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
          {/* Section 1 */}
          <SectionCard number="1" title="Container Lifecycle">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>essential</Tag>
              <Tag color="#3a6ea5">cli</Tag>
            </div>
            <RefRow cmd="docker run" desc="Create and start a new container" />
            <RefRow cmd="docker start" desc="Start a stopped container" />
            <RefRow cmd="docker stop" desc="Graceful stop (SIGTERM, then SIGKILL)" />
            <RefRow cmd="docker kill" desc="Immediate stop (SIGKILL)" />
            <RefRow cmd="docker restart" desc="Stop then start a container" />
            <RefRow cmd="docker pause" desc="Freeze all processes (SIGSTOP)" />
            <RefRow cmd="docker unpause" desc="Resume frozen processes" />
            <RefRow cmd="docker rm" desc="Remove stopped container" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Quick combo:</div>
              <Code>{`docker rm -f $(docker ps -aq)  # remove all containers`}</Code>
            </div>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Image Management">
            <RefRow cmd="docker build" desc="Build image from Dockerfile" />
            <RefRow cmd="docker pull" desc="Download image from registry" />
            <RefRow cmd="docker push" desc="Upload image to registry" />
            <RefRow cmd="docker tag" desc="Create alias for an image" />
            <RefRow cmd="docker images" desc="List local images" />
            <RefRow cmd="docker rmi" desc="Remove an image" />
            <RefRow cmd="docker inspect" desc="Show image/container metadata (JSON)" />
            <RefRow cmd="docker history" desc="Show layer history of an image" />
            <Code>{`docker tag myapp:latest registry.io/myapp:v1.2
docker push registry.io/myapp:v1.2`}</Code>
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Old vs New: Compose CLI">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">breaking change</Tag>
              <Tag color="#5a8a3c">compose v2</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Compose v2 is a Docker CLI plugin. No more standalone binary.
            </div>
            {[
              { old: "docker-compose up", neo: "docker compose up" },
              { old: "docker-compose.yml", neo: "compose.yaml (preferred)" },
              { old: "docker-compose down", neo: "docker compose down" },
              { old: "version: '3.8'", neo: "No version field needed" },
              { old: "docker-compose build", neo: "docker compose build" },
              { old: "docker-compose exec", neo: "docker compose exec" },
            ].map(({ old, neo }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 6,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                  marginBottom: 3,
                  fontSize: 11,
                }}
              >
                <span style={{ flex: 1, fontFamily: "'JetBrains Mono', monospace", textDecoration: "line-through", color: palette.mid }}>{old}</span>
                <span style={{ flex: 1, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, color: palette.accent }}>{neo}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Compose v2 Service Definition">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">compose v2</Tag>
              <Tag color="#7a5a8a">yaml</Tag>
            </div>
            <Code>{`# compose.yaml — no "version:" needed!
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
    environment:
      - NODE_ENV=production
    depends_on:
      db:
        condition: service_healthy
    deploy:
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
  db:
    image: postgres:16
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD", "pg_isready"]
      interval: 10s
volumes:
  pgdata:`}</Code>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="Compose v2 Commands">
            <RefRow cmd="docker compose up" desc="Create and start all services" />
            <RefRow cmd="docker compose up -d" desc="Start in detached (background) mode" />
            <RefRow cmd="docker compose down" desc="Stop and remove containers, networks" />
            <RefRow cmd="docker compose down -v" desc="Also remove named volumes" />
            <RefRow cmd="docker compose ps" desc="List running service containers" />
            <RefRow cmd="docker compose logs -f" desc="Stream logs from all services" />
            <RefRow cmd="docker compose exec" desc="Run command in running service" />
            <RefRow cmd="docker compose run" desc="Run one-off command in new container" />
            <RefRow cmd="docker compose build" desc="Build or rebuild services" />
            <RefRow cmd="docker compose pull" desc="Pull service images" />
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="Docker Run Flags">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Most common flags for <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker run</code>:
            </div>
            <RefRow cmd="-d" desc="Detached mode (background)" />
            <RefRow cmd="-it" desc="Interactive + TTY (shell access)" />
            <RefRow cmd="-p 8080:80" desc="Map host:container ports" />
            <RefRow cmd="-v /h:/c" desc="Bind mount host path to container" />
            <RefRow cmd="--name foo" desc="Assign a name to the container" />
            <RefRow cmd="--rm" desc="Auto-remove when container exits" />
            <RefRow cmd="-e KEY=val" desc="Set environment variable" />
            <RefRow cmd="--network" desc="Connect to a specific network" />
            <RefRow cmd="--restart" desc="always | unless-stopped | on-failure" />
            <Code>{`docker run -d --name api -p 3000:3000 \\
  -v $(pwd)/data:/app/data \\
  --restart unless-stopped myapp:latest`}</Code>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="Networking Essentials">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">networking</Tag>
            </div>
            <Bullet><strong>bridge</strong> — default network, containers can talk via IP</Bullet>
            <Bullet><strong>host</strong> — container shares host network stack</Bullet>
            <Bullet><strong>none</strong> — no networking at all</Bullet>
            <Bullet><strong>overlay</strong> — multi-host (Swarm mode)</Bullet>
            <Bullet>Compose auto-creates a <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>project_default</code> network</Bullet>
            <Bullet>Service names resolve as DNS hostnames in Compose</Bullet>
            <Code>{`# Create custom network
docker network create mynet
docker run --network mynet --name app1 img1
# app2 can reach app1 by hostname "app1"
docker run --network mynet --name app2 img2`}</Code>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Volume Management">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">storage</Tag>
            </div>
            <RefRow cmd="docker volume create" desc="Create a named volume" />
            <RefRow cmd="docker volume ls" desc="List all volumes" />
            <RefRow cmd="docker volume inspect" desc="Show volume details" />
            <RefRow cmd="docker volume rm" desc="Remove a volume" />
            <RefRow cmd="docker volume prune" desc="Remove all unused volumes" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Named vs Bind mount:</div>
              <Code>{`# Named volume (Docker-managed)
-v mydata:/app/data

# Bind mount (host path)
-v $(pwd)/src:/app/src

# tmpfs (memory-only, not persisted)
--tmpfs /app/tmp`}</Code>
            </div>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Compose Profiles & Watch">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">compose v2</Tag>
              <Tag color="#7a5a8a">new</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Profiles let you define optional services. Watch enables hot-reload.
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
  debug:
    profiles: ["dev"]
    image: busybox

# Start with profile:
# docker compose --profile dev up
# Start watch mode:
# docker compose watch`}</Code>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Environment & Secrets">
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>env_file</code> to load from <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>.env</code> files</Bullet>
            <Bullet>Inline with <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>environment:</code> for explicit values</Bullet>
            <Bullet>Compose v2 auto-loads <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>.env</code> from project root</Bullet>
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>secrets</code> for sensitive data (never env vars in prod)</Bullet>
            <Code>{`services:
  app:
    env_file:
      - .env
      - .env.local    # overrides .env
    environment:
      - DEBUG=false   # overrides env_file
    secrets:
      - db_password
secrets:
  db_password:
    file: ./secrets/db_pass.txt`}</Code>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Inspect & Debug">
            <RefRow cmd="docker logs -f" desc="Stream container logs" />
            <RefRow cmd="docker logs --tail 50" desc="Last 50 log lines" />
            <RefRow cmd="docker exec -it bash" desc="Open shell in running container" />
            <RefRow cmd="docker stats" desc="Live CPU/memory/network stats" />
            <RefRow cmd="docker top" desc="Show running processes in container" />
            <RefRow cmd="docker inspect" desc="Full JSON metadata" />
            <RefRow cmd="docker events" desc="Real-time Docker daemon events" />
            <RefRow cmd="docker diff" desc="Show filesystem changes in container" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Code>{`# Get specific field from inspect
docker inspect -f '{{.NetworkSettings.IPAddress}}' myapp`}</Code>
            </div>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="Cleanup & Pruning">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">destructive</Tag>
            </div>
            <RefRow cmd="docker system prune" desc="Remove unused data (careful!)" />
            <RefRow cmd="docker system prune -a" desc="Also remove unused images" />
            <RefRow cmd="docker image prune" desc="Remove dangling images" />
            <RefRow cmd="docker container prune" desc="Remove stopped containers" />
            <RefRow cmd="docker volume prune" desc="Remove unused volumes" />
            <RefRow cmd="docker network prune" desc="Remove unused networks" />
            <RefRow cmd="docker builder prune" desc="Clear BuildKit build cache" />
            <Code>{`# Nuclear option: remove EVERYTHING
docker system prune -a --volumes -f

# See disk usage first
docker system df`}</Code>
          </SectionCard>
        </div>
      )}

      {/* Page 2: BuildKit & Advanced */}
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
          {/* Section 13 */}
          <SectionCard number="13" title="BuildKit: What Changed">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildkit</Tag>
              <Tag color="#5a8a3c">v2</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              BuildKit is the default builder since Docker 23.0. Enable for older versions:
            </div>
            <Code>{`export DOCKER_BUILDKIT=1  # legacy env toggle`}</Code>
            <div style={{ marginTop: 8 }}>
              <Bullet><strong>Parallel builds</strong> — independent stages build concurrently</Bullet>
              <Bullet><strong>Cache mounts</strong> — persist package caches between builds</Bullet>
              <Bullet><strong>Secret mounts</strong> — inject secrets without leaking to image layers</Bullet>
              <Bullet><strong>SSH forwarding</strong> — use host SSH keys during build</Bullet>
              <Bullet><strong>Heredoc syntax</strong> — multi-line RUN with cleaner Dockerfiles</Bullet>
              <Bullet><strong>Named build contexts</strong> — reference multiple sources</Bullet>
              <Bullet><strong>No root needed</strong> — rootless builds supported</Bullet>
            </div>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Dockerfile Heredocs">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildkit</Tag>
              <Tag color="#7a5a8a">syntax</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Requires <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}># syntax=docker/dockerfile:1</code> at top of Dockerfile.
            </div>
            <Code>{`# syntax=docker/dockerfile:1

# Multi-line RUN (single layer!)
RUN <<EOF
  apt-get update
  apt-get install -y curl git
  rm -rf /var/lib/apt/lists/*
EOF

# Write file inline
COPY <<EOF /app/config.json
{
  "port": 3000,
  "debug": false
}
EOF

# Multi-line with specific shell
RUN <<-"SCRIPT"
  #!/usr/bin/env python3
  import json
  print(json.dumps({"ready": True}))
SCRIPT`}</Code>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="Multi-Stage Builds">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildkit</Tag>
              <Tag color="#5a8a3c">optimization</Tag>
            </div>
            <Code>{`# syntax=docker/dockerfile:1

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production (tiny image!)
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["node", "dist/index.js"]

# Build specific stage:
# docker build --target builder -t myapp:dev .`}</Code>
            <Bullet>Build stages run in parallel with BuildKit</Bullet>
            <Bullet>Only the final stage ships — massive size savings</Bullet>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Cache Mounts">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildkit</Tag>
              <Tag color="#8a6a3a">performance</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Persist package manager caches across builds. Dramatically speeds up rebuilds.
            </div>
            <Code>{`# syntax=docker/dockerfile:1

# npm/yarn cache
RUN --mount=type=cache,target=/root/.npm \\
    npm ci

# apt cache
RUN --mount=type=cache,target=/var/cache/apt \\
    --mount=type=cache,target=/var/lib/apt \\
    apt-get update && apt-get install -y curl

# pip cache
RUN --mount=type=cache,target=/root/.cache/pip \\
    pip install -r requirements.txt

# Go module cache
RUN --mount=type=cache,target=/go/pkg/mod \\
    go build -o /app .`}</Code>
            <Bullet>Cache survives image rebuilds but NOT <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker builder prune</code></Bullet>
            <Bullet>Add <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>sharing=locked</code> for concurrent safety</Bullet>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Build Secrets & SSH">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildkit</Tag>
              <Tag color="#a53a3a">security</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Secrets are never baked into image layers. SSH keys stay on host.
            </div>
            <Code>{`# syntax=docker/dockerfile:1

# Secret mount — file available only during RUN
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \\
    npm ci

# Build command:
# docker build --secret id=npmrc,src=.npmrc .

# SSH mount — forward host SSH agent
RUN --mount=type=ssh \\
    git clone git@github.com:org/private.git

# Build command:
# docker build --ssh default .`}</Code>
            <Bullet>Secrets appear as files at <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>/run/secrets/&lt;id&gt;</code> by default</Bullet>
            <Bullet>SSH mount requires <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>ssh-agent</code> running on host</Bullet>
            <Bullet>Neither secrets nor SSH keys appear in <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker history</code></Bullet>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Multi-Platform Builds">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">buildx</Tag>
              <Tag color="#2a7a7a">cross-compile</Tag>
            </div>
            <RefRow cmd="docker buildx create" desc="Create a new builder instance" />
            <RefRow cmd="docker buildx use" desc="Switch to a builder" />
            <RefRow cmd="docker buildx build" desc="Build with extended features" />
            <RefRow cmd="docker buildx ls" desc="List available builders" />
            <Code>{`# Create and use multi-platform builder
docker buildx create --name multiarch --use

# Build for multiple platforms
docker buildx build \\
  --platform linux/amd64,linux/arm64 \\
  --tag myapp:latest \\
  --push .

# Inspect what platforms an image supports
docker buildx imagetools inspect myapp:latest`}</Code>
            <Bullet>Uses QEMU emulation for non-native architectures</Bullet>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="Old vs New: Dockerfile Syntax" span={3}>
            <div style={{ display: "flex", gap: 4, marginBottom: 10, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">old way</Tag>
              <Tag color="#5a8a3c">new way</Tag>
              <Tag color="#3a6ea5">buildkit</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>Legacy Dockerfile</div>
                <Code>{`# No syntax directive
FROM node:20

# Chained commands with && to reduce layers
RUN apt-get update && \\
    apt-get install -y curl && \\
    rm -rf /var/lib/apt/lists/*

# Secrets in env vars (leaked in history!)
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" \\
    > .npmrc && npm ci && rm .npmrc

# No cache reuse between builds
RUN npm ci

# COPY for config files (need actual file)
COPY nginx.conf /etc/nginx/nginx.conf`}</Code>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: palette.dark, fontFamily: "'Georgia', serif", marginBottom: 6 }}>BuildKit Dockerfile</div>
                <Code>{`# syntax=docker/dockerfile:1
FROM node:20

# Heredoc — multiple commands, single layer, readable
RUN <<EOF
  apt-get update
  apt-get install -y curl
  rm -rf /var/lib/apt/lists/*
EOF

# Secret mount — never in image history
RUN --mount=type=secret,id=npmrc,target=.npmrc \\
    npm ci

# Cache mount — persist across builds
RUN --mount=type=cache,target=/root/.npm \\
    npm ci

# Heredoc COPY — inline file content
COPY <<EOF /etc/nginx/nginx.conf
server { listen 80; root /app; }
EOF`}</Code>
              </div>
            </div>
            <div style={{ marginTop: 10, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Key difference:</strong> BuildKit syntax directive <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}># syntax=docker/dockerfile:1</code> unlocks all new features</Bullet>
              <Bullet><strong>Layer optimization:</strong> BuildKit automatically skips unused stages and parallelizes independent stages</Bullet>
            </div>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Health Checks">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#2a7a7a">reliability</Tag>
            </div>
            <Code>{`# In Dockerfile
HEALTHCHECK --interval=30s --timeout=5s \\
  --start-period=10s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

# In compose.yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
  interval: 30s
  timeout: 5s
  retries: 3
  start_period: 10s`}</Code>
            <Bullet>States: <strong>starting</strong>, <strong>healthy</strong>, <strong>unhealthy</strong></Bullet>
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>depends_on: condition: service_healthy</code> in Compose</Bullet>
            <Bullet>Check status with <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker inspect --format=&#123;&#123;.State.Health&#125;&#125;</code></Bullet>
            <Bullet>Prefer lightweight checks (wget/curl to health endpoint)</Bullet>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="Compose v2 Advanced">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">compose v2</Tag>
              <Tag color="#7a5a8a">advanced</Tag>
            </div>
            <Code>{`# YAML anchors for reuse
x-common: &common
  restart: unless-stopped
  logging:
    driver: json-file
    options:
      max-size: "10m"

services:
  web:
    <<: *common
    build: .
    depends_on:
      db:
        condition: service_healthy
        restart: true  # restart if dep restarts

  worker:
    <<: *common
    build: .
    command: ["node", "worker.js"]
    scale: 3  # run 3 replicas`}</Code>
            <Bullet><strong>Extensions</strong> (<code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>x-</code>) for shared config blocks</Bullet>
            <Bullet><strong>include</strong> to compose from multiple files</Bullet>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Security Best Practices">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">security</Tag>
            </div>
            <Bullet><strong>Non-root user:</strong> always add <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>USER node</code> or equivalent</Bullet>
            <Bullet><strong>Pin image digests:</strong> use <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>node:20@sha256:abc...</code> for reproducibility</Bullet>
            <Bullet><strong>Minimal base images:</strong> prefer <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>alpine</code> or <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>distroless</code></Bullet>
            <Bullet><strong>Secret mounts:</strong> never use ARG/ENV for secrets</Bullet>
            <Bullet><strong>Read-only root:</strong> <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>--read-only</code> flag on <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker run</code></Bullet>
            <Bullet><strong>Scan images:</strong> <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>docker scout cves myapp:latest</code></Bullet>
            <Bullet><strong>.dockerignore:</strong> exclude <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>.git</code>, <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>node_modules</code>, <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>.env</code></Bullet>
            <Code>{`# Good practice Dockerfile ending
RUN addgroup -S app && adduser -S app -G app
USER app
EXPOSE 3000
CMD ["node", "server.js"]`}</Code>
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title="Dockerfile Best Practices">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">optimization</Tag>
            </div>
            <Bullet><strong>Order matters:</strong> put rarely-changing instructions first for cache hits</Bullet>
            <Bullet><strong>COPY package.json first</strong> then <code style={{ fontFamily: "'JetBrains Mono', monospace", color: palette.accent, fontSize: 11 }}>npm ci</code>, then COPY source</Bullet>
            <Bullet><strong>Use .dockerignore</strong> — reduces build context size dramatically</Bullet>
            <Bullet><strong>Combine RUN</strong> commands (or use heredocs) to minimize layers</Bullet>
            <Bullet><strong>Multi-stage</strong> — build in one stage, copy artifacts to minimal stage</Bullet>
            <Bullet><strong>Avoid latest tag</strong> — pin versions for reproducibility</Bullet>
            <Code>{`# .dockerignore
node_modules
.git
.env*
*.md
Dockerfile
docker-compose*
.dockerignore`}</Code>
          </SectionCard>

          {/* Section 24 */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Bind Mount", when: "Development", best: "Live code sync — changes reflect instantly. Use for source code in dev.", color: palette.accentPale },
                { title: "Named Volume", when: "Databases / Persistence", best: "Docker-managed, survives container recreation. Use for DB data, uploads.", color: palette.highlight },
                { title: "Cache Mount", when: "Build Performance", best: "BuildKit only. Persist package caches (npm, pip, apt) across builds.", color: palette.accentPale },
                { title: "Secret Mount", when: "Sensitive Build Data", best: "BuildKit only. API keys, tokens during build. Never in image layers.", color: palette.highlight },
                { title: "Multi-Stage", when: "Production Images", best: "Build tools in one stage, copy only artifacts. Tiny final images.", color: palette.accentPale },
                { title: "Compose Watch", when: "Dev Hot Reload", best: "Compose v2 native. Auto-sync files or rebuild on changes.", color: palette.highlight },
                { title: "Profiles", when: "Optional Services", best: "Debug tools, admin panels, test DBs — only start when requested.", color: palette.accentPale },
                { title: "Buildx", when: "Multi-Arch Images", best: "Build for ARM + AMD64 in one command. Required for Apple Silicon deploys.", color: palette.highlight },
              ].map(({ title, when, best, color }) => (
                <div
                  key={title}
                  style={{
                    background: color,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
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
          Covers Docker Engine 24+, Compose v2, BuildKit, and Buildx
        </span>
      </div>
    </div>
  );
}
