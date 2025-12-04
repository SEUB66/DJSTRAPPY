# APPLEPPUNK - Web Design & App Development

Professional Web Design, App Development, Company Branding & Social Network Boosting services by APPLEPPUNK.

**Website:** [applepunk.com](https://applepunk.com)  
**Contact:** [founder@applepunk.com](mailto:founder@applepunk.com)

---

## Deployment (Vercel)

This project is deployed on Vercel.

**Project ID:** `prj_MLmHgKO90tbfnMiwWoFfJhqUaucj`

### Build Configuration
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** Astro

### DNS Setup for applepunk.com
1. Add A record: `@` → `76.76.21.21`
2. Add CNAME record: `www` → `cname.vercel-dns.com`

---

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5
- **Styling:** [TailwindCSS](https://tailwindcss.com) v4
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) with Iconify

## Features

- Dual-theme background system (Girl video / Joker image)
- Theme toggle control
- Login page with custom background
- Responsive design
- Audio player integration
- Video section

---

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/SEUB66/DJSTRAPPY.git
cd DJSTRAPPY
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
pnpm dev
```

### Preview & Build

```bash
npm run build   # Build for production
npm run preview # Preview production build
```

---

## Project Structure

```
/
├── public/
│   ├── joker-bg.png       # Joker theme background
│   ├── login-bg.png       # Login page background
│   └── bg-full.webm       # Girl theme video (add your own)
├── src/
│   ├── components/
│   │   ├── BackgroundManager.astro  # Theme background controller
│   │   ├── ThemeToggle.astro        # Theme switch UI
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── login.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Theme System

The site uses a dual-theme background system:

1. **Girl Theme** - Animated video background (`/bg-full.webm`)
2. **Joker Theme** - Static image background (`/joker-bg.png`)

Toggle themes using the control in the bottom-left corner.

---

## License

Based on [Astroship](https://github.com/surjithctly/astroship) template by Web3Templates.

Copyright © 2025 APPLEPPUNK. All rights reserved.

[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)
