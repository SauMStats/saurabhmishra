# Overview

This is an academic personal website built for Dr. Sarah Chen, a PhD candidate in Computer Science specializing in machine learning and AI research. The application serves as a comprehensive digital portfolio showcasing research work, publications, teaching activities, and personal interests. It features a modern, responsive design tailored for academic professionals, with dedicated sections for research highlights, blog posts with mathematical content support, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, utilizing a component-based architecture:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom academic theme and shadcn/ui component library
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a RESTful API design pattern:
- **Framework**: Express.js with TypeScript for the server layer
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server for consistent validation
- **Storage**: Abstracted storage interface with in-memory implementation (with database integration ready)
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
The application uses a PostgreSQL database with Drizzle ORM:
- **Schema Management**: Drizzle migrations with shared TypeScript schemas
- **Tables**: Users, contacts, and blog posts with UUID primary keys
- **Data Validation**: Zod schemas for insert/update operations
- **Storage Abstraction**: Interface-based storage layer allowing for multiple implementations

## Authentication and Authorization
Currently implements a basic foundation for user management:
- User table structure prepared for future authentication implementation
- Password hashing capabilities included in dependencies
- Session management infrastructure ready with connect-pg-simple

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM with migrations (drizzle-orm, drizzle-kit)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **Radix UI**: Comprehensive set of unstyled, accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **React Icons**: Additional icon sets including academic/social platforms

### Development & Build Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Autoprefixer

### Form & Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library
- **TanStack Query**: Server state management and caching
- **Date-fns**: Date utility library

### Mathematical Content Support
- **MathJax Integration**: Client-side mathematical formula rendering for blog posts
- Custom CSS variables for academic styling themes

The architecture prioritizes type safety, performance, and maintainability while providing a solid foundation for academic content presentation and user interaction.