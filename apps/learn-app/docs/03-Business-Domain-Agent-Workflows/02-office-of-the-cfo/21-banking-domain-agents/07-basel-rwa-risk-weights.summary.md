### Core Concept

Two banks with identical loan portfolios can report different RWA depending on whether they use the Standardised Approach (fixed regulatory risk weights by asset class) or the Internal Ratings-Based approach (model-derived risk weights) — and the Basel IV output floor constrains IRB banks to report RWA no lower than 72.5% of what SA would produce, closing a loophole where optimised models allowed banks to hold less capital than their actual risk warranted.

### Key Mental Models

- **SA as a Lookup Table, IRB as a Model**: The Standardised Approach assigns fixed risk weights (e.g., 0% for AAA sovereigns, 35% for mortgages LTV 50-80%, 150% for past-due) requiring only asset classification, while IRB uses the bank's own PD, LGD, EAD, and maturity estimates through a risk-weight function — IRB can produce risk weights of 10-15% where SA prescribes 35%, creating a significant capital advantage.
- **The Output Floor as a Credibility Constraint**: The 72.5% floor (phased in from 50% in 2025 to 72.5% by 2030) ensures that IRB banks cannot report RWA below 72.5% of SA RWA, compressing the capital advantage of sophisticated models and making capital ratios more comparable across banks — if IRB RWA is below the floor, the bank must report the floored amount.

### Critical Patterns

- Off-balance-sheet items require a Credit Conversion Factor before risk weighting: 10% for unconditionally cancellable, 20% for maturity <= 1 year, 50% for maturity > 1 year, and 100% for guarantees
- Foundation IRB lets banks estimate only PD (with supervisory LGD, EAD, maturity), while Advanced IRB lets banks estimate all four parameters — A-IRB can produce dramatically lower risk weights
- The output floor is expected to increase RWA for large EU banks by 18-22% on average, particularly those with heavily optimised IRB models for mortgage portfolios

### Common Mistakes

- Assuming all unrated corporates receive the same risk weight as rated corporates — unrated corporates default to 100% under SA, while rated A+ to BBB- corporates receive 75%
- Ignoring the output floor when comparing IRB and SA banks — without the floor, an IRB bank's capital ratio is not directly comparable to an SA bank's ratio

### Connections

- **Builds on**: Lesson 6's capital ratios, where RWA was used as the denominator — this lesson explains how that denominator is calculated
- **Leads to**: Lesson 8's leverage ratio and liquidity measures, which address bank resilience dimensions that risk-weighted ratios cannot capture
