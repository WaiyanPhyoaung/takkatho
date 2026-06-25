# Improve Course

Review and improve a course in this project — audit existing content, add missing topics, create new modules, and enhance diagrams to make the course genuinely better for learners.

## What this skill does

When invoked with `/improve-course [course-name]`, follow this exact workflow:

---

## Step 1: Map the course

Read every file under `src/content/docs/[course-name]/` and the sidebar entries in `astro.config.mjs`. Build a mental map of:
- All existing modules and what they cover
- The progression (does each module build on the previous?)
- The sidebar order

---

## Step 2: Read all existing SVG diagrams

Check `src/assets/[course-name]/` for existing SVG diagrams. Note the visual style (background color, font families, stroke colors) so new diagrams match.

### Diagram Decision Guide

A diagram is NEEDED when a concept involves:
- **Hierarchy or tree structure** — DOM tree, class inheritance, file system
- **Flow / sequence** — form submission flow, HTTP request/response, if/else branching
- **Before vs. After comparison** — non-semantic vs semantic HTML, unstyled vs styled, wrong vs right layout
- **Spatial relationship** — CSS box model, flexbox axes, grid areas, table row/column merge
- **Abstract groupings** — variable scope, module system, package structure
- **Process with multiple steps** — how a browser renders HTML, how CSS specificity is calculated

A diagram is NOT needed when:
- The code example itself is self-explanatory
- The topic is purely a list of attributes or properties
- A screenshot already exists in `src/assets/[course-name]/`

### Topics that almost always need a diagram (by course)

| Course | Topics that need diagrams |
|--------|--------------------------|
| HTML | DOM tree structure, semantic vs div layout, form submission flow, table colspan/rowspan grid |
| CSS | Box model (content/padding/border/margin), specificity pyramid, flexbox main/cross axes, grid template areas, cascade order |
| JavaScript | Scope chain, event bubbling/capturing, Promise states, call stack |
| Python | Variable scope (local/global), class hierarchy/inheritance, function call flow, list vs tuple vs dict comparison |
| Any | If/else branching flow, loop iteration diagram, before/after fix comparisons |

---

## Step 3: Audit each module against this checklist

For each module file, check:

**Content gaps:**
- [ ] Are type conversion / casting functions taught? (e.g. int(), str())
- [ ] Are comparison operators introduced before they're used in if statements?
- [ ] Are common error types (TypeError, ValueError, KeyError) mentioned where relevant?
- [ ] Is encoding='utf-8' on every file open() call?
- [ ] Is venv taught BEFORE pip install?
- [ ] Are docstrings taught alongside functions?
- [ ] Is the `in` operator taught?
- [ ] Is enumerate() taught for indexed loops?
- [ ] Is dict.get() taught for safe dictionary access?
- [ ] Is __str__ taught alongside __init__ in OOP?
- [ ] Is super() shown in inheritance examples?
- [ ] Is if __name__ == '__main__': pattern explained?

**Learner experience:**
- [ ] Does the module open with learning objectives (Aside component)?
- [ ] Does every code example show expected output?
- [ ] Is there a "Common Mistakes" or Aside caution section?
- [ ] Does the module end with a "Next Step" link?
- [ ] Does each section introduce exactly ONE new concept before moving on?
- [ ] Is there a bridging sentence between sections that connects what was just learned to what comes next?
- [ ] Are examples concrete and relatable (real names, Myanmar-context scenarios) rather than abstract (`foo`, `bar`, `x`)?
- [ ] Are prerequisites stated? ("ဒီအပိုင်းကို နားလည်ဖို့ ... ကို သိထားဖို့လိုပါတယ်")
- [ ] Does difficulty ramp gradually within the module (simple → complex)?
- [ ] If a concept can be shown visually, is there a diagram? (see Diagram Decision Guide below)

**Myanmar language quality (for Burmese-language courses):**
- [ ] Are abstract concepts explained with Myanmar-life analogies?
- [ ] Is encoding='utf-8' taught for any file that reads/writes Burmese text?
- [ ] Are technical terms shown in English alongside Burmese explanations?
- [ ] Is the sentence structure natural Myanmar (not word-for-word translated from English)?
- [ ] Are sentences short enough to read comfortably? (max ~2 lines per sentence)
- [ ] Is terminology consistent across all modules? (don't call the same thing by two different Burmese words)
- [ ] Does the explanation flow — concept → example → analogy — rather than just listing definitions?
- [ ] Are paragraphs broken into bullet points or short sections so dense text is avoided?

---

## Step 4: Identify missing modules

Compare existing modules against the standard curriculum for the language/framework:

**For Python:**
- Module 0: Setup & Installation (python.org, VS Code, REPL)
- String Methods module (upper, lower, strip, split, join, f-strings)
- List Comprehensions & Built-ins module (comprehensions, zip, enumerate, sorted)
- Virtual Environments module (venv before pip)
- Debugging module (traceback reading, print debug, common errors)
- Additional Projects module (multiple real projects)

**For any course:**
- Is there a Setup/Installation module?
- Are there practice exercises per module?
- Is there a capstone project?
- Is there a debugging/troubleshooting module?

---

## Step 5: Create improvements

Execute in this order:

1. **New SVG diagrams** — for every topic identified in the Diagram Decision Guide above that doesn't already have a diagram, create one. Rules:
   - Match the existing SVG style exactly: dark theme `bg #1e1e2e`, box fill `#2d2d3f`, accent stroke `#7c3aed` (purple), text `#e2e8f0`, font `monospace`
   - Save to `src/assets/[course-name]/[topic-name].svg`
   - Keep diagrams simple — label boxes in Myanmar where the label is a concept, English where it's code/syntax
   - Import and display with `<ContentImage src={diagramVar} alt="..." />` inside the relevant section
   - Do NOT add a diagram just to add one — only if the Diagram Decision Guide says it's needed

2. **Fix Myanmar text quality** — for every module where the Myanmar language checklist flagged issues:
   - Rewrite awkward sentences to sound natural (shorter, active voice)
   - Replace abstract variable names in examples with real Myanmar-context names (e.g. `name = "Mg Mg"`, `price = 5000`, `city = "Yangon"`)
   - Add a Myanmar-life analogy where a concept is abstract (e.g. explain CSS specificity like a မြန်မာ့ဆောင်ပုဒ် priority system, explain git branches like parallel story drafts)
   - Ensure every technical term appears as: English term first, Burmese explanation in parentheses — e.g. `variable (တန်ဖိုးသိမ်းဆည်းရာနေရာ)`

3. **Update existing modules** — rewrite each .mdx file with:
   - Aside with learning objectives at the top
   - All missing content added as new sections
   - Better Myanmar analogies where content feels too abstract
   - Aside caution boxes for common pitfalls
   - Expected output shown in every code example (use `// Output: ...` comments or an Aside note block)
   - "Next Step" Aside + LinkCard at the bottom

4. **Create new module files** — use the same MDX pattern as existing modules (`import { Aside }`, `import ContentImage`, Myanmar-language explanations).

5. **Update astro.config.mjs** — add all new modules to the correct sidebar in the correct position.

---

## Step 6: Myanmar Language Review Pass

After content changes, do a dedicated pass over each modified module to check language quality. For each section of text:

### Sentence-level checks
- **Too long?** — If a sentence runs more than ~25 words in Myanmar, split it.
- **Awkward phrasing?** — Read aloud mentally. If it sounds like translated English, rewrite it.
- **Consistent terms?** — Build a mental glossary as you read. Flag if the same concept uses two different Burmese words across modules (e.g. sometimes "ဒေတာ" sometimes "အချက်အလက်" for the same thing — pick one and be consistent).

### Comprehension-level checks
Ask for each concept explanation: "Could a Myanmar high school graduate with no programming background understand this on first read?"

If NO — add one of:
- A Myanmar-life analogy (`ဥပမာနှိုင်းယှဉ်ချက်` box)
- A simpler stepping stone sentence before the technical explanation
- A diagram (see Diagram Decision Guide)

### Common Myanmar writing pitfalls to fix
| Pitfall | Example (bad) | Fix |
|---------|---------------|-----|
| English sentence structure | "Function ဆိုတာ code block တစ်ခုဖြစ်ပြီး call လုပ်နိုင်တဲ့" | "Function ဆိုတာ ကိုယ်တိုင်ရေးထားတဲ့ command လေးတစ်ခုပါ — နောက်ပိုင်းမှာ ကိုယ်ချင်နိုင်သလောက် ပြန်ခေါ်သုံးနိုင်ပါတယ်" |
| Missing particle | "Variable သုံးပြီး data သိမ်းတယ်" | "Variable ကိုသုံးပြီး data ကိုသိမ်းဆည်းနိုင်ပါတယ်" |
| No analogy for abstract idea | "Scope ဆိုတာ variable ရဲ့ visibility range ပါ" | "Scope ဆိုတာ variable ကို မြင်နိုင်တဲ့ နယ်မြေပါ — ဥပမာ အိမ်ထဲမှာသုံးတဲ့ ပစ္စည်းကို အပြင်မှာ မသုံးနိုင်သလိုပါပဲ" |
| Jargon dump | Listing 8 CSS properties with no grouping | Group into 2-3 categories, explain each group's purpose first |

---

## Step 7: Update the sidebar config

In `astro.config.mjs`, add new modules in logical order. Use this pattern:
```js
{
  label: "Module X: Topic Name",
  items: [{ label: "Page Title", slug: "course/module-x" }],
},
```

---

## Output

After completing, report:
- **Files created/modified** — list each file with a one-line summary of what changed
- **Critical fixes** — security issues, broken content, encoding fixes
- **Diagrams added** — list each new SVG with the concept it illustrates
- **Myanmar language fixes** — note any sentences rewritten, analogies added, or terminology standardized
- **Modules added** — new files and what they cover
- **Next priority** — the single most important remaining improvement if scope ran out

---

## Applying to other courses

This same workflow applies to any course in the project. Replace `[course-name]` with `html`, `css`, `javascript`, `java`, etc.

The Step 3 checklist adapts per language:
- **HTML** — check semantic elements, alt text on all images, form labels, ARIA where needed
- **CSS** — check specificity explained, box model diagrammed, flexbox/grid axes shown visually
- **JavaScript** — check `typeof` used correctly, scope chain explained, async/await vs callbacks
- **Java** — check access modifiers explained, checked vs unchecked exceptions, interface vs abstract class
- **Python** — check type hints, venv before pip, encoding='utf-8' on file I/O

But the core structure always applies: **objectives → concept → analogy → example with output → common mistakes → next step**.

**Key rules:**
- **Never change UI styles** — do not modify CSS files, component styling, Tailwind classes, or visual design. Colors, fonts, spacing, and layout appearance must stay as-is.
- Content structure is fair game — adding sections, reordering content within a module, adding new modules, restructuring headings, and reorganizing explanations are all allowed.
- When adding Myanmar analogies, use real Myanmar life situations — tea shop orders, kyat prices, township names, family structures — not generic analogies that could be from any culture
- Every new diagram must have a Myanmar-language caption and label the key parts
- Never leave a module that ends abruptly — always add a Next Step LinkCard
