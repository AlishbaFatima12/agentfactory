### Core Concept

A bank can report strong risk-weighted capital ratios and still fail — Northern Rock (2007) had a Tier 1 ratio above 10% but collapsed due to illiquidity — so Basel III introduced three non-risk-weighted or liquidity-focused measures: the leverage ratio (Tier 1 / total exposure >= 3%), the LCR (HQLA / 30-day net cash outflows >= 100%), and the NSFR (available stable funding / required stable funding >= 100%).

### Key Mental Models

- **LCR as a 30-Day Survival Test**: The Liquidity Coverage Ratio asks whether the bank can survive a severe 30-day stress by selling high-quality liquid assets to cover net cash outflows — HQLA is classified into Level 1 (cash, sovereign bonds, 0% haircut), Level 2A (covered bonds, IG corporates, 15% haircut), and Level 2B (equities, RMBS, 25-50% haircut), with Level 2 capped at 40% of total HQLA.
- **LCR and NSFR as Complementary Measures**: A bank can pass LCR (plenty of liquid assets for 30 days) but fail NSFR (funding 25-year mortgages with 3-month wholesale deposits), or vice versa — the two ratios together ensure both short-term resilience and structural funding soundness.

### Critical Patterns

- The leverage ratio catches banks that concentrate in low-risk-weight assets (e.g., sovereign bonds at 0% risk weight) to report strong RWA-based ratios while being dangerously leveraged in absolute terms
- Net cash outflows apply different run-off rates by funding stability: stable retail deposits at 3-5%, wholesale financial at 100%, with total inflows capped at 75% of outflows
- NSFR assigns 0% required stable funding to cash and 65% to residential mortgages, ensuring long-term assets are matched with stable funding sources
- US banks operate under CECL (not IFRS 9) and DFAST stress testing (mandatory for banks with $250B+ assets), with publicly disclosed results creating market discipline

### Common Mistakes

- Assuming that strong capital ratios guarantee bank safety — capital and liquidity are independent dimensions, and a bank can be well-capitalised but illiquid (Northern Rock) or liquid but undercapitalised
- Treating all liquid assets as equivalent HQLA — commercial property is not HQLA because it cannot be sold at fair value within 30 days, while central bank reserves are the ultimate Level 1 asset

### Connections

- **Builds on**: Lessons 6-7's risk-weighted capital framework, extending Basel to non-risk-weighted and liquidity dimensions
- **Leads to**: Lesson 9's AML/KYC framework, shifting from the solvency pillar to the financial crime pillar — the third regulatory pillar of modern banking
