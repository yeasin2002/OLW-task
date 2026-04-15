<!-- Product -->

# Product Overview

## Next.js Starter Template

A production-ready Next.js boilerplate designed for rapid development of modern web applications. This template provides a comprehensive foundation with enterprise-grade features, modern tooling, and best practices built-in.

## Key Features

- **Modern Stack**: Next.js 15 with App Router, React 19, and TypeScript 5
- **UI System**: Complete design system using shadcn/ui components with Radix UI primitives
- **Database Ready**: Drizzle ORM with multi-provider PostgreSQL support
- **Testing Suite**: Comprehensive testing with Vitest, Playwright, and Storybook
- **Developer Experience**: ESLint, Prettier, and automated code quality tools
- **Production Ready**: Performance monitoring, security headers, and deployment optimization

## Target Use Cases

- SaaS applications
- E-commerce platforms
- Content management systems
- Dashboard applications
- Any modern web application requiring a solid foundation

## Architecture Philosophy

- **Type Safety**: Strict TypeScript configuration throughout
- **Component-Driven**: Reusable UI components with consistent design system
- **Database-First**: Schema-driven development with type-safe database operations
- **Testing-First**: Comprehensive test coverage from unit to E2E
- **Performance-First**: Optimized builds, bundle analysis, and monitoring

<!-- Structure -->

# Project Structure & Organization

## Root Directory Layout

```
├── .kiro/              # Kiro AI assistant configuration
├── .next/              # Next.js build output (auto-generated)
├── .github/            # GitHub workflows and templates
├── .vscode/            # VS Code workspace settings
├── node_modules/       # Dependencies (auto-generated)
├── public/             # Static assets served at root
├── scripts/            # Build and utility scripts
├── src/                # Main application source code
└── tests/              # E2E and integration tests (if separate)
```

## Source Code Organization (`src/`)

```
src/
├── app/                # Next.js App Router pages and layouts
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── [feature]/      # Feature-based page organization
├── components/         # Reusable React components
│   ├── ui/             # shadcn/ui base components
│   ├── nav/            # Navigation components
│   └── [feature]/      # Feature-specific components
├── db/                 # Database configuration and schema
│   ├── index.ts        # Database connection setup
│   └── schema/         # Drizzle schema definitions
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and configurations
├── models/             # Data models and business logic
├── styles/             # Global CSS and Tailwind styles
├── types/              # TypeScript type definitions
├── utils/              # Helper functions and constants
└── validations/        # Zod validation schemas
```

## File Naming Conventions

### Components

- **PascalCase** for component files: `UserProfile.tsx`
- **kebab-case** for component directories: `user-profile/`
- **Index files** for clean imports: `components/nav/index.tsx`

### Pages (App Router)

- **lowercase** with hyphens: `user-settings/page.tsx`
- **Dynamic routes**: `[id]/page.tsx`, `[...slug]/page.tsx`
- **Route groups**: `(auth)/login/page.tsx`

### Utilities & Hooks

- **camelCase** for functions: `formatDate.ts`
- **kebab-case** for files: `use-mobile.tsx`
- **Descriptive names**: `constants.ts`, `helpers.ts`

### Database

- **kebab-case** for schema files: `user.schema.ts`
- **Singular names** for models: `user.ts` (not `users.ts`)

## Import Path Aliases

Configured in `tsconfig.json`:

- `@/*` → `./src/*` (primary alias for source code)
- `#/*` → `./*` (root directory access)

### Usage Examples

```typescript
// Components
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/nav'

// Utilities
import { cn } from '@/lib/utils'
import { db } from '@/db'

// Types
import type { User } from '@/types/auth'
```

## Component Organization Patterns

### UI Components (`src/components/ui/`)

- **Base components** from shadcn/ui
- **Single responsibility** per component
- **Consistent API** with forwardRef and variants
- **Export pattern**: Named exports preferred

### Feature Components

- **Group by feature** not by type
- **Co-locate** related components
- **Index files** for clean imports

### Example Structure

```
components/
├── ui/                 # Base UI components
│   ├── button.tsx
│   ├── input.tsx
│   └── card.tsx
├── nav/                # Navigation feature
│   ├── index.tsx       # Main export
│   ├── nav-large.tsx   # Desktop navigation
│   └── nav-mobile.tsx  # Mobile navigation
└── auth/               # Authentication feature
    ├── login-form.tsx
    ├── signup-form.tsx
    └── auth-provider.tsx
```

## Database Schema Organization

### Schema Files (`src/db/schema/`)

- **One file per entity**: `user.schema.ts`, `post.schema.ts`
- **Relationships** defined with Drizzle relations
- **Export all** schemas from `index.ts`

### Model Files (`src/models/`)

- **Business logic** separate from schema
- **Type definitions** and validation
- **Service functions** for complex operations

## Configuration Files

### Root Level

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration

### Code Quality

- `.eslintrc.js` - ESLint rules
- `.prettierrc` - Prettier formatting
- `vitest.config.ts` - Test configuration

## Best Practices

### File Organization

- **Feature-first** organization over type-first
- **Co-locate** related files
- **Consistent naming** across the project
- **Index files** for clean imports

### Import Organization

- **External libraries** first
- **Internal imports** second
- **Relative imports** last
- **Type imports** separate with `type` keyword

### Component Structure

```typescript
// 1. External imports
import React from 'react'
import { cn } from 'clsx'

// 2. Internal imports
import { Button } from '@/components/ui/button'

// 3. Types
import type { ComponentProps } from 'react'

// 4. Component definition
export function MyComponent({ className, ...props }: ComponentProps) {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {/* Component content */}
    </div>
  )
}
```

### Environment & Configuration

- **Environment variables** in `src/env.ts` with validation
- **Constants** in `src/utils/constants.ts`
- **Configuration** co-located with features when possible

<!-- Tech -->

# Technology Stack

## Core Framework

- **Next.js 15** with App Router and Server Components
- **React 19** with latest features
- **TypeScript 5.8** with strict configuration
- **Node.js 18+** or **Bun** runtime support

## UI & Styling

- **Tailwind CSS 4** with custom design system
- **shadcn/ui** components (New York style)
- **Radix UI** primitives for accessibility
- **Lucide React** for icons
- **CSS Variables** for theming
- **class-variance-authority** for component variants
- **tailwind-merge** + **clsx** for conditional classes

## Database & Backend

- **Drizzle ORM** as the primary ORM
- **PostgreSQL** as the database (multi-provider support)
- **@t3-oss/env-nextjs** for environment validation
- **Zod** for schema validation

## Testing & Quality

- **Vitest** for unit testing with jsdom environment
- **Playwright** for E2E testing
- **@testing-library/react** for component testing
- **Storybook** for component development and documentation
- **ESLint** with Next.js, TypeScript, and Prettier configs
- **Prettier** with Tailwind plugin for code formatting

## Development Tools

- **Knip** for unused code detection
- **Codehawk** for code analysis
- **Bundle Analyzer** for build optimization
- **React Scan** for performance monitoring
- **Turbopack** for faster builds (experimental)

## Package Manager

- **npm** or **pnpm** (pnpm-lock.yaml present)
- All dependencies use `latest` versions for maximum compatibility

## Common Commands

### Development

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
```

### Database Operations

```bash
npm run db:generate  # Generate Drizzle migrations
npm run db:migrate   # Apply database migrations
npm run db:studio    # Open Drizzle Studio (database GUI)
npm run db:seed      # Seed database with sample data
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
npm run codehawk     # Analyze code quality
```

### Testing

```bash
npm run test         # Run unit tests with Vitest
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:e2e     # Run Playwright E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### Analysis & Documentation

```bash
npm run analyze      # Analyze bundle size
npm run storybook    # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

## Build Configuration

- **Webpack** with SVG loader (@svgr/webpack)
- **Turbopack** rules for SVG handling
- **Bundle analyzer** integration
- **Typed routes** (experimental)
- **Standalone output** ready for containerization

## Environment Setup

- Copy `.env.example` to `.env`
- Required: `DATABASE_URL`
- Optional: Analysis and monitoring variables
- Environment validation with Zod schemas
