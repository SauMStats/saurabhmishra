import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import { getAllBlogPosts, type BlogPost } from "@/data/blog-posts";

declare global {
  interface Window {
    MathJax: any;
  }
}

export default function Blog() {
  const posts = getAllBlogPosts();
  const isLoading = false;
  const error = null;

  useEffect(() => {
    // Re-render MathJax when posts load
    if (posts && window.MathJax) {
      window.MathJax.typesetPromise?.();
    }
  }, [posts]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
              Blog
            </h1>
            <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
              Thoughts on research, academia, and the future of AI
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academic-blue" data-testid="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
              Blog
            </h1>
            <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
              Thoughts on research, academia, and the future of AI
            </p>
          </div>
          <div className="text-center">
            <p className="text-red-600 mb-4" data-testid="text-error-message">Failed to load blog posts</p>
            <p className="text-gray-600" data-testid="text-error-details">Please try again later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
            Blog
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
            Thoughts on research, academia, and the future of AI
          </p>
        </div>

        {!posts || posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg" data-testid="text-no-posts">
              No blog posts available yet. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article 
                key={post.id} 
                className={`bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200 ${
                  index === 0 ? 'bg-academic-light border-l-4 border-academic-blue' : ''
                }`}
                data-testid={`blog-post-${post.slug}`}
              >
                <div className="flex items-center text-sm text-gray-500 mb-4" data-testid={`blog-meta-${post.slug}`}>
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-academic-blue transition-colors duration-200" data-testid={`blog-title-${post.slug}`}>
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6 text-lg" data-testid={`blog-excerpt-${post.slug}`}>
                  {post.excerpt}
                </p>

                {/* Math Preview for first post if it contains math */}
                {index === 0 && post.content.includes('$$') && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center" data-testid={`blog-math-preview-${post.slug}`}>
                    <p className="text-sm text-gray-600 mb-2">Mathematical formulation:</p>
                    <div className="text-base" dangerouslySetInnerHTML={{
                      __html: '$$\\alpha^* = \\arg\\min_{\\alpha} \\mathcal{L}_{val}(w^*(\\alpha), \\alpha)$$'
                    }}>
                    </div>
                  </div>
                )}

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid={`blog-read-more-${post.slug}`}>
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Blog Info */}
        <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-blog-info">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Blog</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This blog explores the intersection of artificial intelligence, ethics, and society. I share insights from my research, 
            thoughts on current developments in machine learning, and reflections on the responsible development and deployment of AI systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Topics include neural architecture search, fairness in machine learning, climate informatics, and the broader implications 
            of AI technology for healthcare and environmental science. Mathematical formulations and code examples are included where relevant.
          </p>
        </section>
      </div>
    </div>
  );
}
