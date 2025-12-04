# APPLEPUNK Developer Hub

A React + Vite application for the APPLEPUNK Developer Cave / Dev Hub.

🌐 **Domain**: [applepunk.com](https://applepunk.com)  
📧 **Contact**: [founder@applepunk.com](mailto:founder@applepunk.com)

## Features

- **Home Page** (`/`) - Landing page with overview of services
- **Developer Cave** (`/devhub`) - Developer hub with quick links, contact info, and bio
- **Redirects**: `/man-cave` redirects to `/devhub`

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing
- **Once UI** - Design system (placeholder - see integration instructions below)

## Local Development

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/SEUB66/DJSTRAPPY.git
cd DJSTRAPPY

# Checkout the feature branch
git checkout feature/once-ui-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

## Once UI Integration

This project includes placeholders for [Once UI](https://once-ui.com) integration. When the Once UI package or CDN becomes available:

### Option 1: NPM Package (recommended)

```bash
# Install Once UI (when available)
npm install @once-ui/core
```

Then add imports in `src/main.jsx`:

```jsx
import '@once-ui/core/styles.css';
// or with provider
import { OnceUIProvider } from '@once-ui/core';
```

### Option 2: CDN

Add to `index.html` in the `<head>` section:

```html
<link rel="stylesheet" href="https://cdn.once-ui.com/styles.css" />
<script src="https://cdn.once-ui.com/once-ui.js"></script>
```

### Integration Points

The following files contain Once UI integration placeholders:
- `index.html` - CDN links placeholder in `<head>`
- `src/main.jsx` - Import statements and provider wrapper
- `src/App.jsx` - Component usage comments
- `src/index.css` - CSS variables and theming notes

## Deployment to Vercel

### Prerequisites

1. Vercel account with access to project `seubs-projects/applepunk`
2. Domain `applepunk.com` configured in your DNS provider

### Deployment Steps

1. **Link Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Navigate to `seubs-projects/applepunk` project
   - Click "Settings" → "Git" → "Connected Git Repository"
   - Link to `SEUB66/DJSTRAPPY` repository
   - Set production branch to `feature/once-ui-site` (or `main` after merge)

2. **Configure Build Settings**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add `applepunk.com` as custom domain
   - Vercel will provide DNS records to configure

4. **DNS Configuration**
   - Add the following DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   
   Note: The `public/CNAME` file contains `applepunk.com` for GitHub Pages compatibility. Vercel uses its own domain configuration but the CNAME file doesn't interfere.

5. **Deploy**
   - Push changes to the connected branch
   - Vercel will automatically build and deploy

### Environment Variables (if needed)

Currently no environment variables are required. If you add features that need them:
- Go to Project Settings → Environment Variables
- Add variables for Production/Preview/Development as needed

## Project Structure

```
/
├── public/
│   ├── CNAME              # Custom domain for deployment
│   ├── favicon.svg        # Site favicon
│   ├── opengraph.jpg      # Social sharing image
│   └── robots.txt         # Search engine directives
├── src/
│   ├── assets/            # Placeholder for assets
│   ├── components/
│   │   └── Footer.jsx     # Site footer with contact
│   ├── pages/
│   │   ├── About.jsx      # Home/landing page
│   │   └── DevHub.jsx     # Developer Cave page
│   ├── App.jsx            # Main app with routing
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Required Assets

The following assets should be added to the `public/` directory:

| File | Description | Status |
|------|-------------|--------|
| `seublogo.png` | APPLEPUNK logo | ⚠️ Placeholder |
| `avatar.png` | Developer profile picture | ⚠️ Placeholder |
| `favicon.svg` | Browser tab icon | ✅ Existing |
| `opengraph.jpg` | Social media preview | ✅ Existing |

## Contact Information

- **Email**: [founder@applepunk.com](mailto:founder@applepunk.com)
- **Website**: [applepunk.com](https://applepunk.com)
- **GitHub**: [@SEUB66](https://github.com/SEUB66)
- **Twitter**: [@appleppunk](https://twitter.com/appleppunk)
- **Instagram**: [@appleppunk](https://instagram.com/appleppunk)

## License

Copyright © 2024 APPLEPUNK. All rights reserved.

---

*Designed for Apple iOS by SebG*
