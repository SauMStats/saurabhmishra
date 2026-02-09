import { useParams, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { useEffect } from "react";
import { getBlogPost, type BlogPost as BlogPostType } from "@/data/blog-posts";

declare global {
  interface Window {
    MathJax: any;
  }
}

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = slug ? getBlogPost(slug) : undefined;
  const isLoading = false;
  const error = !post && slug;

  useEffect(() => {
    // Re-render MathJax when post content loads
    if (post && window.MathJax) {
      window.MathJax.typesetPromise?.();
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academic-blue" data-testid="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-error-heading">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8" data-testid="text-error-message">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <a className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Convert markdown-style content to HTML-like structure for rendering
  const renderContent = (content: string) => {
    // Split content by paragraphs and process each
    const sections = content.split('\n\n');
    
    return sections.map((section, index) => {
      // Handle headers
      if (section.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
            {section.replace('# ', '')}
          </h1>
        );
      }
      if (section.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
            {section.replace('## ', '')}
          </h2>
        );
      }
      if (section.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-5">
            {section.replace('### ', '')}
          </h3>
        );
      }

      // Handle math blocks
      if (section.includes('$$')) {
        return (
          <div key={index} className="my-6 text-center">
            <div dangerouslySetInnerHTML={{ __html: section }} />
          </div>
        );
      }

      // Handle lists
      if (section.includes('\n1. ') || section.includes('\n- ')) {
        const listItems = section.split('\n').filter(item => item.trim());
        const isOrdered = section.includes('1. ');
        
        return (
          <div key={index} className="my-4">
            {isOrdered ? (
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                {listItems.map((item, i) => (
                  <li key={i}>{item.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '')}</li>
                ))}
              </ol>
            ) : (
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {listItems.map((item, i) => (
                  <li key={i}>{item.replace(/^-\s*/, '')}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }

      // Handle regular paragraphs
      if (section.trim()) {
        return (
          <p key={index} className="text-gray-600 leading-relaxed mb-4">
            {section}
          </p>
        );
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link href="/blog">
            <a className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
          </Link>
        </div>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none" data-testid={`blog-post-${post.slug}`}>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-testid="blog-post-title">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8" data-testid="blog-post-meta">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Saurabh Mishra</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={new Date(post.publishedAt).toISOString()}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="bg-academic-light p-6 rounded-lg" data-testid="blog-post-excerpt">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <div className="blog-content prose prose-lg max-w-none" data-testid="blog-post-content">
            {renderContent(post.content)}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200" data-testid="blog-post-footer">
          <div className="bg-academic-light rounded-xl p-8">
            <div className="flex items-start space-x-6">
              {/* <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Saurabh Mishra" 
                className="w-16 h-16 rounded-full object-cover"
                data-testid="author-avatar"
              /> */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600 leading-relaxed">
                  Saurabh Mishra is a PhD student in Mathematics working in statistical genetics, GWAS, TWAS, and gene–environment interactions.
                </p>
                <div className="mt-4">
                  <Link href="/bio">
                    <a className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-author-bio">
                      Learn more about Saurabh →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Related or Navigation */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <a className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200" data-testid="button-more-posts">
              <ArrowLeft className="w-4 h-4 mr-2" />
              More Blog Posts
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
