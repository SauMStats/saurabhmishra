import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
  author?: string;
  series?: string;
  seriesOrder?: number;
  seriesTitle?: string;
  pdf?: string;
  pdfs?: Array<{ title: string; filename: string }>;
  _filePath?: string;
  _assetsPath?: string;
}

export default function markdownBlogPlugin(): Plugin {
  const virtualModuleId = 'virtual:blog-content';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'vite-plugin-markdown-blog',
    
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        const posts = loadMarkdownPosts();
        return `export const markdownPosts = ${JSON.stringify(posts, null, 2)};`;
      }
    },

    handleHotUpdate({ file, server }) {
      // Hot reload when markdown files change
      if (file.endsWith('.md') && file.includes('blog-content')) {
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
        if (module) {
          server.moduleGraph.invalidateModule(module);
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      }
    }
  };
}

function loadMarkdownPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'client/public/blog-content');
  
  if (!fs.existsSync(contentDir)) {
    console.warn('blog-content directory not found, creating it...');
    fs.mkdirSync(contentDir, { recursive: true });
    return [];
  }

  const posts: BlogPost[] = [];
  
  // Recursively find all .md files
  function scanDirectory(dir: string, relativePath: string = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'assets') {
        // Recursively scan subdirectories (except assets)
        scanDirectory(fullPath, path.join(relativePath, item));
      } else if (stat.isFile() && item.endsWith('.md')) {
        try {
          const post = parseMarkdownFile(fullPath, relativePath, item);
          if (post) {
            posts.push(post);
          }
        } catch (error) {
          console.error(`Error parsing ${fullPath}:`, error);
        }
      }
    }
  }
  
  scanDirectory(contentDir);
  
  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
  
  return posts;
}

function parseMarkdownFile(filePath: string, relativePath: string, fileName: string): BlogPost | null {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);
  
  // Extract series name from directory structure
  const seriesName = relativePath ? path.basename(relativePath) : undefined;
  const assetsPath = path.join('/blog-content', relativePath, 'assets');
  
  // Generate slug if not provided
  const slug = frontmatter.slug || 
    fileName.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
  
  // Generate ID from file path
  const id = path.join(relativePath, fileName).replace(/\//g, '-').replace('.md', '');
  
  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readTime = frontmatter.readTime || `${Math.ceil(wordCount / 200)} min read`;
  
  // Extract excerpt (first paragraph or from frontmatter)
  let excerpt = frontmatter.excerpt;
  if (!excerpt) {
    const firstParagraph = content.split('\n\n')[0];
    excerpt = firstParagraph.replace(/[#*`]/g, '').substring(0, 200) + '...';
  }
  
  // Process content to fix relative asset paths
  const processedContent = content.replace(
    /!\[([^\]]*)\]\(\.\/assets\//g,
    `![$1](${assetsPath}/`
  ).replace(
    /\[([^\]]*)\]\(\.\/assets\//g,
    `[$1](${assetsPath}/`
  );
  
  // Process PDFs if they have relative paths
  const pdfs = frontmatter.pdfs?.map((pdf: any) => ({
    title: pdf.title,
    filename: pdf.filename,
    path: pdf.path || `${assetsPath}/pdfs/${pdf.filename}`
  }));
  
  return {
    id,
    title: frontmatter.title || 'Untitled Post',
    slug,
    excerpt,
    content: processedContent,
    publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
    readTime,
    tags: frontmatter.tags || [],
    featured: frontmatter.featured || false,
    author: frontmatter.author || 'Saurabh Mishra',
    series: frontmatter.series || seriesName,
    seriesOrder: frontmatter.seriesOrder,
    seriesTitle: frontmatter.seriesTitle,
    pdf: frontmatter.pdf,
    pdfs: pdfs || (frontmatter.pdf ? [{ 
      title: 'Attached Document', 
      filename: frontmatter.pdf,
      path: `/assets/${frontmatter.pdf}`
    }] : undefined),
    _filePath: filePath,
    _assetsPath: assetsPath
  };
}
