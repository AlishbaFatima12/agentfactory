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

export default function K8sDebuggingCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Triage & Logs", "Page 2: Deep Diagnosis"];

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
          Kubernetes Debugging{" "}
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
          Pod Crashes · Log Analysis · Resource Failures · Network Issues — 2026 Edition
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

      {/* Page 1 */}
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
          <SectionCard number="1" title="Pod Status Quick Decoder">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">CRASH</Tag>
              <Tag color="#8a6a3a">PENDING</Tag>
              <Tag color="#5a8a3c">RUNNING</Tag>
              <Tag color="#3a6ea5">COMPLETED</Tag>
            </div>
            <KV k="CrashLoopBackOff" v="Container keeps crashing; kubelet backs off restart delay exponentially" />
            <KV k="ImagePullBackOff" v="Cannot pull container image; bad tag, auth failure, or registry down" />
            <KV k="Pending" v="Pod accepted but not scheduled; resource constraints or node affinity mismatch" />
            <KV k="ErrImagePull" v="First attempt to pull image failed; precedes ImagePullBackOff" />
            <KV k="OOMKilled" v="Container exceeded its memory limit; killed by the kernel OOM killer" />
            <KV k="RunContainerError" v="Container failed to start; bad command, missing entrypoint, or volume mount error" />
          </SectionCard>

          {/* Section 2 */}
          <SectionCard number="2" title="First Response Commands">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Run these first when something is broken. Start broad, then narrow down.
            </div>
            <RefRow cmd="kubectl get pods" desc="List all pods with status in current namespace" />
            <RefRow cmd="kubectl get pods -A" desc="List pods in ALL namespaces" />
            <RefRow cmd="kubectl get events --sort-by=.metadata.creationTimestamp" desc="Cluster events sorted by time" />
            <RefRow cmd="kubectl describe pod <name>" desc={"Full pod details, events, and conditions"} />
            <RefRow cmd="kubectl top pods" desc="Live CPU/memory usage per pod (requires metrics-server)" />
          </SectionCard>

          {/* Section 3 */}
          <SectionCard number="3" title="Describe Pod Deep Dive">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              The most important debugging command. Look for these fields:
            </div>
            <Bullet><strong>Events</strong> section at the bottom — shows scheduling, pulling, starting, killing events</Bullet>
            <Bullet><strong>State / Last State</strong> — shows current and previous container state with exit codes</Bullet>
            <Bullet><strong>Conditions</strong> — Ready, ContainersReady, PodScheduled, Initialized</Bullet>
            <Bullet><strong>Restart Count</strong> — high number means repeated crashes</Bullet>
            <Code>{`kubectl describe pod my-app-7d4b8c6f9-x2k5j
# Key fields to check:
#   Status:       Running / Pending / Failed
#   Restart Count: 14
#   Last State:   Terminated (Exit Code: 137)
#   Events:       BackOff, Pulling, Unhealthy`}</Code>
          </SectionCard>

          {/* Section 4 */}
          <SectionCard number="4" title="Reading Pod Logs">
            <RefRow cmd="kubectl logs <pod>" desc="Current container logs" />
            <RefRow cmd="kubectl logs <pod> --previous" desc="Logs from the LAST crashed container" />
            <RefRow cmd="kubectl logs <pod> -f" desc="Stream logs in real-time (follow)" />
            <RefRow cmd="kubectl logs <pod> --tail=100" desc="Last 100 lines only" />
            <RefRow cmd="kubectl logs <pod> --since=5m" desc="Logs from the last 5 minutes" />
            <RefRow cmd="kubectl logs <pod> -c <container>" desc="Specific container in a multi-container pod" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Pro tip:</strong> If pod is in CrashLoopBackOff, always use <code>--previous</code> to see why it crashed</Bullet>
            </div>
          </SectionCard>

          {/* Section 5 */}
          <SectionCard number="5" title="CrashLoopBackOff Diagnosis">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">CRITICAL</Tag>
              <Tag color="#7a5a8a">MOST COMMON</Tag>
            </div>
            <Bullet><strong>Exit Code 1</strong> — Application error; check logs for stack traces and exceptions</Bullet>
            <Bullet><strong>Exit Code 137</strong> — OOMKilled or SIGKILL; container exceeded memory limit</Bullet>
            <Bullet><strong>Exit Code 139</strong> — Segfault; binary crash, bad native dependency</Bullet>
            <Bullet><strong>Exit Code 126</strong> — Permission denied; entrypoint not executable</Bullet>
            <Bullet><strong>Exit Code 127</strong> — Command not found; bad entrypoint or missing binary</Bullet>
            <Code>{`# Full diagnosis flow:
kubectl logs <pod> --previous
kubectl describe pod <pod> | grep -A5 "Last State"
kubectl get pod <pod> -o jsonpath='{.status.containerStatuses[0].lastState}'`}</Code>
          </SectionCard>

          {/* Section 6 */}
          <SectionCard number="6" title="OOMKilled & Resource Issues">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">EXIT 137</Tag>
              <Tag color="#8a6a3a">RESOURCES</Tag>
            </div>
            <Bullet>Container used more memory than its <code>resources.limits.memory</code></Bullet>
            <Bullet>Check actual usage: <code>kubectl top pod</code> shows real-time memory</Bullet>
            <Bullet>JVM apps: set <code>-XX:MaxRAMPercentage=75.0</code> to respect container limits</Bullet>
            <Bullet>Node.js: set <code>--max-old-space-size</code> below the container limit</Bullet>
            <Code>{`# Check resource limits vs actual usage
kubectl get pod <pod> -o jsonpath='{.spec.containers[0].resources}'
kubectl top pod <pod>

# Fix: increase memory limit in deployment
resources:
  requests:
    memory: "256Mi"
  limits:
    memory: "512Mi"`}</Code>
          </SectionCard>

          {/* Section 7 */}
          <SectionCard number="7" title="ImagePullBackOff Fixes">
            <KV k="Wrong tag" v={"Verify image:tag exists in registry — typos are the #1 cause"} />
            <KV k="Private registry" v="Missing or expired imagePullSecrets on the pod or service account" />
            <KV k="Registry down" v="Check registry health; try pulling manually from a node" />
            <KV k="Rate limits" v="Docker Hub throttles anonymous pulls; use authenticated access" />
            <Code>{`# Check what image the pod is trying to pull
kubectl get pod <pod> -o jsonpath='{.spec.containers[0].image}'

# Create imagePullSecret
kubectl create secret docker-registry regcred \\
  --docker-server=<registry> \\
  --docker-username=<user> \\
  --docker-password=<pass>

# Verify secret is referenced
kubectl get pod <pod> -o jsonpath='{.spec.imagePullSecrets}'`}</Code>
          </SectionCard>

          {/* Section 8 */}
          <SectionCard number="8" title="Exec Into Containers">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Get a shell inside a running container to inspect state directly.
            </div>
            <RefRow cmd="kubectl exec -it <pod> -- /bin/sh" desc="Shell into container (sh)" />
            <RefRow cmd="kubectl exec -it <pod> -- /bin/bash" desc="Shell into container (bash)" />
            <RefRow cmd="kubectl exec <pod> -- env" desc="Print all environment variables" />
            <RefRow cmd="kubectl exec <pod> -- cat /etc/resolv.conf" desc="Check DNS configuration" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Distroless images?</strong> Use an ephemeral debug container instead:</Bullet>
              <Code>{`kubectl debug -it <pod> --image=busybox --target=<container>`}</Code>
            </div>
          </SectionCard>

          {/* Section 9 */}
          <SectionCard number="9" title="Events & Cluster Diagnostics" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Pod Events", when: "Why did it fail to schedule?", best: "kubectl describe pod <name> — check Events section at bottom for FailedScheduling, FailedMount, BackOff", icon: "📋" },
                { title: "Namespace Events", when: "What happened recently?", best: "kubectl get events -n <ns> --sort-by=.lastTimestamp — see all events sorted by time", icon: "🔍" },
                { title: "Node Pressure", when: "Are nodes healthy?", best: "kubectl describe node <name> — look for MemoryPressure, DiskPressure, PIDPressure conditions", icon: "💻" },
                { title: "System Pods", when: "Is core infra broken?", best: "kubectl get pods -n kube-system — check coredns, kube-proxy, CNI plugin pods are Running", icon: "⚙️" },
              ].map(({ title, when, best, icon }) => (
                <div key={title} style={{
                  background: palette.highlight,
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: `1px solid ${palette.cardBorder}`,
                }}>
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

      {/* Page 2 */}
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
          {/* Section 10 */}
          <SectionCard number="10" title="Networking Debugging">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">DNS</Tag>
              <Tag color="#2a7a7a">SERVICES</Tag>
              <Tag color="#7a5a8a">CONNECTIVITY</Tag>
            </div>
            <Bullet><strong>DNS not resolving?</strong> Check CoreDNS pods in kube-system are running</Bullet>
            <Bullet><strong>Service unreachable?</strong> Verify endpoints exist: <code>kubectl get endpoints</code></Bullet>
            <Bullet><strong>Pod-to-pod issues?</strong> Check NetworkPolicies blocking traffic</Bullet>
            <Bullet><strong>Port mismatch?</strong> Compare containerPort, Service port, and targetPort</Bullet>
            <Code>{`# DNS test from inside a pod
kubectl exec -it <pod> -- nslookup <service-name>
kubectl exec -it <pod> -- nslookup <svc>.<namespace>.svc.cluster.local

# Check if service has endpoints
kubectl get endpoints <service-name>

# Test connectivity
kubectl exec -it <pod> -- wget -qO- http://<service>:<port>/health`}</Code>
          </SectionCard>

          {/* Section 11 */}
          <SectionCard number="11" title="Init Container & Sidecar Issues">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Pod stuck in Init state? The main container cannot start until all init containers succeed.
            </div>
            <Bullet><strong>Check init status:</strong> <code>kubectl get pod</code> shows {"'Init:0/2'"} if init containers are pending</Bullet>
            <Bullet><strong>Init container logs:</strong> <code>kubectl logs {"<pod>"} -c {"<init-container-name>"}</code></Bullet>
            <Bullet><strong>Common cause:</strong> Init container waiting for a dependency (DB, config) that is not ready</Bullet>
            <Bullet><strong>Sidecar not ready:</strong> Main app may start before sidecar is healthy; add startup dependencies</Bullet>
            <Code>{`# List all containers including init containers
kubectl get pod <pod> -o jsonpath='{.spec.initContainers[*].name}'

# Check init container state
kubectl describe pod <pod> | grep -A10 "Init Containers"`}</Code>
          </SectionCard>

          {/* Section 12 */}
          <SectionCard number="12" title="Liveness & Readiness Probes">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#a53a3a">KILLS POD</Tag>
              <Tag color="#8a6a3a">REMOVES FROM SVC</Tag>
            </div>
            <KV k="livenessProbe" v="Failing = kubelet kills the container and restarts it" />
            <KV k="readinessProbe" v="Failing = pod removed from Service endpoints (no traffic)" />
            <KV k="startupProbe" v="Failing during startup = eventual kill; protects slow-starting apps" />
            <KV k="initialDelaySeconds" v="Set high enough for your app to boot; too low = restart loop" />
            <Code>{`# Common misconfiguration: probe path returns 404
# Check what the probe is hitting:
kubectl get pod <pod> -o jsonpath='{.spec.containers[0].livenessProbe}'

# Watch for Unhealthy events:
kubectl describe pod <pod> | grep -i unhealthy`}</Code>
          </SectionCard>

          {/* Section 13 */}
          <SectionCard number="13" title="Node-Level Debugging">
            <RefRow cmd="kubectl get nodes" desc="List nodes with status (Ready/NotReady)" />
            <RefRow cmd="kubectl describe node <node>" desc="Node conditions, capacity, allocated resources" />
            <RefRow cmd="kubectl top nodes" desc="CPU and memory usage per node" />
            <RefRow cmd="kubectl cordon <node>" desc="Mark node as unschedulable (no new pods)" />
            <RefRow cmd="kubectl drain <node>" desc="Evict all pods before maintenance" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Node NotReady?</strong> Check kubelet status on the node: <code>systemctl status kubelet</code></Bullet>
              <Bullet><strong>Disk pressure?</strong> Clean up unused images: <code>crictl rmi --prune</code></Bullet>
            </div>
          </SectionCard>

          {/* Section 14 */}
          <SectionCard number="14" title="Common Error Messages Decoded" span={2}>
            {[
              { err: "FailedScheduling", meaning: "No node has enough CPU/memory or matches affinity/toleration rules", fix: "Scale up cluster, reduce requests, or fix node selectors" },
              { err: "FailedMount", meaning: "Volume (PVC, ConfigMap, Secret) could not be mounted", fix: "Check PVC is bound, Secret/ConfigMap exists, correct names" },
              { err: "FailedCreate", meaning: "ReplicaSet cannot create pods", fix: "Check resource quotas, PodSecurityPolicy, or admission webhooks" },
              { err: "BackOff", meaning: "Container keeps crashing, kubelet increasing restart delay", fix: "Check logs --previous for root cause, fix app or config" },
              { err: "Unhealthy", meaning: "Liveness or readiness probe is failing", fix: "Verify probe endpoint, increase timeout or initialDelaySeconds" },
              { err: "NetworkNotReady", meaning: "CNI plugin not initialized on node", fix: "Check CNI plugin pods, reinstall network addon" },
            ].map(({ err, meaning, fix }, i) => (
              <div
                key={err}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 5,
                  padding: "5px 8px",
                  background: i % 2 === 0 ? palette.accentPale : palette.highlight,
                  borderRadius: 5,
                }}
              >
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 11, width: 120, flexShrink: 0 }}>{err}</span>
                <span style={{ fontSize: 11, color: palette.dark, width: 200, flexShrink: 0 }}>{meaning}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{fix}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 15 */}
          <SectionCard number="15" title="RBAC & Permission Errors">
            <Bullet><strong>Forbidden errors?</strong> The service account lacks RBAC permissions for the API call</Bullet>
            <Bullet>Check what a service account can do: <code>kubectl auth can-i --list --as=system:serviceaccount:ns:sa</code></Bullet>
            <Bullet>Pods use the <code>default</code> service account unless you specify one in the pod spec</Bullet>
            <Bullet>ClusterRole vs Role — cluster-wide vs namespace-scoped permissions</Bullet>
            <Code>{`# Test if current user can do something
kubectl auth can-i create deployments -n <namespace>

# Check which roles are bound
kubectl get rolebindings,clusterrolebindings \\
  -o jsonpath='{range .items[*]}{.subjects[*].name}{" -> "}{.roleRef.name}{"\\n"}{end}'`}</Code>
          </SectionCard>

          {/* Section 16 */}
          <SectionCard number="16" title="ConfigMap & Secret Issues">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#8a6a3a">CONFIG</Tag>
              <Tag color="#7a5a8a">SECRETS</Tag>
            </div>
            <Bullet><strong>Pod stuck CreateContainerConfigError?</strong> Referenced ConfigMap or Secret does not exist</Bullet>
            <Bullet><strong>Env var empty?</strong> Check key name spelling — keys are case-sensitive</Bullet>
            <Bullet><strong>Mounted file stale?</strong> ConfigMaps mounted as volumes auto-update; env vars do not</Bullet>
            <Bullet><strong>Secret decoding:</strong> Values are base64-encoded; decode to verify content</Bullet>
            <Code>{`# Verify ConfigMap/Secret exists
kubectl get configmap <name> -o yaml
kubectl get secret <name> -o jsonpath='{.data.<key>}' | base64 -d

# Check pod env sources
kubectl get pod <pod> -o jsonpath='{.spec.containers[0].envFrom}'`}</Code>
          </SectionCard>

          {/* Section 17 */}
          <SectionCard number="17" title="PVC & Storage Debugging">
            <KV k="Pending PVC" v="No StorageClass matched or no PV available for static provisioning" />
            <KV k="FailedMount" v="Volume is still attached to another node (ReadWriteOnce constraint)" />
            <KV k="Permission denied" v="Container runs as non-root but volume has root-owned files" />
            <KV k="Stuck terminating" v={"PVC has finalizer; check if pod using it is deleted first"} />
            <Code>{`# Check PVC status
kubectl get pvc
kubectl describe pvc <name>

# Check if PV is released or available
kubectl get pv

# Fix stuck PVC (remove finalizer)
kubectl patch pvc <name> -p '{"metadata":{"finalizers":null}}'`}</Code>
          </SectionCard>

          {/* Section 18 */}
          <SectionCard number="18" title="Debugging Decision Flowchart" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Pod Not Starting?", when: "Status: Pending / ContainerCreating", best: "kubectl describe pod — check Events for FailedScheduling, FailedMount, or resource quota issues. Check node capacity with kubectl describe node.", icon: "🚫" },
                { title: "Pod Crashing?", when: "Status: CrashLoopBackOff / Error", best: "kubectl logs --previous — see the crash output. Check exit code: 137=OOM, 1=app error, 127=bad command. Fix app code or resource limits.", icon: "💥" },
                { title: "Pod Running But Broken?", when: "Status: Running but not working", best: "Check readiness probe, exec into pod to test connectivity, verify env vars and config mounts. Check kubectl describe for Unhealthy events.", icon: "🔧" },
                { title: "Service Not Reachable?", when: "Connection refused / timeout", best: "kubectl get endpoints — empty means no pods match the selector. Check labels, ports, and NetworkPolicies. Test DNS with nslookup inside pod.", icon: "🌐" },
              ].map(({ title, when, best, icon }) => (
                <div key={title} style={{
                  background: palette.highlight,
                  borderRadius: 8,
                  padding: "10px 12px",
                  border: `1px solid ${palette.cardBorder}`,
                }}>
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
        Kubernetes Debugging Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          kubectl v1.29+ · Covers core debugging patterns for production clusters
        </span>
      </div>
    </div>
  );
}
