### Core Concept

The Basel III/IV capital framework defines a three-layer capital stack (CET1 (ordinary shares, retained earnings), AT1 (perpetual contingent convertibles), and Tier 2 (subordinated debt)) with regulatory deductions stripping out items like goodwill that cannot absorb losses, and three minimum ratios (CET1 >= 4.5%, Tier 1 >= 6.0%, Total Capital >= 8.0%) plus capital buffers that in practice raise the effective CET1 floor to 8-13%.

### Key Mental Models

- **Capital Stack as Loss Absorption Hierarchy**: CET1 absorbs losses first and is permanent (ordinary shares, retained earnings), AT1 absorbs losses via write-down or conversion when CET1 falls below a trigger, and Tier 2 absorbs losses only in resolution: the quality of capital determines whether the bank survives as a going concern or only in wind-down.
- **Regulatory Deductions Bridge Accounting and Prudential Views**: Goodwill, intangible assets, and DTAs dependent on future profitability are deducted from CET1 because they have book value but cannot be converted to cash to absorb losses: this is why shareholders' equity and regulatory capital differ, reflecting the tension between accounting (measuring value) and regulation (measuring loss-absorbing capacity).

### Critical Patterns

- Capital buffers (CCB 2.5%, CCyB 0-2.5%, D-SIB 1.0-3.5%) create a graduated response rather than a binary pass/fail: breaching the buffer zone restricts dividends and bonuses through the Maximum Distributable Amount mechanism
- The leverage ratio (Tier 1 / Total Exposure >= 3.0%, UK PRA 3.25% for large deposit-takers) provides a non-risk-weighted backstop that catches concentration in low-risk-weight assets
- GCC regulators (SAMA, CBUAE) apply standard Basel III minimums plus CCB, producing combined requirements of 7.0% CET1 and 10.5% Total Capital

### Common Mistakes

- Treating the 4.5% CET1 minimum as an operating target: with buffers, the practical floor is 8-13%, and breaching the buffer triggers distribution constraints well before the hard minimum
- Assuming all equity on the balance sheet counts as regulatory capital: regulatory deductions can reduce CET1 by hundreds of millions below reported shareholders' equity

### Connections

- **Builds on**: Lessons 3-5's IFRS 9 ECL calculation, shifting from the accounting pillar to the solvency pillar: provisions reduce retained earnings and therefore CET1
- **Leads to**: Lesson 7's risk-weighted assets, which opens the denominator (RWA) used in all three capital ratios
