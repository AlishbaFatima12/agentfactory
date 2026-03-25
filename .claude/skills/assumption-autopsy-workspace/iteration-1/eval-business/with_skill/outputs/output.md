# Assumption Autopsy: SaaS Product for Small Law Firms at $99/month

## Plan Under Examination

**Goal:** Launch a subscription SaaS product for small law firms at $99/month
**Approach:** Cloud-based tool, subscription pricing, LinkedIn ads for customer acquisition
**User-stated assumptions:**
1. Law firms want cloud-based tools
2. $99 is affordable
3. We can acquire customers through LinkedIn ads

---

## Assumption Matrix

### (a) Found by Human Only

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | Law firms want cloud-based tools | Market/Behavioral | Needs Testing |
| 2 | $99/month is affordable for small law firms | Market/Financial | Needs Testing |
| 3 | LinkedIn ads are an effective acquisition channel for law firms | Market/Behavioral | Risky |

*Pattern: All three user-stated assumptions are market/behavioral -- contextual assumptions about the target audience's preferences and behavior.*

### (b) Found by AI Only

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | Small law firms have the technical infrastructure to adopt SaaS tools (reliable internet, modern browsers, devices) | Structural/Technical | Reasonable |
| 2 | Regulatory and bar association compliance permits cloud storage of client data in all target jurisdictions | Structural/Legal | Risky |
| 3 | The product solves a problem that existing tools (Clio, PracticePanther, MyCase) do not already solve adequately | Structural/Competitive | Needs Testing |
| 4 | $99/month provides sufficient revenue per user to cover CAC, support costs, and generate margin at projected scale | Structural/Financial | Needs Testing |
| 5 | Decision-makers at small law firms (managing partners) are active on LinkedIn and respond to ads | Structural/Behavioral | Needs Testing |
| 6 | "Small law firms" is a homogeneous enough segment that one product serves them all (solo practitioners vs. 5-attorney firms vs. 20-attorney firms have very different needs) | Structural/Market | Risky |
| 7 | The team has legal domain expertise sufficient to build a product lawyers will trust with their practice | Structural/Knowledge | Risky |
| 8 | Churn rate will be low enough to sustain subscription economics (legal SaaS typically sees 3-5% monthly churn for SMB) | Structural/Financial | Needs Testing |

*Pattern: AI-identified assumptions are structural -- they concern logical dependencies, scale economics, regulatory constraints, and competitive dynamics that the user took for granted.*

### (c) Found by Both

| # | Assumption | Type | Risk Level |
|---|-----------|------|------------|
| 1 | There is sufficient demand among small law firms for a new cloud-based tool | Market/Structural | Needs Testing |

*Note: The user's assumption #1 ("law firms want cloud-based tools") and AI's competitive analysis converge on this shared premise.*

### (d) Emerged During Merge

| # | Assumption | Triggered By | Risk Level |
|---|-----------|-------------|------------|
| 1 | The sales cycle for law firm software is short enough to sustain a low-touch $99/month acquisition model -- but legal software typically requires demos, compliance reviews, and partner buy-in, which conflicts with self-serve LinkedIn-ad-driven acquisition | (a3) LinkedIn ads + (b4) unit economics | Risky |
| 2 | Law firms will trust a NEW vendor with client-privileged data -- attorney-client privilege creates an exceptionally high trust barrier that makes switching costs asymmetric (easy to lose trust, hard to earn it) | (a1) cloud-based tools + (b7) domain expertise | Needs Testing |
| 3 | The product can launch without integrations to existing law firm ecosystems (court e-filing systems, accounting software, document management) -- isolated tools get rejected regardless of individual quality | (b3) competitive landscape + (b6) segment heterogeneity | Risky |

---

## Risk Assessment

| Assumption | Category | Risk Level | If Wrong, Impact | Testable? | Test Method |
|-----------|----------|------------|-----------------|-----------|-------------|
| Cloud data compliance | (b) | Risky | Cannot operate in key jurisdictions; legal liability | Yes | Research bar association rules in top 5 target states |
| Segment homogeneity | (b) | Risky | Product serves no one well; feature sprawl | Yes | Interview 15 firms across 3 size buckets |
| Team domain expertise | (b) | Risky | Product misses critical workflows; lawyers reject it | Yes | Co-build with 2-3 lawyer advisors for 60 days |
| Sales cycle vs. pricing model | (d) | Risky | CAC exceeds LTV; business model fails | Yes | Run pilot sales for 30 days, measure close time |
| Trust barrier for new vendor | (d) | Needs Testing | Zero adoption despite product quality | Yes | Survey 50 lawyers on vendor switching criteria |
| Integration requirements | (d) | Risky | Product rejected as "yet another silo" | Yes | Map integration requirements from 10 prospect interviews |
| $99 unit economics | (b) | Needs Testing | Unsustainable business at any scale | Yes | Model CAC/LTV with LinkedIn ad benchmarks for legal vertical |
| Churn rate sustainability | (b) | Needs Testing | Revenue decays faster than acquisition | Partial | Benchmark against legal SaaS industry data; validate after 90 days |

### Critical Path Assumptions

These 3 assumptions, if wrong, invalidate the entire plan:

1. **Regulatory compliance for cloud storage of privileged legal data** -- If bar associations prohibit or heavily restrict this, the product category itself is blocked.
2. **Sales cycle compatibility with $99/month self-serve model** -- If law firms require demos and compliance reviews, the acquisition cost makes $99/month unsustainable.
3. **Competitive differentiation against Clio/PracticePanther/MyCase** -- If incumbents already serve the need adequately, no marketing spend fixes a product-market-fit gap.

### Recommended Test Sequence

1. **Regulatory research (1 week)** -- Check bar association cloud storage rules in top 5 target states. This is binary: if restricted, pivot the approach.
2. **Competitive analysis + 10 prospect interviews (2 weeks)** -- Map what existing tools do, what gaps remain, and whether $99 is the right price point. Covers assumptions (b3), (b6), (a2).
3. **Pilot sales cycle (4 weeks)** -- Run LinkedIn ads to a landing page with demo booking. Measure click-through, demo requests, and close time. Covers (a3), (b5), (d1).
4. **Unit economics model (1 week, parallel with #3)** -- Calculate CAC from pilot data + modeled LTV at various churn rates. Covers (b4), (b8).

---

## Contextual vs. Structural Pattern

**Human assumptions** (category a): All three were market/behavioral -- focused on "do customers want this?" and "can we reach them?" These are the assumptions closest to the founder's direct experience and intuition.

**AI assumptions** (category b): Eight structural assumptions covering legal compliance, competitive dynamics, unit economics, segment heterogeneity, domain expertise gaps, and churn modeling. These are systemic dependencies the founder implicitly assumed would work out.

**Emerged assumptions** (category d): Three assumptions surfaced from the tension between contextual and structural items -- particularly the mismatch between a low-touch pricing model and a high-trust, long-sales-cycle market.
