// import { useParams, Link } from "wouter";
// import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
// import { useEffect } from "react";
// import { getBlogPost, type BlogPost as BlogPostType } from "@/data/blog-posts";

// declare global {
//   interface Window {
//     MathJax: any;
//   }
// }

// export default function BlogPost() {
//   const params = useParams();
//   const slug = params.slug;

//   const post = slug ? getBlogPost(slug) : undefined;
//   const isLoading = false;
//   const error = !post && slug;

//   useEffect(() => {
//     // Re-render MathJax when post content loads
//     if (post && window.MathJax) {
//       window.MathJax.typesetPromise?.();
//     }
//   }, [post]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="flex justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academic-blue" data-testid="loading-spinner"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="min-h-screen bg-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-error-heading">
//               Blog Post Not Found
//             </h1>
//             <p className="text-gray-600 mb-8" data-testid="text-error-message">
//               The blog post you're looking for doesn't exist or has been moved.
//             </p>
//             <Link href="/blog">
//               <a className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-back-to-blog">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Blog
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Convert markdown-style content to HTML-like structure for rendering
//   const renderContent = (content: string) => {
//     // Split content by paragraphs and process each
//     const sections = content.split('\n\n');
    
//     return sections.map((section, index) => {
//       // Handle headers
//       if (section.startsWith('# ')) {
//         return (
//           <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
//             {section.replace('# ', '')}
//           </h1>
//         );
//       }
//       if (section.startsWith('## ')) {
//         return (
//           <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-6">
//             {section.replace('## ', '')}
//           </h2>
//         );
//       }
//       if (section.startsWith('### ')) {
//         return (
//           <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-5">
//             {section.replace('### ', '')}
//           </h3>
//         );
//       }

//       // Handle math blocks
//       if (section.includes('$$')) {
//         return (
//           <div key={index} className="my-6 text-center">
//             <div dangerouslySetInnerHTML={{ __html: section }} />
//           </div>
//         );
//       }

//       // Handle lists
//       if (section.includes('\n1. ') || section.includes('\n- ')) {
//         const listItems = section.split('\n').filter(item => item.trim());
//         const isOrdered = section.includes('1. ');
        
//         return (
//           <div key={index} className="my-4">
//             {isOrdered ? (
//               <ol className="list-decimal list-inside space-y-2 text-gray-600">
//                 {listItems.map((item, i) => (
//                   <li key={i}>{item.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '')}</li>
//                 ))}
//               </ol>
//             ) : (
//               <ul className="list-disc list-inside space-y-2 text-gray-600">
//                 {listItems.map((item, i) => (
//                   <li key={i}>{item.replace(/^-\s*/, '')}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//       }

//       // Handle regular paragraphs
//       if (section.trim()) {
//         return (
//           <p key={index} className="text-gray-600 leading-relaxed mb-4">
//             {section}
//           </p>
//         );
//       }

//       return null;
//     }).filter(Boolean);
//   };

//   return (
//     <div className="min-h-screen bg-white py-16">
//       <div className="max-w-4xl mx-auto px-6">
//         {/* Back to Blog Link */}
//         <div className="mb-8">
//           <Link href="/blog">
//             <a className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-back-to-blog">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Blog
//             </a>
//           </Link>
//         </div>

//         {/* Article Header */}
//         <article className="prose prose-lg max-w-none" data-testid={`blog-post-${post.slug}`}>
//           <header className="mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-testid="blog-post-title">
//               {post.title}
//             </h1>
            
//             <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8" data-testid="blog-post-meta">
//               <div className="flex items-center">
//                 <User className="w-4 h-4 mr-2" />
//                 <span>Saurabh Mishra</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="w-4 h-4 mr-2" />
//                 <time dateTime={new Date(post.publishedAt).toISOString()}>
//                   {new Date(post.publishedAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </time>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 <span>{post.readTime}</span>
//               </div>
//             </div>

//             <div className="bg-academic-light p-6 rounded-lg" data-testid="blog-post-excerpt">
//               <p className="text-lg text-gray-700 leading-relaxed italic">
//                 {post.excerpt}
//               </p>
//             </div>
//           </header>

//           {/* Article Content */}
//           <div className="blog-content prose prose-lg max-w-none" data-testid="blog-post-content">
//             {renderContent(post.content)}
//           </div>
//         </article>

//         {/* Article Footer */}
//         <footer className="mt-16 pt-8 border-t border-gray-200" data-testid="blog-post-footer">
//           <div className="bg-academic-light rounded-xl p-8">
//             <div className="flex items-start space-x-6">
//               {/* <img 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
//                 alt="Saurabh Mishra" 
//                 className="w-16 h-16 rounded-full object-cover"
//                 data-testid="author-avatar"
//               /> */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   Saurabh Mishra is a PhD student in Mathematics working in statistical genetics, GWAS, TWAS, and gene–environment interactions.
//                 </p>
//                 <div className="mt-4">
//                   <Link href="/bio">
//                     <a className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-author-bio">
//                       Learn more about Saurabh →
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>

//         {/* Related or Navigation */}
//         <div className="mt-12 text-center">
//           <Link href="/blog">
//             <a className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200" data-testid="button-more-posts">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               More Blog Posts
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


////////////////////////////////////
// This is the worked one with PDF
////////////////////////////////////

// import { getBlogPost, type BlogPost as BlogPostType } from "@/data/blog-posts";
// import MarkdownRenderer from "@/components/MarkdownRenderer";
// import { useParams, Link } from "wouter";
// import { Calendar, Clock, ArrowLeft, User, Tag } from "lucide-react";
// import { useEffect } from "react";

// // import PDFViewer from "@/components/PDFViewer";
// import React, { lazy, Suspense } from "react";

// const PDFViewer = lazy(() => import("@/components/PDFViewer"));



// // declare global {
// //   interface Window {
// //     MathJax: any;
// //   }
// // }

// export default function BlogPost() {
//   const params = useParams();
//   const slug = params.slug;

//   const post = slug ? getBlogPost(slug) : undefined;
//   const isLoading = false;
//   const error = !post && slug;

//   useEffect(() => {
//     // Scroll to top when post loads
//     window.scrollTo(0, 0);
//   }, [post]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="flex justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-testid="loading-spinner"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-error-heading">
//               Blog Post Not Found
//             </h1>
//             <p className="text-gray-600 mb-8" data-testid="text-error-message">
//               The blog post you're looking for doesn't exist or has been moved.
//             </p>
//             <Link href="/blog">
//               <a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-back-to-blog">
//                 <ArrowLeft className="w-4 h-4 mr-2" />
//                 Back to Blog
//               </a>
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-6 py-12">
//           {/* Back to Blog Link */}
//           <div className="mb-8">
//             <Link href="/blog">
//               <a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group" data-testid="link-back-to-blog">
//                 <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//                 Back to Blog
//               </a>
//             </Link>
//           </div>

//           {/* Article Header */}
//           <header>
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-snug">
//               {post.title}
//             </h1>
            
//             <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8" data-testid="blog-post-meta">
//               <div className="flex items-center">
//                 <User className="w-4 h-4 mr-2 text-gray-400" />
//                 <span className="font-medium">{post.author || 'Saurabh Mishra'}</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="w-4 h-4 mr-2 text-gray-400" />
//                 <time dateTime={new Date(post.publishedAt).toISOString()}>
//                   {new Date(post.publishedAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </time>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2 text-gray-400" />
//                 <span>{post.readTime}</span>
//               </div>
//             </div>

//             {/* Tags */}
//             {post.tags && post.tags.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {post.tags.map(tag => (
//                   <span 
//                     key={tag}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
//                   >
//                     <Tag className="w-3 h-3 mr-1" />
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Excerpt */}
//             <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg" data-testid="blog-post-excerpt">
//               <p className="text-lg text-gray-700 leading-relaxed italic">
//                 {post.excerpt}
//               </p>
//             </div>
//           </header>
//         </div>
//       </div>

//       {/* Article Content */}
//       {/* <article className="max-w-4xl mx-auto px-6 py-12" data-testid={`blog-post-${post.slug}`}>
//         <div className="bg-white rounded-lg shadow-sm p-8 md:p-12" data-testid="blog-post-content">
//           <MarkdownRenderer content={post.content} />
//         </div>
//       </article> */}
//       <article className="max-w-4xl mx-auto px-6 py-12" data-testid={`blog-post-${post.slug}`}>
//           <div className="bg-white rounded-lg shadow-sm p-8 md:p-12" data-testid="blog-post-content">
//             <MarkdownRenderer content={post.content} />

//             {/* PDF Viewer Section */}
//             {/* {typeof window !== "undefined" && post.pdf && (
//               <div className="mt-12">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Attached PDF</h2>
//                 <PDFViewer file={`/assets/${post.pdf}`} />
//               </div>
//             )} */}
//             {typeof window !== "undefined" && post.pdf && (
//               <Suspense fallback={
//                 <div className="flex justify-center py-8">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//                 </div>
//               }>
//                 <div className="mt-12">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-4">Attached PDF</h2>
//                   {/* <PDFViewer file={`/assets/${post.pdf}`} /> */}
//                   <PDFViewer file={`${import.meta.env.BASE_URL}assets/${post.pdf}`} />
//                 </div>
//               </Suspense>
//             )}
//           </div>
//         </article>



//       {/* Article Footer */}
//       <footer className="max-w-4xl mx-auto px-6 pb-16" data-testid="blog-post-footer">
//         <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-blue-100">
//           <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
//             <div className="flex-shrink-0">
//               <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                 SM
//               </div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">About the Author</h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Saurabh Mishra is a PhD student in Mathematics working in statistical genetics, 
//                 genome-wide association studies (GWAS), transcriptome-wide association studies (TWAS), 
//                 and gene–environment interactions.
//               </p>
//               <Link href="/bio">
//                 <a className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group" data-testid="link-author-bio">
//                   Learn more about Saurabh
//                   <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="mt-12 text-center">
//           <Link href="/blog">
//             <a className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" data-testid="button-more-posts">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               More Blog Posts
//             </a>
//           </Link>
//         </div>
//       </footer>
//     </div>
//   );
// }




////////////// TRYING FOR MULTIPLE PDFs and IMAGES ////////////////// (Working)
import { useParams, Link } from "wouter";
import { Calendar, Clock, ArrowLeft, User, Tag, FileText } from "lucide-react";
import { useEffect } from "react";
import { getBlogPost, type BlogPost as BlogPostType } from "@/data/blog-posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

import React, { lazy, Suspense } from "react";

import { getSeriesNavigation } from "@/lib/blog-content-loader";
import SeriesNavigation from "@/components/SeriesNavigation";

import ReadingProgress from "@/components/ReadingProgress";

const PDFViewer = lazy(() => import("@/components/PDFViewer"));

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;

  const post = slug ? getBlogPost(slug) : undefined;
  const seriesNav = post ? getSeriesNavigation(post) : null;
  const isLoading = false;
  const error = !post && slug;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" data-testid="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4" data-testid="text-error-heading">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8" data-testid="text-error-message">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <a className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200" data-testid="link-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Determine which PDFs to show
  const pdfsToShow = post.pdfs || (post.pdf ? [{ title: "Attached Document", filename: post.pdf }] : []);

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
              <Link href="/blog">
                <a className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group" data-testid="link-back-to-blog">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </a>
              </Link>
            </div>

            <header>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4 leading-snug">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-8" data-testid="blog-post-meta">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  <span className="font-medium">{post.author || 'Saurabh Mishra'}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Excerpt */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg" data-testid="blog-post-excerpt">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              {/* PDF badges if present */}
              {/* {pdfsToShow.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {pdfsToShow.map((pdf, idx) => (
                    <div key={idx} className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <FileText className="w-3 h-3 mr-1" />
                      {pdf.title}
                    </div>
                  ))}
                </div>
              )} */}
            </header>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-12" data-testid={`blog-post-${post.slug}`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12" data-testid="blog-post-content">
            <MarkdownRenderer content={post.content} />

            {/* PDF Viewer Section - Multiple PDFs Support */}
            {typeof window !== "undefined" && pdfsToShow.length > 0 && (
              <Suspense fallback={
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }>
                <div className="mt-16 space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 pb-3 border-b-2 border-gray-200 dark:border-gray-700">
                    Attached Documents
                  </h2>
                  {pdfsToShow.map((pdf, index) => (
                    <div key={index} className="pdf-section">
                      {/* <PDFViewer 
                        file={`/assets/${pdf.filename}`}
                        title={pdf.title}
                        height="600px"
                      /> */}
                      <PDFViewer 
                        file={`${import.meta.env.BASE_URL}assets/${pdf.filename}`}
                        title={pdf.title}
                        height="600px"
                      />
                    </div>
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="max-w-4xl mx-auto px-6 pb-16" data-testid="blog-post-footer">
          {/* <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-sm border border-blue-100 dark:border-gray-600">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SM
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">About the Author</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Saurabh Mishra is a PhD student in Mathematics working in statistical genetics, 
                  genome-wide association studies (GWAS), transcriptome-wide association studies (TWAS), 
                  and gene–environment interactions.
                </p>
                <Link href="/bio">
                  <a className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group" data-testid="link-author-bio">
                    Learn more about Saurabh
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}

          <div className="mt-12 text-center">
            <Link href="/blog">
              <a className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5" data-testid="button-more-posts">
                <ArrowLeft className="w-4 h-4 mr-2" />
                More Blog Posts
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
