import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// IMPORTANT: Use the same version as react-pdf expects
// This ensures the worker version matches the API version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setError(`Failed to load PDF: ${error.message}`);
    setLoading(false);
  }

  return (
    <div className="pdf-viewer-container">
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading PDF...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
          <p className="text-red-800 font-semibold">Error Loading PDF</p>
          <p className="text-red-600 text-sm mt-1">{error}</p>
          <p className="text-gray-600 text-sm mt-2">
            File path: {file}
          </p>
          <p className="text-gray-600 text-xs mt-2">
            PDF.js version: {pdfjs.version}
          </p>
        </div>
      )}

      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={null}
        error={null}
        className="pdf-document"
      >
        <div className="pdf-pages-container space-y-4">
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="pdf-page-wrapper border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
              <Page
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="pdf-page"
                width={Math.min(typeof window !== 'undefined' ? window.innerWidth - 100 : 800, 800)}
              />
              <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 text-center border-t border-gray-300">
                Page {index + 1} of {numPages}
              </div>
            </div>
          ))}
        </div>
      </Document>

      <style>{`
        .pdf-viewer-container {
          width: 100%;
          margin: 2rem 0;
        }

        .pdf-document {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pdf-pages-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .pdf-page-wrapper {
          background: white;
          margin: 0 auto;
          max-width: 100%;
        }

        .pdf-page {
          display: flex;
          justify-content: center;
        }

        .pdf-page canvas {
          max-width: 100%;
          height: auto !important;
        }

        @media (max-width: 768px) {
          .pdf-page canvas {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
