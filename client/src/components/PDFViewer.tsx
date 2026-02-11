// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// // IMPORTANT: Use the same version as react-pdf expects
// // This ensures the worker version matches the API version
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// interface PDFViewerProps {
//   file: string;
// }

// export default function PDFViewer({ file }: PDFViewerProps) {
//   const [numPages, setNumPages] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
//     setNumPages(numPages);
//     setLoading(false);
//     setError(null);
//   }

//   function onDocumentLoadError(error: Error) {
//     console.error("PDF load error:", error);
//     setError(`Failed to load PDF: ${error.message}`);
//     setLoading(false);
//   }

//   return (
//     <div className="pdf-viewer-container">
//       {loading && (
//         <div className="flex justify-center items-center py-12">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <span className="ml-3 text-gray-600">Loading PDF...</span>
//         </div>
//       )}

//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
//           <p className="text-red-800 font-semibold">Error Loading PDF</p>
//           <p className="text-red-600 text-sm mt-1">{error}</p>
//           <p className="text-gray-600 text-sm mt-2">
//             File path: {file}
//           </p>
//           <p className="text-gray-600 text-xs mt-2">
//             PDF.js version: {pdfjs.version}
//           </p>
//         </div>
//       )}

//       <Document
//         file={file}
//         onLoadSuccess={onDocumentLoadSuccess}
//         onLoadError={onDocumentLoadError}
//         loading={null}
//         error={null}
//         className="pdf-document"
//       >
//         <div className="pdf-pages-container space-y-4">
//           {Array.from(new Array(numPages), (_, index) => (
//             <div key={`page_${index + 1}`} className="pdf-page-wrapper border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
//               <Page
//                 pageNumber={index + 1}
//                 renderTextLayer={true}
//                 renderAnnotationLayer={true}
//                 className="pdf-page"
//                 width={Math.min(typeof window !== 'undefined' ? window.innerWidth - 100 : 800, 800)}
//               />
//               <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 text-center border-t border-gray-300">
//                 Page {index + 1} of {numPages}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Document>

//       <style>{`
//         .pdf-viewer-container {
//           width: 100%;
//           margin: 2rem 0;
//         }

//         .pdf-document {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .pdf-pages-container {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1rem;
//         }

//         .pdf-page-wrapper {
//           background: white;
//           margin: 0 auto;
//           max-width: 100%;
//         }

//         .pdf-page {
//           display: flex;
//           justify-content: center;
//         }

//         .pdf-page canvas {
//           max-width: 100%;
//           height: auto !important;
//         }

//         @media (max-width: 768px) {
//           .pdf-page canvas {
//             width: 100% !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



/// Making scrollable Attempt 1

// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Maximize2, Minimize2 } from "lucide-react";
// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// interface PDFViewerProps {
//   file: string;
//   title?: string;
//   height?: string; // e.g., "600px", "80vh"
// }

// export default function PDFViewer({ file, title, height = "600px" }: PDFViewerProps) {
//   const [numPages, setNumPages] = useState<number>(0);
//   const [pageNumber, setPageNumber] = useState<number>(1);
//   const [scale, setScale] = useState<number>(1.0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
//     setNumPages(numPages);
//     setLoading(false);
//     setError(null);
//   }

//   function onDocumentLoadError(error: Error) {
//     console.error("PDF load error:", error);
//     setError(`Failed to load PDF: ${error.message}`);
//     setLoading(false);
//   }

//   function changePage(offset: number) {
//     setPageNumber(prevPageNumber => {
//       const newPage = prevPageNumber + offset;
//       return Math.min(Math.max(1, newPage), numPages);
//     });
//   }

//   function goToPage(page: number) {
//     setPageNumber(Math.min(Math.max(1, page), numPages));
//   }

//   function changeScale(delta: number) {
//     setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 3.0));
//   }

//   function toggleFullscreen() {
//     setIsFullscreen(!isFullscreen);
//   }

//   const containerHeight = isFullscreen ? "90vh" : height;

//   return (
//     <div className={`pdf-viewer-wrapper ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4' : 'relative'}`}>
//       {title && (
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
//       )}

//       {/* Controls Bar */}
//       <div className="bg-gray-100 border border-gray-300 rounded-t-lg p-3 flex items-center justify-between flex-wrap gap-2">
//         <div className="flex items-center gap-2">
//           {/* Page Navigation */}
//           <button
//             onClick={() => changePage(-1)}
//             disabled={pageNumber <= 1}
//             className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             title="Previous page"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
          
//           <div className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-1">
//             <input
//               type="number"
//               min={1}
//               max={numPages}
//               value={pageNumber}
//               onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
//               className="w-12 text-center border-none outline-none"
//             />
//             <span className="text-gray-600">/ {numPages || '...'}</span>
//           </div>

//           <button
//             onClick={() => changePage(1)}
//             disabled={pageNumber >= numPages}
//             className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             title="Next page"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           {/* Zoom Controls */}
//           <button
//             onClick={() => changeScale(-0.2)}
//             disabled={scale <= 0.5}
//             className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             title="Zoom out"
//           >
//             <ZoomOut className="w-4 h-4" />
//           </button>

//           <span className="bg-white border border-gray-300 rounded px-3 py-1 text-sm min-w-[60px] text-center">
//             {Math.round(scale * 100)}%
//           </span>

//           <button
//             onClick={() => changeScale(0.2)}
//             disabled={scale >= 3.0}
//             className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             title="Zoom in"
//           >
//             <ZoomIn className="w-4 h-4" />
//           </button>

//           {/* Fullscreen Toggle */}
//           <button
//             onClick={toggleFullscreen}
//             className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
//             title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//           >
//             {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
//           </button>

//           {/* Download */}
//           <a
//             href={file}
//             download
//             className="p-2 bg-blue-600 text-white border border-blue-700 rounded hover:bg-blue-700"
//             title="Download PDF"
//           >
//             <Download className="w-4 h-4" />
//           </a>
//         </div>
//       </div>

//       {/* PDF Display Area */}
//       <div 
//         className="pdf-viewer-container border-x border-b border-gray-300 rounded-b-lg overflow-auto bg-gray-200"
//         style={{ height: containerHeight }}
//       >
//         {loading && (
//           <div className="flex justify-center items-center h-full">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//               <span className="text-gray-600">Loading PDF...</span>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div className="p-8">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//               <p className="text-red-800 font-semibold">Error Loading PDF</p>
//               <p className="text-red-600 text-sm mt-1">{error}</p>
//               <p className="text-gray-600 text-sm mt-2">File path: {file}</p>
//             </div>
//           </div>
//         )}

//         {!loading && !error && (
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             onLoadError={onDocumentLoadError}
//             loading={null}
//             error={null}
//             className="pdf-document"
//           >
//             <div className="flex justify-center p-4">
//               <div className="pdf-page-wrapper bg-white shadow-lg">
//                 <Page
//                   pageNumber={pageNumber}
//                   renderTextLayer={true}
//                   renderAnnotationLayer={true}
//                   scale={scale}
//                   className="pdf-page"
//                 />
//               </div>
//             </div>
//           </Document>
//         )}
//       </div>

//       <style>{`
//         .pdf-viewer-container {
//           scroll-behavior: smooth;
//         }

//         .pdf-viewer-container::-webkit-scrollbar {
//           width: 12px;
//           height: 12px;
//         }

//         .pdf-viewer-container::-webkit-scrollbar-track {
//           background: #f1f1f1;
//         }

//         .pdf-viewer-container::-webkit-scrollbar-thumb {
//           background: #888;
//           border-radius: 6px;
//         }

//         .pdf-viewer-container::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }

//         .pdf-document {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .pdf-page-wrapper {
//           display: inline-block;
//         }

//         .pdf-page canvas {
//           display: block;
//           max-width: 100%;
//           height: auto !important;
//         }
//       `}</style>
//     </div>
//   );
// }



/// Making scrollable Attempt 2

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Maximize2,
  Minimize2,
} from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface PDFViewerProps {
  file: string;
  title?: string;
  height?: string;
}

export default function PDFViewer({
  file,
  title,
  height = "600px",
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prev) =>
      Math.min(Math.max(1, prev + offset), numPages),
    );
  }

  function goToPage(page: number) {
    setPageNumber(Math.min(Math.max(1, page), numPages));
  }

  function changeScale(delta: number) {
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 3.0));
  }

  const containerHeight = isFullscreen ? "90vh" : height;

  return (
    <div
      className={`pdf-viewer-wrapper ${
        isFullscreen ? "fixed inset-0 z-50 bg-white p-4" : "relative"
      }`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
      )}

      {/* Controls */}
      <div className="bg-gray-100 border border-gray-300 rounded-t-lg p-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="p-2 bg-white border rounded disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 bg-white border rounded px-3 py-1">
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={(e) =>
                goToPage(parseInt(e.target.value) || 1)
              }
              className="w-12 text-center outline-none"
            />
            <span className="text-gray-600">
              / {numPages || "..."}
            </span>
          </div>

          <button
            onClick={() => changePage(1)}
            disabled={pageNumber >= numPages}
            className="p-2 bg-white border rounded disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => changeScale(-0.2)}
            disabled={scale <= 0.5}
            className="p-2 bg-white border rounded disabled:opacity-50"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="bg-white border rounded px-3 py-1 text-sm">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={() => changeScale(0.2)}
            disabled={scale >= 3.0}
            className="p-2 bg-white border rounded disabled:opacity-50"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-white border rounded"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          <a
            href={file}
            download
            className="p-2 bg-blue-600 text-white border rounded"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* PDF AREA */}
      <div
        className="border-x border-b border-gray-300 rounded-b-lg overflow-auto bg-gray-200"
        style={{ height: containerHeight }}
      >
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full" />
            </div>
          }
          error={
            <div className="p-8 text-red-600">
              Failed to load PDF<br />
              <span className="text-xs">{file}</span>
            </div>
          }
        >
          <div className="flex justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg">
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer
                renderAnnotationLayer
              />
            </div>
          </div>
        </Document>
      </div>
    </div>
  );
}
