# Writer Brief: Vendor + Invoice (L04 + L05 + L06)

## Scope

You write 3 lesson files + their 6 sidecars. These lessons teach the vendor assessment workflow and the invoice reconciliation workflow — the two highest-volume operational skills in the plugin.

## Files to Create

```
apps/learn-app/docs/03-Business-Domain-Agent-Workflows/05-product-and-value-chain/35-supply-chain-procurement/
├── 04-six-dimension-vendor-assessment.md
├── 04-six-dimension-vendor-assessment.flashcards.yaml
├── 04-six-dimension-vendor-assessment.summary.md
├── 05-three-way-match-rule-design.md
├── 05-three-way-match-rule-design.flashcards.yaml
├── 05-three-way-match-rule-design.summary.md
├── 06-invoice-reconciliation-at-scale.md
├── 06-invoice-reconciliation-at-scale.flashcards.yaml
└── 06-invoice-reconciliation-at-scale.summary.md
```

## What to Read

1. **Shared brief**: `specs/drafts/ch35-supply-chain/shared-brief.md`
2. **Architecture spec**: `specs/drafts/ch35-supply-chain/architecture-spec.md` — Sections 5-7
3. **Reference lesson (L03)**: The gold standard — match its quality
4. **Spec product files**: `products/vendor-assessment.md`, `products/invoice-reconciliation.md`
5. **Local.md template**: `supply-chain.local.md.template` — tolerance rules, escalation thresholds

### Spec Line Ranges

| Lesson | Read These Spec Lines                                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| L04    | Lines 87-210 (Six-Dimension Assessment Framework) + vendor-assessment.md product file                         |
| L05    | Lines 324-357 (Three-Way Match Rules) + Lines 1149-1192 (Exercise 6) + invoice-reconciliation.md product file |
| L06    | Lines 213-320 (Four-Agent Reconciliation Architecture) + Lines 852-921 (Exercise 2)                           |

## Content-Specific Notes

### L04: Six-Dimension Vendor Assessment (45 min, Applied)

- **Command**: `/vendor-assess`
- Teaches the 6 assessment dimensions: Commercial, Operational, Financial, Compliance, Strategic, Geopolitical/Sustainability
- Uses the Karachi Industrial Fasteners example from the spec (lines 89-156) — the bottleneck vendor assessment
- Show the full assessment output format from the vendor-assessment.md product file
- **Exercise (Ex 1 Part B)**: Steps 3-5 from spec Exercise 1 (lines 808-849):
  - Build risk configuration in `supply-chain.local.md`
  - Run assessments on top 5 strategic vendors
  - Identify most dangerous bottleneck vendor
- **Depends on L03**: Students have their classification register; this lesson adds depth
- **Try With AI**: (1) Assess a vendor from the student's own portfolio, (2) Compare two vendors in the same category, (3) Design a custom assessment dimension for the student's industry
- Skills metadata: Technical/Applied, B1, Apply/Analyze level

### L05: Three-Way Match Rule Design (40 min, Applied)

- **Command**: `/invoice-reconcile` (RENAMED from `/reconcile`)
- Focus: tolerance configuration, not the full reconciliation workflow (that's L06)
- Teach the concept: what is a three-way match (PO, invoice, goods receipt)
- Tolerance rules by category: direct materials, indirect/MRO, services, freight, utilities
- Auto-approve, escalation, and rejection rules
- **Exercise (Ex 6)**: Lines 1149-1192 — design and test tolerance rules
  - **Depends on Ex 2** (from L06): "Apply the new tolerance rules to the invoice sample from Exercise 2"
  - Note: Pedagogically, L05 comes before L06, but Ex 6 references Ex 2's invoice sample. Handle this by having L05's exercise use a provided sample invoice set, then Ex 6 (at the end of the exercise) asks students to re-test against their L06 Exercise 2 results once they've completed that lesson.
- Show the tolerance configuration section from `supply-chain.local.md.template`
- **Try With AI**: (1) Design tolerances for the student's spend categories, (2) Calculate the efficiency impact of tighter vs looser tolerances, (3) Identify which tolerance changes would most reduce exception volume
- Skills metadata: Technical, B1, Apply level

### L06: Invoice Reconciliation at Scale (45 min, Applied)

- **Command**: `/invoice-reconcile` (RENAMED from `/reconcile`)
- The full four-stage reconciliation workflow: Document Intelligence -> Three-Way Match -> Exception Routing -> Audit and Pattern Monitoring
- Use the Meridian Office Supplies example from the spec (lines 254-320) — the office supplies invoice with price variance, quantity mismatch, and unauthorised delivery charge
- Show the full reconciliation output format
- **Fact flag**: GEP "60-80% exception reduction" — use hedging language
- **Exercise (Ex 2)**: Lines 852-921 — the 10-invoice reconciliation sprint
  - Process 10 invoices, classify exceptions, draft vendor communications
  - Pattern analysis at the end
  - Uses `/vendor-communicate` (RENAMED from `/communicate`) for dispute letters
- **Try With AI**: (1) Reconcile a sample invoice from the student's AP queue, (2) Analyse exception patterns across a batch, (3) Design an exception reduction strategy
- Skills metadata: Applied, B1-B2, Apply/Evaluate level

## Exit Criteria

- [ ] 3 lesson files with complete YAML frontmatter
- [ ] 6 sidecar files
- [ ] All commands use renamed versions: `/invoice-reconcile`, `/vendor-communicate`
- [ ] L04 shows the full 6-dimension assessment output format
- [ ] L05 includes the tolerance configuration table from the local.md template
- [ ] L06 includes the full reconciliation output format from the spec
- [ ] L06 uses hedging for GEP "60-80%" claim
- [ ] Exercise dependency notes included (Ex 6 -> Ex 2 cross-reference)
- [ ] Each lesson has 3 Try With AI prompts
- [ ] "Cowork" terminology used throughout
