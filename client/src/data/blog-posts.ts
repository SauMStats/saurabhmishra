export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;

  publishedAt: string;      // ISO date string
  readTime: string;         // e.g. "8 min read"

  tags?: string[];          // optional
  featured?: boolean;       // optional
  author?: string;          // optional
}


export const blogPosts: BlogPost[] = [
  {
  id: "4",
  title: "E-values, P-values, and Q-values: Mathematical Foundations of Statistical Evidence",
  slug: "evalues-pvalues-qvalues-statistical-evidence",
  excerpt: "A mathematical perspective on p-values, e-values, and q-values, highlighting their distinct roles in hypothesis testing, evidence accumulation, and multiple testing control.",
  publishedAt: "2024-02-05",
  readTime: "10 min read",
  content: `

  Statistical inference relies on formal tools to quantify uncertainty, evidence, and error control. Among the most widely used are **p-values**, which measure tail probabilities under a null hypothesis, and **q-values**, which extend p-values to large-scale multiple testing. More recently, **e-values** have emerged as an alternative framework that measures evidence on a multiplicative scale and remains valid under optional stopping and sequential experimentation. Although often mentioned together, these quantities formalize fundamentally different notions of statistical validity.

  ## P-values: Tail Probabilities Under the Null

  Let $(\\Omega, \\mathcal{F}, \\mathbb{P}_0)$ denote a probability space corresponding to a null hypothesis $H_0$, and let $X$ be the observed data. A **p-value** is a measurable function $P(X) \\in [0,1]$ satisfying
  $$
  \\mathbb{P}_0(P(X) \\le \\alpha) \\le \\alpha \\quad \\text{for all } \\alpha \\in [0,1].
  $$
  In typical settings, p-values are constructed from a test statistic $T(X)$ as
  $$
  P(X) = \\mathbb{P}_0(T(X') \\ge T(X)),
  $$
  where $X'$ is an independent replicate drawn under $H_0$. Small p-values indicate that the observed data are unlikely under the null model, and decision rules of the form $P(X) \\le \\alpha$ control the Type I error rate at level $\\alpha$. Importantly, p-values quantify *surprise under the null* rather than evidence for an alternative hypothesis.

  ## E-values: Evidence via Expectation Control

  An **e-value** is defined as a nonnegative random variable $E(X) \\ge 0$ such that
  $$
  \\mathbb{E}_{\\mathbb{P}_0}[E(X)] \\le 1.
  $$
  This expectation constraint ensures validity under optional stopping and sequential testing through Ville’s inequality. Conceptually, e-values invert the p-value logic: instead of being small under evidence against $H_0$, e-values become **large** when data favor alternatives to the null.

  A canonical example arises from likelihood ratios. Let $\\mathbb{P}_1$ denote an alternative distribution absolutely continuous with respect to $\\mathbb{P}_0$. Then
  $$
  E(X) = \\frac{d\\mathbb{P}_1}{d\\mathbb{P}_0}(X)
  $$
  is a valid e-value satisfying $\\mathbb{E}_{\\mathbb{P}_0}[E(X)] = 1$. Unlike p-values, e-values are unbounded and closed under multiplication: if $E_1$ and $E_2$ are valid e-values, then so is $E_1 E_2$. This property allows evidence to be accumulated across experiments or over time, a feature particularly useful in adaptive and sequential analyses.

  ## Relationship Between P-values and E-values

  Although both p-values and e-values control false positives, they do so through fundamentally different mechanisms. P-values provide **additive error control** through tail probabilities, while e-values provide **multiplicative evidence control** through expectation constraints. There is no general monotone transformation that maps p-values to e-values while preserving validity. As a result, p-values and e-values represent distinct inferential paradigms rather than interchangeable quantities.

  ## Q-values and False Discovery Rate Control

  In large-scale inference problems involving many hypotheses $H_{0,1}, \\dots, H_{0,m}$, controlling the Type I error for each test is insufficient. Instead, attention shifts to the **false discovery rate (FDR)**, defined as
  $$
  \\mathrm{FDR} = \\mathbb{E}\\left[ \\frac{V}{\\max(R,1)} \\right],
  $$
  where $V$ is the number of false rejections and $R$ is the total number of rejections. The **q-value** of hypothesis $i$ is defined as
  $$
  q_i = \\inf_{\\lambda \\ge P_i} \\mathrm{FDR}(\\lambda),
  $$
  where $\\mathrm{FDR}(\\lambda)$ denotes the FDR incurred by rejecting all hypotheses with p-values at most $\\lambda$.

  Under a mixture model
  $$
  P_i \\sim \\pi_0 U(0,1) + (1 - \\pi_0) F_1,
  $$
  the q-value admits a Bayesian interpretation as the posterior probability that a rejected hypothesis corresponds to a true null. Thus, while p-values measure individual surprise and e-values quantify evidence, q-values assess the **reliability of discoveries** in the presence of multiplicity.

  ## Summary

  P-values, e-values, and q-values formalize complementary but distinct notions of statistical inference. P-values control Type I error for individual hypotheses, e-values provide a flexible and sequentially valid measure of evidence, and q-values control false discoveries in large-scale testing. Understanding these differences is essential for choosing the appropriate inferential framework in modern data analysis.
  `
  },

  {
    id: "1",
    title: "Advanced GWAS Methodology: Leveraging Population Structure for Enhanced Discovery",
    slug: "gwas-methodology-population-structure",
    excerpt: "Exploring how incorporating population structure and ancestry information can significantly improve the power and precision of genome-wide association studies.",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    content: `

Genome-wide association studies (GWAS) have revolutionized our understanding of the genetic architecture of complex traits. However, traditional approaches often struggle with population stratification and hidden relatedness.

## Mathematical Framework

The standard GWAS model can be expressed as:

$$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{g} + \\boldsymbol{\\epsilon}$$

where $\\mathbf{y}$ is the phenotype vector, $\\mathbf{X}$ is the genotype matrix, $\\boldsymbol{\\beta}$ represents effect sizes, $\\mathbf{g}$ captures polygenic effects, and $\\boldsymbol{\\epsilon}$ is the error term.

## Population Structure Correction

### Principal Component Analysis

The inclusion of principal components helps control for population stratification:

$$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{Z}\\boldsymbol{\\gamma} + \\boldsymbol{\\epsilon}$$

where $\\mathbf{Z}$ contains the first $k$ principal components and $\\boldsymbol{\\gamma}$ are their effects.

### Mixed Linear Models

For related individuals, we employ mixed linear models:

$$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{u} + \\boldsymbol{\\epsilon}$$

where $\\mathbf{u} \\sim N(0, \\sigma_g^2 \\mathbf{K})$ and $\\mathbf{K}$ is the genetic relationship matrix.

## Implementation Strategies

### 1. Quality Control Pipeline

- Minor allele frequency filtering: $MAF > 0.01$
- Hardy-Weinberg equilibrium: $p_{HWE} > 10^{-6}$
- Genotype missingness: $< 5\\%$

### 2. Association Testing

The test statistic follows:

$$T = \\frac{\\hat{\\beta}}{SE(\\hat{\\beta})} \\sim t_{n-p}$$

under the null hypothesis of no association.

## Advanced Considerations

### Gene-Environment Interactions

We can extend the model to include $G \\times E$ interactions:

$$E[Y|G,E] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

### Multiple Testing Correction

Given $m$ independent tests, the Bonferroni correction requires:

$$\\alpha_{corrected} = \\frac{\\alpha}{m}$$

For genome-wide significance: $\\alpha = 5 \\times 10^{-8}$

## Future Directions

1. **Multi-ethnic GWAS**: Leveraging diverse populations for discovery
2. **Functional annotation**: Integrating epigenomic data
3. **Machine learning approaches**: Deep learning for variant prioritization

## Conclusion

Modern GWAS methodology continues to evolve, with population structure correction remaining a critical component for robust genetic association discovery. The integration of advanced statistical methods and computational approaches promises to unlock new insights into the genetic basis of complex traits.

### References

1. Price, A.L., et al. (2010). New approaches to population stratification in genome-wide association studies. *Nature Reviews Genetics*, 11(7), 459-463.
2. Yang, J., et al. (2011). GCTA: a tool for genome-wide complex trait analysis. *American Journal of Human Genetics*, 88(1), 76-82.`
  },
  {
    id: "2", 
    title: "Transcriptome-Wide Association Studies: Bridging Genomics and Functional Biology",
    slug: "twas-genomics-functional-biology",
    excerpt: "Understanding how TWAS methodology connects genetic variants to gene expression, providing insights into the molecular mechanisms underlying complex diseases.",
    publishedAt: "2023-12-10",
    readTime: "10 min read",
    content: `

Transcriptome-wide association studies (TWAS) represent a powerful approach for identifying genes whose expression is associated with complex traits, bridging the gap between genetic variants and phenotypes.

## Methodological Foundation

### Two-Stage Approach

TWAS typically employs a two-stage design:

1. **Stage 1**: Build predictive models of gene expression
2. **Stage 2**: Test association between predicted expression and phenotype

### Stage 1: Expression Prediction

The prediction model can be written as:

$$\\hat{E}_j = \\sum_{k \\in cis} w_{jk} G_k$$

where $\\hat{E}_j$ is predicted expression for gene $j$, $w_{jk}$ are SNP weights, and $G_k$ are genotypes in the cis-region.

### Stage 2: Association Testing

The association test becomes:

$$Y = \\alpha + \\beta \\hat{E}_j + \\boldsymbol{\\gamma}^T \\mathbf{C} + \\epsilon$$

where $Y$ is the phenotype, $\\hat{E}_j$ is predicted expression, and $\\mathbf{C}$ are covariates.

## Statistical Framework

### Elastic Net Regularization

For expression prediction, we often use elastic net:

$$\\min_{\\boldsymbol{w}} \\frac{1}{2n} ||\\mathbf{E} - \\mathbf{G}\\boldsymbol{w}||_2^2 + \\lambda_1 ||\\boldsymbol{w}||_1 + \\lambda_2 ||\\boldsymbol{w}||_2^2$$

This balances between LASSO ($L_1$) and ridge ($L_2$) penalties.

### Cross-Validation

Model performance is evaluated using $R^2$:

$$R^2 = 1 - \\frac{\\sum_i (E_i - \\hat{E}_i)^2}{\\sum_i (E_i - \\bar{E})^2}$$

## Advanced Methods

### Multi-tissue TWAS

Integrating multiple tissues improves power:

$$\\hat{E}_{jt} = \\sum_{k} w_{jkt} G_k$$

where $t$ indexes tissues.

### Bayesian Approaches

Bayesian methods can incorporate prior information:

$$p(\\boldsymbol{w}|\\mathbf{E}, \\mathbf{G}) \\propto p(\\mathbf{E}|\\mathbf{G}, \\boldsymbol{w}) p(\\boldsymbol{w})$$

## Gene-Environment Interactions in TWAS

### Interaction Model

$$Y = \\beta_0 + \\beta_E \\hat{E} + \\beta_{env} Env + \\beta_{E \\times env} \\hat{E} \\times Env$$

This allows us to identify genes whose effects are modified by environmental factors.

## Quality Control and Interpretation

### Multiple Testing

Given $G$ genes tested, we apply correction:

$$p_{adj} = \\min(G \\times p_{raw}, 1)$$

### Colocalization Analysis

To distinguish causal from confounded associations, we perform colocalization:

$$PP_4 = P(\\text{shared causal variant})$$

## Computational Considerations

### Memory Efficiency

For large-scale analysis, we use:
- Block-wise computation for large matrices
- Sparse matrix representations
- Parallel processing across chromosomes

### Software Implementation

Key tools include:
- **PrediXcan**: Original TWAS implementation
- **FUSION**: Multi-tissue approach
- **FOCUS**: Fine-mapping for TWAS

## Applications and Results

### Disease Discovery

TWAS has identified numerous disease-associated genes:
- Psychiatric disorders: 35% more genes than GWAS alone
- Autoimmune diseases: Enhanced mechanistic insights
- Cancer: Tissue-specific expression effects

## Limitations and Future Directions

### Current Limitations

1. **Reference panel bias**: Limited diversity in expression datasets
2. **Tissue specificity**: Single-tissue models may miss context-dependent effects
3. **Causal interpretation**: Correlation vs. causation challenges

### Emerging Approaches

1. **Single-cell TWAS**: Cell-type specific analysis
2. **Splicing QTL integration**: Alternative splicing effects
3. **Multi-omic integration**: Proteomics and metabolomics

## Conclusion

TWAS methodology continues to evolve, providing increasingly sophisticated approaches to understand the functional consequences of genetic variation. The integration of multi-tissue data, improved prediction models, and careful consideration of confounding factors will enhance our ability to translate genetic discoveries into biological insights.

The future of TWAS lies in personalized medicine applications, where individual expression profiles can inform treatment strategies based on genetic background and environmental exposures.`
  },
  {
    id: "3",
    title: "Gene-Environment Interactions: Statistical Challenges and Computational Solutions",
    slug: "gene-environment-interactions-statistical-methods",
    excerpt: "Examining the complexities of modeling gene-environment interactions in large-scale genomic studies and the computational approaches needed to address them.",
    publishedAt: "2023-11-20",
    readTime: "12 min read",
    content: `

Gene-environment interactions ($G \\times E$) represent a fundamental mechanism underlying phenotypic variation, yet their detection and characterization pose significant statistical and computational challenges.

## Theoretical Framework

### Basic Interaction Model

The simplest $G \\times E$ model can be expressed as:

$$E[Y|G,E] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

where $\\beta_{GE}$ represents the interaction effect.

### Scale Dependencies

Interactions can be scale-dependent. On the logit scale:

$$\\text{logit}(P(Y=1)) = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

versus the risk difference scale:

$$P(Y=1) = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

## Statistical Challenges

### Power Considerations

The power to detect $G \\times E$ interactions is generally lower than main effects:

$$\\text{Power} \\propto \\frac{\\beta_{GE}^2}{\\text{Var}(\\hat{\\beta}_{GE})}$$

Sample size requirements often increase by factors of 2-4 compared to main effects.

### Multiple Testing Burden

For genome-wide $G \\times E$ studies:

$$\\text{Tests} = M \\times E$$

where $M$ is the number of SNPs and $E$ is the number of environmental variables.

## Advanced Statistical Methods

### Variance Component Models

For continuous traits, we can decompose variance:

$$\\sigma_P^2 = \\sigma_G^2 + \\sigma_E^2 + \\sigma_{GE}^2 + \\sigma_{error}^2$$

### Bayesian Hierarchical Models

Hierarchical models allow borrowing strength across variants:

$$\\beta_{GE,i} \\sim N(\\mu_{GE}, \\sigma_{GE}^2)$$

This approach improves power for small effect sizes.

### Machine Learning Approaches

#### Random Forests for Interaction Detection

Random forests can capture non-linear interactions:

$$\\hat{Y} = \\sum_{t=1}^{T} \\frac{1}{T} f_t(\\mathbf{X})$$

where each tree $f_t$ can model complex interactions.

#### Neural Networks

Deep learning models can detect high-order interactions:

$$h^{(l+1)} = \\sigma(\\mathbf{W}^{(l)} h^{(l)} + \\mathbf{b}^{(l)})$$

## Computational Solutions

### Efficient Algorithms

#### Two-Step Screening

1. **Step 1**: Screen for marginal effects
2. **Step 2**: Test interactions for significant marginals

This reduces computational burden by factor of $\\sqrt{M}$.

#### Matrix Optimization

For large-scale analysis, we use optimized matrix operations:

$$\\hat{\\boldsymbol{\\beta}} = (\\mathbf{X}^T\\mathbf{X})^{-1}\\mathbf{X}^T\\mathbf{y}$$

Using efficient BLAS/LAPACK implementations.

### Parallel Computing

#### Distributed Computing Framework

\`\`\`
for chromosome in 1:22:
    parallel_process(chromosome)
    
def parallel_process(chr):
    for variant in chromosome:
        test_GxE_interaction(variant, environment)
\`\`\`

## Environmental Variable Considerations

### Continuous Environments

For continuous environmental variables:

$$E[Y] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

### Categorical Environments

For categorical environments with $k$ levels:

$$E[Y] = \\beta_0 + \\beta_G G + \\sum_{j=1}^{k-1} \\beta_{E_j} I_{E_j} + \\sum_{j=1}^{k-1} \\beta_{GE_j} G \\times I_{E_j}$$

### Time-Varying Environments

Longitudinal models:

$$Y_{it} = \\beta_0 + \\beta_G G_i + \\beta_E E_{it} + \\beta_{GE} G_i \\times E_{it} + u_i + \\epsilon_{it}$$

## Practical Implementation

### Quality Control Pipeline

1. **Environmental Data QC**
   - Outlier detection: $|z| > 3$
   - Missing data patterns
   - Temporal consistency

2. **Genetic Data QC**
   - Standard GWAS QC procedures
   - Population stratification control
   - Relatedness adjustment

### Software Tools

#### Specialized Software

- **PLINK**: Basic $G \\times E$ testing
- **BOLT-LMM**: Mixed models with interactions
- **fastGWA**: Large-scale efficient implementation

#### Custom Implementation

\`\`\`python
def gxe_test(genotype, environment, phenotype, covariates):
    # Construct design matrix
    X = np.column_stack([genotype, environment, 
                        genotype * environment, covariates])
    
    # Fit linear model
    beta = np.linalg.solve(X.T @ X, X.T @ phenotype)
    
    # Test interaction term
    se = np.sqrt(np.diag(np.linalg.inv(X.T @ X)))
    t_stat = beta[2] / se[2]  # interaction term
    
    return t_stat, p_value
\`\`\`

## Applications and Case Studies

### Psychiatric Disorders

$G \\times E$ interactions in depression:
- Stress $\\times$ 5-HTTLPR
- Childhood trauma $\\times$ FKBP5

### Metabolic Traits

Diet $\\times$ genetic interactions:
- Fat intake $\\times$ FTO variants
- Carbohydrate $\\times$ AMY1 copy number

## Future Directions

### Multi-Dimensional Environments

Modeling complex environmental exposures:

$$E[Y] = f(\\mathbf{G}, \\mathbf{E}, \\mathbf{G} \\otimes \\mathbf{E})$$

where $\\mathbf{E}$ represents multi-dimensional environmental space.

### Causal Inference

Mendelian randomization for $G \\times E$:

$$Y = \\alpha + \\beta_1 X + \\beta_2 E + \\beta_{12} X \\times E + \\boldsymbol{\\gamma}^T \\mathbf{C}$$

where $X$ is the instrumented exposure.

### Polygenic $\\times$ Environment

Polygenic risk scores in environmental context:

$$\\text{PRS} = \\sum_{i} \\hat{\\beta}_i G_i$$

$$E[Y] = \\beta_0 + \\beta_{PRS} \\text{PRS} + \\beta_E E + \\beta_{PRS \\times E} \\text{PRS} \\times E$$

## Conclusion

Gene-environment interactions represent a critical frontier in genomics, requiring sophisticated statistical methods and computational approaches. The integration of machine learning, improved environmental phenotyping, and causal inference methods will advance our understanding of how genetic and environmental factors jointly influence complex traits.

Success in this field requires interdisciplinary collaboration between statisticians, geneticists, environmental scientists, and computer scientists to develop robust, scalable methods for detecting and characterizing these important biological phenomena.`
  },
  {
  id: "5",
  title: "Linear Regression Revisited: Theory, Estimation, and Practice",
  slug: "linear-regression-theory-estimation-practice",
  excerpt: "A concise but rigorous walkthrough of linear regression, covering theory, estimation, inference, and implementation.",
  publishedAt: "2024-02-10",
  readTime: "7 min read",
  tags: ["Regression", "Statistics", "Theory"],
  featured: true,
  author: "Saurabh Mishra",
  content: `
# Linear Regression Revisited

Linear regression is a cornerstone of statistical modeling, forming the foundation of many modern methods in genetics, econometrics, and machine learning.

---

## Model Specification

We consider the classical linear model:

$$
\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon},
$$

where $\\boldsymbol{\\varepsilon} \\sim \\mathcal{N}(0, \\sigma^2 \\mathbf{I})$.

---

## Ordinary Least Squares

The OLS estimator minimizes the squared error:

$$
\\hat{\\boldsymbol{\\beta}}
=
\\arg\\min_{\\boldsymbol{\\beta}}
\\| \\mathbf{y} - \\mathbf{X}\\boldsymbol{\\beta} \\|_2^2
$$

Solving yields the closed-form solution:

$$
\\boxed{
\\hat{\\boldsymbol{\\beta}} =
(\\mathbf{X}^\\top \\mathbf{X})^{-1} \\mathbf{X}^\\top \\mathbf{y}
}
$$

---

> **Theorem (Unbiasedness)**  
> If $\\mathbb{E}[\\boldsymbol{\\varepsilon} \\mid \\mathbf{X}] = 0$, then  
> $$
> \\mathbb{E}[\\hat{\\boldsymbol{\\beta}}] = \\boldsymbol{\\beta}.
> $$

---

## R Example

\`\`\`r
set.seed(42)

n <- 100
x <- rnorm(n)
y <- 1 + 2 * x + rnorm(n, sd = 0.5)

model <- lm(y ~ x)
summary(model)
\`\`\`

---

## Why This Matters

Linear regression remains central to GWAS, TWAS, and causal inference. Understanding its assumptions and limitations is essential for correct scientific conclusions.

---
`
}

];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );
}








// export interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   publishedAt: string;
//   readTime: string;
//   author?: string;
//   tags?: string[];
//   featured?: boolean;
//   image?: string;
// }

// export const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "Advanced GWAS Methodology: Leveraging Population Structure for Enhanced Discovery",
//     slug: "gwas-methodology-population-structure",
//     excerpt: "Exploring how incorporating population structure and ancestry information can significantly improve the power and precision of genome-wide association studies.",
//     publishedAt: "2024-01-15",
//     readTime: "8 min read",
//     author: "Saurabh Mishra",
//     tags: ["GWAS", "Population Genetics", "Statistical Methods"],
//     featured: true,
//     content: `# Advanced GWAS Methodology: Leveraging Population Structure for Enhanced Discovery

// Genome-wide association studies (GWAS) have revolutionized our understanding of the genetic architecture of complex traits. However, traditional approaches often struggle with population stratification and hidden relatedness.

// ## Mathematical Framework

// The standard GWAS model can be expressed as:

// $$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{g} + \\boldsymbol{\\epsilon}$$

// where $\\mathbf{y}$ is the phenotype vector, $\\mathbf{X}$ is the genotype matrix, $\\boldsymbol{\\beta}$ represents effect sizes, $\\mathbf{g}$ captures polygenic effects, and $\\boldsymbol{\\epsilon}$ is the error term.

// ## Population Structure Correction

// ### Principal Component Analysis

// The inclusion of principal components helps control for population stratification:

// $$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{Z}\\boldsymbol{\\gamma} + \\boldsymbol{\\epsilon}$$

// where $\\mathbf{Z}$ contains the first $k$ principal components and $\\boldsymbol{\\gamma}$ are their effects.

// ### Mixed Linear Models

// For related individuals, we employ mixed linear models:

// $$\\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{u} + \\boldsymbol{\\epsilon}$$

// where $\\mathbf{u} \\sim N(0, \\sigma_g^2 \\mathbf{K})$ and $\\mathbf{K}$ is the genetic relationship matrix.

// ## Implementation Strategies

// ### 1. Quality Control Pipeline

// - Minor allele frequency filtering: $MAF > 0.01$
// - Hardy-Weinberg equilibrium: $p_{HWE} > 10^{-6}$
// - Genotype missingness: $< 5\\%$

// ### 2. Association Testing

// The test statistic follows:

// $$T = \\frac{\\hat{\\beta}}{SE(\\hat{\\beta})} \\sim t_{n-p}$$

// under the null hypothesis of no association.

// ## Advanced Considerations

// ### Gene-Environment Interactions

// We can extend the model to include $G \\times E$ interactions:

// $$E[Y|G,E] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

// ### Multiple Testing Correction

// Given $m$ independent tests, the Bonferroni correction requires:

// $$\\alpha_{corrected} = \\frac{\\alpha}{m}$$

// For genome-wide significance: $\\alpha = 5 \\times 10^{-8}$

// ## Future Directions

// 1. **Multi-ethnic GWAS**: Leveraging diverse populations for discovery
// 2. **Functional annotation**: Integrating epigenomic data
// 3. **Machine learning approaches**: Deep learning for variant prioritization

// ## Conclusion

// Modern GWAS methodology continues to evolve, with population structure correction remaining a critical component for robust genetic association discovery. The integration of advanced statistical methods and computational approaches promises to unlock new insights into the genetic basis of complex traits.

// ### References

// 1. Price, A.L., et al. (2010). New approaches to population stratification in genome-wide association studies. *Nature Reviews Genetics*, 11(7), 459-463.
// 2. Yang, J., et al. (2011). GCTA: a tool for genome-wide complex trait analysis. *American Journal of Human Genetics*, 88(1), 76-82.`
//   },
//   {
//     id: "2", 
//     title: "Transcriptome-Wide Association Studies: Bridging Genomics and Functional Biology",
//     slug: "twas-genomics-functional-biology",
//     excerpt: "Understanding how TWAS methodology connects genetic variants to gene expression, providing insights into the molecular mechanisms underlying complex diseases.",
//     publishedAt: "2023-12-10",
//     readTime: "10 min read",
//     author: "Saurabh Mishra",
//     tags: ["TWAS", "Gene Expression", "Functional Genomics"],
//     featured: false,
//     content: `# Transcriptome-Wide Association Studies: Bridging Genomics and Functional Biology

//   Transcriptome-wide association studies (TWAS) represent a powerful approach for identifying genes whose expression is associated with complex traits, bridging the gap between genetic variants and phenotypes.

//   ## Methodological Foundation

//   ### Two-Stage Approach

//   TWAS typically employs a two-stage design:

//   1. **Stage 1**: Build predictive models of gene expression
//   2. **Stage 2**: Test association between predicted expression and phenotype

//   ### Stage 1: Expression Prediction

//   The prediction model can be written as:

//   $$\\hat{E}_j = \\sum_{k \\in cis} w_{jk} G_k$$

//   where $\\hat{E}_j$ is predicted expression for gene $j$, $w_{jk}$ are SNP weights, and $G_k$ are genotypes in the cis-region.

//   ### Stage 2: Association Testing

//   The association test becomes:

//   $$Y = \\alpha + \\beta \\hat{E}_j + \\boldsymbol{\\gamma}^T \\mathbf{C} + \\epsilon$$

//   where $Y$ is the phenotype, $\\hat{E}_j$ is predicted expression, and $\\mathbf{C}$ are covariates.

//   ## Statistical Framework

//   ### Elastic Net Regularization

//   For expression prediction, we often use elastic net:

//   $$\\min_{\\boldsymbol{w}} \\frac{1}{2n} ||\\mathbf{E} - \\mathbf{G}\\boldsymbol{w}||_2^2 + \\lambda_1 ||\\boldsymbol{w}||_1 + \\lambda_2 ||\\boldsymbol{w}||_2^2$$

//   This balances between LASSO ($L_1$) and ridge ($L_2$) penalties.

//   ### Cross-Validation

//   Model performance is evaluated using $R^2$:

//   $$R^2 = 1 - \\frac{\\sum_i (E_i - \\hat{E}_i)^2}{\\sum_i (E_i - \\bar{E})^2}$$

//   ## Advanced Methods

//   ### Multi-tissue TWAS

//   Integrating multiple tissues improves power:

//   $$\\hat{E}_{jt} = \\sum_{k} w_{jkt} G_k$$

//   where $t$ indexes tissues.

//   ### Bayesian Approaches

//   Bayesian methods can incorporate prior information:

//   $$p(\\boldsymbol{w}|\\mathbf{E}, \\mathbf{G}) \\propto p(\\mathbf{E}|\\mathbf{G}, \\boldsymbol{w}) p(\\boldsymbol{w})$$

//   ## Quality Control and Interpretation

//   ### Multiple Testing

//   Given $G$ genes tested, we apply correction:

//   $$p_{adj} = \\min(G \\times p_{raw}, 1)$$

//   ### Colocalization Analysis

//   To distinguish causal from confounded associations, we perform colocalization:

//   $$PP_4 = P(\\text{shared causal variant})$$

//   ## Applications and Results

//   ### Disease Discovery

//   TWAS has identified numerous disease-associated genes:

//   - Psychiatric disorders: 35% more genes than GWAS alone
//   - Autoimmune diseases: Enhanced mechanistic insights
//   - Cancer: Tissue-specific expression effects

//   ## Conclusion

//    TWAS methodology continues to evolve, providing increasingly sophisticated approaches to understand the functional consequences of genetic variation. The integration of multi-tissue data, improved prediction models, and careful consideration of confounding factors will enhance our ability to translate genetic discoveries into biological insights.`
//   },

//   {
//     id: "3",
//     title: "Gene-Environment Interactions: Statistical Challenges and Computational Solutions",
//     slug: "gene-environment-interactions-statistical-methods",
//     excerpt: "Examining the complexities of modeling gene-environment interactions in large-scale genomic studies and the computational approaches needed to address them.",
//     publishedAt: "2023-11-20",
//     readTime: "12 min read",
//     author: "Saurabh Mishra",
//     tags: ["Gene-Environment Interactions", "Statistical Methods", "Computational Biology"],
//     featured: false,
//     content: `# Gene-Environment Interactions: Statistical Challenges and Computational Solutions

//   Gene-environment interactions ($G \\times E$) represent a fundamental mechanism underlying phenotypic variation, yet their detection and characterization pose significant statistical and computational challenges.

//   ## Theoretical Framework

//   ### Basic Interaction Model

//   The simplest $G \\times E$ model can be expressed as:

//   $$E[Y|G,E] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

//   where $\\beta_{GE}$ represents the interaction effect.

//   ### Scale Dependencies

//   Interactions can be scale-dependent. On the logit scale:

//   $$\\text{logit}(P(Y=1)) = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

//   versus the risk difference scale:

//   $$P(Y=1) = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E$$

//   ## Statistical Challenges

//   ### Power Considerations

//   The power to detect $G \\times E$ interactions is generally lower than main effects:

//   $$\\text{Power} \\propto \\frac{\\beta_{GE}^2}{\\text{Var}(\\hat{\\beta}_{GE})}$$

//   Sample size requirements often increase by factors of 2-4 compared to main effects.

//   ### Multiple Testing Burden

//   For genome-wide $G \\times E$ studies:

//   $$\\text{Tests} = M \\times E$$

//   where $M$ is the number of SNPs and $E$ is the number of environmental variables.

//   ## Advanced Statistical Methods

//   ### Variance Component Models

//   For continuous traits, we can decompose variance:

//   $$\\sigma_P^2 = \\sigma_G^2 + \\sigma_E^2 + \\sigma_{GE}^2 + \\sigma_{error}^2$$

//   ### Bayesian Hierarchical Models

//   Hierarchical models allow borrowing strength across variants:

//   $$\\beta_{GE,i} \\sim N(\\mu_{GE}, \\sigma_{GE}^2)$$

//   This approach improves power for small effect sizes.

//   ## Practical Implementation

//   ### Quality Control Pipeline

//   1. **Environmental Data QC**
//     - Outlier detection: $|z| > 3$
//     - Missing data patterns
//     - Temporal consistency

//   2. **Genetic Data QC**
//     - Standard GWAS QC procedures
//     - Population stratification control
//     - Relatedness adjustment

//   ## Future Directions

//   ### Multi-Dimensional Environments

//   Modeling complex environmental exposures:

//   $$E[Y] = f(\\mathbf{G}, \\mathbf{E}, \\mathbf{G} \\otimes \\mathbf{E})$$

//   where $\\mathbf{E}$ represents multi-dimensional environmental space.

//   ### Polygenic × Environment

//   Polygenic risk scores in environmental context:

//   $$\\text{PRS} = \\sum_{i} \\hat{\\beta}_i G_i$$

//   $$E[Y] = \\beta_0 + \\beta_{PRS} \\text{PRS} + \\beta_E E + \\beta_{PRS \\times E} \\text{PRS} \\times E$$

//   ## Conclusion

//   Gene-environment interactions represent a critical frontier in genomics, requiring sophisticated statistical methods and computational approaches. The integration of machine learning, improved environmental phenotyping, and causal inference methods will advance our understanding of how genetic and environmental factors jointly influence complex traits.`
//   }
// ];

// export function getBlogPost(slug: string): BlogPost | undefined {
//   return blogPosts.find(post => post.slug === slug);
// }

// export function getAllBlogPosts(): BlogPost[] {
//   return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
// }

// export function getBlogPostsByTag(tag: string): BlogPost[] {
//   return blogPosts.filter(post => post.tags?.includes(tag));
// }

// export function getFeaturedPosts(): BlogPost[] {
//   return blogPosts.filter(post => post.featured);
// }

// export function getAllTags(): string[] {
//   const tags = new Set<string>();
//   blogPosts.forEach(post => {
//     post.tags?.forEach(tag => tags.add(tag));
//   });
//   return Array.from(tags).sort();
// }





// export interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   publishedAt: string;
//   readTime: string;
// }

// export const blogPosts: BlogPost[] = [
//   {
//     id: "4",
//     title: "E-values, P-values, and Q-values: Mathematical Foundations of Statistical Evidence",
//     slug: "evalues-pvalues-qvalues-statistical-evidence",
//     excerpt:
//       "A mathematical perspective on p-values, e-values, and q-values, highlighting their distinct roles in hypothesis testing, evidence accumulation, and multiple testing control.",
//     publishedAt: "2024-02-05",
//     readTime: "10 min read",
//     content: `# E-values, P-values, and Q-values: Mathematical Foundations of Statistical Evidence

// Statistical inference relies on formal tools to quantify uncertainty, evidence, and error control. Among the most widely used are **p-values**, which measure tail probabilities under a null hypothesis, and **q-values**, which extend p-values to large-scale multiple testing. More recently, **e-values** have emerged as an alternative framework that measures evidence on a multiplicative scale and remains valid under optional stopping and sequential experimentation.

// ## P-values: Tail Probabilities Under the Null

// Let $(\\Omega, \\mathcal{F}, \\mathbb{P}_0)$ denote a probability space corresponding to a null hypothesis $H_0$, and let $X$ be the observed data. A **p-value** is a measurable function $P(X) \\in [0,1]$ satisfying

// $$
// \\mathbb{P}_0(P(X) \\le \\alpha) \\le \\alpha \\quad \\text{for all } \\alpha \\in [0,1].
// $$

// In typical settings, p-values are constructed from a test statistic $T(X)$ as

// $$
// P(X) = \\mathbb{P}_0(T(X') \\ge T(X)),
// $$

// where $X'$ is an independent replicate drawn under $H_0$.

// ## E-values: Evidence via Expectation Control

// An **e-value** is a nonnegative random variable $E(X) \\ge 0$ such that

// $$
// \\mathbb{E}_{\\mathbb{P}_0}[E(X)] \\le 1.
// $$

// A canonical example arises from likelihood ratios:

// $$
// E(X) = \\frac{d\\mathbb{P}_1}{d\\mathbb{P}_0}(X).
// $$

// ## Q-values and False Discovery Rate Control

// The false discovery rate is defined as

// $$
// \\mathrm{FDR} = \\mathbb{E}\\left[ \\frac{V}{\\max(R,1)} \\right].
// $$

// Under a mixture model,

// $$
// P_i \\sim \\pi_0 U(0,1) + (1 - \\pi_0) F_1.
// $$

// ## Summary

// P-values, e-values, and q-values formalize complementary but distinct notions of statistical inference.`
//   },

//   {
//     id: "1",
//     title: "Advanced GWAS Methodology: Leveraging Population Structure for Enhanced Discovery",
//     slug: "gwas-methodology-population-structure",
//     excerpt:
//       "Exploring how incorporating population structure and ancestry information can significantly improve the power and precision of genome-wide association studies.",
//     publishedAt: "2024-01-15",
//     readTime: "8 min read",
//     content: `# Advanced GWAS Methodology

// Genome-wide association studies (GWAS) have revolutionized our understanding of the genetic architecture of complex traits.

// ## Mathematical Framework

// $$
// \\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{g} + \\boldsymbol{\\epsilon}
// $$

// ## Population Structure Correction

// ### Principal Component Analysis

// $$
// \\mathbf{y} = \\mathbf{X}\\boldsymbol{\\beta} + \\mathbf{Z}\\boldsymbol{\\gamma} + \\boldsymbol{\\epsilon}
// $$

// ### Mixed Linear Models

// $$
// \\mathbf{u} \\sim N(0, \\sigma_g^2 \\mathbf{K})
// $$

// ## Conclusion

// Population structure correction remains critical for robust GWAS inference.`
//   },

//   {
//     id: "2",
//     title: "Transcriptome-Wide Association Studies: Bridging Genomics and Functional Biology",
//     slug: "twas-genomics-functional-biology",
//     excerpt:
//       "Understanding how TWAS methodology connects genetic variants to gene expression.",
//     publishedAt: "2023-12-10",
//     readTime: "10 min read",
//     content: `# Transcriptome-Wide Association Studies

// ## Stage 1: Expression Prediction

// $$
// \\hat{E}_j = \\sum_{k \\in cis} w_{jk} G_k
// $$

// ## Stage 2: Association Testing

// $$
// Y = \\alpha + \\beta \\hat{E}_j + \\boldsymbol{\\gamma}^T \\mathbf{C} + \\epsilon
// $$

// ## Conclusion

// TWAS bridges GWAS and functional genomics.`
//   },

//   {
//     id: "3",
//     title: "Gene-Environment Interactions: Statistical Challenges and Computational Solutions",
//     slug: "gene-environment-interactions-statistical-methods",
//     excerpt:
//       "Examining the complexities of modeling gene-environment interactions.",
//     publishedAt: "2023-11-20",
//     readTime: "12 min read",
//     content: `# Gene-Environment Interactions

// $$
// E[Y|G,E] = \\beta_0 + \\beta_G G + \\beta_E E + \\beta_{GE} G \\times E
// $$

// ## Conclusion

// Gene-environment interactions require sophisticated statistical methods.`
//   }
// ];

// export function getBlogPost(slug: string): BlogPost | undefined {
//   return blogPosts.find(post => post.slug === slug);
// }

// export function getAllBlogPosts(): BlogPost[] {
//   return [...blogPosts].sort(
//     (a, b) =>
//       new Date(b.publishedAt).getTime() -
//       new Date(a.publishedAt).getTime()
//   );
// }
