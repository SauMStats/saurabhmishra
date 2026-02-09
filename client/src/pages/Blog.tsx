// import { Calendar, Clock, ArrowRight } from "lucide-react";
// import { Link } from "wouter";
// import { useEffect } from "react";
// import { getAllBlogPosts, type BlogPost } from "@/data/blog-posts";

// declare global {
//   interface Window {
//     MathJax: any;
//   }
// }

// export default function Blog() {
//   const posts = getAllBlogPosts();
//   const isLoading = false;
//   const error = null;

//   useEffect(() => {
//     // Re-render MathJax when posts load
//     if (posts && window.MathJax) {
//       window.MathJax.typesetPromise?.();
//     }
//   }, [posts]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
//               Blog
//             </h1>
//             <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
//               Thoughts on research, academia, and the future of AI
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academic-blue" data-testid="loading-spinner"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
//               Blog
//             </h1>
//             <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
//               Thoughts on research, academia, and the future of AI
//             </p>
//           </div>
//           <div className="text-center">
//             <p className="text-red-600 mb-4" data-testid="text-error-message">Failed to load blog posts</p>
//             <p className="text-gray-600" data-testid="text-error-details">Please try again later</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white py-16">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-blog-heading">
//             Blog
//           </h1>
//           <p className="text-xl text-academic-gray" data-testid="text-blog-subtitle">
//             Thoughts on research, academia, and the future of AI
//           </p>
//         </div>

//         {!posts || posts.length === 0 ? (
//           <div className="text-center py-16">
//             <p className="text-gray-600 text-lg" data-testid="text-no-posts">
//               No blog posts available yet. Check back soon for updates!
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-12">
//             {posts.map((post, index) => (
//               <article 
//                 key={post.id} 
//                 className={`bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200 ${
//                   index === 0 ? 'bg-academic-light border-l-4 border-academic-blue' : ''
//                 }`}
//                 data-testid={`blog-post-${post.slug}`}
//               >
//                 <div className="flex items-center text-sm text-gray-500 mb-4" data-testid={`blog-meta-${post.slug}`}>
//                   <Calendar className="w-4 h-4 mr-2" />
//                   <time dateTime={new Date(post.publishedAt).toISOString()}>
//                     {new Date(post.publishedAt).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric'
//                     })}
//                   </time>
//                   <span className="mx-2">•</span>
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>{post.readTime}</span>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-academic-blue transition-colors duration-200" data-testid={`blog-title-${post.slug}`}>
//                   <Link href={`/blog/${post.slug}`}>
//                     {post.title}
//                   </Link>
//                 </h2>

//                 <p className="text-gray-600 leading-relaxed mb-6 text-lg" data-testid={`blog-excerpt-${post.slug}`}>
//                   {post.excerpt}
//                 </p>

//                 {/* Math Preview for first post if it contains math */}
//                 {index === 0 && post.content.includes('$$') && (
//                   <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center" data-testid={`blog-math-preview-${post.slug}`}>
//                     <p className="text-sm text-gray-600 mb-2">Mathematical formulation:</p>
//                     <div className="text-base" dangerouslySetInnerHTML={{
//                       __html: '$$\\alpha^* = \\arg\\min_{\\alpha} \\mathcal{L}_{val}(w^*(\\alpha), \\alpha)$$'
//                     }}>
//                     </div>
//                   </div>
//                 )}

//                 <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid={`blog-read-more-${post.slug}`}>
//                   Read more
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Link>
//               </article>
//             ))}
//           </div>
//         )}

//         {/* Blog Info */}
//         <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-blog-info">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Blog</h2>
//           <p className="text-gray-600 leading-relaxed mb-4">
//             This blog explores the intersection of artificial intelligence, ethics, and society. I share insights from my research, 
//             thoughts on current developments in machine learning, and reflections on the responsible development and deployment of AI systems.
//           </p>
//           <p className="text-gray-600 leading-relaxed">
//             Topics include neural architecture search, fairness in machine learning, climate informatics, and the broader implications 
//             of AI technology for healthcare and environmental science. Mathematical formulations and code examples are included where relevant.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }






import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react";
import { Link } from "wouter";
import { useState, useMemo } from "react";
import { getAllBlogPosts, type BlogPost } from "../data/blog-posts";

export default function Blog() {
  const posts = getAllBlogPosts();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isLoading = false;
  const error = null;

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts based on tag and search
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags?.includes(selectedTag));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [posts, selectedTag, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 pb-8">
              Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl" data-testid="text-blog-subtitle">
              Thoughts on research, academia, and statistical genetics
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-testid="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 pb-8">
              Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl" data-testid="text-blog-subtitle">
              Thoughts on research, academia, and statistical genetics
            </p>
          </div>
          <div className="text-center">
            <p className="text-red-600 mb-4 font-medium" data-testid="text-error-message">Failed to load blog posts</p>
            <p className="text-gray-600" data-testid="text-error-details">Please try again later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 pb-8">
            Blog
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl" data-testid="text-blog-subtitle">
            Exploring statistical genetics, GWAS methodology, and gene-environment interactions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === null
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                All Posts
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Results count */}
          {(selectedTag || searchQuery) && (
            <p className="text-center text-gray-600">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </p>
          )}
        </div>

        {/* Blog Posts */}
        {!filteredPosts || filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg" data-testid="text-no-posts">
              {posts.length === 0 
                ? "No blog posts available yet. Check back soon for updates!"
                : "No posts match your search. Try different keywords or clear filters."}
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  post.featured ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
                data-testid={`blog-post-${post.slug}`}
              >
                <div className="p-8">
                  {/* Featured badge */}
                  {post.featured && (
                    <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                      Featured
                    </div>
                  )}

                  {/* Meta information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4" data-testid={`blog-meta-${post.slug}`}>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <time dateTime={new Date(post.publishedAt).toISOString()}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <a>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200" data-testid={`blog-title-${post.slug}`}>
                        {post.title}
                      </h2>
                    </a>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg" data-testid={`blog-excerpt-${post.slug}`}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedTag(tag);
                          }}
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read more link */}
                  <Link href={`/blog/${post.slug}`}>
                    <a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group-hover:gap-3 gap-2" data-testid={`blog-read-more-${post.slug}`}>
                      Read full article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Blog Info */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100 shadow-sm" data-testid="section-blog-info">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Blog</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This blog explores advanced topics in statistical genetics, focusing on genome-wide association studies (GWAS), 
            transcriptome-wide association studies (TWAS), and gene-environment interactions. I share insights from my research, 
            methodological developments, and computational approaches to understanding the genetic architecture of complex traits.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each post includes detailed mathematical formulations, practical implementation strategies, and discussions of 
            current challenges and future directions in the field. Whether you're a researcher, student, or practitioner 
            in genomics and biostatistics, you'll find content that bridges theory and application.
          </p>
        </section>
      </div>
    </div>
  );
}




// import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react";
// import { Link } from "wouter";
// import { useState, useMemo } from "react";
// import { getAllBlogPosts } from "../data/blog-posts";

// export default function Blog() {
//   const posts = getAllBlogPosts();
//   const [selectedTag, setSelectedTag] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Extract all unique tags
//   const allTags = useMemo(() => {
//     const tagSet = new Set<string>();
//     posts.forEach(post => {
//       post.tags?.forEach(tag => tagSet.add(tag));
//     });
//     return Array.from(tagSet).sort();
//   }, [posts]);

//   // Filter posts
//   const filteredPosts = useMemo(() => {
//     let filtered = posts;

//     if (selectedTag) {
//       filtered = filtered.filter(post =>
//         post.tags?.includes(selectedTag)
//       );
//     }

//     if (searchQuery) {
//       const q = searchQuery.toLowerCase();
//       filtered = filtered.filter(post =>
//         post.title.toLowerCase().includes(q) ||
//         post.excerpt.toLowerCase().includes(q) ||
//         post.tags?.some(tag => tag.toLowerCase().includes(q))
//       );
//     }

//     return filtered;
//   }, [posts, selectedTag, searchQuery]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
//             Blog
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Exploring statistical genetics, GWAS methodology, and gene–environment interactions
//           </p>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-2xl mx-auto mb-6">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Search blog posts..."
//             value={searchQuery}
//             onChange={e => setSearchQuery(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Tags */}
//         {allTags.length > 0 && (
//           <div className="flex flex-wrap gap-2 justify-center mb-12">
//             <button
//               onClick={() => setSelectedTag(null)}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 selectedTag === null
//                   ? "bg-blue-600 text-white"
//                   : "bg-white border text-gray-700"
//               }`}
//             >
//               All Posts
//             </button>

//             {allTags.map(tag => (
//               <button
//                 key={tag}
//                 onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium ${
//                   selectedTag === tag
//                     ? "bg-blue-600 text-white"
//                     : "bg-white border text-gray-700"
//                 }`}
//               >
//                 <Tag className="w-3 h-3 inline mr-1" />
//                 {tag}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Posts */}
//         <div className="space-y-8">
//           {filteredPosts.map(post => (
//             <article
//               key={post.id}
//               className={`bg-white rounded-xl border shadow-sm p-8 transition ${
//                 post.featured ? "ring-2 ring-blue-500" : ""
//               }`}
//             >
//               {post.featured && (
//                 <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-blue-600 text-white rounded-full">
//                   Featured
//                 </span>
//               )}

//               <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//                 <Calendar className="w-4 h-4" />
//                 {new Date(post.publishedAt).toLocaleDateString()}
//                 <Clock className="w-4 h-4 ml-4" />
//                 {post.readTime}
//               </div>

//               <Link href={`/blog/${post.slug}`}>
//                 <a>
//                   <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-4">
//                     {post.title}
//                   </h2>
//                 </a>
//               </Link>

//               <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>

//               {post.tags && (
//                 <div className="flex gap-2 mb-6 flex-wrap">
//                   {post.tags.map(tag => (
//                     <span
//                       key={tag}
//                       onClick={() => setSelectedTag(tag)}
//                       className="cursor-pointer px-3 py-1 bg-gray-100 rounded-full text-xs"
//                     >
//                       <Tag className="w-3 h-3 inline mr-1" />
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               <Link href={`/blog/${post.slug}`}>
//                 <a className="inline-flex items-center text-blue-600 font-medium">
//                   Read full article
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </a>
//               </Link>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
