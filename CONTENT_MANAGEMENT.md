# Academic Website Content Management Guide

This guide explains how to manage content for your academic website deployed on GitHub Pages.

## Overview

Your website is built as a static site with the following main content areas:
- **Blog Posts**: Technical articles about your research
- **Personal Information**: Bio, contact details, research interests
- **Navigation**: Menu structure and pages

## Adding New Blog Posts

### 1. Blog Post Structure

Blog posts are stored in `client/src/data/blog-posts.ts`. Each post has the following structure:

```typescript
{
  id: "unique-id",
  title: "Your Blog Post Title",
  slug: "url-friendly-slug",
  excerpt: "Brief description for the blog listing page",
  publishedAt: "YYYY-MM-DD",
  readTime: "X min read",
  content: `Full blog post content with markdown and LaTeX support`
}
```

### 2. Adding a New Post

1. Open `client/src/data/blog-posts.ts`
2. Add a new object to the `blogPosts` array
3. Follow this template:

```typescript
{
  id: "4",  // Increment from the last post
  title: "Your New Research Article Title",
  slug: "your-new-research-article-title",
  excerpt: "A compelling summary of your research findings and methodology.",
  publishedAt: "2024-02-01",  // Use YYYY-MM-DD format
  readTime: "6 min read",
  content: `# Your New Research Article Title

Your content here with full markdown support...

## Mathematical Formulations

You can include LaTeX math:

$$\\beta_{new} = \\arg\\max_{\\beta} \\mathcal{L}(\\mathbf{Y}|\\mathbf{X})$$

## Code Examples

\`\`\`python
def your_function():
    return "Research results"
\`\`\`

## Conclusion

Your research conclusions...`
}
```

### 3. Mathematical Content

Your blog supports LaTeX mathematics:

- **Inline math**: Use `$formula$` for inline equations
- **Display math**: Use `$$formula$$` for centered equations
- **Greek letters**: `\\alpha`, `\\beta`, `\\gamma`, etc.
- **Subscripts/superscripts**: `x_i`, `x^2`
- **Fractions**: `\\frac{numerator}{denominator}`
- **Matrices**: Use `\\mathbf{X}` for bold matrices

### 4. Content Organization

Structure your blog posts with:
- Clear section headers (`##`, `###`)
- Mathematical formulations in display math
- Code examples in proper code blocks
- References and citations

## Updating Personal Information

### Bio Page (`client/src/pages/Bio.tsx`)

To update your biography:
1. Education section: Update degrees, institutions, dates
2. Research interests: Modify the interest cards
3. Awards: Add new recognitions and honors

### Contact Information (`client/src/pages/Contact.tsx`)

To update contact details:
1. Email address
2. Office location and hours
3. Social media links (LinkedIn, GitHub)
4. Collaboration interests list

### Home Page (`client/src/pages/Home.tsx`)

To update the home page:
1. Profile description
2. Research highlights
3. Recent publications
4. Blog post previews

## Managing Publications

Publications are currently static content in `client/src/pages/Home.tsx`. To add new publications:

1. Locate the "Recent Publications" section
2. Add new publication entries following this structure:

```jsx
<div className="border-l-4 border-academic-blue pl-6 py-4">
  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    Your Paper Title
  </h3>
  <p className="text-academic-gray mb-3">
    <span className="font-medium">Your Name</span>, Co-author Names
  </p>
  <p className="text-sm text-gray-500 mb-3">
    <em>Journal Name (Year)</em>
  </p>
  <p className="text-gray-600 leading-relaxed mb-4">
    Brief abstract or description of the paper.
  </p>
  <div className="flex flex-wrap gap-4 text-sm">
    <a href="#" className="text-academic-blue hover:text-blue-700">PDF</a>
    <a href="#" className="text-academic-blue hover:text-blue-700">Code</a>
    <a href="#" className="text-academic-blue hover:text-blue-700">BibTeX</a>
  </div>
</div>
```

## Deployment Process

### Automatic Deployment

Your website automatically deploys when you:
1. Push changes to the `main` branch on GitHub
2. GitHub Actions builds the static site
3. The site is deployed to GitHub Pages

### Manual Testing

Before pushing changes:
1. Test locally: `npm run dev`
2. Build static version: `npm run build:static`
3. Preview the built site

## Content Best Practices

### Blog Writing

1. **Clear Structure**: Use hierarchical headings
2. **Mathematical Clarity**: Explain equations and notation
3. **Code Documentation**: Comment code examples thoroughly
4. **Visual Appeal**: Break up text with equations and code blocks
5. **Practical Examples**: Include real-world applications

### Academic Tone

- Use precise, professional language
- Define technical terms when first introduced
- Provide context for your research area
- Include methodological details for reproducibility

### SEO Optimization

- Use descriptive titles and excerpts
- Include relevant keywords naturally
- Structure content with proper headings
- Add meta descriptions where applicable

## File Structure

```
├── client/src/
│   ├── data/
│   │   └── blog-posts.ts          # Blog content
│   ├── pages/
│   │   ├── Home.tsx               # Main page
│   │   ├── Bio.tsx                # Biography
│   │   ├── Contact.tsx            # Contact information
│   │   └── Blog.tsx               # Blog listing
│   └── components/
│       └── BlogPost.tsx           # Individual blog posts
├── .github/workflows/
│   └── deploy.yml                 # Deployment automation
└── CONTENT_MANAGEMENT.md          # This guide
```

## Troubleshooting

### Common Issues

1. **Math not rendering**: Check LaTeX syntax and escaping
2. **Build failures**: Verify JSON syntax in blog-posts.ts
3. **Broken links**: Ensure all internal links use correct paths
4. **Style issues**: Check CSS classes and dark mode compatibility

### Getting Help

- Check GitHub Actions logs for deployment errors
- Validate JavaScript syntax if builds fail
- Test LaTeX formulas in a LaTeX editor first
- Use browser developer tools to debug styling

## Advanced Customization

### Adding New Pages

1. Create new component in `client/src/pages/`
2. Add route to `client/src/App.tsx`
3. Update navigation in `client/src/components/Navigation.tsx`

### Styling Changes

- Modify `client/src/index.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Add dark mode variants to maintain theme consistency

### Analytics and SEO

Consider adding:
- Google Analytics for visitor tracking
- Open Graph meta tags for social sharing
- Structured data for academic content
- RSS feed for blog posts

---

This guide covers the essential aspects of managing your academic website. For complex changes or additional features, consider the technical documentation or seek developer assistance.