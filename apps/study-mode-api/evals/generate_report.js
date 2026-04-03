const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign,
        PageNumber, LevelFormat, PageBreak } = require('docx');
const fs = require('fs');

// Table styling
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };
const headerShading = { fill: "1E3A5F", type: ShadingType.CLEAR };
const altRowShading = { fill: "F5F5F5", type: ShadingType.CLEAR };

// Helper function to create a table cell
function cell(text, opts = {}) {
    const { bold = false, header = false, width = 2340, align = AlignmentType.LEFT, shading = null } = opts;
    return new TableCell({
        borders: cellBorders,
        width: { size: width, type: WidthType.DXA },
        shading: shading || (header ? headerShading : null),
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({
            alignment: align,
            children: [new TextRun({
                text: text,
                bold: bold || header,
                color: header ? "FFFFFF" : "000000",
                size: header ? 22 : 20
            })]
        })]
    });
}

// Helper function to create a simple row
function row(cells, opts = {}) {
    return new TableRow({
        tableHeader: opts.header || false,
        children: cells
    });
}

const doc = new Document({
    styles: {
        default: { document: { run: { font: "Arial", size: 22, bold: false } } },
        paragraphStyles: [
            { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 36, bold: true, color: "1E3A5F", font: "Arial" },
              paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 } },
            { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 28, bold: true, color: "2E5077", font: "Arial" },
              paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 1 } },
            { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
              run: { size: 24, bold: true, color: "3D6089", font: "Arial" },
              paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } }
        ]
    },
    numbering: {
        config: [
            { reference: "bullet-list",
              levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
            { reference: "numbered-list",
              levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
            { reference: "changes-list",
              levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
            { reference: "recommendations-list",
              levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
        ]
    },
    sections: [{
        properties: {
            page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
        },
        headers: {
            default: new Header({ children: [new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: "PRIMM-AI+ Evaluation Report", italics: true, size: 20, bold: false, color: "666666" })]
            })] })
        },
        footers: {
            default: new Footer({ children: [new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "Page ", bold: false, size: 20 }),
                    new TextRun({ children: [PageNumber.CURRENT], bold: false, size: 20 }),
                    new TextRun({ text: " of ", bold: false, size: 20 }),
                    new TextRun({ children: [PageNumber.TOTAL_PAGES], bold: false, size: 20 })
                ]
            })] })
        },
        children: [
            // Title
            new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: "PRIMM-AI+ Teaching Methodology", size: 48 })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
                children: [new TextRun({ text: "Evaluation Report", size: 36, bold: true, color: "2E5077" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 360 },
                children: [new TextRun({ text: "March 31, 2026", size: 24, bold: false, color: "666666" })] }),

            // Executive Summary
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1. Executive Summary")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "This report presents the evaluation results of the PRIMM-AI+ teaching methodology implemented in the Study Mode API. Using a weighted evaluation function approach, we systematically measured prompt quality across multiple pedagogical dimensions and implemented targeted improvements.", bold: false })] }),

            new Paragraph({ spacing: { after: 60 },
                children: [new TextRun({ text: "Key Results:", bold: true })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Baseline Score: 47.3/100 (Grade F)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Final Score: 72-81/100 (Grade C to B)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [new TextRun({ text: "Improvement: +25-34 points (53-72% relative improvement)", bold: false })] }),

            // Evaluation Methodology
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2. Evaluation Methodology")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.1 LLM-as-Judge Methodology")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "We use LLM-as-Judge, a technique where a language model evaluates another model's output. This approach is faster and more consistent than human evaluation while capturing nuanced understanding that simple regex matching cannot.", bold: false })] }),

            new Paragraph({ spacing: { after: 60 },
                children: [new TextRun({ text: "Evaluation Process (4 Steps):", bold: true })] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "Generate Response: ", bold: true }),
                    new TextRun({ text: "Send scenario + learner profile + PRIMM stage to the tutor model (GPT-4o-mini). Tutor generates a teaching response.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "Judge Each Criterion: ", bold: true }),
                    new TextRun({ text: "Send the tutor's response to 6 separate LLM judge calls. Each judge scores one criterion (0-100) based on specific rubrics.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "Calculate Weighted Score: ", bold: true }),
                    new TextRun({ text: "Multiply each criterion score by its weight, sum to get final score (0-100).", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Aggregate Across Profiles: ", bold: true }),
                    new TextRun({ text: "Run all 14 scenarios across 4 learner profiles. Average scores to detect personalization issues.", bold: false })
                ] }),

            new Paragraph({ spacing: { after: 200 },
                children: [new TextRun({ text: "Total LLM calls per evaluation: 14 scenarios x 6 criteria = 84 judge calls, providing granular diagnostic data.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.2 Weighted Evaluation Function")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "We employed a mathematical evaluation function to score tutor responses:", bold: false })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 },
                children: [new TextRun({ text: "f(x) = w1*StageAlign + w2*Permission + w3*Coverage + w4*Scaffold + w5*Brevity + w6*Question", italics: true, bold: false })] }),
            new Paragraph({ spacing: { after: 200 },
                children: [new TextRun({ text: "Each criterion produces a 0-100 score. Weights sum to 1.0, prioritizing pedagogically critical behaviors.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.2 Scoring Criteria and Weights")] }),
            new Table({
                columnWidths: [3500, 1500, 4360],
                rows: [
                    row([
                        cell("Criterion", { header: true, width: 3500 }),
                        cell("Weight", { header: true, width: 1500, align: AlignmentType.CENTER }),
                        cell("Description", { header: true, width: 4360 })
                    ], { header: true }),
                    row([
                        cell("Stage Alignment", { width: 3500, bold: true }),
                        cell("25%", { width: 1500, align: AlignmentType.CENTER }),
                        cell("Does response match PRIMM stage rules?", { width: 4360 })
                    ]),
                    row([
                        cell("Permission Compliance", { width: 3500, bold: true, shading: altRowShading }),
                        cell("25%", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Respects AI_FREE / AFTER_LEARNER_FIRST?", { width: 4360, shading: altRowShading })
                    ]),
                    row([
                        cell("Concept Coverage", { width: 3500, bold: true }),
                        cell("15%", { width: 1500, align: AlignmentType.CENTER }),
                        cell("Covers 2-3 concepts per response?", { width: 4360 })
                    ]),
                    row([
                        cell("Scaffolding", { width: 3500, bold: true, shading: altRowShading }),
                        cell("15%", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Adapts to learner level?", { width: 4360, shading: altRowShading })
                    ]),
                    row([
                        cell("Brevity", { width: 3500, bold: true }),
                        cell("10%", { width: 1500, align: AlignmentType.CENTER }),
                        cell("3-5 sentences typical?", { width: 4360 })
                    ]),
                    row([
                        cell("Question Quality", { width: 3500, bold: true, shading: altRowShading }),
                        cell("10%", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Ends with exactly ONE question?", { width: 4360, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.4 Weight Rationale: How We Decided the Percentages")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The weights were designed based on pedagogical priority. If a criterion failing causes learning to fail, it gets higher weight:", bold: false })] }),

            new Table({
                columnWidths: [2400, 1000, 5960],
                rows: [
                    row([
                        cell("Criterion", { header: true, width: 2400 }),
                        cell("Weight", { header: true, width: 1000, align: AlignmentType.CENTER }),
                        cell("Why This Weight?", { header: true, width: 5960 })
                    ], { header: true }),
                    row([
                        cell("Stage Alignment", { width: 2400, bold: true }),
                        cell("25%", { width: 1000, align: AlignmentType.CENTER }),
                        cell("CRITICAL: If tutor explains in PREDICT when it should redirect, the entire PRIMM methodology breaks. Learner never develops prediction skills.", { width: 5960 })
                    ]),
                    row([
                        cell("Permission Compliance", { width: 2400, bold: true, shading: altRowShading }),
                        cell("25%", { width: 1000, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("CRITICAL: The permission system (AI_FREE vs AFTER_LEARNER_FIRST) is PRIMM's core innovation. Violating it defeats the purpose of the framework.", { width: 5960, shading: altRowShading })
                    ]),
                    row([
                        cell("Concept Coverage", { width: 2400, bold: true }),
                        cell("15%", { width: 1000, align: AlignmentType.CENTER }),
                        cell("IMPORTANT: Teaching 2-3 concepts ensures depth without overwhelm. But teaching 1 or 4 concepts isn't a total failure, just suboptimal.", { width: 5960 })
                    ]),
                    row([
                        cell("Scaffolding", { width: 2400, bold: true, shading: altRowShading }),
                        cell("15%", { width: 1000, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("IMPORTANT: Adapting to learner level is key for personalization. But a slightly mismatched response still teaches, just less efficiently.", { width: 5960, shading: altRowShading })
                    ]),
                    row([
                        cell("Brevity", { width: 2400, bold: true }),
                        cell("10%", { width: 1000, align: AlignmentType.CENTER }),
                        cell("NICE-TO-HAVE: 3-5 sentences is ideal, but longer responses can still be effective. Penalize verbosity lightly.", { width: 5960 })
                    ]),
                    row([
                        cell("Question Quality", { width: 2400, bold: true, shading: altRowShading }),
                        cell("10%", { width: 1000, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("NICE-TO-HAVE: Ending with exactly one question keeps learner engaged. But 0 or 2 questions is not catastrophic.", { width: 5960, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 120 }, children: [] }),

            new Paragraph({ spacing: { after: 60 },
                children: [new TextRun({ text: "Weight Distribution Logic:", bold: true })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "50% to \"must not violate\" criteria: ", bold: true }),
                    new TextRun({ text: "Stage Alignment (25%) + Permission Compliance (25%) = 50%. These are binary: if wrong, learning fails.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "30% to \"should optimize\" criteria: ", bold: true }),
                    new TextRun({ text: "Concept Coverage (15%) + Scaffolding (15%) = 30%. Suboptimal is bad but not catastrophic.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [
                    new TextRun({ text: "20% to \"nice to have\" criteria: ", bold: true }),
                    new TextRun({ text: "Brevity (10%) + Question Quality (10%) = 20%. Polish matters but doesn't break pedagogy.", bold: false })
                ] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.5 Example Score Calculation")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Here's how a single response score is calculated:", bold: false })] }),
            new Table({
                columnWidths: [3000, 1500, 1500, 3360],
                rows: [
                    row([
                        cell("Criterion", { header: true, width: 3000 }),
                        cell("Raw Score", { header: true, width: 1500, align: AlignmentType.CENTER }),
                        cell("Weight", { header: true, width: 1500, align: AlignmentType.CENTER }),
                        cell("Weighted", { header: true, width: 3360, align: AlignmentType.CENTER })
                    ], { header: true }),
                    row([
                        cell("Stage Alignment", { width: 3000 }),
                        cell("100", { width: 1500, align: AlignmentType.CENTER }),
                        cell("x 0.25", { width: 1500, align: AlignmentType.CENTER }),
                        cell("= 25.0", { width: 3360, align: AlignmentType.CENTER })
                    ]),
                    row([
                        cell("Permission Compliance", { width: 3000, shading: altRowShading }),
                        cell("100", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("x 0.25", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("= 25.0", { width: 3360, align: AlignmentType.CENTER, shading: altRowShading })
                    ]),
                    row([
                        cell("Concept Coverage", { width: 3000 }),
                        cell("30", { width: 1500, align: AlignmentType.CENTER }),
                        cell("x 0.15", { width: 1500, align: AlignmentType.CENTER }),
                        cell("= 4.5", { width: 3360, align: AlignmentType.CENTER })
                    ]),
                    row([
                        cell("Scaffolding", { width: 3000, shading: altRowShading }),
                        cell("50", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("x 0.15", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("= 7.5", { width: 3360, align: AlignmentType.CENTER, shading: altRowShading })
                    ]),
                    row([
                        cell("Brevity", { width: 3000 }),
                        cell("40", { width: 1500, align: AlignmentType.CENTER }),
                        cell("x 0.10", { width: 1500, align: AlignmentType.CENTER }),
                        cell("= 4.0", { width: 3360, align: AlignmentType.CENTER })
                    ]),
                    row([
                        cell("Question Quality", { width: 3000, shading: altRowShading }),
                        cell("100", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("x 0.10", { width: 1500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("= 10.0", { width: 3360, align: AlignmentType.CENTER, shading: altRowShading })
                    ]),
                    row([
                        cell("TOTAL", { width: 3000, bold: true }),
                        cell("", { width: 1500 }),
                        cell("", { width: 1500 }),
                        cell("= 76.0 / 100", { width: 3360, align: AlignmentType.CENTER, bold: true })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2.6 Test Scenarios by Profile")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "14 test scenarios across 4 learner profiles ensure personalization works correctly:", bold: false })] }),

            new Table({
                columnWidths: [2000, 1200, 3000, 3160],
                rows: [
                    row([
                        cell("Profile", { header: true, width: 2000 }),
                        cell("Scenarios", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Background", { header: true, width: 3000 }),
                        cell("Tests What?", { header: true, width: 3160 })
                    ], { header: true }),
                    row([
                        cell("Marcus", { width: 2000, bold: true }),
                        cell("4", { width: 1200, align: AlignmentType.CENTER }),
                        cell("Beginner student, no prior experience", { width: 3000 }),
                        cell("Plain language, detailed explanations, encouragement", { width: 3160 })
                    ]),
                    row([
                        cell("Fatima", { width: 2000, bold: true, shading: altRowShading }),
                        cell("3", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Finance analyst, advanced domain, beginner coder", { width: 3000, shading: altRowShading }),
                        cell("Professional tone, finance analogies, Excel parallels", { width: 3160, shading: altRowShading })
                    ]),
                    row([
                        cell("Raj", { width: 2000, bold: true }),
                        cell("3", { width: 1200, align: AlignmentType.CENTER }),
                        cell("Senior developer, advanced in all areas", { width: 3000 }),
                        cell("Technical depth, concise responses, spec enforcement", { width: 3160 })
                    ]),
                    row([
                        cell("Ahmed", { width: 2000, bold: true, shading: altRowShading }),
                        cell("4", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Urdu-speaking student, everyday focus", { width: 3000, shading: altRowShading }),
                        cell("Simple language, everyday examples, reduced cognitive load", { width: 3160, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 120 }, children: [] }),

            new Paragraph({ spacing: { after: 60 },
                children: [new TextRun({ text: "Scenario Types Covered:", bold: true })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "PREDICT stage redirect (should NOT explain until learner attempts)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "RUN stage teaching (SHOULD explain richly after prediction)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "INVESTIGATE stage (learner explains first)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "MAKE stage spec enforcement (require spec before code)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Frustration detection (shift to direct instruction)", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [new TextRun({ text: "Session opening (warm welcome appropriate to profile)", bold: false })] }),

            // Baseline Results
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3. Baseline Results (Before Fixes)")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Initial evaluation revealed significant deficiencies in stage alignment and permission compliance:", bold: false })] }),
            new Table({
                columnWidths: [3200, 1200, 1200, 1200, 1200, 1200, 1160],
                rows: [
                    row([
                        cell("Scenario", { header: true, width: 3200 }),
                        cell("Stage", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Perm", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Cover", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Scaff", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Brief", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("TOTAL", { header: true, width: 1160, align: AlignmentType.CENTER })
                    ], { header: true }),
                    row([
                        cell("PREDICT Redirect", { width: 3200 }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("22.0", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("RUN Teach Richly", { width: 3200, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("55", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("52.5", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ]),
                    row([
                        cell("INVESTIGATE Learner First", { width: 3200 }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER }),
                        cell("80", { width: 1200, align: AlignmentType.CENTER }),
                        cell("55", { width: 1200, align: AlignmentType.CENTER }),
                        cell("32.0", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("Frustration Detection", { width: 3200, shading: altRowShading }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("22.0", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ]),
                    row([
                        cell("MAKE Spec Enforcement", { width: 3200 }),
                        cell("0", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("60", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("69.0", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("Session Opening", { width: 3200, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("60", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("86.5", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { before: 120, after: 200 },
                children: [
                    new TextRun({ text: "Baseline Average: ", bold: true }),
                    new TextRun({ text: "47.3/100 (Grade F)", bold: false, color: "CC0000" })
                ] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.1 Critical Issues Identified")] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "AI_FREE checkpoints not enforced: ", bold: true }),
                    new TextRun({ text: "Model explained instead of redirecting learner to try first", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "AFTER_LEARNER_FIRST violated: ", bold: true }),
                    new TextRun({ text: "Model explained before learner attempted", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 },
                children: [
                    new TextRun({ text: "Frustration not detected: ", bold: true }),
                    new TextRun({ text: "Model kept pushing Socratic method on frustrated learners", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, spacing: { after: 200 },
                children: [
                    new TextRun({ text: "Concept coverage low: ", bold: true }),
                    new TextRun({ text: "Not consistently teaching 2-3 concepts per response", bold: false })
                ] }),

            // Changes Made
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4. Changes Made to teach_skill.py")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.1 Permission Check at Prompt Top")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Added \"STOP! PERMISSION CHECK\" section at the very beginning of the prompt to force the model to verify if the learner has attempted before explaining.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.2 Explicit Rejection Examples")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Added concrete examples showing exactly what to say when a learner asks for explanation before trying:", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Learner: \"Can you explain?\" -> Tutor: \"I want to hear your thinking first!\"", bold: false, italics: true })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 },
                children: [new TextRun({ text: "Learner: \"Just tell me\" -> Tutor: \"Take a guess first, then I'll explain everything\"", bold: false, italics: true })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.3 Strengthened PREDICT Stage")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Changed soft language (\"you may NOT explain\") to strong enforcement (\"NEVER explain. Even if they ask.\"). Added specific responses for \"I don't know\" and \"just tell me\" scenarios.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.4 Frustration Detection Section")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Added explicit frustration signals (\"ugh\", \"frustrating\", \"I give up\") with instructions to SHIFT to Direct Instruction immediately rather than continuing Socratic questioning.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.5 RUN Stage \"Teach, Don't Ask\"")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Added explicit table showing DO THIS vs NOT THIS for RUN stage, with good/bad example responses. Emphasized that in RUN stage, the tutor teaches richly rather than asking more questions.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4.6 Concept Extraction System")] }),
            new Paragraph({ spacing: { after: 200 },
                children: [new TextRun({ text: "Added extract_key_concepts() function that automatically identifies key concepts from lesson content (bold terms, list items) and injects a \"CONCEPTS TO COVER\" section into the prompt with explicit teaching order.", bold: false })] }),

            // Final Results
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5. Final Results (After Fixes)")] }),
            new Table({
                columnWidths: [3200, 1200, 1200, 1200, 1200, 1200, 1160],
                rows: [
                    row([
                        cell("Scenario", { header: true, width: 3200 }),
                        cell("Stage", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Perm", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Cover", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Scaff", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Brief", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("TOTAL", { header: true, width: 1160, align: AlignmentType.CENTER })
                    ], { header: true }),
                    row([
                        cell("PREDICT Redirect", { width: 3200 }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("60", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("86-100", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("RUN Teach Richly", { width: 3200, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("40", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("51-69", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ]),
                    row([
                        cell("INVESTIGATE Learner First", { width: 3200 }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("60", { width: 1200, align: AlignmentType.CENTER }),
                        cell("80", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("87-97", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("Frustration Detection", { width: 3200, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("30", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("40", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("73-78", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ]),
                    row([
                        cell("MAKE Spec Enforcement", { width: 3200 }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("40", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER }),
                        cell("57-88", { width: 1160, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("Session Opening", { width: 3200, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("60", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("50", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("100", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("74-87", { width: 1160, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { before: 120, after: 200 },
                children: [
                    new TextRun({ text: "Final Average: ", bold: true }),
                    new TextRun({ text: "72-81/100 (Grade C to B)", bold: false, color: "008800" })
                ] }),

            // Improvement Summary
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6. Improvement Summary")] }),
            new Table({
                columnWidths: [3500, 2500, 2500, 860],
                rows: [
                    row([
                        cell("Scenario", { header: true, width: 3500 }),
                        cell("Before", { header: true, width: 2500, align: AlignmentType.CENTER }),
                        cell("After", { header: true, width: 2500, align: AlignmentType.CENTER }),
                        cell("Change", { header: true, width: 860, align: AlignmentType.CENTER })
                    ], { header: true }),
                    row([
                        cell("PREDICT Redirect", { width: 3500 }),
                        cell("22.0", { width: 2500, align: AlignmentType.CENTER }),
                        cell("86-100", { width: 2500, align: AlignmentType.CENTER }),
                        cell("+64-78", { width: 860, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("INVESTIGATE Learner First", { width: 3500, shading: altRowShading }),
                        cell("32.0", { width: 2500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("87-97", { width: 2500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("+55-65", { width: 860, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ]),
                    row([
                        cell("Frustration Detection", { width: 3500 }),
                        cell("22.0", { width: 2500, align: AlignmentType.CENTER }),
                        cell("73-78", { width: 2500, align: AlignmentType.CENTER }),
                        cell("+51-56", { width: 860, align: AlignmentType.CENTER, bold: true })
                    ]),
                    row([
                        cell("Overall Average", { width: 3500, bold: true, shading: altRowShading }),
                        cell("47.3 (F)", { width: 2500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("72-81 (C-B)", { width: 2500, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("+25-34", { width: 860, align: AlignmentType.CENTER, bold: true, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            // Remaining Issues
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7. Remaining Issues")] }),
            new Table({
                columnWidths: [2800, 1200, 5360],
                rows: [
                    row([
                        cell("Issue", { header: true, width: 2800 }),
                        cell("Score", { header: true, width: 1200, align: AlignmentType.CENTER }),
                        cell("Root Cause", { header: true, width: 5360 })
                    ], { header: true }),
                    row([
                        cell("Concept Coverage", { width: 2800, bold: true }),
                        cell("43-57%", { width: 1200, align: AlignmentType.CENTER }),
                        cell("Model doesn't always hit 2-3 concepts per response", { width: 5360 })
                    ]),
                    row([
                        cell("LLM Response Variance", { width: 2800, bold: true, shading: altRowShading }),
                        cell("+/- 5-10%", { width: 1200, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Non-deterministic responses cause score fluctuation", { width: 5360, shading: altRowShading })
                    ]),
                    row([
                        cell("Scaffolding Adaptation", { width: 2800, bold: true }),
                        cell("67-80%", { width: 1200, align: AlignmentType.CENTER }),
                        cell("Doesn't always perfectly match learner level", { width: 5360 })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            // Recommendations
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8. Recommendations for Further Improvement")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8.1 Short-Term (Prompt Engineering)")] }),
            new Paragraph({ numbering: { reference: "recommendations-list", level: 0 },
                children: [
                    new TextRun({ text: "Add more few-shot examples: ", bold: true }),
                    new TextRun({ text: "Include 2-3 complete conversation examples for each PRIMM stage showing ideal responses.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "recommendations-list", level: 0 },
                children: [
                    new TextRun({ text: "Explicit concept lists: ", bold: true }),
                    new TextRun({ text: "Pre-define key concepts for each lesson in YAML frontmatter rather than extracting dynamically.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "recommendations-list", level: 0 }, spacing: { after: 120 },
                children: [
                    new TextRun({ text: "Stronger RUN stage enforcement: ", bold: true }),
                    new TextRun({ text: "Add a \"CONCEPT CHECKLIST\" that model must mentally check off during RUN stage responses.", bold: false })
                ] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8.2 Medium-Term (Model Selection)")] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Test with Claude 3.5 Sonnet: ", bold: true }),
                    new TextRun({ text: "Generally follows complex instructions more reliably than GPT-4o-mini.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Test with GPT-4o: ", bold: true }),
                    new TextRun({ text: "Full GPT-4o may follow stage rules better than mini variant.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 },
                children: [
                    new TextRun({ text: "A/B test models: ", bold: true }),
                    new TextRun({ text: "Run evaluation across 3-4 models and select best performer per scenario.", bold: false })
                ] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8.3 Long-Term (Fine-Tuning)")] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Collect teaching dialogues: ", bold: true }),
                    new TextRun({ text: "Record real tutor-student conversations following PRIMM-AI+ methodology.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Fine-tune on teaching data: ", bold: true }),
                    new TextRun({ text: "Train a specialized teaching model that inherently follows PRIMM stages.", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [
                    new TextRun({ text: "RLHF with pedagogical rewards: ", bold: true }),
                    new TextRun({ text: "Use the weighted evaluation function as a reward signal for reinforcement learning.", bold: false })
                ] }),

            // Conclusion
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("9. Conclusion")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The weighted evaluation function approach successfully identified and quantified deficiencies in the PRIMM-AI+ teaching methodology implementation. Through systematic prompt engineering, we achieved a 53-72% relative improvement in teaching quality scores.", bold: false })] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The most significant improvements came from:", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Adding explicit permission checks at the top of the prompt", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Providing concrete rejection examples for AI_FREE checkpoints", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Implementing frustration detection with approach-shifting behavior", bold: false })] }),
            new Paragraph({ spacing: { after: 200 },
                children: [new TextRun({ text: "Future work should focus on concept coverage consistency and exploring alternative models that may follow complex pedagogical instructions more reliably.", bold: false })] }),

            // PRIMM-AI+ Methodology Overview
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10. PRIMM-AI+ Methodology Overview")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "PRIMM-AI+ is an adaptation of the proven PRIMM programming pedagogy (Predict, Run, Investigate, Modify, Make) enhanced for AI-assisted personalized learning. This section explains the methodology and how it enables effective personalized teaching.", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("10.1 The Five PRIMM Stages")] }),
            new Table({
                columnWidths: [2000, 2300, 5060],
                rows: [
                    row([
                        cell("Stage", { header: true, width: 2000 }),
                        cell("AI Permission", { header: true, width: 2300, align: AlignmentType.CENTER }),
                        cell("Pedagogical Purpose", { header: true, width: 5060 })
                    ], { header: true }),
                    row([
                        cell("1. PREDICT", { width: 2000, bold: true }),
                        cell("AFTER_LEARNER_FIRST", { width: 2300, align: AlignmentType.CENTER }),
                        cell("Learner predicts code behavior before seeing results. Activates prior knowledge and reveals misconceptions.", { width: 5060 })
                    ]),
                    row([
                        cell("2. RUN", { width: 2000, bold: true, shading: altRowShading }),
                        cell("AI_FREE", { width: 2300, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Learner executes code, compares prediction to reality. Tutor explains concepts richly (2-3 per response).", { width: 5060, shading: altRowShading })
                    ]),
                    row([
                        cell("3. INVESTIGATE", { width: 2000, bold: true }),
                        cell("AFTER_LEARNER_FIRST", { width: 2300, align: AlignmentType.CENTER }),
                        cell("Learner explores code behavior through questions. Tutor guides discovery without giving away answers prematurely.", { width: 5060 })
                    ]),
                    row([
                        cell("4. MODIFY", { width: 2000, bold: true, shading: altRowShading }),
                        cell("AFTER_LEARNER_FIRST", { width: 2300, align: AlignmentType.CENTER, shading: altRowShading }),
                        cell("Learner makes small changes to working code. Builds confidence through successful modifications.", { width: 5060, shading: altRowShading })
                    ]),
                    row([
                        cell("5. MAKE", { width: 2000, bold: true }),
                        cell("AI_FREE", { width: 2300, align: AlignmentType.CENTER }),
                        cell("Learner creates new code using learned concepts. Spec-first approach encouraged for professional practice.", { width: 5060 })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("10.2 AI Permission Levels")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "A key innovation of PRIMM-AI+ is the permission system that controls when the AI tutor can explain versus when it must redirect:", bold: false })] }),
            new Table({
                columnWidths: [2800, 6560],
                rows: [
                    row([
                        cell("Permission Level", { header: true, width: 2800 }),
                        cell("Behavior", { header: true, width: 6560 })
                    ], { header: true }),
                    row([
                        cell("AI_FREE", { width: 2800, bold: true }),
                        cell("Tutor CAN explain directly. Used after learner has attempted or in RUN/MAKE stages where direct instruction is appropriate.", { width: 6560 })
                    ]),
                    row([
                        cell("AFTER_LEARNER_FIRST", { width: 2800, bold: true, shading: altRowShading }),
                        cell("Tutor must REDIRECT learner to attempt first. If learner asks \"explain this\", tutor responds \"What's your prediction?\" Used in PREDICT/INVESTIGATE/MODIFY stages.", { width: 6560, shading: altRowShading })
                    ]),
                    row([
                        cell("FRUSTRATION_OVERRIDE", { width: 2800, bold: true }),
                        cell("Emergency override when learner shows frustration (\"ugh\", \"just tell me\", \"I give up\"). Tutor immediately shifts to Direct Instruction to prevent dropout.", { width: 6560 })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            // Personalized Teaching
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("11. Personalized Teaching Profiles")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The PRIMM-AI+ implementation uses learner profiles to adapt teaching style, complexity, and pacing to individual needs:", bold: false })] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("11.1 Profile Dimensions")] }),
            new Table({
                columnWidths: [2400, 6960],
                rows: [
                    row([
                        cell("Dimension", { header: true, width: 2400 }),
                        cell("Personalization Effect", { header: true, width: 6960 })
                    ], { header: true }),
                    row([
                        cell("Domain Level", { width: 2400, bold: true }),
                        cell("Beginner/Intermediate/Advanced: Adjusts prerequisite assumptions and explanation depth", { width: 6960 })
                    ]),
                    row([
                        cell("Programming Level", { width: 2400, bold: true, shading: altRowShading }),
                        cell("None/Beginner/Advanced: Determines whether to explain syntax basics or assume familiarity", { width: 6960, shading: altRowShading })
                    ]),
                    row([
                        cell("AI Fluency", { width: 2400, bold: true }),
                        cell("Beginner/Intermediate/Advanced: Shapes how prompting techniques are taught", { width: 6960 })
                    ]),
                    row([
                        cell("Language Complexity", { width: 2400, bold: true, shading: altRowShading }),
                        cell("Plain/Professional/Technical: Vocabulary and jargon level in explanations", { width: 6960, shading: altRowShading })
                    ]),
                    row([
                        cell("Preferred Structure", { width: 2400, bold: true }),
                        cell("Problem-First/Concept-First/Example-First: How new topics are introduced", { width: 6960 })
                    ]),
                    row([
                        cell("Verbosity", { width: 2400, bold: true, shading: altRowShading }),
                        cell("Concise/Moderate/Detailed: Response length calibration", { width: 6960, shading: altRowShading })
                    ]),
                    row([
                        cell("Tone", { width: 2400, bold: true }),
                        cell("Encouraging/Conversational/Formal: Emotional register of responses", { width: 6960 })
                    ]),
                    row([
                        cell("Cognitive Load", { width: 2400, bold: true, shading: altRowShading }),
                        cell("Reduced/Standard/High: Number of concepts per response (1-2/2-3/3-4)", { width: 6960, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("11.2 Sample Learner Profiles")] }),
            new Table({
                columnWidths: [1800, 2400, 2400, 2760],
                rows: [
                    row([
                        cell("Profile", { header: true, width: 1800 }),
                        cell("Background", { header: true, width: 2400 }),
                        cell("Teaching Style", { header: true, width: 2400 }),
                        cell("Key Adaptations", { header: true, width: 2760 })
                    ], { header: true }),
                    row([
                        cell("Marcus", { width: 1800, bold: true }),
                        cell("Student, beginner in all areas", { width: 2400 }),
                        cell("Encouraging, detailed, annotated code", { width: 2400 }),
                        cell("Plain language, problem-first, reduced cognitive load", { width: 2760 })
                    ]),
                    row([
                        cell("Fatima", { width: 1800, bold: true, shading: altRowShading }),
                        cell("Finance analyst, advanced in domain, beginner programmer", { width: 2400, shading: altRowShading }),
                        cell("Professional, moderate, relates to finance", { width: 2400, shading: altRowShading }),
                        cell("Uses finance examples, explains code basics thoroughly", { width: 2760, shading: altRowShading })
                    ]),
                    row([
                        cell("Raj", { width: 1800, bold: true }),
                        cell("Senior developer, advanced in all areas", { width: 2400 }),
                        cell("Formal, concise, minimal code annotations", { width: 2400 }),
                        cell("Technical language, concept-first, high cognitive load", { width: 2760 })
                    ]),
                    row([
                        cell("Ahmed", { width: 1800, bold: true, shading: altRowShading }),
                        cell("Urdu-speaking student, beginner, everyday focus", { width: 2400, shading: altRowShading }),
                        cell("Encouraging, example-first, code-switching allowed", { width: 2400, shading: altRowShading }),
                        cell("Bilingual responses, reduced complexity, relatable examples", { width: 2760, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            // Why PRIMM-AI+ is Better
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("12. Why PRIMM-AI+ is Better")] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("12.1 Advantages Over Traditional AI Tutoring")] }),
            new Table({
                columnWidths: [3200, 6160],
                rows: [
                    row([
                        cell("Challenge", { header: true, width: 3200 }),
                        cell("PRIMM-AI+ Solution", { header: true, width: 6160 })
                    ], { header: true }),
                    row([
                        cell("AI gives answers too quickly", { width: 3200, bold: true }),
                        cell("Permission system forces learner-first attempts in PREDICT/INVESTIGATE/MODIFY stages, building genuine understanding", { width: 6160 })
                    ]),
                    row([
                        cell("One-size-fits-all responses", { width: 3200, bold: true, shading: altRowShading }),
                        cell("8+ profile dimensions adapt language, pacing, examples, and complexity to individual learners", { width: 6160, shading: altRowShading })
                    ]),
                    row([
                        cell("Learner becomes dependent on AI", { width: 3200, bold: true }),
                        cell("MAKE stage requires spec-first thinking; learner writes requirements before AI assists with implementation", { width: 6160 })
                    ]),
                    row([
                        cell("AI ignores frustration", { width: 3200, bold: true, shading: altRowShading }),
                        cell("FRUSTRATION_OVERRIDE detects stress signals and shifts approach to prevent dropout", { width: 6160, shading: altRowShading })
                    ]),
                    row([
                        cell("Shallow concept coverage", { width: 3200, bold: true }),
                        cell("Automatic concept extraction ensures 2-3 key concepts per RUN stage response with explicit teaching order", { width: 6160 })
                    ]),
                    row([
                        cell("No quality measurement", { width: 3200, bold: true, shading: altRowShading }),
                        cell("Weighted evaluation function provides quantifiable teaching quality scores across 6 dimensions", { width: 6160, shading: altRowShading })
                    ])
                ]
            }),
            new Paragraph({ spacing: { after: 200 }, children: [] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("12.2 Research Foundation")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "PRIMM-AI+ builds on established pedagogical research:", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "PRIMM (Sentance & Waite, 2017): ", bold: true }),
                    new TextRun({ text: "Proven methodology for teaching programming through prediction and modification", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Zone of Proximal Development (Vygotsky): ", bold: true }),
                    new TextRun({ text: "Scaffolding adapts to learner's current level, not too easy, not too hard", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [
                    new TextRun({ text: "Cognitive Load Theory (Sweller): ", bold: true }),
                    new TextRun({ text: "Profile-based cognitive load preferences prevent information overload", bold: false })
                ] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [
                    new TextRun({ text: "Active Learning: ", bold: true }),
                    new TextRun({ text: "AFTER_LEARNER_FIRST permission ensures learners engage actively rather than passively receiving information", bold: false })
                ] }),

            new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("12.3 Measurable Improvements")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The evaluation framework provides quantifiable evidence of teaching quality:", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Stage alignment: Ensures correct pedagogical behavior at each PRIMM phase", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Permission compliance: Verifies learner-first principles are honored", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Concept coverage: Confirms sufficient depth per interaction", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 },
                children: [new TextRun({ text: "Scaffolding: Validates adaptation to learner profile", bold: false })] }),
            new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 200 },
                children: [new TextRun({ text: "Baseline → Final: 47.3 → 72-81 (53-72% improvement) demonstrates measurable progress", bold: false })] }),

            // Appendix
            new Paragraph({ children: [new PageBreak()] }),
            new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Appendix A: Evaluation Function Formula")] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "The complete weighted evaluation function used in this report:", bold: false })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 },
                children: [new TextRun({ text: "f(x) = 0.25 * StageAlignment(x) + 0.25 * PermissionCompliance(x)", italics: true, bold: false })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
                children: [new TextRun({ text: "+ 0.15 * ConceptCoverage(x) + 0.15 * Scaffolding(x)", italics: true, bold: false })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
                children: [new TextRun({ text: "+ 0.10 * Brevity(x) + 0.10 * QuestionQuality(x)", italics: true, bold: false })] }),
            new Paragraph({ spacing: { after: 120 },
                children: [new TextRun({ text: "Where x is the tutor's response and each criterion function returns a score from 0 to 100.", bold: false })] })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("PRIMM-AI-Evaluation-Report.docx", buffer);
    console.log("Report generated: PRIMM-AI-Evaluation-Report.docx");
});
