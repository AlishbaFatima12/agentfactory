# Legal Ops Agents: Calendar, Spend, and DSAR — Summary

## Core Concept

Three Legal Ops Agents handle the ongoing operational responsibilities of a legal department: the Compliance Calendar Agent (tracks deadlines with escalation logic that prevents missed renewals and regulatory filings), the Legal Spend Analytics Agent (provides visibility into external legal costs with anomaly detection), and the DSAR Agent (manages data subject access requests end-to-end within statutory response windows). Each follows the same persistent agent pattern: multi-step workflow, state maintenance, escalation logic, and completion logging. Together with the Intake and Monitoring agents from L10, they give a lean legal team the operational capacity to manage processes that would otherwise require dedicated Legal Ops staff.

## Key Mental Models

- **Compliance calendar escalation sequence**: 60 days (dashboard), 30 days (owner notification), 14 days (owner + manager), 7 days (General Counsel), 1 day (CFO/GC emergency alert), day of (compliance incident log), day after (incident report + remediation)
- **Auto-renewal risk**: Missed non-renewal notice deadlines commit the organisation to another full contract term -- the escalation sequence exists specifically to prevent this
- **Legal spend anomaly types**: Rate variance (invoiced rate exceeds agreed rate), matter budget overrun (spend exceeds approved budget without extension), billing pattern anomaly (disproportionate billing in final month of quarter)
- **DSAR response windows by jurisdiction**: UK GDPR (30 calendar days), EU GDPR (30 calendar days), CCPA (45 days, extendable by 45), PIPEDA (30 days)
- **Redaction assessment categories**: Must disclose (personal data about the requester, including opinions), redact (third-party personal data), attorney review required (borderline items like commercially sensitive data or technical identifiers)
- **DSAR 30-day timeline**: Acknowledge (Day 1), identity verification (Days 1-3), data discovery to 7 system owners (Days 1-10), redaction assessment (Day 12), response draft (Day 15), attorney review (Day 25), send response (Day 29)

## Critical Patterns

- Escalation recipients expand as deadlines approach: obligation owner only at 30 days, plus manager at 14 days, plus GC at 7 days, plus CFO at 1 day for financial obligations
- Legal spend anomaly detection compares effective hourly rates against agreed rates, matter spend against approved budgets, and billing patterns against historical norms
- DSAR acknowledgement letters must not confirm or deny what data is held -- only confirm receipt, state the deadline, and request identity verification
- Opinions about data subjects (e.g., "difficult customer") are personal data under Art. 4(1) and must be disclosed per ICO guidance
- The 30-day DSAR clock pauses only during identity verification -- all other steps must proceed in parallel within the window

## Common Mistakes

- Setting escalation timelines that are too aggressive for the team size -- a 2-person legal team needs different SLAs than a 15-person department
- Paying invoices with rate variances without querying the firm -- the agent flags anomalies, but someone must act on them
- Assuming billing pattern anomalies (e.g., 72% of fees in final month) are always fraudulent -- they are common before matter close but should be verified
- Sending a DSAR acknowledgement that confirms data holdings -- this prejudges the discovery process and may create expectations about what will be disclosed
- Missing the distinction between "must disclose" and "attorney review required" -- sales rep opinions about a customer must be disclosed, but whether a discount percentage is commercially sensitive needs attorney judgment

## Connections

- These three agents complete the five-agent Legal Ops suite started in **L10** (Contract Intake Agent and Regulatory Monitoring Agent)
- The Compliance Calendar Agent tracks obligations originally surfaced by `/vendor-check` in **L03**
- The DSAR Agent expands the `/respond type:"dsar"` canned response from **L08** into a full end-to-end workflow
- Legal spend analytics connects to the vendor management and meeting prep themes in **L09**
- The escalation logic pattern (time-based, with expanding recipient lists) is shared across all five agents and represents the core operational value of the agent architecture
- The DSAR redaction assessment (opinions as personal data, third-party data redaction, privilege exemptions) demonstrates the governance boundary between agent categorisation and attorney judgment established throughout the chapter
