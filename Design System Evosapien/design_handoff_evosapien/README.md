# Handoff: Evosapien Movement — Full Website

## Overview

Evosapien Movement is a premium private gym (10,000 sq ft) in Model Town, Rohtak. This handoff covers the complete 5-page marketing + membership website. The design is monochromatic (black/white), typographically driven, and uses Onest + Inter Tight as the sole typefaces. Think editorial fitness — no gradients, no emoji, no rounded cards.

---

## About the Design Files

The HTML files in this bundle are **high-fidelity design references** — fully functional prototypes showing the intended look, layout, copy, and interactive behavior. They are **not** production code to ship directly. Your task is to **recreate these designs in your target environment** (Next.js, React, plain HTML+CSS, etc.) using its established patterns, routing, and component libraries. The HTML prototypes are the single source of truth for visual output.

---

## Fidelity

**High-fidelity.** Pixel-perfect references with:
- Final colors, typography, spacing, and motion
- Working JS interactions (scroll reveal, membership tier switcher, Recovery Room toggle, form submissions)
- Mobile-responsive layouts (≤767px breakpoint)
- Live form submission via Web3Forms API

---

## Pages / Screens

### 1. `index.html` — Home

**Purpose:** Hero landing page with WebGL animation, discipline preview, membership tiers, and stats.

**Sections:**
- **Hero (Hyperspeed):** Full-viewport WebGL road animation (`assets/hyperspeed.js`) using three.js `r0.148` + postprocessing `6.25.0`. Overlaid with: eyebrow label, headline ("ENGINEERING HUMAN PEAK."), two CTA buttons (pill-shaped), and a footnote row with logo + address.
  - Canvas: `#lights`, position absolute, fills `.hero-warp`
  - Tweaks panel: collapsible in-page panel (top-right) to switch animation variant + palette
- **Training Rows:** 5 expandable rows (Strength Floor, Climbing Wall, Calisthenics, Recovery Room, Dance). Each row: `height: 160px`, `border-bottom: 1px solid rgba(255,255,255,0.08)`, hover expands to reveal description + image. Alternating image-left / image-right layout.
- **The Club / Tiers:** 4 rows listing membership spans — The Month / The Quarter / The Half / The Year — with price and saving note. Each links to `membership.html`.
- **Stats Strip:** 4 stat blocks in a 4-column grid. Large number (`font-size: clamp(40px,5vw,72px)`) + small uppercase label below.
- **Disciplines Preview:** Section listing 5 disciplines with a discipline number eyebrow, headline, and a link to `services.html`.

---

### 2. `services.html` — Services / Disciplines

**Purpose:** Full breakdown of all 5 disciplines offered.

**Sections (each `border-bottom: 1px solid rgba(255,255,255,0.08)`, padding 48px 0):**

| # | Discipline | Key detail |
|---|-----------|-----------|
| I | Strength Floor | Technogym equipment, dumbbells to 50 kg |
| II | Climbing Wall | Bouldering + top-rope |
| III | Recovery Room | Steam Room + Cold Plunge (1–7°C), toggled via animated pill switcher |
| IV | Calisthenics | Bodyweight / skill work |
| V | Dance | Evening sessions |

**Recovery Room toggle (Discipline III):**
- Two buttons: "Steam Room" / "Cold Plunge"
- On hover of the article → switches to Cold Plunge
- On mouseleave → switches back to Steam Room
- Animation: `transform: translateY(±40px)` + `opacity` fade, `transition: 0.55s cubic-bezier(0.16,1,0.3,1)`
- Image crossfade: `opacity` on two absolutely-positioned `<img>` elements

---

### 3. `about.html` — About

**Purpose:** Brand story and origin.

**Sections:**
- **Hero:** Full-viewport dark image bg, headline "BEYOND THE PHYSICAL."
- **Story:** Two-column grid (60/40). Left: body copy paragraphs. Right: tall editorial image.
- **Built In Rohtak:** Two-column grid. Left: heading + Technogym "Powered by" badge. Right: large stat or image.
- **On The Floor (HIDDEN):** Team member cards — commented out in source, restore by removing HTML comment tags around the `<!-- ON THE FLOOR SECTION -->` block.

---

### 4. `membership.html` — Membership

**Purpose:** Membership plans, span picker, FAQs.

**Sections:**
- **Hero:** Headline "CHOOSE YOUR SPAN."
- **Span Picker (`#spanPicker`):** 4 cards in a 2×2 grid (or 4-col on desktop):
  | Span | Price | Label |
  |------|-------|-------|
  | 1 Month | ₹9,500 | The Month |
  | 3 Months | ₹27,000 | The Quarter · save 5% |
  | 6 Months | ₹51,000 | The Half · save 11% |
  | 12 Months | ₹96,000 | The Year · save 16% |
  - Selected card: `border: 1px solid #fff`, others `rgba(255,255,255,0.12)`
  - JS: clicking a card updates `#membershipTierInput` hidden field in the application form
- **What's Included:** Single-column list of membership inclusions (no "what's inside" sub-sections)
- **FAQ:** `<details>/<summary>` accordion. Each item: `border-bottom: 1px solid rgba(255,255,255,0.08)`, `padding: 28px 0`
- **Application form:** links to / duplicates the Apply To Evolve form from `contact.html`

---

### 5. `contact.html` — Contact & Application

**Purpose:** Two forms + contact channels.

**Form 01 — Apply To Evolve (dark bg):**
- 2-column grid fields: First Name, Last Name, Email, Phone, Referral, Instagram Handle (@ prefixed), Why Evosapien (textarea), ID Proof upload
- Hidden fields: `access_key` (Web3Forms), `subject`, `from_name`, `redirect: false`, `botcheck` (honeypot)
- On submit: POST multipart to `https://api.web3forms.com/submit`
- Success: hide `[data-fields]`, show `[data-confirm]`
- **Web3Forms key:** `4b6ab8d8-c1f8-47b4-ab6e-7d014f71a72a`

**Form 02 — Reserve A Private Tour (light bg #fff):**
- Fields: First Name, Last Name, Email, Phone, Preferred Date, Preferred Time, Instagram Handle, Notes, ID Proof upload
- Same Web3Forms submission flow, same key
- Success message: "Your tour is confirmed." + receptionist will text morning of + payment note

**ID Proof Upload Zone:**
- Dashed border label wrapping a hidden `<input type="file">`
- Accepts: `image/jpeg, image/png, application/pdf` · Max 5 MB
- On file select: label text updates to filename

**Contact Channels (dark section, 3-column grid):**
- Direct Line: +91 92540 12000 (`white-space: nowrap`)
- Email: evosapienmovement@gmail.com
- Location: Model Town, Rohtak, Haryana

---

## Interactions & Behavior

### Scroll Reveal
```js
// All .reveal elements animate in on intersection
// threshold: 0.12, rootMargin: '-48px'
// Adds .is-visible → opacity: 0→1, translateY: 20px→0
// Transition: 0.8s ease-out
```

### Navigation
- Sticky header with `backdrop-filter: blur(20px)` on scroll
- Logo (SVG wordmark, left) + nav links (right, `letter-spacing: 0.25em`)
- Member Access pill: **hidden** (`display: none !important`)
- Mobile: hamburger toggle (`.menu-toggle`) opens `.site-nav` as full-width overlay

### Training Rows (Home)
- Default height: `160px` (mobile: `110px`)
- Hover: expand height, reveal image + description via CSS transition
- Arrow rotates 45° on hover

### Membership Span Picker
```js
// Clicking .span-opt → add .selected class, remove from siblings
// Update hidden input #membershipTierInput with span label
```

### Recovery Room Toggle (Services)
```js
// switchRec('steam' | 'cold')
// Animates panel out (translateY 40px, opacity 0) then new panel in
// Crossfades two <img> elements via opacity
// article mouseenter → switchRec('cold'), mouseleave → switchRec('steam')
```

### Form Submission
```js
// POST to https://api.web3forms.com/submit
// Uses FormData (multipart) to support file attachments
// File size check: max 5MB before submit
// Button: disabled + label → 'Sending…' during request
```

---

## Design Tokens

### Colors
```css
--bg:           #000000    /* page background */
--bg-elevated:  #0a0a0a    /* hover, elevated surfaces */
--fg:           #ffffff    /* primary text */
--fg-70:  rgba(255,255,255,0.70)  /* body text */
--fg-60:  rgba(255,255,255,0.60)  /* secondary body */
--fg-50:  rgba(255,255,255,0.50)  /* descriptions */
--fg-40:  rgba(255,255,255,0.40)  /* eyebrows, muted */
--fg-30:  rgba(255,255,255,0.30)  /* protocol numbers */
--fg-20:  rgba(255,255,255,0.20)  /* borders */
--fg-10:  rgba(255,255,255,0.10)  /* card borders, dividers */
--fg-05:  rgba(255,255,255,0.05)  /* section seams */

/* Accent — ONLY used in trial pages + hyperspeed Ice palette */
--accent-neon: #DEFF00   /* Technogym yellow */
```

### Typography
```css
/* Fonts */
--font-primary:   'Onest', system-ui, sans-serif         /* all display + body */
--font-secondary: 'Inter Tight', system-ui, sans-serif   /* metadata, micro labels */

/* Weights */
--weight-light:   300
--weight-regular: 400
--weight-bold:    700

/* Scale */
--type-hero:      110px   /* hero headline */
--type-display:    96px
--type-h1:         48px
--type-h2:         36px
--type-h3:         28px
--type-stat:       60px
--type-body-lg:    20px
--type-body:       18px
--type-meta:       13px   /* nav links */
--type-eyebrow:    12px
--type-micro:      10px

/* All headlines: uppercase, letter-spacing: -0.025em, line-height: 0.9–1.1 */
/* Body: font-weight 300, line-height 1.6 */
/* Eyebrows: letter-spacing 0.3em, font-weight 700 */
/* Nav links: letter-spacing 0.25em, font-weight 300 */
```

### Spacing
```css
--space-section: 120px   /* canonical section padding top/bottom */
--content-max:   1920px  /* max container width */
--content-pad:   40px    /* desktop horizontal padding */
--content-pad-mobile: 24px
```

### Motion
```css
--ease-out:      cubic-bezier(0.16, 1, 0.3, 1)   /* hero elements, reveals */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)    /* standard transitions */
--duration-fast:    300ms
--duration-medium:  500ms
--duration-slow:    700ms
--duration-reveal:  800ms
```

### Borders & Radius
```css
--radius-none:   0        /* all cards, modals — sharp corners only */
--radius-full:   9999px   /* all buttons and pills */
--border-thin:   0.8px
--border-default: 1px
```

---

## Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.display-hero` | Hero headline — bold, uppercase, tight tracking |
| `.display-h2` | Section headline |
| `.display-h3` | Card/tier headline |
| `.body-lg` | Large body copy (20px, weight 300) |
| `.body` | Standard body (18px, weight 300) |
| `.meta` | Meta / label text (Inter Tight, 10px, wide tracking) |
| `.eyebrow` | Small uppercase label above headlines |
| `.outline-text` | Transparent text with white stroke (dark bg) |
| `.outline-text-dark` | Transparent text with black stroke (light bg) |
| `.btn` | Base pill button styles |
| `.btn-solid` | White fill, black text |
| `.btn-ghost` | Transparent + white border |
| `.btn-inv-ghost` | Black fill, white text (on light sections) |
| `.reveal` | Scroll-animated element (opacity + translateY) |
| `.reveal.is-visible` | Triggered state |
| `.section` | Section wrapper with 120px vertical padding |
| `.container` | Max-width + horizontal padding |
| `.field` | Form input — borderless, underline-only style |
| `.ornament-star` | Cross/plus hairline ornament |
| `.plus-mark` | Plus icon built with CSS pseudo-elements |
| `.powered-by` | "Powered by Technogym" badge layout |
| `.tier-row` | Membership tier list row |
| `.training-row` | Expandable discipline row (home page) |

---

## Mobile Breakpoints

```css
/* Primary mobile breakpoint */
@media (max-width: 767px) {
  /* All 2-col grids → 1 col */
  /* display-hero: clamp(44px, 12vw, 80px) */
  /* display-h2: clamp(30px, 8vw, 52px) */
  /* Section padding: 56px */
  /* Container padding: 20px */
  /* Form [data-fields] grid → 1 col */
  /* CTA buttons → full-width, stacked */
}

/* Extra narrow */
@media (max-width: 379px) {
  /* display-hero: 40px */
  /* display-h2: 28px */
  /* span picker → 1 col */
}
```

---

## Assets

| File | Description |
|------|-------------|
| `assets/colors_and_type.css` | All design tokens — import this first |
| `assets/site.css` | Component styles, layout, animations |
| `assets/site.js` | Scroll reveal, header behavior, form handler, span picker |
| `assets/hyperspeed.js` | WebGL road animation engine (three.js) |
| `assets/logo-evosmove-wordmark-light.svg` | SVG wordmark (white, for dark bg) |
| `assets/logo.png` | Raster logo |
| `assets/technogym-badge.png` | Technogym "Powered by" badge |
| `assets/photos/` | Grayscale editorial photos per discipline |

**External CDNs required:**
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;700&family=Inter+Tight:wght@300;400;500&display=swap" rel="stylesheet">

<!-- WebGL (hero animation only) -->
<script src="https://cdn.jsdelivr.net/npm/three@0.148.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/postprocessing@6.25.0/build/postprocessing.js"></script>
```

**Form API:**
- Provider: [Web3Forms](https://web3forms.com)
- Endpoint: `POST https://api.web3forms.com/submit`
- Key: `4b6ab8d8-c1f8-47b4-ab6e-7d014f71a72a`
- Submission: `multipart/form-data` (required for file attachments)

---

## Files in This Package

| File | Description |
|------|-------------|
| `index.html` | Home — hero, training rows, tiers, stats |
| `services.html` | Services — all 5 disciplines |
| `about.html` | About — story, built in Rohtak |
| `membership.html` | Membership — span picker, inclusions, FAQ |
| `contact.html` | Contact — two forms + channels |
| `Mobile Preview.html` | 5-page mobile preview in iPhone 14 frames |
| `assets/` | All CSS, JS, images, logos |
| `styles.css` | Root entry point (imports tokens + site CSS) |

---

## Notes for the Developer

1. **WebGL animation** (`assets/hyperspeed.js`) is a self-contained engine — it reads `THREE` and `POSTPROCESSING` globals. Do not import as a module; load as a script tag after the CDN scripts.

2. **Sharp corners everywhere** — `border-radius: 0` on all cards, modals, inputs. Only buttons use `border-radius: 9999px`.

3. **Monochrome strictly** — no colour accents on the main site. The neon yellow (`#DEFF00`) appears only in the trial pages and the hyperspeed "Ice" palette.

4. **The Recovery Room section** in `services.html` is a single `<article>` containing both Steam + Cold panels — not two separate discipline entries.

5. **Payment is in-person only** — no payment gateway. Forms collect info and email to the team; user pays at the gym.

6. **Web3Forms file uploads** are included in the email as attachments. The form must use `multipart/form-data` (i.e. `FormData`, not `JSON.stringify`).
