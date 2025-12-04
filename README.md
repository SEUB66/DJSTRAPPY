# DJ Strappy - Developer Cave (Once UI React App)

A React + Vite application for DJ Strappy / APPLEPPUNK featuring the Developer Cave (Man Cave) and digital services showcase. This branch (`feature/once-ui-site`) is prepared for Once UI integration and Vercel deployment.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository and checkout this branch
git clone https://github.com/SEUB66/DJSTRAPPY.git
cd DJSTRAPPY
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
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## 📁 Project Structure

```
/
├── public/
│   ├── audio/          # Audio files
│   ├── favicon.svg     # Site favicon
│   ├── opengraph.jpg   # OG image for social sharing
│   └── robots.txt      # SEO robots file
├── src/
│   ├── assets/         # Images, logos, branding
│   │   ├── branding/   # Logo variations
│   │   └── images/     # Page images
│   ├── components/     # Reusable React components
│   ├── pages/
│   │   ├── About.jsx   # Home page (/)
│   │   └── DevHub.jsx  # Developer Cave (/devhub)
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies and scripts
```

## 🛣️ Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | About.jsx | Home page with services and CTA |
| `/devhub` | DevHub.jsx | Developer Cave / Man Cave |
| `/man-cave` | DevHub.jsx | Alias for Developer Cave |

## 🎨 Once UI Integration

This app is prepared for Once UI integration. The following placeholders are in place:

### In `index.html`:
```html
<!-- TODO: Add Once UI CSS CDN link here -->
<!-- TODO: Add Once UI JS CDN link here -->
```

### In `src/main.jsx`:
```javascript
// TODO: Import Once UI styles and provider
// import 'once-ui/styles.css'
// import { OnceUIProvider } from 'once-ui'
```

### In `package.json`:
```json
{
  "comments": {
    "once-ui": "TODO: Add Once UI package when available"
  }
}
```

### To Complete Once UI Integration:

1. **If using npm package:**
   ```bash
   npm install once-ui  # (replace with actual package name)
   ```
   Then import in `src/main.jsx`:
   ```javascript
   import 'once-ui/styles.css'
   ```

2. **If using CDN:**
   Add to `index.html` `<head>`:
   ```html
   <link rel="stylesheet" href="https://cdn.example.com/once-ui.css" />
   <script src="https://cdn.example.com/once-ui.js"></script>
   ```

3. **Replace placeholder components** in pages with Once UI components (Card, Button, Grid, etc.)

## 🚀 Vercel Deployment

### Step-by-Step Deployment to `seubs-projects/applepunk`:

1. **Go to Vercel Dashboard**
   - Navigate to [vercel.com/seubs-projects](https://vercel.com/seubs-projects)
   - Click on the `applepunk` project (or create new if needed)

2. **Connect Repository**
   - Go to Settings > Git
   - Connect to `SEUB66/DJSTRAPPY` repository

3. **Configure Branch**
   - Set Production Branch to `feature/once-ui-site` (or deploy as preview)
   - Or keep `main` as production and use preview deployments

4. **Build Settings** (should auto-detect from `vercel.json`):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Deploy**
   - Push to the branch to trigger automatic deployment
   - Or manually deploy from Vercel dashboard

### Environment Variables (if needed)
No environment variables are required for the basic setup.

### Preview Deployments
Each push to `feature/once-ui-site` will create a preview deployment URL.

## 📋 Checklist for Completion

Before going live, please complete the following:

- [ ] **Once UI Setup**: Provide the Once UI npm package name or CDN URL
- [ ] **Asset Review**: 
  - [ ] Verify profile/avatar image in `/src/assets/`
  - [ ] Confirm all logos are correct
  - [ ] Add any missing images
- [ ] **Content Review**:
  - [ ] Update social links in DevHub.jsx (LinkedIn, etc.)
  - [ ] Verify email address for contact
  - [ ] Customize bio text if needed
- [ ] **Vercel Connection**:
  - [ ] Connect repository to Vercel
  - [ ] Verify build succeeds
  - [ ] Test preview deployment
- [ ] **Domain Setup** (optional):
  - [ ] Configure custom domain in Vercel if desired

## 🎵 Existing Assets

The following assets from the original site are preserved:

- `/public/favicon.svg` - Site favicon
- `/public/opengraph.jpg` - OpenGraph image
- `/public/audio/` - Audio files
- `/src/assets/branding/` - Logo variations (DJ Strappy, WillFort, etc.)
- `/src/assets/` - Hero images and profile images

## 🔧 Tech Stack

- **React** 18.3 - UI library
- **Vite** 5.4 - Build tool and dev server
- **React Router DOM** 6.26 - Client-side routing
- **Once UI** (placeholder) - UI component library

## 📝 Notes

- This branch replaces the Astro site with a React + Vite app
- The `main` branch still contains the original Astro site
- All original assets have been preserved in `public/` and `src/assets/`

## 🤝 Contributing

1. Create a feature branch from `feature/once-ui-site`
2. Make your changes
3. Test locally with `npm run dev`
4. Build with `npm run build` to verify production build
5. Submit a pull request

---

Built with ❤️ by DJ Strappy / APPLEPPUNK
