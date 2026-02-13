/// <reference types="vite/client" />

declare module 'virtual:blog-content' {
  import type { BlogPost } from '@/lib/blog-content-loader';
  export const markdownPosts: BlogPost[];
}