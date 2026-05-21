# The Dubai Mall — Interactive Sales Deck

A cinematic, fully interactive browser-based sales deck for The Dubai Mall — built as a response to the Liat AI Senior Frontend Engineer & AI-Powered Interactive Design take-home assignment.

**Live Demo:** [Deploy link here after Vercel deploy]

---

## Overview

This is not a website. It is a purpose-built interactive sales tool designed to replace the fragmented, manual pitch process used by commercial real estate teams at large mixed-use properties. The experience is built for three audiences:

- **Prospective retail tenants** (luxury flagships → pop-ups)
- **Brand sponsors & activation partners**
- **Event producers & promoters**

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | React 18 + Vite + TypeScript | Type safety, fast dev loop, tree-shaking |
| Animations | Framer Motion | Cinematic scroll parallax, preloader, page transitions |
| Styling | Tailwind CSS | Utility-first, consistent design tokens |
| Typography | Display serif + Inter | Luxury editorial feel |
| Scroll | Native smooth scroll + IntersectionObserver | No jank, hardware-accelerated |
| Deployment | Vercel | Zero-config, edge CDN, instant preview deploys |

---

## Architecture

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed top bar with active section tracking
│   └── Sidebar.tsx         # Full-screen mobile/overlay navigation
├── sections/
│   ├── Hero.tsx            # Cinematic video hero with parallax scroll
│   ├── WhyDubaiMall.tsx    # Stats, demographics, location data
│   ├── LuxuryRetail.tsx    # Fashion Avenue, key tenants, leasing CTA
│   ├── DiningLifestyle.tsx # F&B landscape, hotel adjacency
│   ├── Attractions.tsx     # Dubai Aquarium, ice rink, entertainment
│   ├── Sponsorship.tsx     # Audience data, partnership tiers
│   └── LeasingPortal.tsx   # Tabbed leasing paths with tailored pitches
├── App.tsx                 # Preloader, section registry, scroll tracking
├── main.tsx                # React root
└── index.css               # Design system: tokens, animations, utilities
```

**Expandability:** Every section is a self-contained module. Adding a sub-module requires only creating a new section file and adding an entry to the `SECTIONS` array in `App.tsx`. No rewrites needed.

---

## Design Decisions

### Aesthetic Direction
**Ultra-luxury editorial.** The palette is pure black with a warm gold accent system and a serif/sans-serif pairing that signals premium without being cold. References: Hermès.com structure, Louis Vuitton editorial rhythm, Apple spacing discipline.

### Cinematic Preloader
A branded preloader screen with animated gold corner accents and a sliding progress bar creates immediate brand impression before any content loads — borrowed from luxury fashion brand websites.

### Framer Motion Parallax
The hero section uses `useScroll` + `useTransform` for a cinematic parallax effect on both the video background and the text layer — creating depth and motion that static slides cannot match.

### Non-Linear Navigation
Three navigation affordances run in parallel:
- **Top navbar** with active section indicator
- **Right-side dot nav** with hover tooltips
- **Bottom "Next Chapter" bar** for guided linear flow

### Video-First Hero
Full-bleed YouTube embed in the hero section with autoplay, mute, and loop — the primary storytelling medium, not decoration.

---

## AI Tools Used

| Tool | How Used |
|---|---|
| Claude (Anthropic) | Architecture planning, component scaffolding, design system decisions, code review |
| ChatGPT | Copywriting assistance for section headlines and sub-copy |
| Midjourney | Supplemental imagery and luxury visual references |
| v0 (Vercel) | Rapid wireframe iteration for leasing portal module |

---

## Setup Instructions

```bash
# Clone
git clone https://github.com/YOUR_USERNAME/dubai-mall-deck
cd dubai-mall-deck

# Install
npm install

# Develop
npm run dev
# → http://localhost:5173

# Build
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel (recommended)
```bash
npm i -g vercel
vercel
# Follow prompts — zero config needed
```

### Deploy to Netlify
```bash
npm run build
# Drag-drop the /dist folder to netlify.com/drop
```

---

## What I'd Improve With More Time

1. **AI-generated property renderings** — commission Midjourney renders of each zone for a fully bespoke visual language
2. **3D property map** — Three.js bird's-eye interactive floor plan for the leasing section
3. **CMS integration** — connect to Sanity/Contentful so the sales team can update data without a deploy
4. **Analytics events** — track which sections hold attention longest
5. **PDF export** — one-click "Export as PDF" for offline leave-behind
6. **Multi-language support** — Arabic + English toggle for regional relevance

---

## Performance Notes

- Framer Motion only loads animations after preloader — no layout shift
- Images: Unsplash CDN with `?w=` params for right-sized delivery
- Fonts: Google Fonts with `display=swap` — no render blocking
- TypeScript strict mode — zero `any` types

---

*Built May 2026 — Liat AI take-home assignment response*