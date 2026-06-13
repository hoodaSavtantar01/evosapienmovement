# Project Specs — Evosapien Movement (Next.js rebuild)

## 1. What the app does & who uses it

A premium 5-page marketing + membership website for **Evosapien Movement**, a 10,000 sq ft
private gym in Model Town, Rohtak. Visitors browse the disciplines, read the brand story,
view membership pricing, and **apply for membership** or **book a private tour** via two forms.

**Users:**
- Prospective members (browse, apply, book a tour)
- The gym's reception team (receives form submissions by email)

There is **no login, no database, no online payment**. Forms email the team; payment happens
in person at the gym.

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Language | TypeScript |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS + a small amount of global CSS for the design-system tokens already authored |
| Animation | **GSAP** (+ ScrollTrigger) for scroll reveals, headline masks, stat count-ups, hover motion |
| Hero WebGL | Existing `hyperspeed.js` (three.js + postprocessing), loaded as plain scripts |
| Forms | Web3Forms (existing key `4b6ab8d8-...`), `multipart/form-data` POST |
| Hosting | Vercel (static-friendly; no server secrets needed) |

> Note: the design ships its own complete CSS design system (`colors_and_type.css`, `site.css`).
> Rather than re-derive every token into Tailwind by hand, I'll **port these stylesheets into the
> Next.js global CSS** and use Tailwind for layout utilities on top. This keeps the design
> pixel-accurate to the approved reference. If you'd prefer a pure-Tailwind re-tokenization
> instead, say so and I'll switch.

## 3. Pages & user flows (all public — no auth)

| Route | Page | Source reference |
|-------|------|------------------|
| `/` | Home — hyperspeed hero, disciplines, tiers, "body is temple", CTA | `index.html` |
| `/services` | The 5 disciplines + Recovery Room toggle + auxiliary tiles | `services.html` |
| `/about` | Brand story, values, stats, CTA | `about.html` |
| `/membership` | 4 pricing tiers, FAQ accordion, CTA | `membership.html` |
| `/contact` | Application form + tour form + contact channels + map band | `contact.html` |

Shared: sticky header w/ nav, mobile drawer, footer, scroll-progress bar.

## 4. Data models & storage

None persisted locally. Form submissions are sent to **Web3Forms**, which emails the team.
Fields:
- **Apply:** name, email, phone, membership_span, referral, instagram, note, id_proof (file ≤5MB)
- **Tour:** name, email, phone, date, time, instagram, note, id_proof (file ≤5MB)

## 5. Third-party services

- **Web3Forms** — form-to-email (key already in the design, no secret/server key needed)
- **three.js r0.148 + postprocessing 6.25.0** — via CDN, hero animation only
- **Google Fonts** — Onest + Inter Tight

No Supabase, Stripe, or auth in scope.

## 6. GSAP animation plan (the "stunning, not cheesy" brief)

Tasteful, brand-aligned motion — monochrome, slow easing (`cubic-bezier(.16,1,.3,1)`):
1. **Header** slides down on load.
2. **Headline line-mask reveal** — display headlines split into lines that rise from a clip.
3. **Scroll reveals** — `.reveal` elements fade + lift in with a small stagger (ScrollTrigger).
4. **Stat count-ups** — numbers tick up when scrolled into view.
5. **Scroll-progress hairline** at top of page.
6. **Training-row / tier-row hover** — image zoom, arrow shift (CSS, GSAP-assisted where it adds polish).
7. **Recovery Room toggle** — steam/cold crossfade + panel slide (existing logic, ported).
8. **Hyperspeed hero** — kept as-is (click & hold to warp).
9. Respect `prefers-reduced-motion` everywhere (skip/animate-off).

## 7. File structure (proposed)

```
/app
  layout.tsx            # fonts, global CSS, header/footer, scripts
  page.tsx              # Home
  /services/page.tsx
  /about/page.tsx
  /membership/page.tsx
  /contact/page.tsx
/components
  Header.tsx, Drawer.tsx, Footer.tsx
  HyperspeedHero.tsx    # mounts #lights + loads scripts
  Reveal.tsx            # GSAP scroll-reveal wrapper
  ApplyForm.tsx, TourForm.tsx
  RecoveryRoom.tsx      # services toggle
  ...section components per page
/lib
  gsap.ts               # registers ScrollTrigger once
/public
  /assets               # photos, logo.png, technogym-badge.png, hyperspeed.js
/app/globals.css        # ported colors_and_type.css + site.css
```

## 8. Known gaps to resolve

- **`strength-floor.jpg` is missing** from `assets/photos/` but is referenced on Home + Services.
  Options: (a) you provide it, (b) I substitute one of the existing Pexels strength images used
  elsewhere as a placeholder. **Default: (b) placeholder** until you supply the real photo.
- Hero uses **mouse `click & hold`** to warp — works on desktop; on touch it uses touchstart.

## 9. What "done" looks like

- `npm run dev` runs with no console errors; `npm run build` passes (TS + lint clean).
- All 5 routes render and match the reference visually on desktop + mobile (≤767px).
- Both forms submit to Web3Forms and show the success state.
- GSAP animations run smoothly and degrade gracefully under reduced-motion.
- Hyperspeed hero renders and responds to click-and-hold.

## 10. Out of scope (per CLAUDE.md "do exactly what's asked")

- No auth, DB, Supabase, payments, admin dashboard, or CMS.
- No new copy or new pages beyond the 5 in the reference.
