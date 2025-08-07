#!/bin/bash

# Static site deployment script for GitHub Pages

echo "Building static site for GitHub Pages..."

# Build the static site
npx vite build --config vite.config.static.ts

echo "Static site built successfully in ./dist"
echo "Ready for GitHub Pages deployment!"

# Instructions
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push this repository to GitHub"
echo "2. Go to Settings > Pages in your GitHub repository"
echo "3. Select 'GitHub Actions' as the source"
echo "4. The site will auto-deploy on every push to main branch"