// import React, { useEffect, useRef } from 'react';

// interface MarkdownRendererProps {
//   content: string;
//   className?: string;
// }

// export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Trigger MathJax typesetting after content loads
//     if (window.MathJax && contentRef.current) {
//       window.MathJax.typesetPromise([contentRef.current]).catch((err: any) => {
//         console.error('MathJax typesetting error:', err);
//       });
//     }
//   }, [content]);

//   const renderContent = (markdown: string) => {
//     const elements: JSX.Element[] = [];
//     const lines = markdown.split('\n');
//     let i = 0;

//     while (i < lines.length) {
//       const line = lines[i];

//       // Skip empty lines
//       if (!line.trim()) {
//         i++;
//         continue;
//       }

//       // Handle H1
//       if (line.startsWith('# ')) {
//         elements.push(
//           <h1 key={elements.length} className="text-4xl font-bold text-gray-900 mb-6 mt-10 leading-tight">
//             {parseInline(line.replace('# ', ''))}
//           </h1>
//         );
//         i++;
//         continue;
//       }

//       // Handle H2
//       if (line.startsWith('## ')) {
//         elements.push(
//           <h2 key={elements.length} className="text-3xl font-semibold text-gray-900 mb-5 mt-8 leading-tight">
//             {parseInline(line.replace('## ', ''))}
//           </h2>
//         );
//         i++;
//         continue;
//       }

//       // Handle H3
//       if (line.startsWith('### ')) {
//         elements.push(
//           <h3 key={elements.length} className="text-2xl font-semibold text-gray-900 mb-4 mt-6 leading-snug">
//             {parseInline(line.replace('### ', ''))}
//           </h3>
//         );
//         i++;
//         continue;
//       }

//       // Handle H4
//       if (line.startsWith('#### ')) {
//         elements.push(
//           <h4 key={elements.length} className="text-xl font-semibold text-gray-900 mb-3 mt-5 leading-snug">
//             {parseInline(line.replace('#### ', ''))}
//           </h4>
//         );
//         i++;
//         continue;
//       }

//       // Handle block math ($$...$$)
//       if (line.trim().startsWith('$$')) {
//         let mathContent = '';
//         i++;
//         while (i < lines.length && !lines[i].trim().endsWith('$$')) {
//           mathContent += lines[i] + '\n';
//           i++;
//         }
//         if (i < lines.length) {
//           mathContent += lines[i].replace('$$', '');
//           i++;
//         }
//         elements.push(
//           <div key={elements.length} className="my-8 overflow-x-auto">
//             <div className="flex justify-center">
//               <div 
//                 className="inline-block px-6 py-4 bg-gray-50 rounded-lg"
//                 dangerouslySetInnerHTML={{ __html: `$$${mathContent}$$` }}
//               />
//             </div>
//           </div>
//         );
//         continue;
//       }

//       // Handle code blocks
//       if (line.trim().startsWith('```')) {
//         const language = line.trim().slice(3) || 'plaintext';
//         let codeContent = '';
//         i++;
//         while (i < lines.length && !lines[i].trim().startsWith('```')) {
//           codeContent += lines[i] + '\n';
//           i++;
//         }
//         i++; // Skip closing ```
//         elements.push(
//           <pre key={elements.length} className="my-6 bg-gray-900 rounded-lg overflow-x-auto">
//             <code className={`language-${language} block p-6 text-sm text-gray-100 leading-relaxed`}>
//               {codeContent}
//             </code>
//           </pre>
//         );
//         continue;
//       }

//       // Handle unordered lists
//       if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
//         const listItems: string[] = [];
//         while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
//           listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
//           i++;
//         }
//         elements.push(
//           <ul key={elements.length} className="my-6 space-y-2 list-disc list-outside ml-6">
//             {listItems.map((item, idx) => (
//               <li key={idx} className="text-gray-700 leading-relaxed pl-2">
//                 {parseInline(item)}
//               </li>
//             ))}
//           </ul>
//         );
//         continue;
//       }

//       // Handle ordered lists
//       if (/^\d+\.\s/.test(line.trim())) {
//         const listItems: string[] = [];
//         while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
//           listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
//           i++;
//         }
//         elements.push(
//           <ol key={elements.length} className="my-6 space-y-2 list-decimal list-outside ml-6">
//             {listItems.map((item, idx) => (
//               <li key={idx} className="text-gray-700 leading-relaxed pl-2">
//                 {parseInline(item)}
//               </li>
//             ))}
//           </ol>
//         );
//         continue;
//       }

//       // Handle blockquotes
//       if (line.trim().startsWith('> ')) {
//         const quoteLines: string[] = [];
//         while (i < lines.length && lines[i].trim().startsWith('> ')) {
//           quoteLines.push(lines[i].trim().replace(/^>\s+/, ''));
//           i++;
//         }
//         elements.push(
//           <blockquote key={elements.length} className="my-6 pl-6 border-l-4 border-blue-500 italic text-gray-700 bg-blue-50 py-4 pr-4 rounded-r-lg">
//             {quoteLines.map((quoteLine, idx) => (
//               <p key={idx} className="leading-relaxed">
//                 {parseInline(quoteLine)}
//               </p>
//             ))}
//           </blockquote>
//         );
//         continue;
//       }

//       // Handle horizontal rules
//       if (line.trim() === '---' || line.trim() === '***') {
//         elements.push(
//           <hr key={elements.length} className="my-8 border-t-2 border-gray-200" />
//         );
//         i++;
//         continue;
//       }

//       // Handle regular paragraphs
//       let paragraph = line;
//       i++;
//       while (i < lines.length && lines[i].trim() && !isSpecialLine(lines[i])) {
//         paragraph += ' ' + lines[i].trim();
//         i++;
//       }
      
//       if (paragraph.trim()) {
//         elements.push(
//           <p key={elements.length} className="text-gray-700 leading-relaxed mb-5 text-lg">
//             {parseInline(paragraph)}
//           </p>
//         );
//       }
//     }

//     return elements;
//   };

//   // Helper to check if a line starts a special block
//   const isSpecialLine = (line: string): boolean => {
//     return line.startsWith('#') ||
//            line.trim().startsWith('$$') ||
//            line.trim().startsWith('```') ||
//            line.trim().startsWith('- ') ||
//            line.trim().startsWith('* ') ||
//            /^\d+\.\s/.test(line.trim()) ||
//            line.trim().startsWith('> ') ||
//            line.trim() === '---' ||
//            line.trim() === '***';
//   };

//   // Parse inline elements (bold, italic, inline code, inline math, links)
//   const parseInline = (text: string): React.ReactNode => {
//     const parts: React.ReactNode[] = [];
//     let remaining = text;
//     let key = 0;

//     while (remaining) {
//       // Inline math $...$
//       const mathMatch = remaining.match(/\$([^\$]+)\$/);
//       if (mathMatch && mathMatch.index !== undefined) {
//         if (mathMatch.index > 0) {
//           parts.push(parseBasicInline(remaining.slice(0, mathMatch.index), key++));
//         }
//         parts.push(
//           <span 
//             key={key++} 
//             className="inline-block px-1"
//             dangerouslySetInnerHTML={{ __html: `$${mathMatch[1]}$` }}
//           />
//         );
//         remaining = remaining.slice(mathMatch.index + mathMatch[0].length);
//         continue;
//       }

//       // No more special inline elements
//       parts.push(parseBasicInline(remaining, key++));
//       break;
//     }

//     return <>{parts}</>;
//   };

//   // Parse basic inline formatting (bold, italic, code, links)
//   const parseBasicInline = (text: string, baseKey: number): React.ReactNode => {
//     const parts: React.ReactNode[] = [];
//     let remaining = text;
//     let key = baseKey * 1000;

//     while (remaining) {
//       // Bold **text**
//       const boldMatch = remaining.match(/\*\*([^\*]+)\*\*/);
//       if (boldMatch && boldMatch.index !== undefined) {
//         if (boldMatch.index > 0) {
//           parts.push(...parseItalicAndCode(remaining.slice(0, boldMatch.index), key));
//           key += 100;
//         }
//         parts.push(
//           <strong key={key++} className="font-bold text-gray-900">
//             {parseItalicAndCode(boldMatch[1], key)}
//           </strong>
//         );
//         key += 100;
//         remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
//         continue;
//       }

//       // No more bold
//       parts.push(...parseItalicAndCode(remaining, key));
//       break;
//     }

//     return <>{parts}</>;
//   };

//   // Parse italic and inline code
//   const parseItalicAndCode = (text: string, baseKey: number): React.ReactNode[] => {
//     const parts: React.ReactNode[] = [];
//     let remaining = text;
//     let key = baseKey;

//     while (remaining) {
//       // Inline code `code`
//       const codeMatch = remaining.match(/`([^`]+)`/);
//       if (codeMatch && codeMatch.index !== undefined) {
//         if (codeMatch.index > 0) {
//           parts.push(...parseItalicAndLinks(remaining.slice(0, codeMatch.index), key));
//           key += 10;
//         }
//         parts.push(
//           <code key={key++} className="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">
//             {codeMatch[1]}
//           </code>
//         );
//         remaining = remaining.slice(codeMatch.index + codeMatch[0].length);
//         continue;
//       }

//       // No more code
//       parts.push(...parseItalicAndLinks(remaining, key));
//       break;
//     }

//     return parts;
//   };

//   // Parse italic and links
//   const parseItalicAndLinks = (text: string, baseKey: number): React.ReactNode[] => {
//     const parts: React.ReactNode[] = [];
//     let remaining = text;
//     let key = baseKey;

//     while (remaining) {
//       // Italic *text* or _text_
//       const italicMatch = remaining.match(/\*([^\*]+)\*|_([^_]+)_/);
//       if (italicMatch && italicMatch.index !== undefined) {
//         if (italicMatch.index > 0) {
//           parts.push(...parseLinks(remaining.slice(0, italicMatch.index), key));
//           key++;
//         }
//         parts.push(
//           <em key={key++} className="italic">
//             {italicMatch[1] || italicMatch[2]}
//           </em>
//         );
//         remaining = remaining.slice(italicMatch.index + italicMatch[0].length);
//         continue;
//       }

//       // No more italic
//       parts.push(...parseLinks(remaining, key));
//       break;
//     }

//     return parts;
//   };

//   // Parse links [text](url)
//   const parseLinks = (text: string, baseKey: number): React.ReactNode[] => {
//     const parts: React.ReactNode[] = [];
//     let remaining = text;
//     let key = baseKey;

//     while (remaining) {
//       const linkMatch = remaining.match(/\[([^\]]+)\]\(([^\)]+)\)/);
//       if (linkMatch && linkMatch.index !== undefined) {
//         if (linkMatch.index > 0) {
//           parts.push(<span key={key++}>{remaining.slice(0, linkMatch.index)}</span>);
//         }
//         parts.push(
//           <a 
//             key={key++} 
//             href={linkMatch[2]} 
//             className="text-blue-600 hover:text-blue-800 underline transition-colors"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {linkMatch[1]}
//           </a>
//         );
//         remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
//         continue;
//       }

//       // No more links
//       if (remaining) {
//         parts.push(<span key={key++}>{remaining}</span>);
//       }
//       break;
//     }

//     return parts;
//   };

//   return (
//     <div ref={contentRef} className={`prose prose-lg max-w-none ${className}`}>
//       {renderContent(content)}
//     </div>
//   );
// }

// export default MarkdownRenderer;



/// Working with PDFs properly


// import React from "react";
// import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";

// import "katex/dist/katex.min.css";

// interface MarkdownRendererProps {
//   content: string;
//   className?: string;
// }

// export default function MarkdownRenderer({
//   content,
//   className = "",
// }: MarkdownRendererProps) {
//   return (
//     <div className={`prose prose-lg max-w-none ${className}`}>
//       <ReactMarkdown
//         remarkPlugins={[remarkMath]}
//         rehypePlugins={[rehypeKatex]}
//         components={{
//           h1: ({ ...props }) => (
//             <h1 className="text-4xl font-bold mt-10 mb-6" {...props} />
//           ),
//           h2: ({ ...props }) => (
//             <h2 className="text-3xl font-semibold mt-8 mb-5" {...props} />
//           ),
//           h3: ({ ...props }) => (
//             <h3 className="text-2xl font-semibold mt-6 mb-4" {...props} />
//           ),
//           p: ({ ...props }) => (
//             <p className="leading-relaxed mb-5 text-gray-700" {...props} />
//           ),
//           code({ inline, children, ...props }) {
//             if (inline) {
//               return (
//                 <code className="px-1 py-0.5 bg-gray-100 rounded text-red-600">
//                   {children}
//                 </code>
//               );
//             }
//             return (
//               <pre className="my-6 bg-gray-900 rounded-lg overflow-x-auto">
//                 <code className="block p-6 text-gray-100">
//                   {children}
//                 </code>
//               </pre>
//             );
//           },
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   );
// }


//// For Image support and multiple PDF support

// import React from "react";
import React, { lazy, Suspense } from "react"; // ← ADD lazy and Suspense
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // ← ADD THIS (while adding GIF support)

import "katex/dist/katex.min.css";


// Lazy load PDF viewer
const PDFViewer = lazy(() => import("./PDFViewer"));

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Get base path from Vite config (e.g., "/saurabhmishra/" for GitHub Pages, "/" for localhost)
const BASE_PATH = import.meta.env.BASE_URL || '/';

// Helper function to resolve paths for both localhost and GitHub Pages
function resolveAssetPath(src: string | undefined): string {
  if (!src) return '';
  
  // If it's already an absolute URL (http/https), return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If it's a relative path (starts with ./), return as-is (handled by bundler)
  if (src.startsWith('./') || src.startsWith('../')) {
    return src;
  }
  
  // If it starts with /, prepend base path if needed
  if (src.startsWith('/')) {
    // Check if base path is already included
    if (BASE_PATH !== '/' && !src.startsWith(BASE_PATH)) {
      return BASE_PATH + src.slice(1); // Remove leading / and add base path
    }
    return src;
  }
  
  // Otherwise, return as-is
  return src;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    // <div className={`prose prose-lg max-w-none ${className}`}>
    <div className={`max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-900 dark:text-gray-100 leading-tight" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-5 text-gray-900 dark:text-gray-100 leading-tight" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100 leading-snug" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-xl font-semibold mt-5 mb-3 text-gray-900 dark:text-gray-100 leading-snug" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="leading-relaxed mb-5 text-lg text-gray-700 dark:text-gray-300" {...props} />
          ),
          // // Enhanced image support
          // img: ({ src, alt, title, ...props }) => (
          //   <figure className="my-8">
          //     <img 
          //       src={src} 
          //       alt={alt || ''} 
          //       className="max-w-full h-auto rounded-lg shadow-md mx-auto hover:shadow-lg transition-shadow duration-300"
          //       loading="lazy"
          //       {...props}
          //     />
          //     {title && (
          //       <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
          //         {title}
          //       </figcaption>
          //     )}
          //   </figure>
          // ),
          // // Enhanced image/video support - AUTO-DETECTS VIDEO FILES!
          // img: ({ src, alt, title, ...props }) => {
          //   // Check if the src is a video file
          //   const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);
            
          //   if (isVideo) {
          //     // Render as video with controls
          //     return (
          //       <figure className="my-8">
          //         <video 
          //           controls 
          //           loop 
          //           muted 
          //           className="max-w-full h-auto rounded-lg shadow-md mx-auto"
          //           style={{ maxHeight: '600px' }}
          //         >
          //           <source src={src} type={`video/${isVideo[1]}`} />
          //           Your browser does not support the video tag.
          //         </video>
          //         {title && (
          //           <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          //             {title}
          //           </figcaption>
          //         )}
          //       </figure>
          //     );
          //   }
            
          //   // Render as image (including GIFs)
          //   return (
          //     <figure className="my-8">
          //       <img 
          //         src={src} 
          //         alt={alt || ''} 
          //         className="max-w-full h-auto rounded-lg shadow-md mx-auto hover:shadow-lg transition-shadow duration-300"
          //         loading="lazy"
          //         {...props}
          //       />
          //       {title && (
          //         <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          //           {title}
          //         </figcaption>
          //       )}
          //     </figure>
          //   );
          // },

          // Enhanced image/video/PDF support - AUTO-DETECTS ALL MEDIA!
          // img: ({ src, alt, title, ...props }) => {
          //   // Check if it's a PDF
          //   const isPDF = src?.match(/\.pdf$/i);
            
          //   if (isPDF) {
          //     // Render as inline PDF viewer
          //     return (
          //       <figure className="my-8">
          //         <Suspense fallback={
          //           <div className="flex justify-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
          //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          //             <span className="ml-3 text-gray-600 dark:text-gray-400">Loading PDF...</span>
          //           </div>
          //         }>
          //           <PDFViewer 
          //             file={src} 
          //             title={alt || undefined}
          //             height="600px"
          //           />
          //         </Suspense>
          //         {title && (
          //           <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          //             {title}
          //           </figcaption>
          //         )}
          //       </figure>
          //     );
          //   }
            
          //   // Check if it's a video
          //   const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);
            
          //   if (isVideo) {
          //     // Render as video with controls
          //     return (
          //       <figure className="my-8">
          //         <video 
          //           controls 
          //           loop 
          //           muted 
          //           className="max-w-full h-auto rounded-lg shadow-md mx-auto"
          //           style={{ maxHeight: '600px' }}
          //         >
          //           <source src={src} type={`video/${isVideo[1]}`} />
          //           Your browser does not support the video tag.
          //         </video>
          //         {title && (
          //           <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          //             {title}
          //           </figcaption>
          //         )}
          //       </figure>
          //     );
          //   }
            
          //   // Render as image (including GIFs)
          //   return (
          //     <figure className="my-8">
          //       <img 
          //         src={src} 
          //         alt={alt || ''} 
          //         className="max-w-full h-auto rounded-lg shadow-md mx-auto hover:shadow-lg transition-shadow duration-300"
          //         loading="lazy"
          //         {...props}
          //       />
          //       {title && (
          //         <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          //           {title}
          //         </figcaption>
          //       )}
          //     </figure>
          //   );
          // },

          // Enhanced image/video/PDF support with automatic path resolution
          img: ({ src, alt, title, ...props }) => {
            // Resolve the path ONCE at the start
            const resolvedSrc = resolveAssetPath(src);
            
            // Check file type based on resolved path
            const isPDF = resolvedSrc?.match(/\.pdf$/i);
            const isVideo = resolvedSrc?.match(/\.(mp4|webm|ogg)$/i);
            
            // Render PDF
            if (isPDF) {
              return (
                <figure className="my-8">
                  <Suspense fallback={
                    <div className="flex justify-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                      <span className="ml-3 text-gray-600 dark:text-gray-400">Loading PDF...</span>
                    </div>
                  }>
                    <PDFViewer 
                      file={resolvedSrc} 
                      title={alt || undefined}
                      height="600px"
                    />
                  </Suspense>
                  {title && (
                    <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                      {title}
                    </figcaption>
                  )}
                </figure>
              );
            }
            
            // Render Video
            if (isVideo) {
              return (
                <figure className="my-8">
                  <video 
                    controls 
                    loop 
                    muted 
                    className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                    style={{ maxHeight: '600px' }}
                  >
                    <source src={resolvedSrc} type={`video/${isVideo[1]}`} />
                    Your browser does not support the video tag.
                  </video>
                  {title && (
                    <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                      {title}
                    </figcaption>
                  )}
                </figure>
              );
            }
            
            // Render Image (including GIFs)
            return (
              <figure className="my-8">
                <img 
                  src={resolvedSrc} 
                  alt={alt || ''} 
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto hover:shadow-lg transition-shadow duration-300"
                  loading="lazy"
                  {...props}
                />
                {title && (
                  <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
                    {title}
                  </figcaption>
                )}
              </figure>
            );
          },
          

          // Bold text
          strong: ({ ...props }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100" {...props} />
          ),
          // Italic text
          em: ({ ...props }) => (
            <em className="italic text-gray-700 dark:text-gray-300" {...props} />
          ),
          // Links
          a: ({ href, children, ...props }) => (
            <a 
              href={href} 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props}
            >
              {children}
            </a>
          ),
          // Code blocks
          // code({ inline, children, className, ...props }) {
          //   if (inline) {
          //     return (
          //       <code className="px-2 py-1 bg-gray-100 rounded text-red-600 text-sm font-mono" {...props}>
          //         {children}
          //       </code>
          //     );
          //   }
          //   const match = /language-(\w+)/.exec(className || '');
          //   const language = match ? match[1] : '';
            
          //   return (
          //     <pre className="my-6 bg-gray-900 rounded-lg overflow-x-auto">
          //       <code className={`block p-6 text-sm text-gray-100 leading-relaxed ${className || ''}`} {...props}>
          //         {children}
          //       </code>
          //     </pre>
          //   );
          // },
          // code({ inline, children, className, ...props }) {
          //       if (inline) {
          //         return (
          //           <code
          //             className="px-1.5 py-0.5 bg-slate-100 rounded-md text-red-600 text-sm font-mono"
          //             {...props}
          //           >
          //             {children}
          //           </code>
          //         );
          //       }

          //       return (
          //         <pre className="my-6 overflow-x-auto">
          //           <code
          //             className={`block rounded-xl bg-slate-50 border border-slate-200 
          //                         p-6 text-sm text-slate-800 leading-relaxed font-mono`}
          //             {...props}
          //           >
          //             {children}
          //           </code>
          //         </pre>
          //       );
          //     },

            code(props) {
              const { children } = props as any;
              const inline = (props as any).inline;

              const [copied, setCopied] = React.useState(false);

              if (inline) {
                return (
                  <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-red-600 dark:text-red-400 text-sm font-mono">
                    {children}
                  </code>
                );
              }

              const codeText = String(children).replace(/\n$/, "");

              const handleCopy = async () => {
                await navigator.clipboard.writeText(codeText);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              };

              return (
                <div className="relative my-6 group">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 text-xs
                              text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300
                              opacity-0 group-hover:opacity-100 transition"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>

                  <pre className="overflow-x-auto">
                    <code
                      className="block rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700
                                p-6 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono"
                    >
                      {children}
                    </code>
                  </pre>
                </div>
              );
            },


          
          // Blockquotes
          blockquote: ({ ...props }) => (
            <blockquote 
              className="my-6 pl-6 border-l-4 border-blue-500 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 py-4 pr-4 rounded-r-lg"
              {...props}
            />
          ),
          // Unordered lists
          ul: ({ ...props }) => (
            <ul className="my-6 space-y-2 list-disc list-outside ml-6" {...props} />
          ),
          // Ordered lists
          ol: ({ ...props }) => (
            <ol className="my-6 space-y-2 list-decimal list-outside ml-6" {...props} />
          ),
          // List items
          li: ({ ...props }) => (
            <li className="text-gray-700 dark:text-gray-300 leading-relaxed pl-2" {...props} />
          ),
          // Horizontal rule
          hr: ({ ...props }) => (
            <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" {...props} />
          ),
          // Tables
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700" {...props} />
            </div>
          ),
          thead: ({ ...props }) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          th: ({ ...props }) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold text-gray-900 dark:text-gray-100" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}