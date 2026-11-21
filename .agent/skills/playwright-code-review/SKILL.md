---
name: playwright-code-review
description: Step 5 of web development lifecycle. Automated browser testing using Playwright, end-to-end regression validation, code review, security audit, and pre-delivery client checklist.
version: "1.0"
tags: [playwright, testing, e2e, code-review, qa, audit, security]
---

# Playwright + Code Review

## 1. Scope & Objective
This skill represents the final quality gate (Stage 5) before delivering a project to the client. It covers automated End-to-End (E2E) testing with Playwright, visual regression tests, comprehensive code review, security sanity checks, and final client-ready sign-off.

## 2. Activation Triggers
Activate this skill when:
- Writing or running Playwright tests for critical user journeys (signup, checkout, contact form, navigation).
- Performing a thorough code quality and security review before merging or client handover.
- Conducting a pre-delivery audit to verify zero console errors, broken links, or visual regressions.

## 3. Core Testing & Audit Workflow

### 1. Playwright E2E Testing Suite
- **User Journeys**:
  - Main landing navigation and mobile menu toggle.
  - Interactive forms: validation triggers, correct submission payload, success messages.
  - Authentication flow / protected routes (if applicable).
  - Error state resilience (404 pages, failed network request handling).
- **Playwright Best Practices**:
  - Prefer user-facing locators (`getByRole`, `getByLabel`, `getByText`) over brittle CSS/XPath selectors.
  - Use web-first assertions (`await expect(locator).toBeVisible()`) that automatically wait and retry.
  - Run across desktop (Chromium, Firefox, WebKit) and mobile viewports (Mobile Chrome, Mobile Safari).

### 2. Comprehensive Code Review
- **Architecture & Modularity**: Verify clean separation of concerns (API layers vs components vs state).
- **Dead Code & Cleanup**: Remove console logs, debuggers, unused packages, commented-out dead code, and temporary comments.
- **Security Audit**:
  - Verify inputs are sanitized; protect against XSS (`dangerouslySetInnerHTML` audits).
  - Check that no sensitive environment variables or API keys are exposed to the browser bundle.
  - Verify CORS, CSRF, and security headers (CSP, X-Frame-Options, HSTS).
- **TypeScript & Linting**:
  - Ensure zero TypeScript compiler errors (`tsc --noEmit`).
  - Pass ESLint and Prettier formatting without warnings.

### 3. Client Handover Checklist ("Готовность к передаче клиенту")
- [ ] Cross-browser validation: Works seamlessly in Chrome, Safari, Edge, Firefox, and iOS/Android browsers.
- [ ] Responsive inspection: Verified across 375px, 768px, 1024px, 1440px, and 1920px viewports.
- [ ] Zero unhandled JavaScript exceptions in browser console.
- [ ] All forms tested with valid, invalid, and edge-case inputs.
- [ ] README and environment variable documentation (`.env.example`) are clear and complete.
- [ ] Production build succeeds without errors (`npm run build`).
