---
title: "Building a Rich Media Academic Blog: Images, PDFs, and Interactive Content"
slug: "building-rich-media-academic-blog"
excerpt: "A comprehensive demonstration of integrating images, PDFs, mathematical equations, and code into academic blog posts. This post showcases the full multimedia capabilities of a modern research blog."
publishedAt: "2026-02-11"
readTime: "12 min read"
tags:
  - Tutorial
  - Blogging
  - Research Communication
  - Web Development
featured: true
author: "Saurabh Mishra"
pdfs:
  - title: "BioInterpret Framework: Main Text"
    filename: "BioInterpret_T2D_MainText.pdf"
  - title: "Complete Research Seminar: Statistical Genetics Progress Report"
    filename: "ProgressSeminar4_5yr_v2-Final.pdf"
---

# Building a Rich Media Academic Blog

Academic communication in the digital age demands more than plain text. Researchers need to share complex visualizations, interactive figures, supplementary materials, and detailed documentation. This post demonstrates how to create a fully-featured academic blog that seamlessly integrates **images**, **PDFs**, **mathematical notation**, and **code snippets**.

## Why Rich Media Matters in Academic Communication

Traditional academic writing often separates the main text from figures, supplementary materials, and data. Modern web-based publishing allows us to integrate everything into a single, cohesive narrative. Readers can:

- View figures **inline** with explanations
- Access **full research papers** without leaving the page
- Interact with **mathematical derivations** rendered beautifully
- Examine **code implementations** with syntax highlighting

Let's explore how each component works.

---

## Part 1: Gene-Environment Interaction Testing

Understanding gene-environment (G×E) interactions is crucial in statistical genetics. The GETAP (Gene-Environment Testing Aggregation Protocol) framework provides a systematic approach to testing these interactions across different genetic models.

### The GETAP Framework

The GETAP method aggregates three classical genetic models to increase power in detecting G×E interactions:

![GETAP Framework](/assets/Blog_imgs/GETAP_flowchart_web.png "Figure 1: GETAP testing framework showing aggregation of additive, dominant, and recessive models")

As shown in **Figure 1**, GETAP combines results from:

1. **Additive Model**: Assumes each risk allele contributes additively to the trait
2. **Dominant Model**: Tests whether one copy of the risk allele is sufficient
3. **Recessive Model**: Requires both alleles to be risk variants

The aggregation is performed using either ACAT (Aggregated Cauchy Association Test) or HMP (Harmonic Mean P-value), providing robust protection against model misspecification.

### Mathematical Foundation

For a quantitative trait $Y$, environmental exposure $E$, and genotype $G$, the G×E interaction model is:

$$
Y = \beta_0 + \beta_G G + \beta_E E + \beta_{GE} G \times E + \boldsymbol{\gamma}^T \mathbf{C} + \varepsilon
$$

where:
- $\beta_{GE}$ is the interaction effect (our parameter of interest)
- $\mathbf{C}$ are covariates (age, sex, principal components)
- $\varepsilon \sim N(0, \sigma^2)$ is the error term

The null hypothesis is $H_0: \beta_{GE} = 0$ (no interaction).

### Implementation in Practice

Here's a basic R implementation for testing G×E interactions:

```r
# Function to test G×E interaction
test_gxe_interaction <- function(genotype, environment, phenotype, covariates) {
  # Construct design matrix
  X <- cbind(genotype, environment, genotype * environment, covariates)
  
  # Fit linear model
  model <- lm(phenotype ~ X)
  
  # Extract interaction term p-value
  summary(model)$coefficients["genotype:environment", "Pr(>|t|)"]
}

# Example usage
set.seed(42)
n <- 1000
genotype <- rbinom(n, 2, 0.3)  # Genotype: 0, 1, or 2 risk alleles
environment <- rnorm(n)         # Continuous environmental exposure
phenotype <- 0.5 * genotype + 0.3 * environment + 
             0.2 * genotype * environment + rnorm(n)

p_value <- test_gxe_interaction(genotype, environment, phenotype, NULL)
print(paste("P-value:", p_value))
```

---

## Part 2: Genetic Inheritance Models

Different traits follow different inheritance patterns. Understanding these patterns is essential for choosing the appropriate genetic model in association studies.

### The Three Classical Models

![Genetic Inheritance Models](/assets/Blog_imgs/AddDomRecv2.png "Figure 2: Comparison of additive, dominant, and recessive genetic inheritance models with real disease examples")

**Figure 2** illustrates how genetic risk accumulates under each model:

#### Additive Model
- **Genotype coding**: 0, 1, 2 (number of risk alleles)
- **Risk increases linearly** with each additional risk allele
- Example: **Height** — each additional height-increasing allele adds a fixed amount
- Most common model in GWAS studies

#### Dominant Model  
- **Genotype coding**: D = 1 if genotype is 1 or 2, else 0
- **One copy is sufficient** to confer risk
- Example: **Huntington's disease** — single mutant allele causes disease
- Used when heterozygotes and homozygotes have similar risk

#### Recessive Model
- **Genotype coding**: R = 1 if genotype is 2, else 0  
- **Both alleles must be risk variants** to influence trait
- Example: **Cystic fibrosis** — requires two mutant CFTR alleles
- Captures traits where heterozygotes are unaffected carriers

### Model Selection Strategy

How do we choose which model to use? Several approaches:

1. **Prior biological knowledge**: If mechanism is known, use appropriate model
2. **Model comparison**: Test all three and select based on AIC/BIC
3. **Aggregation methods**: Use GETAP/ACAT to combine all three models
4. **Sensitivity analysis**: Check if results are robust across models

The GETAP framework avoids model selection by testing all three simultaneously and aggregating the evidence.

---

## Part 3: Results Visualization

Proper visualization is critical for communicating G×E interaction results. Manhattan plots, QQ plots, and effect size visualizations help readers understand the magnitude and significance of findings.

### Effect Size Across Genetic Models

![G×E Interaction Effect Sizes](/assets/Blog_imgs/GxE%20Plotted(2).png "Figure 3: Visualization of gene-environment interaction effects across different genetic models")

**Figure 3** shows how interaction effects vary across genetic models for the same variant. Key observations:

- **Additive model** (blue) shows moderate but consistent effects
- **Dominant model** (red) captures large effects in heterozygotes
- **Recessive model** (green) identifies variants with strong homozygous effects

The varying effect sizes across models highlight why model aggregation methods like GETAP are valuable — different variants may have maximal signal under different genetic models.

### Interpreting the Results

When we observe significant G×E interactions, several important questions arise:

1. **Is the interaction biologically plausible?**
   - Does the environmental factor affect the relevant biological pathway?
   - Are there known mechanisms linking the gene and environment?

2. **Is the effect consistent across populations?**
   - Replication in independent cohorts
   - Meta-analysis across diverse ancestries

3. **What is the public health impact?**
   - How modifiable is the environmental exposure?
   - What proportion of the population carries risk genotypes?

---

## Conclusion

This post demonstrated the full multimedia capabilities of a modern academic blog system. We've shown:

✅ **Images** with captions and proper formatting  
✅ **Mathematical equations** rendered beautifully with KaTeX  
✅ **Code snippets** with syntax highlighting  
✅ **Multiple PDFs** embedded with scrollable viewers  

The file-based markdown system makes it easy to create rich, professional academic content without touching any code!

## Further Reading

- GETAP methodology paper (PDF attached)
- Statistical Genetics Seminar notes (PDF attached)

---

**PDFs are attached below with full scrollable viewers.**
