---
name: seo-performance
description: Step 4 of web development lifecycle. Search engine optimization (SEO), Core Web Vitals optimization, asset compression, caching, metadata, and web performance audits.
version: "1.0"
tags: [seo, performance, core-web-vitals, lighthouse, optimization, open-graph]
---

# SEO + Performance

## 1. Scope & Objective
This skill ensures maximum speed, optimal search engine indexing, and top-tier user experience (Stage 4). It audits and optimizes websites for Google Core Web Vitals, rich metadata, structured data, and sub-second page loads.

## 2. Activation Triggers
Activate this skill when:
- Preparing a site for public launch or indexing by search engines.
- Diagnosing slow page loads, high LCP (Largest Contentful Paint), or layout shifts (CLS).
- Setting up Open Graph cards, Twitter cards, sitemaps, robots.txt, or Schema.org JSON-LD.
- Optimizing media assets, fonts, bundles, and caching headers.

## 3. Performance & SEO Checklist

### 1. Core Web Vitals (Target: 95+ Lighthouse Score)
- **LCP (Largest Contentful Paint < 2.5s)**:
  - Preload critical hero images (`priority` / `fetchpriority="high"`).
  - Use modern image formats (`WebP`, `AVIF`) with explicit `width` and `height` to prevent layout shifts.
  - Self-host fonts with `font-display: swap` to prevent FOIT (Flash of Invisible Text).
- **INP (Interaction to Next Paint < 200ms)**:
  - Minimize main-thread blocking JavaScript; defer non-critical scripts.
  - Break up long tasks (>50ms) using web workers or `requestIdleCallback`.
- **CLS (Cumulative Layout Shift < 0.1)**:
  - Reserve space for dynamic elements, ads, and lazy-loaded components with aspect-ratio boxes.
  - Never insert dynamic content above existing content without user initiation.

### 2. Search Engine Optimization (Technical & On-Page)
- **Document Structure**:
  - Exactly one `<h1>` per page matching the page primary topic.
  - Logical header hierarchy (`h1` -> `h2` -> `h3`).
  - Meaningful descriptive `alt` tags on all informative images; empty `alt=""` for decorative ones.
- **Metadata**:
  - Optimized `<title>` (50-60 chars) and `<meta name="description">` (150-160 chars).
  - Canonical URL tag: `<link rel="canonical" href="...">`.
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
  - Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:image`).
- **Structured Data (Schema.org)**:
  - JSON-LD for Organization, WebSite, Product, Article, or FAQ schemas.
- **Crawlability**:
  - Clean `robots.txt` and dynamic `sitemap.xml`.

### 3. Asset & Bundle Optimization
- Code splitting and dynamic imports for heavy client libraries (e.g., charts, editors, heavy animation engines).
- SVG optimization (strip unnecessary metadata, inline critical icons).
- Enable Brotli / Gzip compression and configure long-term cache headers for immutable static assets.

## 4. Deliverable Checklist
- [ ] Complete metadata tags and Open Graph preview verification.
- [ ] Structured Data (JSON-LD) validated with Google Rich Results test format.
- [ ] Responsive images with WebP/AVIF formats and dimension attributes.
- [ ] Core Web Vitals audit pass (LCP, INP, CLS).
- [ ] `robots.txt` and `sitemap.xml` generated.
