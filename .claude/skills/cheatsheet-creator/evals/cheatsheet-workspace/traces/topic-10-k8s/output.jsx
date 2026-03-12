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
        width: 140,
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

export default function K8sDebuggingCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Debugging", "Page 2: Advanced & Networking"];

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
          K8s Pod Debugging{" "}
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
          When Pods Crash · Logs · Events · Networking · Scheduling — 2026 Edition
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

      {/* Page 1: Core Debugging */}
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
          <SectionCard number="1" title="First Response Triage">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pod is broken. Run these commands first, in this order:
            </div>
            <RefRow cmd="kubectl get pods" desc="See pod status, restarts, age at a glance" />
            <RefRow cmd="kubectl get pods -o wide" desc="Add node name, IP, nominated node info" />
            <RefRow cmd="kubectl describe pod" desc="Full spec + events timeline (start here)" />
            <RefRow cmd="kubectl logs <pod>" desc="Current container stdout/stderr" />
            <RefRow cmd="kubectl get events" desc="Cluster-wide events sorted by time" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Pro tip: Add <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5 }}>--sort-by='.lastTimestamp'</code> to events for chronological order
              </div>
            </div>
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="Pod Status Decoder">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              What each status actually means and your next move:
            </div>
            {[
              { status: "Pending", meaning: "Not scheduled yet — check node resources, taints, affinity", color: "#8a6a3a" },
              { status: "ContainerCreating", meaning: "Image pulling or volume mounting — usually transient", color: "#3a6ea5" },
              { status: "Running", meaning: "Container alive — but check readiness probe if not serving", color: "#5a8a3c" },
              { status: "CrashLoopBackOff", meaning: "Container starts then dies repeatedly — check logs & exit code", color: "#a53a3a" },
              { status: "ImagePullBackOff", meaning: "Can't pull image — wrong tag, auth, or registry down", color: "#a53a3a" },
              { status: "OOMKilled", meaning: "Out of memory — raise limits or fix memory leak", color: "#a53a3a" },
              { status: "Evicted", meaning: "Node ran out of disk/memory — check node pressure", color: "#7a5a8a" },
              { status: "Terminating", meaning: "Stuck in shutdown — check finalizers and preStop hooks", color: "#8a6a3a" },
            ].map(({ status, meaning, color }, i) => (
              <div
                key={status}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <Tag color={color}>{status}</Tag>
                <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>{meaning}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Reading Pod Events">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The Events section at the bottom of <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>describe pod</code> tells the real story:
            </div>
            <Code>{`kubectl describe pod <name> -n <namespace>

# Key event fields to scan:
# Type    Reason              Message
# ----    ------              -------
# Normal  Scheduled           Assigned to node-1
# Normal  Pulling             Pulling image "app:v2"
# Normal  Pulled              Successfully pulled
# Normal  Created             Created container
# Normal  Started             Started container
# Warning BackOff             Back-off restarting
# Warning FailedScheduling    No nodes available`}</Code>
            <Bullet><strong>Warning</strong> events are your red flags — read those first</Bullet>
            <Bullet>Events expire after 1 hour by default — check quickly</Bullet>
            <Bullet>Look at <strong>Reason</strong> column for the category, <strong>Message</strong> for details</Bullet>
            <Bullet>Multiple <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>BackOff</code> events = container keeps crashing</Bullet>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Container Logs Deep Dive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Logs are your primary debugging tool. Know all the variants:
            </div>
            <RefRow cmd="kubectl logs <pod>" desc="Current container logs" />
            <RefRow cmd="logs -f <pod>" desc="Stream logs in real-time (follow)" />
            <RefRow cmd="logs --previous" desc="Logs from the LAST crashed container" />
            <RefRow cmd="logs -c <container>" desc="Specific container in multi-container pod" />
            <RefRow cmd="logs --tail=100" desc="Last 100 lines only" />
            <RefRow cmd="logs --since=5m" desc="Only logs from the last 5 minutes" />
            <RefRow cmd="logs --timestamps" desc="Add timestamps to each line" />
            <RefRow cmd="logs -l app=myapp" desc="Logs from all pods matching label" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                Critical: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5 }}>--previous</code> is the #1 most useful flag — it shows why the last container died
              </div>
            </div>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="Exit Codes Explained">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The exit code tells you HOW the container died:
            </div>
            <Code>{`kubectl get pod <name> -o jsonpath='{.status.containerStatuses[0].lastState.terminated.exitCode}'`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Exit 0" v="Clean shutdown — process exited normally, check if it should have stayed running" />
              <KV k="Exit 1" v="Application error — generic failure, check logs for stack trace or error message" />
              <KV k="Exit 2" v="Shell misuse — bad command syntax, missing binary, wrong entrypoint" />
              <KV k="Exit 126" v="Permission denied — binary exists but can't execute (check file permissions)" />
              <KV k="Exit 127" v="Command not found — binary doesn't exist in container image" />
              <KV k="Exit 137" v="SIGKILL (128+9) — OOMKilled or pod was force-terminated by kubelet" />
              <KV k="Exit 139" v="SIGSEGV (128+11) — Segmentation fault, memory corruption in application" />
              <KV k="Exit 143" v="SIGTERM (128+15) — Graceful termination requested, process didn't handle it" />
            </div>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="CrashLoopBackOff Survival">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Critical</Tag>
              <Tag color="#8a6a3a">Common</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Container starts, crashes, restarts with exponential backoff (10s, 20s, 40s... up to 5min):
            </div>
            <Bullet><strong>Step 1:</strong> Check logs: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl logs --previous</code></Bullet>
            <Bullet><strong>Step 2:</strong> Check exit code to categorize the failure</Bullet>
            <Bullet><strong>Step 3:</strong> Check describe pod for events and container state</Bullet>
            <Bullet><strong>Step 4:</strong> Check if configmaps/secrets are mounted correctly</Bullet>
            <Bullet><strong>Common causes:</strong> missing env vars, bad config, wrong command, missing deps</Bullet>
            <Code>{`# Override entrypoint to keep container alive for debugging
kubectl run debug --image=<same-image> \\
  --command -- sleep infinity

# Then exec in and test manually
kubectl exec -it debug -- /bin/sh`}</Code>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="OOMKilled: Memory Issues">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Exit 137</Tag>
              <Tag color="#7a5a8a">Resource</Tag>
            </div>
            <Bullet>Container exceeded its memory <strong>limit</strong> and was killed by the kernel</Bullet>
            <Bullet>Check current memory usage: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl top pod</code></Bullet>
            <Bullet>Check limits: <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl describe pod | grep -A3 Limits</code></Bullet>
            <Bullet>Java apps: add <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>-XX:MaxRAMPercentage=75.0</code> to respect container limits</Bullet>
            <Code>{`# Check memory limits vs actual usage
kubectl top pod <name>
kubectl get pod <name> -o jsonpath=\\
  '{.spec.containers[0].resources}'

# Common fix: raise the memory limit
resources:
  requests:
    memory: "256Mi"
  limits:
    memory: "512Mi"  # Was too low`}</Code>
            <Bullet><strong>Don't just raise limits blindly</strong> — profile the app first to find the actual leak</Bullet>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="ImagePullBackOff Fixes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Registry</Tag>
              <Tag color="#3a6ea5">Auth</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Kubernetes can't pull your container image. Systematic diagnosis:
            </div>
            <Bullet><strong>Wrong image name/tag:</strong> typo in image name, tag doesn't exist, <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>:latest</code> was overwritten</Bullet>
            <Bullet><strong>Private registry auth:</strong> missing or expired <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>imagePullSecrets</code></Bullet>
            <Bullet><strong>Registry unreachable:</strong> network policy blocking egress, DNS failure</Bullet>
            <Bullet><strong>Rate limiting:</strong> Docker Hub limits 100 pulls/6h for anonymous</Bullet>
            <Code>{`# Verify the image exists from your machine
docker pull <image:tag>

# Check imagePullSecrets on the pod
kubectl get pod <name> -o jsonpath=\\
  '{.spec.imagePullSecrets}'

# Create a pull secret
kubectl create secret docker-registry regcred \\
  --docker-server=<registry> \\
  --docker-username=<user> \\
  --docker-password=<pass>`}</Code>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Exec Into Containers">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Get a shell inside a running container for live investigation:
            </div>
            <RefRow cmd="kubectl exec -it <pod> -- /bin/bash" desc="Interactive bash shell" />
            <RefRow cmd="exec -it <pod> -- /bin/sh" desc="If bash isn't available (alpine, distroless)" />
            <RefRow cmd="exec -it <pod> -c <ctr> -- sh" desc="Target specific container in multi-container pod" />
            <RefRow cmd="exec <pod> -- env" desc="Print all env vars (non-interactive)" />
            <RefRow cmd="exec <pod> -- cat /etc/resolv.conf" desc="Check DNS config inside container" />
            <RefRow cmd="exec <pod> -- wget -qO- localhost:8080/healthz" desc="Test health endpoint from inside" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>
                No shell in container? Use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5 }}>kubectl debug</code> with an ephemeral container (see Section 18)
              </div>
            </div>
          </SectionCard>

          {/* Section 10 */}
          <SectionCard number="10" title="Init Container Failures">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Startup</Tag>
              <Tag color="#8a6a3a">Ordering</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Init containers run before app containers. If one fails, the pod stays in <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>Init:Error</code> or <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>Init:CrashLoopBackOff</code>:
            </div>
            <Code>{`# Check which init container failed
kubectl get pod <name> -o jsonpath=\\
  '{.status.initContainerStatuses}'

# Get init container logs
kubectl logs <pod> -c <init-container-name>

# List init containers
kubectl get pod <name> -o jsonpath=\\
  '{.spec.initContainers[*].name}'`}</Code>
            <Bullet><strong>Common causes:</strong> waiting for a service that doesn't exist yet</Bullet>
            <Bullet>Init containers run <strong>sequentially</strong> — first one must complete before second starts</Bullet>
            <Bullet>Check if the init container is waiting on a database or external service</Bullet>
            <Bullet>Verify network policies allow the init container's outbound connections</Bullet>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Resource Inspection">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Mismatch between resource requests/limits is a top crash cause:
            </div>
            <Code>{`# Current resource usage
kubectl top pod <name>
kubectl top node

# See requests and limits
kubectl describe pod <name> | grep -A5 "Requests\\|Limits"

# Check resource quotas in namespace
kubectl describe resourcequota -n <ns>
kubectl describe limitrange -n <ns>`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Requests" v="Minimum guaranteed resources — used for scheduling decisions" />
              <KV k="Limits" v="Maximum allowed — container is killed (OOM) or throttled (CPU) if exceeded" />
              <KV k="QoS Guaranteed" v="requests == limits — highest priority, last to be evicted" />
              <KV k="QoS Burstable" v="requests < limits — medium priority" />
              <KV k="QoS BestEffort" v="No requests or limits — first to be evicted under pressure" />
            </div>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="Quick Debugging Decision Guide" span={3}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  title: "Pod Pending",
                  when: "Pod won't schedule",
                  best: "Check: node resources, taints, affinity rules, PVC binding, resource quotas",
                  icon: "⏳",
                },
                {
                  title: "Container Crash",
                  when: "CrashLoopBackOff / Error",
                  best: "Check: logs --previous, exit code, describe events, config/secrets mounted",
                  icon: "💥",
                },
                {
                  title: "Not Responding",
                  when: "Running but not serving",
                  best: "Check: readiness probe, service selector, port mismatch, network policies",
                  icon: "🔇",
                },
                {
                  title: "Evicted / OOM",
                  when: "Resource exhaustion",
                  best: "Check: memory limits, kubectl top, node pressure, resource quotas",
                  icon: "📈",
                },
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
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {when}
                  </div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Advanced & Networking */}
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
          <SectionCard number="13" title="Node-Level Debugging">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Sometimes it's not the pod — it's the node underneath:
            </div>
            <RefRow cmd="kubectl get nodes" desc="Check node status (Ready, NotReady, SchedulingDisabled)" />
            <RefRow cmd="kubectl describe node" desc="Conditions, capacity, allocatable, taints, events" />
            <RefRow cmd="kubectl top node" desc="CPU and memory usage across all nodes" />
            <RefRow cmd="kubectl get pods -o wide" desc="See which node your pod landed on" />
            <Code>{`# Check node conditions
kubectl get node <name> -o jsonpath=\\
  '{.status.conditions[*].type}'
# MemoryPressure, DiskPressure, PIDPressure,
# NetworkUnavailable, Ready

# Cordon a bad node (prevent new pods)
kubectl cordon <node>
# Drain a node (evict all pods)
kubectl drain <node> --ignore-daemonsets`}</Code>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Networking Diagnostics">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Service</Tag>
              <Tag color="#2a7a7a">DNS</Tag>
              <Tag color="#7a5a8a">Connectivity</Tag>
            </div>
            <Bullet><strong>Service not reachable:</strong> verify selector labels match pod labels exactly</Bullet>
            <Bullet><strong>Check endpoints:</strong> <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl get endpoints &lt;svc&gt;</code> — empty means no pods match</Bullet>
            <Bullet><strong>Port mismatch:</strong> service port vs targetPort vs containerPort must align</Bullet>
            <Bullet><strong>Network policies:</strong> can block ingress/egress — check with <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl get netpol</code></Bullet>
            <Code>{`# Test connectivity from inside a debug pod
kubectl run tmp --rm -it --image=busybox -- sh
  wget -qO- http://<svc>.<ns>.svc.cluster.local
  nslookup <svc>.<ns>.svc.cluster.local

# Check service has endpoints
kubectl get endpoints <svc-name>
kubectl describe svc <svc-name>`}</Code>
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="DNS Troubleshooting">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Most in-cluster networking issues are actually DNS issues:
            </div>
            <Code>{`# Test DNS from inside a pod
kubectl exec -it <pod> -- nslookup kubernetes
kubectl exec -it <pod> -- cat /etc/resolv.conf

# Check CoreDNS is running
kubectl get pods -n kube-system -l k8s-app=kube-dns

# Check CoreDNS logs for errors
kubectl logs -n kube-system -l k8s-app=kube-dns

# Full service DNS name format:
# <svc>.<ns>.svc.cluster.local`}</Code>
            <Bullet><strong>resolv.conf</strong> should point to CoreDNS service IP (usually <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>10.96.0.10</code>)</Bullet>
            <Bullet>If <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>ndots: 5</code> causes slow lookups, use FQDN with trailing dot</Bullet>
            <Bullet>Check <strong>dnsPolicy</strong> on pod spec — Default, ClusterFirst, None</Bullet>
            <Bullet>CoreDNS OOMKilled? Scale up its memory limits in the deployment</Bullet>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="Persistent Volume Issues">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">Storage</Tag>
              <Tag color="#8a6a3a">PV/PVC</Tag>
            </div>
            <Bullet><strong>PVC stuck in Pending:</strong> no PV matches, or StorageClass can't provision</Bullet>
            <Bullet><strong>Multi-attach error:</strong> RWO volume already attached to another node</Bullet>
            <Bullet><strong>Permission denied:</strong> <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>fsGroup</code> or <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>runAsUser</code> mismatch with volume ownership</Bullet>
            <Bullet><strong>Subpath errors:</strong> subPath mount pointing to nonexistent directory in volume</Bullet>
            <Code>{`# Check PVC status
kubectl get pvc -n <ns>
kubectl describe pvc <name>

# Check PV binding
kubectl get pv
kubectl describe pv <pv-name>

# Check StorageClass provisioner
kubectl get storageclass
kubectl describe storageclass <name>`}</Code>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="Scheduling Failures">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pod stuck in <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>Pending</code> means the scheduler can't find a suitable node:
            </div>
            <Bullet><strong>Insufficient resources:</strong> no node has enough CPU/memory — check <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl describe node</code> allocatable vs requested</Bullet>
            <Bullet><strong>Taints & tolerations:</strong> node has a taint the pod doesn't tolerate</Bullet>
            <Bullet><strong>Node affinity:</strong> pod requires a label no node has</Bullet>
            <Bullet><strong>Pod anti-affinity:</strong> can't colocate — all valid nodes already have conflicting pod</Bullet>
            <Bullet><strong>PVC zone mismatch:</strong> PV is in zone-a but only zone-b nodes have capacity</Bullet>
            <Code>{`# See why scheduling failed
kubectl describe pod <name> | grep -A10 Events

# Check node taints
kubectl get nodes -o custom-columns=\\
  NAME:.metadata.name,TAINTS:.spec.taints

# Check node labels
kubectl get nodes --show-labels`}</Code>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Ephemeral Debug Containers">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">K8s 1.25+</Tag>
              <Tag color="#2a7a7a">Advanced</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Debug distroless or minimal containers without modifying the pod:
            </div>
            <Code>{`# Attach debug container to running pod
kubectl debug -it <pod> \\
  --image=busybox --target=<container>

# Copy pod and add debug container
kubectl debug <pod> -it \\
  --image=ubuntu --copy-to=debug-pod

# Debug a node directly
kubectl debug node/<node-name> \\
  -it --image=ubuntu`}</Code>
            <Bullet><strong>--target</strong> shares the process namespace of that container — you can see its processes</Bullet>
            <Bullet><strong>--copy-to</strong> creates a clone of the pod with your debug container added</Bullet>
            <Bullet>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>nicolaka/netshoot</code> image for network debugging (has curl, dig, tcpdump, etc.)</Bullet>
            <Bullet>Node debugging gives you <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>chroot /host</code> access to the node filesystem</Bullet>
          </SectionCard>

          {/* Section 19 */}
          <SectionCard number="19" title="RBAC & Permission Errors">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">Forbidden</Tag>
              <Tag color="#3a6ea5">Auth</Tag>
            </div>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              "Forbidden" or "Unauthorized" errors mean RBAC isn't granting access:
            </div>
            <Code>{`# Test if a service account can do something
kubectl auth can-i get pods \\
  --as=system:serviceaccount:<ns>:<sa>

# Check which roles are bound
kubectl get rolebindings -n <ns>
kubectl get clusterrolebindings | grep <sa>

# Describe the role to see permissions
kubectl describe role <name> -n <ns>
kubectl describe clusterrole <name>`}</Code>
            <Bullet>Pods use the <strong>default</strong> ServiceAccount unless specified — it often has no permissions</Bullet>
            <Bullet>Always check both <strong>Role/RoleBinding</strong> (namespaced) and <strong>ClusterRole/ClusterRoleBinding</strong></Bullet>
            <Bullet>API server audit logs show exactly which permission check failed</Bullet>
            <Bullet>Token expiry: check if the ServiceAccount token has been rotated or expired</Bullet>
          </SectionCard>

          {/* Section 20 */}
          <SectionCard number="20" title="Liveness & Readiness Probes">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Misconfigured probes are a silent killer — they restart or hide healthy pods:
            </div>
            <KV k="Liveness" v="Failing = container is killed and restarted. Too aggressive = restart loops" />
            <KV k="Readiness" v="Failing = pod removed from Service endpoints. Traffic stops flowing" />
            <KV k="Startup" v="Failing = liveness/readiness won't start checking. For slow-starting apps" />
            <Code>{`# Check probe config
kubectl describe pod <name> | grep -A5 "Liveness\\|Readiness\\|Startup"

# Common fix: increase timeouts
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30  # Give app time to boot
  periodSeconds: 10
  failureThreshold: 3      # 3 failures before kill
  timeoutSeconds: 5        # Per-probe timeout`}</Code>
            <Bullet><strong>initialDelaySeconds</strong> too low = pod killed before app finishes starting</Bullet>
            <Bullet><strong>timeoutSeconds</strong> too low = probe fails during GC pauses or load spikes</Bullet>
          </SectionCard>

          {/* Section 21 */}
          <SectionCard number="21" title="ConfigMap & Secret Issues">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">Config</Tag>
              <Tag color="#7a5a8a">Secrets</Tag>
            </div>
            <Bullet><strong>Missing reference:</strong> pod won't start if it references a ConfigMap/Secret that doesn't exist</Bullet>
            <Bullet><strong>Optional flag:</strong> set <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>optional: true</code> if the config isn't required</Bullet>
            <Bullet><strong>Stale data:</strong> env vars from ConfigMaps don't update without pod restart</Bullet>
            <Bullet><strong>Volume mounts DO auto-update</strong> (after kubelet sync period, ~60s)</Bullet>
            <Code>{`# Check if ConfigMap/Secret exists
kubectl get configmap <name> -n <ns>
kubectl get secret <name> -n <ns>

# View ConfigMap data
kubectl describe configmap <name>

# Decode secret value
kubectl get secret <name> -o jsonpath=\\
  '{.data.<key>}' | base64 -d

# Check pod spec for references
kubectl get pod <name> -o yaml | \\
  grep -A3 "configMapRef\\|secretRef"`}</Code>
          </SectionCard>

          {/* Section 22 */}
          <SectionCard number="22" title="Resource Quotas & LimitRanges">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pod rejected at admission? The namespace may have quotas enforced:
            </div>
            <Code>{`# Check namespace quotas
kubectl describe resourcequota -n <ns>

# Check limit ranges (default limits)
kubectl describe limitrange -n <ns>

# Example quota status output:
# Used    Hard
# ----    ----
# cpu     2      4
# memory  4Gi    8Gi
# pods    8      10`}</Code>
            <Bullet><strong>Quota exceeded:</strong> "forbidden: exceeded quota" — free up resources or request quota increase</Bullet>
            <Bullet><strong>LimitRange:</strong> enforces min/max/default per container — pod may get defaults injected</Bullet>
            <Bullet>If quota requires <strong>requests</strong> to be set, pods without resource requests will be rejected</Bullet>
            <Bullet>Check <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>kubectl get events -n &lt;ns&gt;</code> for admission rejection messages</Bullet>
          </SectionCard>

          {/* Section 23 */}
          <SectionCard number="23" title="Useful Debugging Aliases">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Add these to your <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>.bashrc</code> / <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>.zshrc</code> for faster debugging:
            </div>
            <Code>{`# Shell aliases
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgpw='kubectl get pods -o wide'
alias kdp='kubectl describe pod'
alias kl='kubectl logs'
alias klp='kubectl logs --previous'
alias kex='kubectl exec -it'
alias ktp='kubectl top pod'
alias ktn='kubectl top node'
alias kge='kubectl get events --sort-by=.lastTimestamp'

# Quick functions
kns() { kubectl config set-context --current --namespace=$1; }
kdebug() { kubectl run debug-$RANDOM --rm -it --image=nicolaka/netshoot -- /bin/bash; }
krestarts() { kubectl get pods --sort-by='.status.containerStatuses[0].restartCount'; }`}</Code>
            <Bullet>Install <strong>k9s</strong> for a terminal UI that shows pods, logs, and events in real-time</Bullet>
            <Bullet>Install <strong>stern</strong> for multi-pod log tailing with color-coded output</Bullet>
          </SectionCard>

          {/* Section 24 */}
          <SectionCard number="24" title="Debugging Flowchart" span={3}>
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 8 }}>
              Follow this decision tree when a pod is not working:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {[
                {
                  title: "1. Get Status",
                  when: "kubectl get pods",
                  best: "Pending -> Section 17 (Scheduling). CrashLoop -> Step 2. Running but broken -> Step 3. ImagePull -> Section 8.",
                  icon: "🔍",
                },
                {
                  title: "2. Read Logs",
                  when: "kubectl logs --previous",
                  best: "Exit 137 -> OOM (Section 7). Exit 1 -> App error, read stack trace. Exit 127 -> Wrong entrypoint. No logs -> check init containers.",
                  icon: "📋",
                },
                {
                  title: "3. Describe Pod",
                  when: "kubectl describe pod",
                  best: "Check Events section. Probe failures -> Section 20. Mount errors -> Section 16/21. RBAC errors -> Section 19.",
                  icon: "🔬",
                },
                {
                  title: "4. Get Inside",
                  when: "kubectl exec / debug",
                  best: "Test connectivity, check env vars, verify file mounts, run the command manually. Can't exec? Use ephemeral containers (Section 18).",
                  icon: "🐚",
                },
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
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark }}>
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      color: palette.accent,
                      fontWeight: 600,
                      marginTop: 2,
                    }}
                  >
                    {when}
                  </div>
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
        K8s Pod Debugging Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Kubernetes v1.28+ · kubectl reference · community best practices
        </span>
      </div>
    </div>
  );
}
