---
name: react-skills
description: Step 3 of web development lifecycle. Modern React/Next.js engineering, custom hooks, state management, TypeScript typing, modular architecture, and component implementation.
version: "1.0"
tags: [react, nextjs, typescript, state-management, hooks, components]
---

# Frontend / React Skills

## 1. Scope & Objective
This skill powers the implementation and engineering stage (Stage 3). It translates UI layouts into production-grade, maintainable, high-performance React (or Next.js) code with robust TypeScript types, clean hooks, and resilient state handling.

## 2. Activation Triggers
Activate this skill when:
- Writing or refactoring React components, custom hooks, or utility functions.
- Setting up client vs server components in Next.js (App Router).
- Managing global or local state (Zustand, Context, React Query/TanStack, Redux).
- Handling form submissions, validation (Zod/React Hook Form), and async API calls.

## 3. Best Practices & Architecture

### 1. Component Architecture
- **Single Responsibility**: Keep components focused. Decompose complex cards or sections into atomic sub-components.
- **Composition over Inheritance**: Utilize children props, slots, and compound component patterns where appropriate.
- **Strict TypeScript**: Never use `any`. Always define explicit interfaces or types for props, states, and API responses.
- **Server vs Client**: In Next.js, default to Server Components for data fetching and static content; isolate `'use client'` only to components needing browser events, hooks, or interactive state.

### 2. State & Data Handling
- **Server State**: Use TanStack Query (React Query) or SWR for caching, background revalidation, and mutation states.
- **Client State**: Keep state as local as possible. For shared UI state, use lightweight stores (e.g. Zustand) or cleanly scoped Context.
- **Derived State**: Calculate values on the fly during render rather than syncing multiple `useState` calls.

### 3. Forms & Validation
- Pair `react-hook-form` with `zod` for zero-re-render form validation and type inference.
- Always provide immediate feedback on field blur and submit states.

### 4. Performance & Code Quality
- Optimize expensive computations using `useMemo` only when measured; avoid premature memoization of trivial calculations.
- Use `useCallback` when passing callbacks to optimized children.
- Proper key props on lists (never use array index for items that can reorder/delete).
- Handle loading, error, and empty states gracefully with fallback boundaries and skeletons.

## 4. Deliverable Checklist
- [ ] Clean, idiomatic React code with TypeScript (`.tsx`).
- [ ] Proper error boundaries and Suspense fallbacks.
- [ ] Reusable UI components adhering to Tailwind/CSS tokens.
- [ ] Accessible semantics (ARIA roles, keyboard navigation, focus trap in modals).
- [ ] Well-structured hooks and services.
