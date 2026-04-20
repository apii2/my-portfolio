
## Frontend Developer Portfolio — Bold & Dark

A single-page portfolio with smooth scroll navigation, dark theme, and a vivid accent color (electric cyan/violet) for a modern bold feel.

### Design direction
- Dark background (near-black) with subtle noise/gradient glow
- Large typographic hero, mono accents for a "developer" vibe
- Vivid accent color used sparingly on highlights, links, and interactive states
- Smooth scroll, subtle fade/slide-in animations on section enter
- Fully responsive (mobile-first, tested at 345px width)

### Sections

1. **Sticky Nav** — name/logo on left, anchor links (About, Work, Experience) on right; mobile collapses to a simple menu.

2. **Hero** — Big bold headline ("Frontend Developer crafting fast, beautiful interfaces"), short tagline, two CTAs (View Work, Download CV), accent glow background.

3. **About** — Two-column on desktop: portrait/avatar placeholder + short bio paragraph, plus a tech-stack chip row (React, TypeScript, Tailwind, Next.js, etc.).

4. **Projects / Work** — 3×2 responsive grid of project cards with placeholder cover, title, short description, tech tags, and "Live"/"Code" links. Hover lifts card and reveals accent border.

5. **Experience** — Vertical timeline of 3–4 roles with company, dates, and bullet highlights. Education entry at bottom.

6. **Footer** — Social links (GitHub, LinkedIn, X, Email) + copyright.

### Implementation
- Update `src/index.css` design tokens to dark palette + accent (HSL)
- Update `tailwind.config.ts` with custom font sizes/animations
- Build modular components in `src/components/portfolio/` (Nav, Hero, About, Projects, Experience, Footer)
- Replace `src/pages/Index.tsx` to compose them
- Use lucide-react icons, shadcn Button/Badge/Card

Realistic placeholder content (name "Alex Carter", 6 sample projects, 3 roles) included — easy to edit later.
