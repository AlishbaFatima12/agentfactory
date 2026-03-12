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

export default function S3Cheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core & CLI & SDK", "Page 2: Security & Advanced"];

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
          Amazon S3{" "}
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
          CLI Commands · SDK Methods · IAM Permissions · Lifecycle Policies — 2026 Edition
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
          {/* Section 1 — S3 Core Concepts */}
          <SectionCard number="1" title="S3 Core Concepts">
            <KV k="Bucket" v="Globally unique container for objects in a region" />
            <KV k="Object" v="File + metadata, identified by key (full path)" />
            <KV k="Key" v="Full path within bucket, e.g. folder/sub/file.txt" />
            <KV k="Region" v="Buckets are region-scoped; choose for latency and compliance" />
            <KV k="Max Object Size" v="5 TB (use multipart upload for files over 5 GB)" />
            <KV k="Consistency" v="Strong read-after-write for all operations" />
          </SectionCard>

          {/* Section 2 — Bucket CLI Commands */}
          <SectionCard number="2" title="Bucket CLI Commands">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">AWS CLI</Tag>
              <Tag color="#2a7a7a">S3API</Tag>
            </div>
            <RefRow cmd="aws s3 mb" desc={"Make bucket: s3://my-bucket"} />
            <RefRow cmd="aws s3 rb" desc="Remove empty bucket" />
            <RefRow cmd="aws s3 rb --force" desc="Remove bucket + all objects" />
            <RefRow cmd="aws s3 ls" desc="List all buckets" />
            <RefRow cmd="aws s3 ls s3://bucket/" desc="List objects in bucket/prefix" />
          </SectionCard>

          {/* Section 3 — Object CLI Commands */}
          <SectionCard number="3" title="Object CLI Commands">
            <RefRow cmd="aws s3 cp" desc="Copy file to/from S3" />
            <RefRow cmd="aws s3 mv" desc="Move file to/from S3" />
            <RefRow cmd="aws s3 rm" desc="Delete single object" />
            <RefRow cmd="aws s3 rm --recursive" desc="Delete all objects under prefix" />
            <RefRow cmd="aws s3 presign" desc="Generate presigned URL (default 1hr)" />
            <Code>{`# Upload with storage class
aws s3 cp file.zip s3://bucket/file.zip \\
  --storage-class STANDARD_IA`}</Code>
          </SectionCard>

          {/* Section 4 — Sync & Bulk Operations */}
          <SectionCard number="4" title="Sync & Bulk Operations">
            <Code>{`# Sync local dir to S3
aws s3 sync ./local s3://bucket/prefix

# Sync with delete (mirror)
aws s3 sync ./local s3://bucket/prefix --delete

# Sync with filters
aws s3 sync . s3://bucket \\
  --exclude "*.tmp" \\
  --include "*.log"

# Dry run (preview changes)
aws s3 sync . s3://bucket --dryrun`}</Code>
            <Bullet><strong>sync</strong> only copies changed/new files (based on size and timestamp)</Bullet>
          </SectionCard>

          {/* Section 5 — S3 URI Patterns & Addressing */}
          <SectionCard number="5" title="S3 URI & Addressing">
            <KV k="S3 URI" v={"s3://bucket-name/key/path"} />
            <KV k="Path-style" v={"https://s3.region.amazonaws.com/bucket/key"} />
            <KV k="Virtual-hosted" v={"https://bucket.s3.region.amazonaws.com/key"} />
            <KV k="ARN" v={"arn:aws:s3:::bucket-name/key-prefix/*"} />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet>Virtual-hosted style is recommended and the default</Bullet>
              <Bullet>Path-style deprecated for new buckets after Sept 2023</Bullet>
            </div>
          </SectionCard>

          {/* Section 6 — Storage Classes */}
          <SectionCard number="6" title="Storage Classes">
            {[
              { cls: "Standard", use: "Frequent access, low latency", dur: "11 9s" },
              { cls: "Standard-IA", use: "Infrequent, min 30-day charge", dur: "11 9s" },
              { cls: "One Zone-IA", use: "Infrequent, single AZ, cheaper", dur: "11 9s" },
              { cls: "Intelligent", use: "Auto-tiering, variable access", dur: "11 9s" },
              { cls: "Glacier IR", use: "Archive, millisecond retrieval", dur: "11 9s" },
              { cls: "Glacier Flex", use: "Archive, minutes to 12 hours", dur: "11 9s" },
              { cls: "Deep Archive", use: "Cheapest, 12-48 hour retrieval", dur: "11 9s" },
            ].map(({ cls, use, dur }, i) => (
              <div
                key={cls}
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
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11, width: 85 }}>{cls}</span>
                <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>{use}</span>
              </div>
            ))}
          </SectionCard>

          {/* Section 7 — SDK: Put, Get & Head */}
          <SectionCard number="7" title="SDK: Put, Get & Head">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">JS SDK v3</Tag>
              <Tag color="#7a5a8a">BOTO3</Tag>
            </div>
            <Code>{`// JS v3 — PutObject
import { S3Client, PutObjectCommand }
  from "@aws-sdk/client-s3";
const s3 = new S3Client({ region: "us-east-1" });
await s3.send(new PutObjectCommand({
  Bucket: "my-bucket",
  Key: "data/file.json",
  Body: JSON.stringify(data),
  ContentType: "application/json",
}));`}</Code>
            <Code>{`# Boto3 — get_object
resp = s3.get_object(
    Bucket='my-bucket', Key='data/file.json')
body = resp['Body'].read().decode('utf-8')`}</Code>
          </SectionCard>

          {/* Section 8 — SDK: List, Delete & Copy */}
          <SectionCard number="8" title="SDK: List, Delete & Copy">
            <Code>{`# Boto3 — list_objects_v2 (paginated)
paginator = s3.get_paginator('list_objects_v2')
for page in paginator.paginate(
    Bucket='b', Prefix='logs/'):
    for obj in page.get('Contents', []):
        print(obj['Key'])`}</Code>
            <Code>{`# Boto3 — delete_objects (batch)
s3.delete_objects(Bucket='b', Delete={
    'Objects': [{'Key': k} for k in keys]
})`}</Code>
            <Bullet><strong>list_objects_v2</strong> returns max 1000 per call; always paginate</Bullet>
            <Bullet><strong>copy_object</strong> works for objects up to 5 GB; use multipart copy above that</Bullet>
          </SectionCard>

          {/* Section 9 — SDK: Multipart & Presigned */}
          <SectionCard number="9" title="SDK: Multipart & Presigned">
            <Code>{`# Boto3 — presigned URL (download)
url = s3.generate_presigned_url(
    'get_object',
    Params={'Bucket': 'b', 'Key': 'k'},
    ExpiresIn=3600)  # seconds`}</Code>
            <Code>{`# Boto3 — presigned POST (upload)
post = s3.generate_presigned_post(
    'my-bucket', 'uploads/file.pdf',
    ExpiresIn=600)`}</Code>
            <Bullet><strong>Multipart</strong> required for objects over 5 GB, recommended over 100 MB</Bullet>
            <Bullet>Presigned URLs max expiry: 7 days (IAM user) or session duration (role)</Bullet>
          </SectionCard>

          {/* Section 10 — IAM Policy Structure */}
          <SectionCard number="10" title="IAM Policy Structure">
            <Code>{`{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:PutObject"
    ],
    "Resource":
      "arn:aws:s3:::bucket-name/*",
    "Condition": {
      "StringEquals": {
        "s3:prefix": "home/"
      }
    }
  }]
}`}</Code>
            <Bullet><strong>Bucket ARN</strong> {"arn:aws:s3:::bucket"} for bucket-level actions</Bullet>
            <Bullet><strong>Object ARN</strong> {"arn:aws:s3:::bucket/*"} for object-level actions</Bullet>
          </SectionCard>

          {/* Section 11 — Common IAM Actions */}
          <SectionCard number="11" title="Common IAM Actions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">BUCKET</Tag>
              <Tag color="#3a6ea5">OBJECT</Tag>
            </div>
            <RefRow cmd="s3:ListBucket" desc="List objects in a bucket" />
            <RefRow cmd="s3:GetObject" desc="Read/download an object" />
            <RefRow cmd="s3:PutObject" desc="Upload/write an object" />
            <RefRow cmd="s3:DeleteObject" desc="Delete a single object" />
            <RefRow cmd="s3:GetBucketLocation" desc="Get bucket region" />
            <RefRow cmd="s3:ListAllMyBuckets" desc="List all buckets in account" />
            <RefRow cmd="s3:PutBucketPolicy" desc="Set bucket policy" />
            <RefRow cmd="s3:GetBucketAcl" desc="Read bucket ACL" />
          </SectionCard>

          {/* Section 12 — AWS Managed S3 Policies */}
          <SectionCard number="12" title="AWS Managed Policies">
            <KV k="AmazonS3FullAccess" v="All S3 actions on all resources" />
            <KV k="AmazonS3ReadOnlyAccess" v="Get and List on all buckets/objects" />
            <KV k="AmazonS3ObjectLambdaExecutionRolePolicy" v="For Object Lambda access points" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Least privilege</strong> — prefer custom policies scoped to specific buckets</Bullet>
              <Bullet>Use <strong>Condition</strong> keys to restrict by IP, VPC, MFA, or encryption</Bullet>
              <Bullet>Combine IAM policies + bucket policies for defense in depth</Bullet>
              <Bullet><strong>s3:PutObjectAcl</strong> — often missed, needed to set object ACLs on upload</Bullet>
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
          {/* Section 13 — Bucket Policies */}
          <SectionCard number="13" title="Bucket Policies">
            <Code>{`{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicRead",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource":
      "arn:aws:s3:::my-bucket/*"
  }]
}`}</Code>
            <Bullet>Bucket policies are <strong>resource-based</strong> — attached to the bucket, not the identity</Bullet>
            <Bullet>Support cross-account access without assuming roles</Bullet>
            <Bullet>Max size 20 KB; use prefixes and conditions to keep concise</Bullet>
            <Bullet>Explicit <strong>Deny</strong> always overrides any Allow</Bullet>
          </SectionCard>

          {/* Section 14 — ACLs & Object Ownership */}
          <SectionCard number="14" title={"ACLs & Object Ownership"}>
            <KV k="BucketOwnerEnforced" v="ACLs disabled; bucket owner owns all objects (recommended)" />
            <KV k="BucketOwnerPreferred" v="Bucket owner gets ownership if uploader sets bucket-owner-full-control" />
            <KV k="ObjectWriter" v="Legacy: uploading account owns the object" />
            <KV k="Canned ACLs" v="private, public-read, public-read-write, authenticated-read, etc." />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet>AWS recommends <strong>BucketOwnerEnforced</strong> with ACLs disabled</Bullet>
              <Bullet>New buckets default to ACLs disabled since April 2023</Bullet>
            </div>
          </SectionCard>

          {/* Section 15 — Lifecycle Rules */}
          <SectionCard number="15" title="Lifecycle Rules">
            <Code>{`aws s3api put-bucket-lifecycle-configuration \\
  --bucket my-bucket \\
  --lifecycle-configuration '{
  "Rules": [{
    "ID": "ArchiveOldLogs",
    "Status": "Enabled",
    "Filter": { "Prefix": "logs/" },
    "Transitions": [{
      "Days": 30,
      "StorageClass": "STANDARD_IA"
    },{
      "Days": 90,
      "StorageClass": "GLACIER"
    }],
    "Expiration": { "Days": 365 }
  }]
}'`}</Code>
            <Bullet>Rules can target by <strong>prefix</strong>, <strong>tag</strong>, or <strong>object size</strong></Bullet>
            <Bullet>Up to 1000 lifecycle rules per bucket</Bullet>
          </SectionCard>

          {/* Section 16 — Lifecycle Transition Paths */}
          <SectionCard number="16" title="Lifecycle Transitions">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Allowed transition paths (in order of decreasing cost):
            </div>
            {[
              { from: "Standard", to: "Any class", min: "0+ days" },
              { from: "Standard-IA", to: "One Zone-IA / Glacier tiers", min: "30+ days" },
              { from: "One Zone-IA", to: "Glacier Flexible / Deep Archive", min: "30+ days" },
              { from: "Glacier IR", to: "Glacier Flexible / Deep Archive", min: "90+ days" },
              { from: "Glacier Flexible", to: "Deep Archive only", min: "90+ days" },
            ].map(({ from, to, min }, i) => (
              <div
                key={from}
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
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11, width: 90 }}>{from}</span>
                <span style={{ fontSize: 11, color: palette.mid, flex: 1 }}>{to}</span>
                <span style={{ fontSize: 10, color: palette.accent, fontWeight: 600, width: 60 }}>{min}</span>
              </div>
            ))}
            <Bullet>Objects must stay in a class for minimum days before transitioning</Bullet>
            <Bullet><strong>NoncurrentVersionTransition</strong> works separately on version history</Bullet>
          </SectionCard>

          {/* Section 17 — Versioning */}
          <SectionCard number="17" title="Versioning">
            <Code>{`# Enable versioning
aws s3api put-bucket-versioning \\
  --bucket my-bucket \\
  --versioning-configuration \\
  Status=Enabled

# List object versions
aws s3api list-object-versions \\
  --bucket my-bucket --prefix data/`}</Code>
            <Bullet>Once enabled, can only be <strong>suspended</strong>, never fully disabled</Bullet>
            <Bullet>Delete creates a <strong>delete marker</strong>; previous versions remain</Bullet>
            <Bullet>Use lifecycle rules with <strong>NoncurrentVersionExpiration</strong> to auto-clean old versions</Bullet>
            <Bullet>MFA Delete adds extra protection for permanent version deletes</Bullet>
          </SectionCard>

          {/* Section 18 — Replication */}
          <SectionCard number="18" title="Replication">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">CRR</Tag>
              <Tag color="#5a8a3c">SRR</Tag>
            </div>
            <KV k="CRR" v="Cross-Region Replication — disaster recovery, lower latency" />
            <KV k="SRR" v="Same-Region Replication — log aggregation, compliance copies" />
            <Bullet>Requires <strong>versioning enabled</strong> on both source and destination</Bullet>
            <Bullet>Replication is asynchronous; RTC (Replication Time Control) guarantees 15 min SLA</Bullet>
            <Bullet>Only <strong>new objects</strong> are replicated after rule creation; use S3 Batch Replication for existing</Bullet>
            <Bullet>Can replicate across accounts with bucket policies granting access</Bullet>
          </SectionCard>

          {/* Section 19 — Event Notifications */}
          <SectionCard number="19" title="Event Notifications">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">SNS</Tag>
              <Tag color="#8a6a3a">SQS</Tag>
              <Tag color="#2a7a7a">LAMBDA</Tag>
              <Tag color="#3a6ea5">EVENTBRIDGE</Tag>
            </div>
            <KV k="s3:ObjectCreated:*" v="Triggered on Put, Post, Copy, Multipart upload" />
            <KV k="s3:ObjectRemoved:*" v="Triggered on Delete or DeleteMarkerCreated" />
            <KV k="s3:ObjectRestore:*" v="Glacier restore initiated, completed" />
            <KV k="s3:LifecycleTransition" v="Object transitioned to another storage class" />
            <Bullet><strong>EventBridge</strong> integration enables filtering, routing to 18+ AWS targets</Bullet>
          </SectionCard>

          {/* Section 20 — Encryption Options */}
          <SectionCard number="20" title="Encryption Options">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">SERVER-SIDE</Tag>
              <Tag color="#3a6ea5">CLIENT-SIDE</Tag>
            </div>
            <KV k="SSE-S3" v="AWS-managed keys, default for all new buckets, AES-256" />
            <KV k="SSE-KMS" v="AWS KMS keys, audit trail via CloudTrail, per-key permissions" />
            <KV k="DSSE-KMS" v="Dual-layer encryption with KMS (compliance use cases)" />
            <KV k="SSE-C" v="Customer-provided key in each request; AWS does not store it" />
            <KV k="Client-side" v="Encrypt before upload; full control but you manage keys" />
            <Bullet>SSE-S3 is automatic and free; SSE-KMS adds cost per API call</Bullet>
          </SectionCard>

          {/* Section 21 — Performance Optimization */}
          <SectionCard number="21" title="Performance Tips">
            <Bullet><strong>Multipart uploads</strong> for files over 100 MB; parallel parts boost throughput</Bullet>
            <Bullet><strong>Transfer Acceleration</strong> uses CloudFront edge locations for faster uploads</Bullet>
            <Bullet><strong>Byte-range fetches</strong> download specific byte ranges in parallel for large files</Bullet>
            <Bullet>S3 scales to 3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD per prefix per second</Bullet>
            <Bullet>Spread keys across prefixes to maximize throughput; no longer need random prefixes</Bullet>
            <Bullet>Use <strong>S3 Select</strong> or <strong>Athena</strong> to query data in-place without full download</Bullet>
          </SectionCard>

          {/* Section 22 — Access Points & Presigned Patterns */}
          <SectionCard number="22" title={"Access Points"}>
            <Bullet><strong>S3 Access Points</strong> provide named network endpoints with per-point policies</Bullet>
            <Bullet>Simplify managing access for shared datasets across teams</Bullet>
            <Bullet>Each access point has its own DNS name and IAM policy</Bullet>
            <Bullet>Support VPC-restricted access points for network isolation</Bullet>
            <Code>{`# Create access point
aws s3control create-access-point \\
  --name analytics-ap \\
  --account-id 123456789012 \\
  --bucket my-bucket`}</Code>
          </SectionCard>

          {/* Section 23 — Monitoring & Logging */}
          <SectionCard number="23" title={"Monitoring & Logging"}>
            <KV k="Server Access Logs" v="Detailed request logs to another S3 bucket" />
            <KV k="CloudTrail" v="API-level logging for bucket and object operations" />
            <KV k="S3 Storage Lens" v="Org-wide storage analytics dashboard" />
            <KV k="CloudWatch Metrics" v="BucketSizeBytes, NumberOfObjects, AllRequests" />
            <Bullet>Enable access logging and CloudTrail for audit compliance</Bullet>
            <Bullet>Storage Lens provides 28+ usage and activity metrics across all buckets</Bullet>
          </SectionCard>

          {/* Section 24 — Quick Decision Guide */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Static Hosting", when: "Serve website assets", best: "S3 + CloudFront with OAC, enable static web hosting, set index/error docs", icon: "🌐" },
                { title: "Data Lake", when: "Analytics / ML pipelines", best: "Parquet/ORC in S3, query with Athena or Glue, partition by date prefix", icon: "📊" },
                { title: "Backup & Archive", when: "Long-term retention", best: "Lifecycle to Glacier Deep Archive, enable versioning, cross-region replication", icon: "🗄" },
                { title: "App File Storage", when: "User uploads / media", best: "Presigned URLs for direct upload, Lambda trigger for processing, CloudFront for delivery", icon: "📁" },
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
        Amazon S3 Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Based on AWS documentation and current best practices
        </span>
      </div>
    </div>
  );
}
