---
name: ui-ux-pro-max
description: Step 1 of web development lifecycle. Business niche analysis, design direction selection, brand personality, color palettes, typography pairs, and design tokens.
version: "1.0"
tags: [ui, ux, design-system, branding, typography, color-palette]
---

# UI UX Pro Max

## 1. Scope & Objective
This skill serves as the foundational stage (Stage 1) for digital products. It is responsible for analyzing business goals, target audience, brand tone, visual direction, color theory, typography pairings, and foundational design tokens before coding begins.

## 2. Activation Triggers
Activate this skill when:
- Starting a new web project, landing page, dashboard, or SaaS application.
- Deciding on aesthetics, design language, color palettes, or typography.
- Defining design tokens, accessibility contrast ratios, or visual hierarchy.

## 3. Core Workflow

### Step 1: Business & Audience Analysis
- Identify the target industry, audience demographics, user intent, and competitive landscape.
- Define 3-5 brand attributes (e.g., "authoritative yet approachable", "minimalist, sleek, high-tech").

### Step 2: Visual Style Selection
Select the aesthetic direction best suited for the niche:
- **Clean SaaS / Tech**: High contrast, subtle borders, slate/neutral scales, bento grids, subtle gradients.
- **Modern Editorial / Luxury**: Serif headings, high negative space, editorial layouts, warm muted neutrals.
- **High-Impact Marketing**: Vibrant accent accents, dark mode contrasts, dynamic typography scales.
- **Neo-Brutalism / Creative**: Bold solid borders, punchy saturated colors, hard drop shadows, playful badges.

### Step 3: Color Palette Engineering
Establish an accessible color architecture:
- **Base/Neutral**: 9-10 shades (50 to 950) for backgrounds, surfaces, and typography.
- **Primary Brand**: Core identity color + hover/active states.
- **Secondary / Accent**: Supporting colors for CTAs, badges, and highlights.
- **Semantic**: Success (green), Warning (amber), Danger (red), Info (sky).
- **Accessibility**: Ensure WCAG 2.1 AA minimum contrast (4.5:1 for normal text, 3:1 for large text).

### Step 4: Typography Pairing
Pair fonts purposefully (Google Fonts / System fonts):
- **Headline Font**: Expresses character (e.g., Plus Jakarta Sans, Inter Display, Playfair Display, Outfit).
- **Body Font**: Maximum legibility at small sizes (e.g., Inter, Geist, Plus Jakarta Sans).
- **Mono Font** (if code/data heavy): JetBrains Mono, Fira Code.
- Provide responsive scale: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`.

### Step 5: Design Tokens Specification
Output ready-to-use CSS / Tailwind tokens:
- Spacing scale (`--space-1` through `--space-16`).
- Border radii (`--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`).
- Elevation / Shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`).

## 4. Deliverable Checklist
- [ ] Business summary & visual direction statement.
- [ ] Color palette with HEX/HSL and contrast verification.
- [ ] Font imports and pairing hierarchy.
- [ ] Tailwind CSS configuration / CSS variables snippet ready for Stage 2 & 3.
