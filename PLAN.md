# PLAN.md — Premium High-Tech Personal Portfolio for Chaitanya Mudunuri

## 1. Executive Summary & Aesthetic Concept
- **Aesthetic Direction:** *Minimalist Swiss & Precision Engineering Laboratory* (Refined typography, high whitespace, precision monospace accents, dark/light calibrated palettes, restrained micro-interactions).
- **Core Goal:** Build a static, high-performance, single-page-feel portfolio for an AI & Data Science Engineer at Accenture, deployable on GitHub Pages (`https://portfolio.chaitanya.mudunuri.co.in/`), fully supporting both `/` and `/repo-name/` base paths via Vite configuration.

---

## 2. Technical Stack & Architecture
- **Framework:** Vite + React + TypeScript (Strict Mode).
- **3D & Animation:** Three.js (Hero neural network / abstract vision graph canvas with instanced meshes and DPR capping), GSAP + ScrollTrigger (scrubbed storytelling, section reveals), Motion (`motion` for spring micro-interactions).
- **Styling:** Modern CSS modules / CSS variables with design tokens for both themes (`:root[data-theme="dark"]` and `:root[data-theme="light"]`).
- **Data Layer:** Single typed data file (`src/data/portfolioData.ts`) containing exact user profile, education, experience, projects, skills, and publications data (supporting optional DOIs/links cleanly).

---

## 3. Information Architecture & Component List
1. **Liquid-Glass Navigation Bar (`Navbar.tsx`):** Floating pill nav, blur + backdrop filter + fallback, active section indicator, theme toggle switch, mobile drawer.
2. **Hero Section (`Hero.tsx`):** 3D interactive Three.js canvas background, editorial headline, typing effect / role badge, resume CTA.
3. **About Section (`About.tsx`):** Professional background, education timeline, bio overview.
4. **Experience Section (`Experience.tsx`):** Accenture SDE & Krify Internship roles with clean professional layout.
5. **Projects Section (`Projects.tsx`):** 4 distinct project cards (Dual Authenticator, Dense Crowd Facial Recognition, HydroGuardian, BookMyTicket) with interactive modal details.
6. **Skills Section (`Skills.tsx`):** Composable visual breakdown of Languages, Data Science & AI, Databases & Tools with exact percentages.
7. **Research & Publications (`Publications.tsx`):** 3 peer-reviewed publications (handling missing DOIs gracefully for ICCVPR paper, citation copy, PDF handlers).
8. **Contact & Footer (`Contact.tsx`):** Interactive contact form with validation, email link, social profiles, schema JSON-LD.
9. **404 Page (`NotFound.tsx`):** Theme-aware fallback page for GitHub Pages SPA routing.

---

## 4. Theme Toggle & No-FOUC Strategy
- **Persistence:** `localStorage` with try/catch, tab sync via `storage` event, falls back to `prefers-color-scheme`.
- **No FOUC (`<head>` script):** A tiny synchronous blocking script reads saved theme or system preference and sets `data-theme="dark|light"` on `<html>` before first paint.
- **View Transitions API:** Circular reveal transition on theme switch (`document.startViewTransition`) with instant fallback for reduced motion.

---

## 5. Security & CSP Strategy
- **Strict CSP Meta Tag:** Restricts scripts, styles, and web workers securely while permitting Three.js blob/worker requirements without `unsafe-inline`.
- **SRI & Rel Attributes:** `rel="noopener noreferrer"` on all external links; all dependencies locked in `package-lock.json`.

---

## 6. Testing & Quality Plan
- **Quality Gates:** `npm ci`, `tsc --noEmit`, ESLint 0 errors, production build with 0 warnings.
- **Accessibility & Performance:** Lighthouse target Performance ≥ 90, Accessibility 100, axe 0 violations in both themes.
- **Playwright Testing:** Automated test suite verifying dark/light themes, FOUC prevention, mobile responsiveness (320px to 1920px), and navigation.
