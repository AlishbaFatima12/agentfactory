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
  const pages = ["Page 1: CLI & Permissions", "Page 2: SDK & Lifecycle"];

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
          CLI Commands · SDK Methods · IAM Policies · Lifecycle Rules — 2026 Edition
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
          {/* 1. S3 Core Concepts */}
          <SectionCard number="1" title="S3 Core Concepts">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Simple Storage Service — object storage with 99.999999999% (11 nines) durability.
            </div>
            <KV k="Bucket" v="Top-level container, globally unique name, region-scoped" />
            <KV k="Object" v="File + metadata, identified by key (path), up to 5 TB" />
            <KV k="Key" v="Full path including prefixes (folders are virtual)" />
            <KV k="ARN Format" v="arn:aws:s3:::bucket-name/key-prefix/*" />
            <KV k="Consistency" v="Strong read-after-write for all operations" />
            <KV k="Max Object Size" v="5 TB (5 GB per single PUT, multipart above)" />
          </SectionCard>

          {/* 2. CLI — Bucket Operations */}
          <SectionCard number="2" title="CLI — Bucket Operations">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag>aws s3</Tag><Tag color="#3a6ea5">aws s3api</Tag>
            </div>
            <RefRow cmd="s3 mb s3://name" desc="Create (make) a new bucket" />
            <RefRow cmd="s3 rb s3://name" desc="Remove an empty bucket" />
            <RefRow cmd="s3 rb s3://name --force" desc="Remove bucket + all objects" />
            <RefRow cmd="s3 ls" desc="List all buckets" />
            <RefRow cmd="s3 ls s3://name/" desc="List objects in bucket" />
            <RefRow cmd="s3 ls s3://name/ --recursive" desc="List all objects recursively" />
            <RefRow cmd="s3api get-bucket-location" desc="Get bucket region" />
          </SectionCard>

          {/* 3. CLI — Object Operations */}
          <SectionCard number="3" title="CLI — Object Operations">
            <RefRow cmd="s3 cp file s3://b/key" desc="Upload file to S3" />
            <RefRow cmd="s3 cp s3://b/key file" desc="Download file from S3" />
            <RefRow cmd="s3 cp s3://a/k s3://b/k" desc="Copy between buckets" />
            <RefRow cmd="s3 mv file s3://b/key" desc="Move (upload + delete local)" />
            <RefRow cmd="s3 rm s3://b/key" desc="Delete a single object" />
            <RefRow cmd="s3 rm s3://b/ --recursive" desc="Delete all objects in prefix" />
            <Code>{`# Upload with storage class
aws s3 cp file.zip s3://mybucket/ \\
  --storage-class STANDARD_IA

# Upload with server-side encryption
aws s3 cp file.zip s3://mybucket/ \\
  --sse aws:kms --sse-kms-key-id KEY_ID`}</Code>
          </SectionCard>

          {/* 4. CLI — Sync & Batch */}
          <SectionCard number="4" title="CLI — Sync & Batch">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              <code>sync</code> only copies new/modified files. Use filters to control scope.
            </div>
            <Code>{`# Sync local dir to S3
aws s3 sync ./build s3://mybucket/assets

# Sync S3 to local
aws s3 sync s3://mybucket/data ./local-data

# Sync with delete (mirror)
aws s3 sync ./build s3://mybucket/ --delete

# Include/exclude patterns
aws s3 sync . s3://mybucket/ \\
  --exclude "*" --include "*.jpg" \\
  --include "*.png"

# Dry run (preview changes)
aws s3 sync . s3://mybucket/ --dryrun`}</Code>
          </SectionCard>

          {/* 5. CLI — Presigned & Advanced */}
          <SectionCard number="5" title="CLI — Presigned & Advanced">
            <Code>{`# Generate presigned URL (default 1hr)
aws s3 presign s3://mybucket/file.pdf

# Presigned URL with custom expiry
aws s3 presign s3://mybucket/file.pdf \\
  --expires-in 3600

# Enable static website hosting
aws s3 website s3://mybucket/ \\
  --index-document index.html \\
  --error-document error.html

# Set bucket versioning
aws s3api put-bucket-versioning \\
  --bucket mybucket \\
  --versioning-configuration \\
  Status=Enabled`}</Code>
            <Bullet>Presigned URLs work for GET and PUT operations</Bullet>
            <Bullet>Max presigned URL expiry: 7 days (STS) or 12 hours (IAM user)</Bullet>
          </SectionCard>

          {/* 6. Storage Classes */}
          <SectionCard number="6" title="Storage Classes">
            {[
              { cls: "STANDARD", dur: "11 nines", avail: "99.99%", desc: "Frequently accessed data" },
              { cls: "STANDARD_IA", dur: "11 nines", avail: "99.9%", desc: "Infrequent access, min 128KB, 30-day min" },
              { cls: "ONE_ZONE_IA", dur: "11 nines", avail: "99.5%", desc: "Single AZ, 20% cheaper than Standard-IA" },
              { cls: "INTELLIGENT", dur: "11 nines", avail: "99.9%", desc: "Auto-tiering, small monitoring fee" },
              { cls: "GLACIER_IR", dur: "11 nines", avail: "99.9%", desc: "Instant retrieval, quarterly access" },
              { cls: "GLACIER_FLEX", dur: "11 nines", avail: "99.99%", desc: "1-5 min expedited, 3-5 hr standard" },
              { cls: "DEEP_ARCHIVE", dur: "11 nines", avail: "99.99%", desc: "12-48 hr retrieval, cheapest storage" },
            ].map(({ cls, avail, desc }, i) => (
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
                <span style={{ fontWeight: 900, color: palette.accent, fontSize: 10, width: 90 }}>{cls}</span>
                <span style={{ fontWeight: 700, color: palette.dark, fontSize: 11, width: 45 }}>{avail}</span>
                <span style={{ fontSize: 11, color: palette.mid }}>{desc}</span>
              </div>
            ))}
          </SectionCard>

          {/* 7. IAM Policy Structure */}
          <SectionCard number="7" title="IAM Policy Structure">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Every S3 IAM policy follows this JSON anatomy.
            </div>
            <Code>{`{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowS3Read",
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket"
    ],
    "Resource": [
      "arn:aws:s3:::my-bucket",
      "arn:aws:s3:::my-bucket/*"
    ],
    "Condition": {
      "IpAddress": {
        "aws:SourceIp": "10.0.0.0/8"
      }
    }
  }]
}`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Effect" v="Allow or Deny (Deny always wins)" />
              <KV k="Resource" v="Bucket ARN for bucket ops, ARN/* for object ops" />
            </div>
          </SectionCard>

          {/* 8. Common IAM Permissions */}
          <SectionCard number="8" title="Common IAM Permissions">
            <div style={{ display: "flex", gap: 4, marginBottom: 6, flexWrap: "wrap" }}>
              <Tag color="#5a8a3c">READ</Tag><Tag color="#3a6ea5">WRITE</Tag><Tag color="#a53a3a">DELETE</Tag><Tag color="#7a5a8a">ADMIN</Tag>
            </div>
            <RefRow cmd="s3:GetObject" desc="Download/read objects" />
            <RefRow cmd="s3:PutObject" desc="Upload/overwrite objects" />
            <RefRow cmd="s3:DeleteObject" desc="Delete objects" />
            <RefRow cmd="s3:ListBucket" desc="List objects in a bucket (bucket-level)" />
            <RefRow cmd="s3:GetBucketLocation" desc="Get bucket region" />
            <RefRow cmd="s3:PutLifecycleConfig" desc="Set lifecycle rules" />
            <RefRow cmd="s3:GetBucketPolicy" desc="Read bucket policy" />
            <RefRow cmd="s3:PutBucketPolicy" desc="Write bucket policy" />
            <div style={{ marginTop: 6, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Note: ListBucket applies to the bucket ARN, GetObject applies to objects ARN/*</div>
            </div>
          </SectionCard>

          {/* 9. IAM Policy Examples */}
          <SectionCard number="9" title="IAM Policy Examples">
            <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700, marginBottom: 4 }}>Read-Only Access</div>
            <Code>{`{
  "Effect": "Allow",
  "Action": [
    "s3:GetObject",
    "s3:ListBucket"
  ],
  "Resource": [
    "arn:aws:s3:::my-bucket",
    "arn:aws:s3:::my-bucket/*"
  ]
}`}</Code>
            <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700, marginTop: 8, marginBottom: 4 }}>Upload-Only (No Read/Delete)</div>
            <Code>{`{
  "Effect": "Allow",
  "Action": "s3:PutObject",
  "Resource": "arn:aws:s3:::uploads/*",
  "Condition": {
    "StringEquals": {
      "s3:x-amz-server-side-encryption":
        "aws:kms"
    }
  }
}`}</Code>
          </SectionCard>

          {/* 10. Bucket Policies vs IAM */}
          <SectionCard number="10" title="Bucket Policies vs IAM">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Both control access. Use the right one for each scenario.
            </div>
            <Bullet><strong>IAM Policies</strong> — attach to users/roles, manage from IAM console, identity-based</Bullet>
            <Bullet><strong>Bucket Policies</strong> — attach to bucket, resource-based, supports cross-account access</Bullet>
            <Bullet><strong>Cross-account</strong> — bucket policy must grant access AND target account IAM must allow</Bullet>
            <Bullet><strong>Public access</strong> — requires bucket policy + Block Public Access disabled</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <Bullet><strong>Rule:</strong> Explicit Deny always beats Allow. If any policy denies, access is denied.</Bullet>
              <Bullet><strong>Tip:</strong> Use IAM for user permissions, bucket policies for cross-account and public access</Bullet>
            </div>
          </SectionCard>

          {/* 11. Access Control Checklist */}
          <SectionCard number="11" title="Access Control Checklist">
            <Bullet><strong>Block Public Access</strong> — enabled by default on new buckets, has 4 settings</Bullet>
            <Bullet><strong>BlockPublicAcls</strong> — rejects PUT calls with public ACLs</Bullet>
            <Bullet><strong>IgnorePublicAcls</strong> — ignores all public ACLs on the bucket</Bullet>
            <Bullet><strong>BlockPublicPolicy</strong> — rejects bucket policies that grant public access</Bullet>
            <Bullet><strong>RestrictPublicBuckets</strong> — limits public/cross-account access via policy</Bullet>
            <Code>{`# Check Block Public Access
aws s3api get-public-access-block \\
  --bucket mybucket

# Set CORS configuration
aws s3api put-bucket-cors \\
  --bucket mybucket \\
  --cors-configuration file://cors.json`}</Code>
            <Bullet><strong>ACLs</strong> — legacy, AWS recommends disabling in favor of policies</Bullet>
          </SectionCard>

          {/* 12. S3 URL Formats */}
          <SectionCard number="12" title="S3 URL & ARN Formats">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Know your S3 addressing formats for CLI, SDK, and policies.
            </div>
            <KV k="S3 URI" v="s3://bucket-name/key-path" />
            <KV k="Path-style" v="https://s3.amazonaws.com/bucket/key" />
            <KV k="Virtual-hosted" v="https://bucket.s3.amazonaws.com/key" />
            <KV k="Region-specific" v="https://bucket.s3.us-east-1.amazonaws.com/key" />
            <KV k="ARN (bucket)" v="arn:aws:s3:::bucket-name" />
            <KV k="ARN (objects)" v="arn:aws:s3:::bucket-name/*" />
            <KV k="ARN (prefix)" v="arn:aws:s3:::bucket-name/prefix/*" />
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>Path-style URLs deprecated for new buckets. Use virtual-hosted style.</div>
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
          {/* 13. SDK Setup (JavaScript v3) */}
          <SectionCard number="13" title="SDK Setup (JavaScript v3)">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">@aws-sdk/client-s3</Tag><Tag color="#5a8a3c">v3</Tag>
            </div>
            <Code>{`npm install @aws-sdk/client-s3
npm install @aws-sdk/s3-request-presigner`}</Code>
            <Code>{`import { S3Client } from
  "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "us-east-1",
  // credentials auto-resolve from:
  // env vars, ~/.aws/credentials,
  // IAM role, SSO
});`}</Code>
            <div style={{ marginTop: 6 }}>
              <KV k="Credential chain" v="Env > Config file > SSO > IAM Role > ECS" />
              <KV k="Region fallback" v="AWS_REGION env var > config file" />
            </div>
          </SectionCard>

          {/* 14. SDK — Read Operations */}
          <SectionCard number="14" title="SDK — Read Operations">
            <Code>{`import {
  GetObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command
} from "@aws-sdk/client-s3";

// Get object (download)
const { Body } = await s3.send(
  new GetObjectCommand({
    Bucket: "my-bucket",
    Key: "path/file.json",
  })
);
const text = await Body.transformToString();

// Check if object exists (head)
const head = await s3.send(
  new HeadObjectCommand({
    Bucket: "my-bucket",
    Key: "path/file.json",
  })
);
// head.ContentLength, head.ContentType

// List objects (paginated)
const { Contents, IsTruncated } =
  await s3.send(
    new ListObjectsV2Command({
      Bucket: "my-bucket",
      Prefix: "uploads/",
      MaxKeys: 100,
    })
  );`}</Code>
          </SectionCard>

          {/* 15. SDK — Write Operations */}
          <SectionCard number="15" title="SDK — Write Operations">
            <Code>{`import {
  PutObjectCommand,
  CopyObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
} from "@aws-sdk/client-s3";

// Upload object
await s3.send(new PutObjectCommand({
  Bucket: "my-bucket",
  Key: "uploads/photo.jpg",
  Body: fileBuffer,
  ContentType: "image/jpeg",
  ServerSideEncryption: "aws:kms",
}));

// Copy object
await s3.send(new CopyObjectCommand({
  Bucket: "dest-bucket",
  Key: "copy.jpg",
  CopySource: "src-bucket/original.jpg",
}));

// Batch delete (up to 1000 keys)
await s3.send(new DeleteObjectsCommand({
  Bucket: "my-bucket",
  Delete: {
    Objects: [
      { Key: "file1.txt" },
      { Key: "file2.txt" },
    ],
  },
}));`}</Code>
          </SectionCard>

          {/* 16. SDK — Presigned URLs */}
          <SectionCard number="16" title="SDK — Presigned URLs">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Generate temporary URLs for download or upload without sharing credentials.
            </div>
            <Code>{`import { getSignedUrl } from
  "@aws-sdk/s3-request-presigner";
import {
  GetObjectCommand,
  PutObjectCommand
} from "@aws-sdk/client-s3";

// Presigned GET (download URL)
const downloadUrl = await getSignedUrl(
  s3,
  new GetObjectCommand({
    Bucket: "my-bucket",
    Key: "file.pdf",
  }),
  { expiresIn: 3600 } // seconds
);

// Presigned PUT (upload URL)
const uploadUrl = await getSignedUrl(
  s3,
  new PutObjectCommand({
    Bucket: "my-bucket",
    Key: "uploads/user-file.jpg",
    ContentType: "image/jpeg",
  }),
  { expiresIn: 600 }
);`}</Code>
            <Bullet>Client uploads via PUT request to the presigned URL</Bullet>
            <Bullet>ContentType must match between presign and upload</Bullet>
          </SectionCard>

          {/* 17. SDK — Multipart Upload */}
          <SectionCard number="17" title="SDK — Multipart Upload">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Required for files over 5 GB. Recommended above 100 MB. Parallel part uploads.
            </div>
            <Code>{`import { Upload } from
  "@aws-sdk/lib-storage";

// High-level managed upload
const upload = new Upload({
  client: s3,
  params: {
    Bucket: "my-bucket",
    Key: "large-file.zip",
    Body: readableStream,
  },
  partSize: 10 * 1024 * 1024, // 10MB
  queueSize: 4, // parallel parts
});

upload.on("httpUploadProgress", (p) => {
  console.log(\`\${p.loaded}/\${p.total}\`);
});

await upload.done();`}</Code>
            <KV k="Min part size" v="5 MB (except last part)" />
            <KV k="Max parts" v="10,000 per upload" />
            <KV k="Max object" v="5 TB with multipart" />
          </SectionCard>

          {/* 18. Python (boto3) Quick Ref */}
          <SectionCard number="18" title="Python (boto3) Quick Ref">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">boto3</Tag><Tag color="#5a8a3c">Python</Tag>
            </div>
            <Code>{`import boto3

s3 = boto3.client('s3')

# Upload
s3.upload_file('local.txt', 'bucket',
  'key.txt')

# Download
s3.download_file('bucket', 'key.txt',
  'local.txt')

# List objects
resp = s3.list_objects_v2(
  Bucket='bucket', Prefix='dir/')
for obj in resp['Contents']:
    print(obj['Key'], obj['Size'])

# Generate presigned URL
url = s3.generate_presigned_url(
  'get_object',
  Params={'Bucket': 'b', 'Key': 'k'},
  ExpiresIn=3600)

# Copy object
s3.copy_object(
  Bucket='dest', Key='new.txt',
  CopySource='src/old.txt')`}</Code>
          </SectionCard>

          {/* 19. Lifecycle Rules */}
          <SectionCard number="19" title="Lifecycle Rules">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              Automate storage class transitions and object expiration.
            </div>
            <Bullet><strong>Transition actions</strong> — move objects between storage classes after N days</Bullet>
            <Bullet><strong>Expiration actions</strong> — delete objects or versions after N days</Bullet>
            <Bullet><strong>Filter</strong> — apply rules by prefix and/or tags</Bullet>
            <Bullet><strong>NoncurrentVersionExpiration</strong> — delete old versions after N days</Bullet>
            <Bullet><strong>AbortIncompleteMultipartUpload</strong> — clean up stale multipart uploads</Bullet>
            <Code>{`# Apply lifecycle config from JSON
aws s3api put-bucket-lifecycle-configuration \\
  --bucket mybucket \\
  --lifecycle-configuration \\
  file://lifecycle.json

# Get current lifecycle rules
aws s3api get-bucket-lifecycle-configuration \\
  --bucket mybucket`}</Code>
          </SectionCard>

          {/* 20. Lifecycle Policy Examples */}
          <SectionCard number="20" title="Lifecycle Policy Examples">
            <Code>{`{
  "Rules": [{
    "ID": "ArchiveAndExpire",
    "Status": "Enabled",
    "Filter": { "Prefix": "logs/" },
    "Transitions": [
      {
        "Days": 30,
        "StorageClass": "STANDARD_IA"
      },
      {
        "Days": 90,
        "StorageClass": "GLACIER"
      }
    ],
    "Expiration": { "Days": 365 },
    "NoncurrentVersionExpiration": {
      "NoncurrentDays": 30
    },
    "AbortIncompleteMultipartUpload": {
      "DaysAfterInitiation": 7
    }
  }]
}`}</Code>
            <div style={{ marginTop: 6 }}>
              <KV k="Transition min" v="30 days to IA, 90 days to Glacier from creation" />
              <KV k="Waterfall" v="Standard > IA > Glacier > Deep Archive" />
            </div>
          </SectionCard>

          {/* 21. Event Notifications */}
          <SectionCard number="21" title="Event Notifications">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#7a5a8a">Lambda</Tag><Tag color="#3a6ea5">SQS</Tag><Tag color="#a53a3a">SNS</Tag><Tag color="#2a7a7a">EventBridge</Tag>
            </div>
            <Bullet><strong>s3:ObjectCreated:*</strong> — fires on PUT, POST, COPY, multipart complete</Bullet>
            <Bullet><strong>s3:ObjectRemoved:*</strong> — fires on DELETE (and DeleteMarker)</Bullet>
            <Bullet><strong>s3:ObjectRestore:*</strong> — fires when Glacier restore starts/completes</Bullet>
            <Bullet><strong>s3:Replication:*</strong> — fires on replication success/failure</Bullet>
            <Bullet><strong>Filter rules</strong> — narrow by prefix and suffix (e.g., only <code>.jpg</code> files)</Bullet>
            <div style={{ marginTop: 8, padding: "6px 8px", background: palette.highlight, borderRadius: 6 }}>
              <div style={{ fontSize: 11, color: palette.accent, fontWeight: 700 }}>EventBridge: Supports all event types + advanced filtering, routing to 18+ targets</div>
            </div>
          </SectionCard>

          {/* 22. Versioning & Replication */}
          <SectionCard number="22" title="Versioning & Replication">
            <Bullet><strong>Versioning</strong> — once enabled, can only be suspended (not disabled)</Bullet>
            <Bullet><strong>Delete marker</strong> — soft delete, object appears deleted but versions remain</Bullet>
            <Bullet><strong>MFA Delete</strong> — requires MFA to permanently delete versions</Bullet>
            <Bullet><strong>CRR</strong> — Cross-Region Replication, requires versioning on both buckets</Bullet>
            <Bullet><strong>SRR</strong> — Same-Region Replication, for log aggregation or compliance</Bullet>
            <Code>{`# Enable versioning
aws s3api put-bucket-versioning \\
  --bucket mybucket \\
  --versioning-configuration \\
  Status=Enabled

# List object versions
aws s3api list-object-versions \\
  --bucket mybucket \\
  --prefix file.txt

# Delete specific version
aws s3api delete-object \\
  --bucket mybucket --key file.txt \\
  --version-id VERSION_ID`}</Code>
          </SectionCard>

          {/* 23. Performance & Limits */}
          <SectionCard number="23" title="Performance & Limits">
            <KV k="GET requests" v="5,500 per second per prefix" />
            <KV k="PUT/POST/DELETE" v="3,500 per second per prefix" />
            <KV k="Max object size" v="5 TB" />
            <KV k="Single PUT limit" v="5 GB (use multipart above 100 MB)" />
            <KV k="Bucket limit" v="No limit on objects per bucket" />
            <KV k="Buckets per account" v="100 default (can request increase)" />
            <Bullet><strong>Spread prefixes</strong> — distribute keys across prefixes for parallel throughput</Bullet>
            <Bullet><strong>Transfer Acceleration</strong> — uses CloudFront edge for faster uploads over distance</Bullet>
            <Bullet><strong>Byte-range fetches</strong> — download partial objects for parallelism</Bullet>
            <Bullet><strong>S3 Select</strong> — query CSV/JSON/Parquet in-place, reduce data transfer</Bullet>
          </SectionCard>

          {/* 24. Decision Guide */}
          <SectionCard number="24" title="Storage Class Decision Guide" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Standard", when: "Frequent access", best: "Hot data, websites, apps, CDN origin. No retrieval fee. Highest cost/GB.", icon: "S" },
                { title: "Intelligent-Tiering", when: "Unknown access pattern", best: "Auto-moves between tiers. Small monitoring fee. No retrieval penalty.", icon: "IT" },
                { title: "Standard-IA", when: "Infrequent but fast", best: "Backups accessed rarely. 30-day min, 128KB min charge. Retrieval fee.", icon: "IA" },
                { title: "One Zone-IA", when: "Reproducible data", best: "Thumbnails, replicated data. Single AZ risk. 20% cheaper than IA.", icon: "1Z" },
                { title: "Glacier Instant", when: "Quarterly access", best: "Medical images, news archives. Millisecond retrieval. 68% cheaper than Standard.", icon: "GI" },
                { title: "Glacier Flexible", when: "Yearly access, can wait", best: "Compliance archives. 1-5 min expedited or 3-5 hr standard retrieval.", icon: "GF" },
                { title: "Glacier Deep Archive", when: "Rarely if ever", best: "Regulatory archives, tape replacement. 12-48 hour retrieval. Cheapest tier.", icon: "DA" },
                { title: "Express One Zone", when: "Single-digit ms latency", best: "ML training, analytics. Co-located with compute. 10x faster than Standard.", icon: "EZ" },
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
                  <div style={{ fontSize: 18, marginBottom: 4, fontWeight: 900, color: palette.accent, fontFamily: "'Georgia', serif" }}>{icon}</div>
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
          AWS CLI v2 · AWS SDK for JavaScript v3 · boto3 · Covers S3 API as of 2026
        </span>
      </div>
    </div>
  );
}
