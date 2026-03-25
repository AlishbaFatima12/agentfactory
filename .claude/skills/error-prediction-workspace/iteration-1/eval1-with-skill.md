# Eval 1: Business Restaurant Expansion — WITH SKILL

## Prompt
I asked ChatGPT to analyze whether my restaurant should expand to a second location. Here's what it said: [AI analysis about restaurant expansion with 78% success rate, NRA Growth Report, 15% profit margin claims, proximity expansion, etc.]

Help me find the errors using the Error Taxonomy.

## Response (with /error-prediction skill loaded)

### Error Annotation: Restaurant Expansion Analysis

#### Claim-by-Claim Analysis

> "Based on your current success, expanding to a second location is a strong strategic move."
[FALSE CONFIDENCE] Frames expansion as definitively "strong" without qualifying conditions. Whether expansion is strategic depends on dozens of factors not yet assessed (cash reserves, management depth, market saturation, lease terms). Should say "may be worth evaluating" not "is a strong strategic move."

> "Restaurant chains that expand within 3 years of their first location's profitability have a 78% success rate according to the National Restaurant Association's 2024 Growth Report."
[FABRICATED CITATION] The "NRA 2024 Growth Report" with this specific 78% statistic is almost certainly fabricated. The NRA publishes a "State of the Restaurant Industry" report, but this specific claim with this exact percentage does not appear in known NRA publications. AI frequently generates plausible-sounding statistics with authoritative-seeming sources.

> "Your 15% profit margin puts you well above the industry average of 3-5%, indicating strong operational efficiency that will transfer to a new location."
[LOGICAL GAP] Two errors in one sentence: (1) The 3-5% industry average is approximately correct for full-service restaurants, but the conclusion that operational efficiency "will transfer" does not follow. A second location has different staff, different foot traffic, different supplier logistics, and often different management quality. Transferability is an assumption, not a given.

> "The ideal approach is to secure a location within a 10-mile radius of your current restaurant to leverage brand recognition."
[FALSE CONFIDENCE] States "ideal" as if there is one correct answer. The optimal radius depends heavily on the type of restaurant, urban vs. suburban density, and competitive landscape. In some markets, 10 miles is too close (cannibalization risk). In others, it is too far for brand recognition.

> "Studies consistently show that proximity-based expansion reduces marketing costs by 40-60%."
[FABRICATED CITATION] "Studies consistently show" is a red flag phrase. No specific study is cited, and the 40-60% range is suspiciously precise for a claim attributed to unspecified "studies." This is likely a fabricated or heavily distorted statistic.

> "You should plan for a 6-month ramp-up period, during which the new location will operate at a loss before reaching profitability."
[FALSE CONFIDENCE] Presents 6 months as a definitive timeline. Restaurant ramp-up periods vary enormously — 6 months to 2+ years depending on location, concept, market conditions. The Restaurant Finance Monitor reports median break-even at 12-18 months for new locations.

> "Key success factors include: maintaining consistent food quality across locations, hiring an experienced general manager (salary range $55,000-$75,000), and investing approximately $350,000-$500,000 in build-out costs."
[MISSING CONTEXT] While these are valid factors, the analysis omits critical ones: (1) financing costs and interest rates, (2) the owner's time being split between two locations, (3) supply chain complexity, (4) whether the concept works in a different neighborhood demographic, (5) competition analysis for the new area.
[OUTDATED INFORMATION] The salary and build-out ranges may not reflect 2026 market conditions, particularly given construction cost inflation.

> "The ROI timeline is typically 18-24 months for well-managed restaurant expansions."
[FALSE CONFIDENCE] "Typically" masks enormous variance. This assumes the expansion is successful — which is the very thing being analyzed. Survivor bias: failed expansions don't report ROI timelines.

> "Given current economic conditions and the resilience of the restaurant industry post-pandemic, this is an optimal time to expand."
[FALSE CONFIDENCE] + [MISSING CONTEXT] "Optimal time" is a strong claim that ignores interest rate environment, commercial real estate trends in the specific market, labor market tightness, and food cost inflation — all of which vary by location. The "post-pandemic resilience" framing also ignores that many restaurants closed permanently during the pandemic, and the survivors face different challenges now.

> "Consumer spending on dining out has increased 12% year-over-year"
[OUTDATED INFORMATION] This statistic needs a date and source. YoY dining spending growth varies significantly by quarter and region. The 12% figure may reflect a specific post-pandemic recovery period that has since normalized.

> "commercial real estate prices remain favorable in most markets"
[CULTURAL BLIND SPOT] + [FALSE CONFIDENCE] "Most markets" assumes a national or global generalization. Commercial real estate conditions vary enormously by city, neighborhood, and property type. What is "favorable" in one market may be at historic highs in another.

#### Error Count Summary

| Error Category                  | Count | Severity |
|---------------------------------|-------|----------|
| Factual Error                   | 0     | —        |
| Logical Gap                     | 1     | High     |
| False Confidence                | 6     | High     |
| Missing Context                 | 2     | High     |
| Correlation-Causation Confusion | 0     | —        |
| Outdated Information            | 2     | Medium   |
| Fabricated Citation             | 2     | High     |
| Cultural Blind Spot             | 1     | Low      |
| **Total Errors**                | **14**|          |

**Overall Reliability**: LOW — 14 errors with heavy concentration in False Confidence (6) and Fabricated Citation (2). This analysis reads as a sales pitch for expansion rather than an objective evaluation. The most dangerous errors are the fabricated statistics (NRA report, marketing cost reduction studies) which lend false authority. Do not use for decision-making without independent financial analysis.

**Pattern**: The AI was asked a "should I" question and defaulted to an optimistic, action-oriented response rather than a balanced evaluation. This is a common failure mode — AI tends toward encouragement over caution.
