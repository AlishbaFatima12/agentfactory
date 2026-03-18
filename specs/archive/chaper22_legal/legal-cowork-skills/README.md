# Legal Cowork Skills Library
## Chapter 28 — Legal Operations and Compliance
### Panaversity: The AI Agent Factory

---

## Quick Start

1. **Copy this folder** into your Cowork skills directory
2. **Copy `legal.local.md.template`**, rename it `legal.local.md`,
   and fill in your organisation's positions (this is your negotiation playbook)
3. **Install the Claude Legal Plugin**: https://claude.com/plugins/legal
4. **Start with Exercise 1** in Chapter 28 to build and validate your playbook

Your skills directory after installation:

```
skills/
└── legal-cowork-skills/
    ├── README.md                      ← this file
    ├── legal-global-router.md         ← top-level router (always active)
    ├── legal.local.md.template        ← copy + fill in → legal.local.md
    ├── products/
    │   ├── contract-review.md         ← /review-contract workflow
    │   ├── nda-triage.md              ← /triage-nda workflow
    │   ├── ip-protection.md           ← /brief (IP) workflow
    │   ├── regulatory-monitoring.md   ← /brief (regulatory) workflow
    │   ├── dsar-privacy.md            ← /respond (DSAR) workflow
    │   ├── legal-spend.md             ← /brief (spend) workflow
    │   ├── compliance-calendar.md     ← /vendor-check workflow
    │   └── contract-intake-agent.md   ← full intake agent workflow
    └── jurisdictions/
        ├── uk-law.md                  ← England & Wales overlay
        ├── eu-law.md                  ← European Union overlay
        ├── us-law.md                  ← United States overlay
        ├── pakistan-law.md            ← Pakistan overlay
        └── uae-law.md                 ← UAE / DIFC / ADGM overlay
```

---

## File Reference

| File | Plugin Command | Primary Use |
|---|---|---|
| `legal-global-router.md` | All | Top-level router — always loads first |
| `products/contract-review.md` | `/review-contract` | Full clause-by-clause review |
| `products/nda-triage.md` | `/triage-nda` | Rapid NDA routing |
| `products/ip-protection.md` | `/brief` | Patent landscape, trademark, FTO |
| `products/regulatory-monitoring.md` | `/brief` | Regulatory change monitoring |
| `products/dsar-privacy.md` | `/respond` | DSAR / privacy request management |
| `products/legal-spend.md` | `/brief` | External legal spend analysis |
| `products/compliance-calendar.md` | `/vendor-check` | Obligation and renewal tracking |
| `products/contract-intake-agent.md` | All | End-to-end contract intake agent |
| `jurisdictions/uk-law.md` | Overlay | English law; UCTA; UK GDPR; UKIPO |
| `jurisdictions/eu-law.md` | Overlay | EU GDPR; EU AI Act; EUTM |
| `jurisdictions/us-law.md` | Overlay | State law; CCPA; BIPA; USPTO |
| `jurisdictions/pakistan-law.md` | Overlay | PDPA; Contract Act 1872; Islamic finance |
| `jurisdictions/uae-law.md` | Overlay | Mainland / DIFC / ADGM; PDPL |
| `legal.local.md.template` | All | Negotiation playbook — fill in + rename |

---

## The Governing Principle

> **The agent reviews, triages, drafts, and flags.**
> **The licensed attorney advises, decides, and signs.**

Every file in this library enforces this distinction.
Every output ends with: **ALL OUTPUTS REQUIRE REVIEW BY LICENSED ATTORNEY**

---

## Plugin Reference

- Plugin installation: https://claude.com/plugins/legal
- GitHub source: https://github.com/anthropics/knowledge-work-plugins/tree/main/legal
- Chapter 28 full text: The AI Agent Factory — Part 3, Section VI

---

## Version History

v1.0 — Initial release | Chapter 28 | Panaversity AI Agent Factory curriculum
