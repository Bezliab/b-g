# Bezliab Graphics — Portfolio 2026
### Waseem Zafar · Graphic Designer

A pixel-faithful recreation of the [Waseem Zafar Behance Portfolio 2026](https://www.behance.net/gallery/250683873/Portfolio-2026) as a modern, responsive, interactive website.

---

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |

---

## ✦ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Giant "My 2026 Portfolio" title, animated chameleon, neon-green glow, 6 nav pills |
| 2 | **About / Intro** | Designer portrait, glassmorphism "Who AM I?" card, skill badges, QR codes, contact |
| 3 | **Logofolio** | 12-logo icon grid, brand name row, animated green marquee ticker |
| 4 | **Visual Identity 01 — Velmora** | Black water brand system: logo anatomy, variations, color palette, typeface |
| 5 | **Visual Identity 02 — GlideX** | Fitness treadmill brand: logo breakdown, lifestyle mockups, palette |
| 6 | **Social Media Designs** | 12 × Instagram post mockups (Grilledwich, Tuborg, boAt, Titan, Diptyque…) |
| 7 | **Packaging 01 — AUREL** | SPF 50+ sunscreen packaging on dark-blue ocean background |
| 8 | **Packaging 02 — Chhawal Chips** | Three chip flavours with full flat dieline layouts |
| 9 | **Print / Catalogue — Pololac** | Electric scooter spiral catalogue mockups |
| 10 | **Event Identity — Design Next 2026** | Full brand system: logo, colors, typography, patterns, billboard & merch mockups |
| 11 | **Footer / Thanks** | "Thanks For Scrolling" card, QR codes, social links, Behance stats |

---

## ✦ Design Language

```
Colors
──────────────────────────────────────────────
Background Primary    #050505
Background Secondary  #0a0a0a
Neon Green (hero)     #39FF14
Mint Green (Design Next) #19F5A5
White Typography      #FFFFFF
Gray Support          #888888 / #CCCCCC
Dark Navy (packaging) #0A1628
Purple (Velmora)      #9D90E8

Visual Effects
──────────────────────────────────────────────
• Neon green glow via box-shadow + text-shadow
• Glassmorphism cards: backdrop-filter blur(12–16px)
• Grid backgrounds: 40×40px and 22×22px dot-grid
• Radial gradient overlays for atmospheric lighting
• Circuit board SVG pattern for Design Next section
• Particle canvas on hero (60 floating dots)
• Marquee ticker (30s infinite loop)
• Framer Motion: fade-up, stagger, parallax, scale
```

---

## ✦ Quick Start

```bash
# 1. Enter the project folder
cd "Bezliab Graphics"

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the development server
npm run dev
# or
yarn dev

# 4. Open in browser
open http://localhost:3000
```

---

## ✦ Build for Production

```bash
npm run build
npm run start
```

---

## ✦ Project Structure

```
Bezliab Graphics/
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── (place image assets here)
└── src/
    ├── app/
    │   ├── globals.css        ← CSS variables, grid bg, animations, glassmorphism
    │   ├── layout.tsx         ← Root layout with Google Fonts
    │   └── page.tsx           ← Main page: loading screen + all sections
    └── components/
        ├── Navigation.tsx     ← Sticky nav, scroll progress bar, mobile menu
        ├── HeroSection.tsx    ← Particle canvas, giant title, chameleon SVG, nav pills
        ├── AboutSection.tsx   ← Portrait, Who AM I card, skill badges, QR codes
        ├── LogofolioSection.tsx ← Logo icon grid, brand names, marquee, CTA panel
        ├── VisualIdentitySection.tsx ← Velmora (01) + GlideX (02) brand systems
        ├── SocialMediaSection.tsx ← 12 Instagram post mockups, philosophy quote
        ├── PackagingSection.tsx ← AUREL sunscreen + Chhawal Chips
        ├── OtherWorksSection.tsx ← Pololac catalogue + Design Next event identity
        ├── FooterSection.tsx  ← Thanks card, QR codes, footer nav, stats
        └── SectionDivider.tsx ← Animated glowing line dividers between sections
```

---

## ✦ Adding Real Images

Replace SVG placeholders with actual asset images by:

1. Place `.jpg / .png / .webp` files in `public/images/`
2. Import `Image` from `"next/image"` in the relevant component
3. Replace the `<svg>` placeholder block with:

```tsx
import Image from "next/image";

<Image
  src="/images/waseem-portrait.jpg"
  alt="Waseem Zafar"
  width={380}
  height={520}
  className="object-cover rounded-2xl"
  priority
/>
```

---

## ✦ Responsive Breakpoints

| Screen | Behaviour |
|--------|-----------|
| Mobile `< 768px` | Single column, smaller type, hamburger menu |
| Tablet `768–1024px` | 2-column grids, scaled proportions |
| Desktop `> 1024px` | Full PDF-accurate layout |

---

## ✦ Animation Reference

| Animation | Trigger | Component |
|-----------|---------|-----------|
| Particle float | On load | `HeroSection` canvas |
| Title fade-up | Page load | `HeroSection` h1 |
| Card slide-in | Scroll into view | All sections |
| Marquee scroll | Continuous | `LogofolioSection` |
| Glow pulse | CSS | Nav active indicator |
| Loading bar | On mount | `LoadingScreen` |
| Scroll progress | Scroll | `Navigation` |
| Mobile menu open | Click | `Navigation` |

---

## ✦ Credits

**Design:** Waseem Zafar  
**Original Portfolio:** [Behance](https://www.behance.net/gallery/250683873/Portfolio-2026)  
**Web Recreation:** Bezliab Graphics  
**Tools used in original:** Adobe Photoshop · Illustrator · Corel Draw
