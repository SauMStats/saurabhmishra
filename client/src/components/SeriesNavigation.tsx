import { Link } from "wouter";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/blog-content-loader";

interface SeriesNavigationProps {
  post: BlogPost;
  previous: BlogPost | null;
  next: BlogPost | null;
  current: number;
  total: number;
}

export default function SeriesNavigation({ 
  post, 
  previous, 
  next, 
  current, 
  total 
}: SeriesNavigationProps) {
  if (!post.series) return null;

  const seriesTitle = post.seriesTitle || formatSeriesName(post.series);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-8 border border-blue-200">
      {/* Series Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Part of Series</p>
            <Link href={`/blog/series/${post.series}`}>
              <a className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                {seriesTitle}
              </a>
            </Link>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-200">
          {current} of {total}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {/* Previous Button */}
        {previous ? (
          <Link href={`/blog/${previous.slug}`}>
            <a className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-medium mb-1">Previous</p>
                <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600">
                  {previous.title}
                </p>
              </div>
            </a>
          </Link>
        ) : (
          <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 opacity-50">
            <p className="text-sm text-gray-400">No previous lecture</p>
          </div>
        )}

        {/* Next Button */}
        {next ? (
          <Link href={`/blog/${next.slug}`}>
            <a className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="flex-1 min-w-0 text-right">
                <p className="text-xs text-gray-500 font-medium mb-1">Next</p>
                <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600">
                  {next.title}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
            </a>
          </Link>
        ) : (
          <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 opacity-50 text-right">
            <p className="text-sm text-gray-400">No next lecture</p>
          </div>
        )}
      </div>

      {/* View All Link */}
      <div className="mt-4 text-center">
        <Link href={`/blog/series/${post.series}`}>
          <a className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            <BookOpen className="w-4 h-4" />
            View all {total} lectures in this series
          </a>
        </Link>
      </div>
    </div>
  );
}

function formatSeriesName(seriesName: string): string {
  return seriesName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
