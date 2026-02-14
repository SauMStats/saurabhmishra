# How to Write a Blog Post - Complete Guide

This guide explains how to create and publish blog posts on your markdown-based academic blog system.

---

## 📁 Quick Start

### Creating Your First Blog Post

1. **Navigate to the blog content directory:**
   ```bash
   cd client/public/blog-content
   ```

2. **Create a new markdown file:**
   ```bash
   touch my-first-post.md
   ```

3. **Open the file and add content** (see template below)

4. **Save the file** → Your post appears automatically on `/blog`!

---

## 📝 Blog Post Template

Every blog post is a markdown file (`.md`) with two parts:

1. **Frontmatter** (metadata between `---` markers)
2. **Content** (markdown text below frontmatter)

### Basic Template

```markdown
---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
excerpt: "A brief 1-2 sentence description of your post."
publishedAt: "2024-02-12"
readTime: "8 min read"
tags:
  - Tag1
  - Tag2
  - Tag3
author: "Your Name"
featured: false
---

# Your Blog Post Title

Your content starts here...

## Section 1

Write your content using markdown syntax...

## Section 2

More content...
```

---

## 🎯 Frontmatter Parameters

Frontmatter is YAML metadata at the top of your file between `---` markers.

### Required Parameters

```yaml
title: "Post Title"           # REQUIRED - Shows as blog post heading
publishedAt: "YYYY-MM-DD"    # REQUIRED - Publication date (e.g., "2024-02-12")
```

### Optional Parameters

```yaml
slug: "custom-url-slug"      # Optional - Auto-generated from filename if omitted
                             # Example: "my-post" → /blog/my-post
                             # Use lowercase, hyphens only, no spaces

excerpt: "Brief description" # Optional - Auto-generated from first paragraph if omitted
                            # Best practice: Write your own (1-2 sentences)

readTime: "10 min read"     # Optional - Auto-calculated if omitted
                            # Format: "X min read"

tags:                       # Optional - Array of tags for categorization
  - Statistics
  - GWAS
  - Tutorial

featured: true              # Optional - Show on featured posts list
                           # Default: false

author: "Your Name"         # Optional - Default: "Saurabh Mishra"
```

### Series Parameters (For Lecture Series)

```yaml
series: "series-name"           # Series identifier (usually matches folder name)
seriesOrder: 1                  # Position in series (1, 2, 3, ...)
seriesTitle: "Series Display Title"  # Human-readable series name
```

**Example for a lecture series:**
```yaml
series: "statistical-inference"
seriesOrder: 3
seriesTitle: "Statistical Inference Lecture Series"
```

This creates Previous/Next navigation automatically!

### PDF Parameters

**Single PDF:**
```yaml
pdf: "document.pdf"  # PDF must be in /assets/ directory
```

**Multiple PDFs:**
```yaml
pdfs:
  - title: "Main Paper"
    filename: "paper.pdf"
  - title: "Supplementary Materials"
    filename: "supplement.pdf"
  - title: "Appendix"
    filename: "appendix.pdf"
```

PDFs should be placed in:
- For series posts: `client/public/blog-content/series-name/assets/pdfs/`
- For standalone posts: `client/public/assets/`

---

## ✍️ Writing Content (Markdown Syntax)

### Headers

```markdown
# Heading 1 (Main title - use once)
## Heading 2 (Major sections)
### Heading 3 (Subsections)
#### Heading 4 (Sub-subsections)
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
`Inline code`
~~Strikethrough~~
```

### Lists

**Unordered lists:**
```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

**Ordered lists:**
```markdown
1. First item
2. Second item
3. Third item
```

### Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Hover text")
```

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> And multiple paragraphs.
```

### Horizontal Rules

```markdown
---
```

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

---

## 🖼️ Images

### Basic Image Syntax

```markdown
![Alt text](/path/to/image.png)
```

### Image with Caption

```markdown
![Alt text](/path/to/image.png "Figure 1: This is the caption")
```

The text in quotes becomes the caption displayed below the image.

### Image Paths

**For standalone posts:**
```markdown
![My Figure](/assets/images/figure1.png)
```

**For series posts (recommended):**
```markdown
![My Figure](./assets/images/figure1.png)
```

The `./assets/` path is automatically resolved relative to your markdown file.

### Image Organization

**Recommended structure for a series:**
```
client/public/blog-content/
└── my-series/
    ├── lecture-01.md
    ├── lecture-02.md
    └── assets/
        ├── images/
        │   ├── fig1-distribution.png
        │   ├── fig2-hypothesis.png
        │   └── manhattan-plot.png
        └── pdfs/
            └── slides.pdf
```

**In your markdown:**
```markdown
![Distribution](./assets/images/fig1-distribution.png "Figure 1: Normal distribution")
```

---

## 📐 Mathematical Equations

### Inline Math

Use single `$` for inline equations:

```markdown
The equation $E = mc^2$ represents mass-energy equivalence.
```

**Important:** Use single backslashes `\` in markdown files:
```markdown
The mean is $\mu$ and variance is $\sigma^2$.
```

### Display Math (Block Equations)

Use double `$$` for centered display equations:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Multi-line equations:**
```markdown
$$
\begin{aligned}
y &= mx + b \\
  &= 2x + 3
\end{aligned}
$$
```

### Common Math Symbols

```markdown
Greek letters:     $\alpha, \beta, \gamma, \mu, \sigma, \pi$
Fractions:         $\frac{a}{b}$
Subscripts:        $x_i, y_{ij}$
Superscripts:      $x^2, e^{-\lambda t}$
Summation:         $\sum_{i=1}^{n} x_i$
Integral:          $\int_0^1 f(x) dx$
Matrices:          $\mathbf{X}, \mathbf{y}$
Vectors:           $\boldsymbol{\beta}, \boldsymbol{\gamma}$
Operators:         $\times, \div, \pm, \geq, \leq, \neq$
```

### Full Example

```markdown
The linear regression model is:

$$
\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}
$$

where $\boldsymbol{\varepsilon} \sim N(0, \sigma^2 \mathbf{I})$.

The OLS estimator is:

$$
\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}
$$
```

---

## 💻 Code Blocks

### Inline Code

```markdown
Use the `lm()` function in R for linear regression.
```

### Code Blocks with Syntax Highlighting

Use triple backticks with language name:

````markdown
```r
# R code
model <- lm(y ~ x, data = df)
summary(model)
```

```python
# Python code
import numpy as np
result = np.mean(data)
```

```bash
# Bash commands
npm install
npm run dev
```

```javascript
// JavaScript
const result = data.map(x => x * 2);
```
````

**Supported languages:**
- `r`, `python`, `javascript`, `typescript`, `bash`, `sql`, `html`, `css`, `json`, `yaml`, `markdown`

---

## 📂 Organizing Blog Posts

### Standalone Posts

For one-off blog posts, create files directly in `blog-content/`:

```
client/public/blog-content/
├── research-update-2024.md
├── conference-report.md
└── new-method.md
```

### Series (Lecture Series, Multi-Part Posts)

Create a folder for each series:

```
client/public/blog-content/
├── statistical-inference/
│   ├── lecture-01.md
│   ├── lecture-02.md
│   ├── lecture-03.md
│   └── assets/
│       ├── images/
│       └── pdfs/
└── gwas-methods/
    ├── intro.md
    ├── qc-pipeline.md
    └── assets/
```

**Each file in the series should have:**
```yaml
series: "statistical-inference"
seriesOrder: 1  # 2, 3, etc.
seriesTitle: "Statistical Inference Lecture Series"
```

---

## 🎨 Complete Example Blog Post

```markdown
---
title: "Statistical Inference: Lecture 1 - Introduction to Hypothesis Testing"
slug: "statistical-inference-lecture-01"
series: "statistical-inference"
seriesOrder: 1
seriesTitle: "Statistical Inference Lecture Series"
excerpt: "Introduction to hypothesis testing, p-values, and Type I/II errors."
publishedAt: "2024-02-15"
readTime: "15 min read"
tags:
  - Statistics
  - Inference
  - Hypothesis Testing
featured: true
author: "Saurabh Mishra"
pdfs:
  - title: "Lecture Slides"
    filename: "lecture-01-slides.pdf"
---

# Introduction to Hypothesis Testing

Hypothesis testing is a fundamental concept in statistical inference.

## The Null Hypothesis

The null hypothesis $H_0$ represents the default assumption:

$$
H_0: \mu = \mu_0
$$

![Null Distribution](./assets/images/null-distribution.png "Figure 1: Null hypothesis distribution")

## P-values

A p-value measures the probability of observing data at least as extreme as what we observed:

$$
p = P(T \geq t_{obs} | H_0)
$$

### Example in R

```r
# One-sample t-test
t.test(x, mu = 10)
```

## Key Takeaways

1. P-values measure compatibility with $H_0$
2. Smaller p-values indicate stronger evidence against $H_0$
3. Statistical significance $\neq$ practical importance

> **Important:** A p-value is NOT the probability that $H_0$ is true!

## Further Reading

See the attached lecture slides for more details.

---

**Next:** [Lecture 2: Confidence Intervals](#)
```

---

## 🚀 Publishing Workflow

### 1. Create Your Post

```bash
# Navigate to blog content
cd client/public/blog-content

# Create new post
nano my-new-post.md
```

### 2. Add Frontmatter and Content

Copy the template above and fill in your content.

### 3. Add Images (if needed)

```bash
# For standalone posts
cp my-image.png client/public/assets/images/

# For series posts
cp my-image.png client/public/blog-content/my-series/assets/images/
```

### 4. Add PDFs (if needed)

```bash
# For standalone posts
cp my-slides.pdf client/public/assets/

# For series posts
cp my-slides.pdf client/public/blog-content/my-series/assets/pdfs/
```

### 5. Save and Preview

- **Save** the markdown file
- **Refresh** your browser at `http://localhost:5000/blog`
- Your post appears immediately (hot reload)!

### 6. Build for Production

```bash
npm run build
```

---

## ✅ Checklist for Publishing

Before publishing, verify:

- [ ] Frontmatter has `title` and `publishedAt`
- [ ] Slug is URL-friendly (lowercase, hyphens, no spaces)
- [ ] Excerpt is compelling and concise
- [ ] Tags are relevant and consistent with other posts
- [ ] Images have alt text and captions
- [ ] Math equations use single backslashes `\`
- [ ] Code blocks have language specified
- [ ] PDFs are in correct directory
- [ ] Series posts have `series`, `seriesOrder`, and `seriesTitle`
- [ ] Post looks good in preview
- [ ] No broken links or missing images

---

## 🐛 Common Issues and Fixes

### Math Not Rendering

**Problem:** Equations show as plain text

**Solution:** Make sure KaTeX CSS is in `client/index.html`:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
```

### Double Backslash Issue

**Problem:** Math shows `\\alpha` instead of α

**Wrong:**
```markdown
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx
$$
```

**Correct:**
```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx
$$
```

**Rule:** Use single backslashes in markdown files!

### Images Not Loading

**Problem:** Broken image icon

**Check:**
1. File exists at specified path
2. Path is correct (case-sensitive!)
3. For series, use `./assets/images/` not `/assets/images/`

### Post Not Appearing

**Problem:** Saved markdown file but post doesn't show

**Solutions:**
1. Refresh browser (Ctrl+R or Cmd+R)
2. Check frontmatter YAML syntax (use YAML validator)
3. Restart dev server: `npm run dev`
4. Check terminal for errors

### Series Navigation Not Working

**Problem:** No Previous/Next buttons

**Check:**
1. All posts in series have same `series` value
2. `seriesOrder` is consecutive (1, 2, 3, not 1, 3, 5)
3. All posts have `seriesOrder` specified

---

## 📊 Best Practices

### File Naming

✅ **Good:**
```
lecture-01-introduction.md
gwas-quality-control.md
2024-02-15-research-update.md
```

❌ **Bad:**
```
Lecture 1.md              # No spaces
lec1.md                   # Not descriptive
My Post!!!.md             # Special characters
```

### Directory Structure

✅ **Well-organized:**
```
blog-content/
├── statistical-inference/
│   ├── lecture-01.md
│   ├── lecture-02.md
│   └── assets/
│       ├── images/
│       └── pdfs/
└── research-updates/
    └── 2024-progress.md
```

### Slug Conventions

- Use lowercase only
- Use hyphens to separate words
- Keep it concise but descriptive
- Match post topic
- Avoid dates in slugs (use frontmatter `publishedAt`)

**Examples:**
```yaml
slug: "hypothesis-testing-introduction"
slug: "gwas-quality-control-pipeline"
slug: "linear-regression-theory"
```

### Tag Conventions

- Be consistent (e.g., always "Statistics" not sometimes "Stats")
- Use proper capitalization
- Don't overuse (3-5 tags per post)
- Create a taxonomy:
  - Topics: GWAS, TWAS, Statistics
  - Methods: Tutorial, Theory, Practice
  - Tools: R, Python, Software

---

## 🎓 Advanced Features

### Series Overview Pages

When you create a series, a series overview page is automatically created at:
```
/blog/series/series-name
```

This shows all posts in the series with progress tracking.

### Featured Posts

Set `featured: true` to highlight important posts:
```yaml
featured: true
```

These appear in the featured posts section.

### Search Functionality

Posts are automatically searchable by:
- Title
- Excerpt
- Content
- Tags

### Auto-Generated Fields

These are calculated automatically if not specified:
- `slug` → Generated from filename
- `excerpt` → First paragraph
- `readTime` → Based on word count (~200 words/min)

---

## 📞 Need Help?

### Quick Reference

- **Markdown syntax:** [CommonMark Spec](https://commonmark.org/)
- **KaTeX math:** [KaTeX Supported Functions](https://katex.org/docs/supported.html)
- **YAML syntax:** [YAML Syntax Basics](https://yaml.org/)

### Debugging Steps

1. Check terminal for error messages
2. Validate YAML frontmatter syntax
3. Check file paths (case-sensitive!)
4. Restart dev server
5. Clear browser cache

---

## 🎉 You're Ready!

You now have everything you need to create professional academic blog posts with:

✅ Rich media (images, PDFs)  
✅ Mathematical equations  
✅ Code snippets  
✅ Series navigation  
✅ Automatic discovery  

**Just write markdown, save, and publish!** 🚀

---

**Last updated:** February 2024  
**For questions or improvements:** Create an issue on GitHub
