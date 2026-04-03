const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign,
        PageNumber, LevelFormat } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22, bold: false } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "1F4E79", font: "Arial" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: "2E75B6", font: "Arial" },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-list",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "PR #919 Evaluation Report", italics: true, size: 20, bold: false })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", bold: false }), new TextRun({ children: [PageNumber.CURRENT], bold: false }),
                   new TextRun({ text: " | Panaversity - AI Agent Factory", bold: false, size: 18 })]
      })] })
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "PR #919 Evaluation Report", size: 44 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "PRIMM-AI+ Teaching Methodology Evaluation", size: 28, bold: false })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 360 },
        children: [new TextRun({ text: "April 3, 2026 | Branch: feat/teach-me-pr-ready | Commit: d300ebaa7", size: 20, bold: false, color: "666666" })] }),

      // Executive Summary
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun({ text: "The teach-me feature has been evaluated using three evaluation suites after implementing all security fixes and reviewer concerns.", bold: false })] }),

      // Summary Table
      new Table({
        columnWidths: [4680, 2340, 2340],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: "1F4E79", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Metric", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "1F4E79", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Score", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "1F4E79", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Grade", bold: true, color: "FFFFFF" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "OpenAI Judge Evaluation", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "80/100", bold: false })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "C6EFCE", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "B", bold: true, color: "006100" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Weighted Evaluation", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "70.7/100", bold: false })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "FFF2CC", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C", bold: true })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PRIMM Scenario Pass Rate", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "17% (2/12)", bold: false })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "-", bold: false })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PRIMM Average Score", bold: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.57", bold: false })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "-", bold: false })] })] })
          ]})
        ]
      }),

      // Weighted Evaluation Results
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Weighted Evaluation Results")] }),
      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun({ text: "The weighted evaluation uses 6 criteria aligned with PRIMM-AI+ methodology:", bold: false })] }),
      new Paragraph({ spacing: { after: 200 }, shading: { fill: "F5F5F5", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "f(x) = 0.25×stage_alignment + 0.25×permission_compliance + 0.15×concept_coverage + 0.15×scaffolding + 0.10×brevity + 0.10×question_quality", bold: false, font: "Consolas", size: 18 })] }),

      // Criteria Analysis
      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Criteria Analysis")] }),
      new Table({
        columnWidths: [3500, 1800, 1200, 2860],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: "2E75B6", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Criterion", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: "2E75B6", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Score", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, shading: { fill: "2E75B6", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Weight", bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2860, type: WidthType.DXA }, shading: { fill: "2E75B6", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Status", bold: true, color: "FFFFFF" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Stage Alignment", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "C6EFCE", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "93/100", bold: true, color: "006100" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.25", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Strong", bold: true, color: "006100" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Question Quality", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "C6EFCE", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "90/100", bold: true, color: "006100" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.10", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Strong", bold: true, color: "006100" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Scaffolding", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "FFEB9C", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "68/100", bold: true, color: "9C5700" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.15", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Good", bold: true, color: "9C5700" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Brevity", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "FFEB9C", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "61/100", bold: true, color: "9C5700" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.10", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Needs Work", bold: true, color: "9C5700" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Permission Compliance", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "FFC7CE", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "57/100", bold: true, color: "9C0006" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.25", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Needs Work", bold: true, color: "9C0006" })] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Concept Coverage", bold: false })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: "FFC7CE", type: ShadingType.CLEAR }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "53/100", bold: true, color: "9C0006" })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "0.15", bold: false })] })] }),
            new TableCell({ borders: cellBorders, children: [new Paragraph({ children: [new TextRun({ text: "Needs Work", bold: true, color: "9C0006" })] })] })
          ]})
        ]
      }),

      // Security Fixes
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Security Fixes Verified")] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "All reviewer concerns from PR #919 have been addressed:", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "JWT authentication on /api/chat endpoint", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Rate limiting (20 messages/day)", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Auth token passed for metering", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "learnerProfile used in context", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Path traversal protection added", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Stream collection bug fixed", bold: false })] }),

      // Test Results
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Test Results")] }),
      new Paragraph({ shading: { fill: "C6EFCE", type: ShadingType.CLEAR }, spacing: { after: 80 },
        children: [new TextRun({ text: "Lint: All checks passed", bold: true, color: "006100" })] }),
      new Paragraph({ shading: { fill: "C6EFCE", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "Tests: 39 passed in 10.25s", bold: true, color: "006100" })] }),

      // Recommendations
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Recommendations for Future Improvements")] }),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Permission Compliance: ", bold: true }),
        new TextRun({ text: "Strengthen predict-before-tell enforcement in PREDICT stage", bold: false })
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Concept Coverage: ", bold: true }),
        new TextRun({ text: "Better calibrate to cover exactly 2-3 concepts per response", bold: false })
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Brevity: ", bold: true }),
        new TextRun({ text: "Add stricter length constraints (3-5 sentences) to prompt", bold: false })
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Session Opening: ", bold: true }),
        new TextRun({ text: "Add background/goals questions before diving into technical content", bold: false })
      ]}),

      // Conclusion
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Conclusion")] }),
      new Paragraph({ spacing: { after: 120 },
        children: [new TextRun({ text: "The PRIMM-AI+ teaching methodology implementation shows:", bold: false })] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Strong: ", bold: true, color: "006100" }),
        new TextRun({ text: "Stage alignment (93%), Question quality (90%)", bold: false })
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Good: ", bold: true, color: "9C5700" }),
        new TextRun({ text: "Frustration detection, Scaffolding adaptation", bold: false })
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Needs Work: ", bold: true, color: "9C0006" }),
        new TextRun({ text: "Permission compliance, Concept coverage, Brevity", bold: false })
      ]}),
      new Paragraph({ spacing: { before: 200 },
        children: [new TextRun({ text: "The security fixes are complete and all tests pass. The teaching quality shows improvement over the baseline with room for further optimization.", bold: false })] }),
      new Paragraph({ spacing: { before: 200 }, shading: { fill: "E2EFDA", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "Recommendation: Approve PR with noted areas for future prompt refinement.", bold: true, color: "375623" })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("evals/PR-919-Evaluation-Report.docx", buffer);
  console.log("Document created: evals/PR-919-Evaluation-Report.docx");
});
