---
name: frontend-design
description: Step 2 of web development lifecycle. High-end UI design, layout architecture, visual storytelling, responsive composition, micro-interactions, and component aesthetics.
version: "1.0"
tags: [frontend, ui-design, layouts, bento-grid, styling, css, tailwind]
---

# Frontend Design

## 1. Scope & Objective
This skill transforms design tokens and wireframes into stunning, bespoke user interfaces (Stage 2). It avoids generic "cookie-cutter" templates, crafting unique layouts, intuitive visual hierarchy, responsive bento grids, and purposeful micro-interactions.

## 2. Activation Triggers
Activate this skill when:
- Designing page structures, hero sections, feature grids, cards, and navigation.
- Crafting micro-interactions, hover states, transitions, and layout aesthetics.
- Translating Figma/sketches or conceptual ideas into polished web layouts.

## 3. Core Principles & Guidelines

### 1. Visual Hierarchy & White Space
- Prioritize content ruthlessly. Use size, weight, and color to guide the eye directly to key actions.
- Embrace generous breathing room: avoid cramped layouts. Let negative space highlight high-value elements.

### 2. Layouts & Composition
- **Bento Grids**: Use asymmetric, varied-size cards with distinct visual weight for feature sections.
- **Section Transitions**: Smooth visual breaks using gradients, subtle borders, or ambient glows rather than harsh lines.
- **Hero Sections**: High-impact headlines, subtle background mesh/aurora gradients, contextual social proof, clear dual-action CTAs.
- **Mobile First & Breakpoints**: Design seamlessly across Mobile (<640px), Tablet (<1024px), Desktop (1280px+), and Ultrawide.

### 3. Micro-Interactions & Details
- **Buttons**: Clear hover, active, focus-visible, and loading states with smooth `transition-all duration-200`.
- **Cards**: Subtle border highlights, slight translateY on hover (`hover:-translate-y-1`), and elevation changes.
- **Glassmorphism / Depth**: Use `backdrop-blur-md`, subtle inner shadows, and 1px translucent borders (`border-white/10` or `border-black/5`).

### 4. Interactive Feedback & State Design
Every interactive element must account for all states:
- Default, Hover, Focused (accessible outline ring), Active, Disabled, Loading/Skeleton, and Empty states.

## 4. Deliverable Checklist
- [ ] Responsive navigation bar (desktop + mobile drawer).
- [ ] Compelling Hero section with clear CTA hierarchy.
- [ ] Distinctive feature showcase (bento grid, interactive tabs, or cards).
- [ ] Testimonials, social proof, and pricing sections (if relevant).
- [ ] High-converting footer.
- [ ] Complete CSS / Tailwind classes with smooth transitions and zero layout shifts (CLS).
