# Fitness Essentials Premium Website — Design Specification

> **Frontend-only sales demo** — No backend, database, auth, API, CMS, payments, or persistence.
> All data is local typed mock/static data. Architecture kept clean for future backend integration.

---

## 1. Project Overview

**Product:** Fitness Essentials — Premium fitness facility in Kodungaiyur, Chennai, Tamil Nadu  
**Goal:** Exceptionally polished frontend prototype for owner presentation  
**Audience:** Fitness Essentials owner + potential members  
**Tone:** Premium, Performance, Discipline, Precision, Consistency, Confidence

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js | 16 (App Router) |
| Runtime | React | 19 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Fonts | next/font (Variable) | Space Grotesk + DM Sans |
| Images | next/image | Built-in |
| Animations | Framer Motion | 11.x |
| Icons | Lucide React | Latest |
| Linting | ESLint + Prettier | Standard |

**No dependencies** for: state management, data fetching, forms, auth, analytics.

---

## 3. Design System Tokens

### 3.1 Typography

| Role | Font | Weights | Variable Axis |
|------|------|---------|---------------|
| Display | Space Grotesk | 300–700 | wght |
| Heading | Space Grotesk | 400–600 | wght |
| Body | DM Sans | 400–500 | wght |
| Mono | JetBrains Mono | 400 | — |

**Type Scale (Fluid, CSS clamp):**

```css
--text-display: clamp(3.5rem, 8vw, 8rem) / 1.05 / -0.03em;
--text-h1: clamp(2.5rem, 5vw, 4.5rem) / 1.1 / -0.02em;
--text-h2: clamp(1.75rem, 3vw, 3rem) / 1.15 / -0.01em;
--text-h3: clamp(1.25rem, 2vw, 2rem) / 1.2 / 0;
--text-body-lg: clamp(1.125rem, 1.5vw, 1.25rem) / 1.6 / 0;
--text-body: 1rem / 1.6 / 0;
--text-sm: 0.875rem / 1.5 / 0;
--text-xs: 0.75rem / 1.4 / 0.02em;
```

### 3.2 Color Palette

```css
:root {
  /* Core */
  --color-bg: #0A0A0A;
  --color-bg-elevated: #111111;
  --color-bg-muted: #1A1A1A;

  --color-fg: #FAFAFA;
  --color-fg-muted: #A3A3A3;
  --color-fg-subtle: #737373;

  --color-border: #2A2A2A;
  --color-border-strong: #404040;

  /* Accent — Warm Gold */
  --color-accent: #C9A84C;
  --color-accent-muted: #9D8438;
  --color-accent-subtle: #3D351A;
}
```

### 3.3 Spacing System

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;

  --section-padding-y: clamp(4rem, 10vw, 8rem);
  --section-padding-x: clamp(1.5rem, 5vw, 4rem);

  --container-max: 80rem;
  --container-wide: 96rem;
}
```

### 3.4 Component Language

| Component | Specification |
|-----------|---------------|
| Button Primary | `--color-accent` bg, `--color-bg` text, 1px border, no radius, hover: `--color-accent-muted` |
| Button Secondary | Transparent, `--color-fg` text, 1px `--color-border` border, hover: `--color-bg-elevated` |
| Button Ghost | No border, `--color-fg-muted` text, hover: `--color-fg` |
| Card | `--color-bg-elevated`, 1px `--color-border`, no radius |
| Image Container | Aspect-ratio locked, overflow hidden, `object-fit: cover` |
| Nav Link | `--text-sm`, uppercase, tracking-wide, hover: `--color-accent` |

---

## 4. Section Architecture (Simplified — 8 Sections)

### 4.1 Navigation (Header) — `components/sections/Navigation.tsx`
- Fixed, transparent → scrolled: backdrop-blur + border
- Logo: "FITNESS ESSENTIALS" (Space Grotesk 500, tracking-wide)
- Links: EXPERIENCE, EQUIPMENT, GALLERY, LOCATION
- CTA: "VISIT US" (Primary button)
- Mobile: Slide-over panel, staggered links

### 4.2 Hero — `components/sections/Hero.tsx`
- 100dvh/100vh, full-bleed video or image
- Overlay gradient for legibility
- Headline: `--text-display`, 3 lines max
- Subheadline: `--text-body-lg`, `--color-fg-muted`
- CTAs: Primary "START YOUR JOURNEY" + Ghost "EXPLORE THE GYM"
- Scroll indicator

**Copy:**
```
TRAIN WHERE
EXCELLENCE
IS STANDARD
```

### 4.3 Brand Statement — `components/sections/BrandStatement.tsx`
- Pure typography, asymmetric
- Large headline (`--text-h1`), staggered reveal
- Supporting paragraph (`--text-body-lg`, muted)
- Thin gold rule (`--color-accent`, 1px)
- No images

### 4.4 Experience — `components/sections/Experience.tsx`
- Two-column: Image left, content right (reversed on alternate)
- Image: 4:5 aspect, hover scale 1.02
- Content: `--text-h2` headline + `--text-body` description
- 3 pillars as inline tags (no cards): PREMIUM EQUIPMENT · CLEAN ENVIRONMENT · PROFESSIONAL SUPPORT

### 4.5 Equipment — `components/sections/Equipment.tsx`
- Asymmetric CSS Grid masonry (`grid-auto-flow: dense`)
- 8–10 items, varying aspect ratios (1:1, 4:5, 3:4, 16:9)
- One featured item 2× span
- Hover: zoom + overlay with name/category
- Click: Lightbox (dynamic import)

### 4.6 Gallery — `components/sections/Gallery.tsx`
- Editorial asymmetric grid (not uniform)
- Rhythm: Large → Small → Medium → Large
- Hover: subtle zoom + caption
- Lightbox: fullscreen, keyboard nav, swipe mobile
- Placeholder system for unavailable photos

### 4.7 Location — `components/sections/Location.tsx`
- Static map embed (no API key)
- Address: "KODUNGAIYUR, CHENNAI, TAMIL NADU" (no invented street)
- CTA: "GET DIRECTIONS" (opens Google Maps)
- No hours, phone, email — unverified

### 4.8 Final CTA + Footer — `components/sections/FinalCta.tsx` + `components/layout/Footer.tsx`
- **Final CTA:** Centered, `--text-h1` headline, one sentence, two buttons
- **Footer:** 4-col grid (Brand, Links, Location, Social)
- Bottom: Copyright + "Designed with precision"
- No fabricated contact details

---

## 5. Animation Strategy

| Trigger | Animation | Duration | Reduced Motion |
|---------|-----------|----------|----------------|
| Page load | Hero text stagger | 800ms | Instant |
| Scroll reveal | Fade + translateY(20px) | 600ms | Instant |
| Hero parallax | Background translateY(0.3x) | Continuous | Disabled |
| Image hover | Scale(1.02) | 300ms | Disabled |
| Nav scroll | Backdrop blur + border | 200ms | Instant |
| Mobile menu | Slide + stagger | 400ms | Instant |
| Lightbox | Fade + scale | 300ms | Instant |
| Button hover | Color transition | 150ms | Instant |
| Focus visible | Ring `--color-accent` | 150ms | Instant |

**Implementation:** Framer Motion for complex, CSS transitions for simple. All gated by `useReducedMotion()` hook.

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Key Adjustments |
|------------|-------|-----------------|
| Mobile | 375–430px | Hero text 2 lines, stacked CTAs, single-col, touch scroll |
| Tablet | 768px | 2-col grids, horizontal scroll active |
| Desktop | 1024px | Full asymmetric layouts, parallax |
| Large | 1280px | Max container reached |
| XL | 1440px+ | Wide gallery, generous whitespace |

---

## 7. Performance Budgets

| Metric | Target |
|--------|--------|
| LCP | < 2.0s |
| CLS | < 0.05 |
| TBT | < 100ms |
| JS Bundle (gz) | < 100KB |
| CSS (gz) | < 20KB |
| Lighthouse Perf | ≥ 95 |

**Techniques:**
- `next/image` priority on hero, `sizes` on all
- `next/font` variable, `display: swap`
- Server Components for all static sections
- Dynamic import: Lightbox, Gallery carousel
- `preload` hero, `prefetch` viewport sections
- `content-visibility: auto` below fold

---

## 8. Accessibility Requirements

- Semantic HTML5: `header`, `nav`, `main`, `section`, `footer`
- Heading hierarchy: h1 → h2 → h3
- Focus visible: 2px `--color-accent` outline, 2px offset
- ARIA labels on icon buttons, carousel controls
- `prefers-reduced-motion` respected globally
- Alt text: descriptive for content, empty for decorative
- Contrast: AAA text, AA UI
- Keyboard nav: all interactive elements reachable

---

## 9. SEO & Structured Data

**Metadata:**
- Title: "Fitness Essentials Kodungaiyur — Premium Fitness Facility in Chennai"
- Description: "Train without limits at Fitness Essentials. Premium equipment, expert training, and a clean environment in Kodungaiyur, Chennai."
- OG: Hero image, title, description
- Twitter: Large image card

**Structured Data (JSON-LD) — Verified Only:**
```json
{
  "@type": "Gym",
  "name": "Fitness Essentials",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kodungaiyur",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  }
}
```
No aggregateRating (review count unverified for structured data), no openingHours, no telephone.

---

## 10. Static Data Structure (All Placeholders Where Unverified)

```typescript
// lib/data/hero.ts
export const heroData = {
  headline: "TRAIN WHERE\nEXCELLENCE\nIS STANDARD",
  subheadline: "Fitness Essentials Kodungaiyur — Chennai's premium training facility.",
  primaryCta: { label: "START YOUR JOURNEY", href: "#contact" },
  secondaryCta: { label: "EXPLORE THE GYM", href: "#experience" },
  background: { type: "image" as const, src: "/hero-poster.webp" }
};

// lib/data/brand.ts
export const brandData = {
  headline: "DISCIPLINE\nMEETS\nDESIGN",
  body: "Every square foot engineered for performance. No compromise on equipment. No clutter on the floor. Just the essentials — executed at the highest standard.",
};

// lib/data/experience.ts
export const experienceData = {
  headline: "THE EXPERIENCE",
  subheadline: "Three pillars. Zero compromise.",
  image: { src: "/experience.webp", alt: "Fitness Essentials training floor" },
  pillars: [
    "PREMIUM EQUIPMENT",
    "CLEAN ENVIRONMENT", 
    "PROFESSIONAL SUPPORT"
  ]
};

// lib/data/equipment.ts
export const equipmentData = {
  headline: "EQUIPMENT",
  subheadline: "Engineered for performance.",
  items: [
    { id: 1, name: "Olympic Platform", category: "STRENGTH", image: "/equip-1.webp", featured: true },
    { id: 2, name: "Cable Crossover", category: "STRENGTH", image: "/equip-2.webp" },
    { id: 3, name: "Leg Press", category: "STRENGTH", image: "/equip-3.webp" },
    { id: 4, name: "Dumbbell Rack (5–50kg)", category: "FREE WEIGHTS", image: "/equip-4.webp" },
    { id: 5, name: "Assault Bike", category: "CONDITIONING", image: "/equip-5.webp" },
    { id: 6, name: "Rowing Ergometer", category: "CONDITIONING", image: "/equip-6.webp" },
    { id: 7, name: "Functional Trainer", category: "STRENGTH", image: "/equip-7.webp" },
    { id: 8, name: "Bench Press Station", category: "STRENGTH", image: "/equip-8.webp" },
    { id: 9, name: "Pull-up Rig", category: "BODYWEIGHT", image: "/equip-9.webp" },
    { id: 10, name: "Stretching Zone", category: "RECOVERY", image: "/equip-10.webp" },
  ]
};

// lib/data/gallery.ts
export const galleryData = {
  headline: "GALLERY",
  subheadline: "The facility.",
  images: [
    { id: 1, src: "/gallery-1.webp", alt: "Main training floor", width: 1920, height: 1280, featured: true },
    { id: 2, src: "/gallery-2.webp", alt: "Free weights area", width: 1280, height: 1920 },
    { id: 3, src: "/gallery-3.webp", alt: "Cardio section", width: 1920, height: 1280 },
    { id: 4, src: "/gallery-4.webp", alt: "Stretching zone", width: 1280, height: 1280 },
    { id: 5, src: "/gallery-5.webp", alt: "Reception", width: 1920, height: 1280 },
    { id: 6, src: "/gallery-6.webp", alt: "Equipment detail", width: 1280, height: 1920 },
    { id: 7, src: "/gallery-7.webp", alt: "Changing area", width: 1920, height: 1280 },
    { id: 8, src: "/gallery-8.webp", alt: "Exterior", width: 1280, height: 1280 },
  ]
};

// lib/data/location.ts
export const locationData = {
  headline: "LOCATION",
  subheadline: "Find us in Kodungaiyur.",
  address: "KODUNGAIYUR, CHENNAI, TAMIL NADU",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=...Kodungaiyur...", // Placeholder
  directionsUrl: "https://maps.google.com/?q=Fitness+Essentials+Kodungaiyur+Chennai",
};

// lib/data/footer.ts
export const footerData = {
  brand: "FITNESS ESSENTIALS",
  tagline: "Train without limits.",
  links: [
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EQUIPMENT", href: "#equipment" },
    { label: "GALLERY", href: "#gallery" },
    { label: "LOCATION", href: "#location" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Google Maps", href: "https://maps.google.com", icon: "map-pin" },
  ],
  copyright: "© 2025 Fitness Essentials. Designed with precision.",
};
```

---

## 11. Placeholder Asset Strategy

| Asset | Status | Fallback |
|-------|--------|----------|
| Hero video | Unverified | Hero poster image (`/hero-poster.webp`) |
| Hero poster | Placeholder | Generated gradient + text overlay |
| Experience image | Placeholder | `/experience.webp` — branded placeholder |
| Equipment images (10) | Placeholder | `/equip-{1-10}.webp` — branded placeholders |
| Gallery images (8) | Placeholder | `/gallery-{1-8}.webp` — branded placeholders |
| Map embed | Placeholder | Static Google Maps embed URL for Kodungaiyur |

**Placeholder Design:** Dark gradient (`--color-bg` to `--color-bg-muted`), centered "FITNESS ESSENTIALS" text + asset label, `--color-accent` accent line. Generated at build via script or included as actual `.webp` files.

---

## 12. File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/           # Colocated section components
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ImageContainer.tsx
│   │   ├── Lightbox.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── BrandStatement.tsx
│   │   ├── Experience.tsx
│   │   ├── Equipment.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   └── FinalCta.tsx
│   └── layout/
│       └── Footer.tsx
├── lib/
│   ├── data/
│   │   ├── hero.ts
│   │   ├── brand.ts
│   │   ├── experience.ts
│   │   ├── equipment.ts
│   │   ├── gallery.ts
│   │   ├── location.ts
│   │   └── footer.ts
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   ├── useReducedMotion.ts
│   │   └── useIntersectionObserver.ts
│   └── utils/
│       └── cn.ts
├── styles/
│   └── design-tokens.css
└── types/
    └── index.ts
```

---

## 13. Non-Requirements (Explicitly Excluded)

- ❌ Trainer profiles / certifications / bios
- ❌ Class schedules / booking / member portal
- ❌ Pricing / membership tiers
- ❌ Review excerpts / testimonials
- ❌ Hours of operation
- ❌ Phone number / email / contact form
- ❌ Newsletter signup
- ❌ Blog / news
- ❌ FAQ
- ❌ Cookie banner / analytics
- ❌ Multi-language
- ❌ Dark/light theme toggle (dark only)

---

## 14. Acceptance Criteria

- [ ] Build passes: `npm run build`
- [ ] TypeCheck passes: `npm run typecheck`
- [ ] Lint passes: `npm run lint`
- [ ] Lighthouse Performance ≥ 95 (local)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse Best Practices ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] Responsive at 375, 768, 1024, 1280, 1440
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation works end-to-end
- [ ] No console errors on load
- [ ] Hero loads < 2s LCP (simulated)
- [ ] All images lazy-loaded except hero
- [ ] Lightbox opens/closes via keyboard
- [ ] Mobile navigation opens/closes via keyboard
- [ ] Focus visible on all interactive elements