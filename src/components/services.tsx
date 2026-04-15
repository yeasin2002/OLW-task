import { Button } from '@/components/ui/button'
import { ArrowRight, Code2, Database, Palette, Shield, TestTube, Zap } from 'lucide-react'
import React from 'react'

export const Services = () => {
  return (
    <section className="relative bg-linear-to-b from-white/50 to-slate-50/80 py-24 backdrop-blur-xs dark:from-slate-900/50 dark:to-slate-950/80">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                Everything you need to build modern web apps
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Skip the boilerplate setup and focus on building your product. This starter includes
              all the tools and patterns you need for production-ready applications.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Authentication */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Authentication Ready
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Complete auth system with better auth integration. Social logins,
                </p>
              </div>
            </div>

            {/* Database */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-emerald-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-600">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Type-Safe Database
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  DrizzleORM with PostgreSQL support. Type-safe queries, migrations, and a beautiful
                  database studio for development.
                </p>
              </div>
            </div>

            {/* Testing */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-purple-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 to-pink-600">
                  <TestTube className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Testing Suite
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Comprehensive testing with Vitest for unit tests and Playwright for E2E. Coverage
                  reports and CI/CD ready configurations.
                </p>
              </div>
            </div>

            {/* UI Components */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-orange-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-red-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-red-600">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Beautiful UI
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Shadcn/ui components with Tailwind CSS. Dark mode support, responsive design, and
                  accessible components by default.
                </p>
              </div>
            </div>

            {/* Developer Experience */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-cyan-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Developer Tools
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  ESLint, Prettier, Husky git hooks, TypeScript strict mode, and VS Code
                  configurations for the best development experience.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-xs transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-green-400/10">
              <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Optimized Performance
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Built with Next.js 15 App Router, Server Components, and modern optimization
                  techniques for lightning-fast performance.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center rounded-full border border-slate-200/50 bg-white/50 px-6 py-3 backdrop-blur-xs dark:border-slate-800/50 dark:bg-slate-900/50">
              <span className="mr-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Ready to start building?
              </span>
              <Button
                size="sm"
                className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Get started now
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
