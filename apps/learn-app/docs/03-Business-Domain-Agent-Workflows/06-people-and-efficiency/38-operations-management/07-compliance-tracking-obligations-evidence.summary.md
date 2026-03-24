# Lesson 7 Summary: Compliance Tracking: Obligations and Evidence

## What This Lesson Covers

Compliance drift is the process by which a compliant organisation silently becomes non-compliant, not through deliberate action, but through personnel change, regulatory updates, and system changes that nobody connects back to the compliance obligation they affect. This lesson teaches you to build a complete, current, verified compliance obligation map using Cowork's `compliance-tracking` auto-skill.

## The Three Obligation Layers

Every organisation carries regulatory obligations (UK GDPR, FCA, AML, Companies Act), contractual obligations (client SLAs, data handling clauses, insurance conditions), and standards/internal obligations (ISO certifications, board governance commitments). The regulatory layer typically has named owners and periodic reviews. The contractual and standards layers drift more silently, and produce the most common audit surprises.

## The Five-Status Classification

The compliance map assigns every obligation one of five statuses:

- **CURRENT** (🟢): Control effective; evidence current (<12 months); no known gaps
- **REVIEW NEEDED** (🟡): Evidence aging; control not tested since last regulatory change
- **PARTIAL** (🟡): Control exists but incomplete; evidence has identifiable gaps
- **GAP** (🔴): No effective control; evidence absent or cannot be located
- **URGENT** (🔴): Active breach likely; regulatory deadline within 30 days and gap exists; regulator has signalled review

The critical rule: CURRENT requires cited, locatable evidence , not an assertion. Any obligation where the evidence cannot be specifically identified and located should be PARTIAL at best.

## Using the compliance-tracking Auto-Skill

The `compliance-tracking` skill activates automatically from natural-language prompts containing keywords like "compliance", "obligations", "regulatory", and "GDPR". Students never type `/compliance-tracking`; they describe what they need in natural language, including the firm's regulatory context and known gaps.

## The Evidence Inventory

For CURRENT obligations, a second prompt confirms that the cited evidence is actually locatable: document name, storage location, last update date, and whether the named reviewer is still in the organisation. Evidence stored on a departed employee's local drive is functionally absent on audit day.

## Remediation Planning

Non-CURRENT obligations require a prioritised remediation plan, ranked by regulatory consequence (P1), time sensitivity (P2), audit proximity (P3), and effort (P4). The AML PEP screening gap, with a lapsed provider contract and an FCA visit approaching: is a textbook P1 URGENT: it escalates from a control gap to an active breach risk in the context of a regulatory review.

## Cross-References

The compliance obligation map built in this lesson feeds directly into Lesson 8 (Audit Preparation: the evidence inventory and audit preparation plan begin with this map) and Lesson 12 (the compliance-monitor persistent agent tracks these obligations continuously, alerting when review dates pass and evidence ages).
