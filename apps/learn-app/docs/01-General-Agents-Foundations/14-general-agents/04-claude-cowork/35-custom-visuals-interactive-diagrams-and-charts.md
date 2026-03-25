---
slug: /General-Agents-Foundations/general-agents/custom-visuals-interactive-diagrams-and-charts
title: "Custom Visuals: Interactive Diagrams and Charts"
sidebar_position: 35
chapter: 14
lesson: 35
duration_minutes: 30
chapter_type: Practical
running_example_id: custom-visuals

# PEDAGOGICAL LAYER METADATA
primary_layer: "Layer 2"
layer_progression: "L2 (Collaboration)"
layer_1_foundation: "N/A"
layer_2_collaboration: "Students create interactive visuals in Claude chat, iterate on them conversationally, export results, and evaluate when visuals complement text-based Cowork workflows"
layer_3_intelligence: "N/A"
layer_4_capstone: "N/A"

# HIDDEN SKILLS METADATA (Institutional Integration Layer)
skills:
  - name: "Interactive Visual Generation"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Create"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can prompt Claude to generate interactive diagrams, charts, and visual elements; interact with the output; and export results as SVG, HTML, or persistent artifacts"

  - name: "Visual Iteration and Refinement"
    proficiency_level: "B1"
    category: "Applied"
    bloom_level: "Evaluate"
    digcomp_area: "Digital Content Creation"
    measurable_at_this_level: "Student can evaluate a generated visual, identify what needs changing, and prompt Claude to refine colors, layout, labels, or structure within the same conversation"

  - name: "Data Visualization from Raw Sources"
    proficiency_level: "A2"
    category: "Applied"
    bloom_level: "Apply"
    digcomp_area: "Information and Data Literacy"
    measurable_at_this_level: "Student can upload a CSV or paste data into Claude chat and request an interactive chart that makes the data explorable"

learning_objectives:
  - objective: "Generate interactive diagrams and charts by describing what you need in natural language"
    proficiency_level: "B1"
    bloom_level: "Create"
    assessment_method: "Student produces at least two different visual types (diagram and chart) from conversational prompts"
  - objective: "Interact with and export custom visuals using Claude's built-in controls"
    proficiency_level: "A2"
    bloom_level: "Apply"
    assessment_method: "Student demonstrates expanding a visual full-screen, downloading as SVG or HTML, and saving as an artifact"
  - objective: "Iterate on visuals mid-conversation to refine design, layout, and content"
    proficiency_level: "B1"
    bloom_level: "Evaluate"
    assessment_method: "Student makes at least two refinement requests that improve an initial visual"
  - objective: "Distinguish where custom visuals work (web and desktop chat) from where they do not (Cowork, mobile)"
    proficiency_level: "A2"
    bloom_level: "Understand"
    assessment_method: "Student correctly identifies platform availability when planning a workflow"

cognitive_load:
  new_concepts: 5
  assessment: "5 concepts (custom visuals generation, interactive elements, export formats, artifact conversion, platform limitations): within B1 limit of 7"

differentiation:
  extension_for_advanced: "Upload a multi-sheet CSV dataset and ask Claude to create a dashboard with three linked charts; iterate until the dashboard tells a coherent data story"
  remedial_for_struggling: "Start with a single flowchart of a process you know well (like your morning routine); focus on getting comfortable with the generate-interact-export cycle before trying data charts"

# Generation metadata
generated_by: "writer-visuals agent"
created: "2026-03-24"
last_modified: "2026-03-24"
git_author: "Claude Code"
workflow: "manual"
version: "1.0.0"

prerequisites:
  - "Claude Pro, Team, or Enterprise account (free tier has limited visual generation)"
  - "Access to claude.ai (web) or Claude Desktop app"

teaching_guide:
  lesson_type: "hands-on"
  session_group: 9
  session_title: "Custom Visuals in Claude Chat"
  key_points:
    - "Custom visuals are built from HTML, making them genuinely interactive (clickable, adjustable) rather than static images"
    - "The key workflow is generate, interact, iterate, export: students should internalize this as a cycle, not a one-shot operation"
    - "Custom visuals are ephemeral by default; students must explicitly save as artifact or download to preserve them"
    - "Platform limitation is critical: visuals render in web and desktop chat only, NOT in Cowork sessions, mobile apps, or API responses"
  misconceptions:
    - "Students assume custom visuals work everywhere Claude works: they must understand the web/desktop chat constraint before planning workflows around visuals"
    - "Students treat the first generated visual as final: the real power is iterative refinement through follow-up prompts"
    - "Students confuse custom visuals with artifacts: visuals are ephemeral and inline; artifacts are persistent and shareable from the start"
  discussion_prompts:
    - "You generated a workflow diagram in Claude chat and now need to share it with a colleague who uses Cowork. What are your options for getting the visual to them?"
    - "When would a custom visual be more useful than a text-based explanation? When would text be better?"
  teaching_tips:
    - "Run Exercise 1 as a live demo first so students see the interactive elements (buttons, sliders) in action before trying themselves"
    - "Have students compare a visual they generated with a classmate's visual from the same prompt: the differences demonstrate why iteration matters"
    - "Emphasize the export step: students who skip it lose their work when the conversation ends"
  assessment_quick_check:
    - "Name three ways to preserve a custom visual before closing the conversation"
    - "Why can you not use custom visuals in a Cowork session, and what would you do instead?"
---

# Custom Visuals: Interactive Diagrams and Charts

When you ask Claude to explain a process, compare options, or analyze data, sometimes text alone falls short. Custom visuals let Claude build interactive diagrams, charts, and visual elements directly in your conversation. You click buttons, adjust sliders, expand to full screen, and keep asking follow-up questions to refine the result.

This lesson is hands-on. You will generate visuals, interact with them, export them, and learn where this feature works and where it does not.

:::caution Where Custom Visuals Work
Custom visuals render in **Claude web chat** (claude.ai) and the **Claude Desktop app** only. They do **not** render in Cowork sessions, mobile apps, or API responses. Everything in this lesson happens in Claude chat, not in Cowork.
:::

---

## What Are Custom Visuals?

When Claude generates a custom visual, it writes HTML and renders it inline in the conversation. This is not a static image: the output is a live, interactive element built from the same building blocks as web pages. You can click elements to reveal details, hover for tooltips, drag to rearrange, or use sliders to adjust parameters.

Claude decides when a visual would help, but you can also ask directly. Phrases like "draw this as a diagram," "chart this data," or "show me a flowchart" trigger visual generation.

**Three things to know before you start:**

1. **Visuals are ephemeral.** They live inside the conversation. If you close the chat without saving, the visual is gone.
2. **Visuals are interactive.** Unlike screenshots or pasted images, you can manipulate them.
3. **Visuals are iterative.** Ask Claude to change colors, swap layouts, add labels, or restructure. Each request refines the same visual.

---

## Exercise 1: Generate an Interactive Workflow Diagram

Open claude.ai or Claude Desktop. Start a new conversation and type this prompt:

> "Create an interactive flowchart showing the steps of hiring a new employee: job posting, resume screening, phone interview, technical assessment, final interview, offer, onboarding. Make each step clickable to reveal a short description of what happens at that stage. Use a clean, professional color scheme."

**What to watch for:**

- Claude generates HTML that renders as a clickable flowchart inside the conversation
- Each step should be a clickable element; click one and a description appears
- The visual appears inline, not as a separate file or link

**Now interact with it:**

1. Click each step. Read the descriptions Claude wrote.
2. Look for the expand icon (usually in the top-right corner of the visual). Click it to go full screen.
3. Exit full screen and notice the visual is still embedded in the conversation.

**Now iterate.** Type a follow-up:

> "Change the color scheme to blue and gray. Add a decision diamond after 'Resume Screening' for 'Qualified?' with Yes going to Phone Interview and No going to Rejection Email. Also add estimated timeframes to each step."

Claude rebuilds the visual with your changes. This is the core loop: generate, interact, refine.

### Saving Your Work

Custom visuals disappear when you close the conversation. Three ways to preserve them:

| Method               | What You Get                   | Best For                                     |
| -------------------- | ------------------------------ | -------------------------------------------- |
| **Copy as Image**    | Static PNG/screenshot          | Dropping into slides or documents            |
| **Download**         | .svg or .html file             | Editable vector graphics or interactive HTML |
| **Save as Artifact** | Persistent, shareable artifact | Ongoing iteration across conversations       |

To download: hover over the visual and look for the download icon. Choose SVG for a clean vector image or HTML for an interactive file you can open in any browser.

To save as an artifact: ask Claude "save this visual as an artifact." The visual becomes a persistent artifact you can share, revisit, and continue editing.

:::tip Export Early
Get into the habit of exporting before you refine further. If an iteration goes sideways, you can always reference the exported version and ask Claude to start from there.
:::

---

## Exercise 2: Visualize Data from a CSV

Custom visuals are not limited to diagrams. You can upload data and ask Claude to chart it interactively.

**Option A: Upload a file.** If you have a CSV file (sales data, survey results, anything tabular), drag it into the Claude chat window or use the attachment button.

**Option B: Paste data directly.** If you do not have a CSV handy, paste this sample data into your conversation:

> "Here is quarterly revenue data for three product lines. Create an interactive bar chart that lets me hover over each bar to see the exact value. Add a toggle to switch between grouped and stacked views.
>
> Product A: Q1 $120K, Q2 $145K, Q3 $132K, Q4 $168K
> Product B: Q1 $85K, Q2 $92K, Q3 $78K, Q4 $105K
> Product C: Q1 $200K, Q2 $215K, Q3 $240K, Q4 $228K"

**What to watch for:**

- Claude generates an interactive chart, not a static image
- Hover over bars to see values
- Look for any toggles or controls Claude built into the visualization
- The chart should be responsive: resize your browser window and watch it adapt

**Now iterate:**

> "Add a line chart overlay showing the total revenue trend across all three products. Change the color palette to use our brand colors: navy (#1a365d), teal (#2c7a7b), and coral (#e53e3e). Add a title and axis labels."

Each refinement builds on the previous visual. You are directing Claude like a designer directing an illustrator.

---

## Exercise 3: From Chat Visual to Cowork Workflow

Custom visuals do not render in Cowork, but they still play a role in Cowork-centered workflows. The pattern: generate and refine visuals in chat, then use the exported files in your Cowork projects.

**Try this workflow:**

1. In Claude chat, generate a visual:

> "Create an interactive organizational chart for a marketing team with: VP Marketing at the top, three directors (Brand, Digital, Content) reporting to the VP, and two managers under each director. Make it expandable so clicking a director shows their managers. Include role descriptions on hover."

2. Interact with the result. Click to expand. Hover for descriptions. Make sure it looks right.

3. Download the visual as both SVG and HTML:
   - The SVG goes into a slide deck or document
   - The HTML opens in any browser as a standalone interactive page

4. Now switch to Cowork (or plan how you would). The exported files become inputs for Cowork tasks:
   - "Add this org chart SVG to page 3 of the quarterly report in my Documents folder"
   - "Create a team directory document based on the roles in this org chart"

The visual generation happened in chat. The file integration happens in Cowork. Each tool does what it does best.

---

## Platform Availability

Understanding where custom visuals work prevents frustration when you plan workflows around them.

| Platform           | Custom Visuals | Notes                                            |
| ------------------ | :------------: | ------------------------------------------------ |
| claude.ai (web)    |      Yes       | Full interactive support                         |
| Claude Desktop app |      Yes       | Full interactive support                         |
| Claude iOS app     |       No       | Text responses only                              |
| Claude Android app |       No       | Text responses only                              |
| Cowork sessions    |       No       | Use chat for visuals, Cowork for file operations |
| API responses      |       No       | HTML returned as text, not rendered              |

**Shared conversations:** If you share a conversation that contains custom visuals, the recipient must be logged in on web or desktop to see them rendered. Otherwise they see the raw HTML.

---

## Tips for Better Visuals

**Be specific about interactivity.** "Make it clickable" is vague. "Make each node clickable to reveal a 2-sentence description" tells Claude exactly what behavior to build.

**Name your colors.** Instead of "make it colorful," provide hex codes or describe the palette: "use a monochrome blue palette" or "match these brand colors: #1a365d, #2c7a7b."

**Use Claude Opus for complex visuals.** If you have model selection available, Opus produces the most sophisticated visualizations. Sonnet handles simpler diagrams well.

**Iterate in small steps.** Asking for five changes at once sometimes produces unexpected results. Ask for one or two changes at a time, verify, then continue.

**Ask Claude to explain its visual.** After generating a diagram, try: "Walk me through this visual, what does each element represent?" This catches misinterpretations early.

---

## Try With AI

### Prompt 1: Map a Process You Know

Use this prompt in Claude chat (web or desktop):

> "Create an interactive flowchart of [a process from your work or studies: onboarding a client, writing a research paper, planning an event, debugging code]. Make each step clickable to show what tools or resources are needed. Add decision points where the process can branch. Use color coding: green for steps that are usually quick, yellow for steps that often cause delays."

**What you're learning:** Visual generation from domain knowledge. You are translating a process you understand into an interactive format, then evaluating whether Claude's interpretation matches your mental model. The color-coding forces you to think critically about where bottlenecks actually are.

### Prompt 2: Chart Real Data

Upload a CSV or paste data you care about (grades, expenses, project timelines, anything with numbers) and use this prompt:

> "Create an interactive chart of this data. Choose the chart type that best reveals patterns (bar, line, scatter, or combination). Add hover details for exact values. Include at least one interactive control: a filter, a toggle between views, or a time range slider. Explain why you chose this chart type."

**What you're learning:** Data visualization judgment. Claude chooses a chart type and you evaluate whether that choice reveals the patterns you expected. The explanation forces Claude to articulate its reasoning, giving you a chance to redirect if the choice obscures important trends.

### Prompt 3: Build a Comparison Dashboard

> "Create a side-by-side comparison visual for [two things you are evaluating: two software tools, two project approaches, two investment options]. Include: a feature comparison table with color-coded ratings (green/yellow/red), a radar chart showing strengths across 5-6 dimensions, and an overall recommendation section. Make the radar chart interactive so I can hover over each dimension for details."

**What you're learning:** Multi-component visual design. A single prompt can produce a dashboard with multiple visual elements working together. You evaluate whether the combination tells a coherent story and iterate to fill gaps. This is the skill of visual communication design, using AI as your rendering engine.

---

## What's Next

You have explored custom visuals as a complement to your Cowork workflows: generating diagrams and charts in Claude chat, refining them through conversation, and exporting them for use in documents and presentations. The next section moves from individual tool capabilities to strategy: how to evaluate when AI tools are the right choice and how to assess your own AI collaboration skills.

## Flashcards Study Aid

<Flashcards />
