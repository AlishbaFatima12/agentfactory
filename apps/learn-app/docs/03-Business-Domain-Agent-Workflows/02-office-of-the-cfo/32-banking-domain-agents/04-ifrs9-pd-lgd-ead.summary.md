### Core Concept

Each ECL component must be built from first principles — PD requires converting through-the-cycle estimates to point-in-time using a Credit Cycle Adjustment, LGD requires downturn (not current-market) collateral values with forced sale discounts, and EAD requires Credit Conversion Factors for undrawn commitments — because a professional who cannot verify the inputs cannot trust the outputs.

### Key Mental Models

- **TTC vs PIT PD**: Through-the-cycle PD averages default rates across full economic cycles while point-in-time PD adjusts for current conditions using a Credit Cycle Adjustment multiplier (CCA). IFRS 9 requires PIT PDs because the standard demands forward-looking estimates — using TTC without adjustment understates provisions in downturns and overstates them in expansions.
- **EAD Exceeds Drawn Balance**: For revolving facilities, EAD = Drawn + (CCF x Undrawn), and distressed borrowers typically draw down available credit before defaulting. A facility with $5M drawn and $15M undrawn at 60% CCF has an EAD of $14M — nearly three times the current balance — making EAD the most commonly underestimated ECL component.

### Critical Patterns

- PD term structures provide marginal PDs for each future period, calculated as (Cumulative PD(t) - Cumulative PD(t-1)) / (1 - Cumulative PD(t-1)), required for lifetime ECL summation in Stage 2 and 3
- IFRS 9 requires downturn LGD because defaults cluster in economic downturns when collateral values are simultaneously depressed — a 30% property decline can transform a 6% LGD portfolio into a 25% LGD portfolio
- Cure rates reduce effective LGD: Effective LGD = (1 - Cure Rate) x Loss Severity on Non-Cured Defaults
- CCFs range from 0-10% for unconditionally cancellable commitments to 80-100% for construction facilities, reflecting the contractual right and behavioural tendency to draw

### Common Mistakes

- Confusing TTC and PIT PD — this is one of the most common ECL errors and cascades through both IFRS 9 provisioning and Basel capital calculations
- Using the current drawn balance as EAD for revolving facilities — this dramatically understates exposure, sometimes by 2-3x

### Connections

- **Builds on**: Lesson 3's ECL formula (PD x LGD x EAD), where component values were given — this lesson shows where those values come from
- **Leads to**: Lesson 5's macroeconomic scenario weighting and Post-Model Adjustments, which add the final layers to the IFRS 9 ECL calculation
