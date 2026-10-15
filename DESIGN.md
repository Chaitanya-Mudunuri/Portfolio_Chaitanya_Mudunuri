# DESIGN.md — Design System & Specification

## 1. Aesthetic Direction: Minimalist Swiss & Precision Engineering Laboratory
- **Visual Tone:** Restrained, editorial, highly structured, technical precision combined with high-end digital agency finesse.
- **Typography:**
  - *Display / Headings:* Syne or Plus Jakarta Sans (Clean, geometric, premium grotesk)
  - *Body:* Inter or Outfit (High legibility, optical sizing)
  - *Monospace:* JetBrains Mono (Technical labels, coordinates, metadata tags)

---

## 2. Color Tokens & Palettes

### Dark Theme (`:root[data-theme="dark"]`)
- Background: `#090a0f`
- Surface / Cards: `#12141c`
- Surface Elevated: `#1b1e29`
- Primary Text: `#f3f4f6`
- Secondary Text: `#9ca3af`
- Accent (Neural Cyan): `#38bdf8`
- Accent Secondary (Quantum Violet): `#818cf8`
- Border / Divider: `rgba(255, 255, 255, 0.08)`
- Glass Tint: `rgba(18, 20, 28, 0.7)`

### Light Theme (`:root[data-theme="light"]`)
- Background: `#f8fafc`
- Surface / Cards: `#ffffff`
- Surface Elevated: `#f1f5f9`
- Primary Text: `#0f172a`
- Secondary Text: `#64748b`
- Accent (Neural Blue): `#0284c7`
- Accent Secondary (Quantum Indigo): `#4f46e5`
- Border / Divider: `rgba(0, 0, 0, 0.08)`
- Glass Tint: `rgba(255, 255, 255, 0.8)`

---

## 3. Component Design & States
- **Liquid-Glass Navbar:** Backdrop blur (20px), saturate (180%), subtle specular highlight border, spring animation on active tab indicator.
- **Buttons:** Crisp borders, micro-scale hover feedback (`scale(1.02)`), active press state (`scale(0.98)`).
- **Cards:** Asymmetric borders, subtle radial gradient spotlight on hover, zero generic neon dropshadows.

---

## 4. Motion Principles
- **Duration & Easing:**
  - Fast micro-interactions: `150ms cubic-bezier(0.16, 1, 0.3, 1)`
  - Standard transitions: `350ms cubic-bezier(0.16, 1, 0.3, 1)`
  - Cinematic reveals: `700ms cubic-bezier(0.22, 1, 0.36, 1)`
- **Reduced Motion:** Fully honored via `@media (prefers-reduced-motion: reduce)` disabling scrubbed animations and replacing 3D canvas with a static CSS gradient mesh.
