# DJ Strappy - Developer Cave (Dev Hub)

A modern React + Vite application for DJ Strappy's Developer Cave / Man Cave content.

**Domain:** [applepunk.com](https://applepunk.com)  
**Contact:** [founder@applepunk.com](mailto:founder@applepunk.com)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
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

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the app
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── assets/          # App assets (images, audio)
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Landing page (/)
│   │   └── DevHub.jsx   # Developer Cave page (/devhub)
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
└── README.md            # This file
```

---

## 🔗 Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with introduction |
| `/devhub` | DevHub | Developer Cave with links, bio, contact |
| `/man-cave` | DevHub | Alias for Developer Cave |

---

## 🎨 Once UI Integration

This project is prepared for [Once UI](https://once-ui.com) integration. Follow these steps when the exact package is available:

### Option 1: NPM Package

1. Install the Once UI package:
   ```bash
   npm install once-ui  # Replace with actual package name
   ```

2. Update `src/main.jsx`:
   ```jsx
   import 'once-ui/styles.css';
   import { OnceUIProvider } from 'once-ui';
   
   // Wrap App with OnceUIProvider
   <OnceUIProvider>
     <App />
   </OnceUIProvider>
   ```

3. Replace native components in pages with Once UI components.

### Option 2: CDN

1. Add the CDN links in `index.html`:
   ```html
   <link rel="stylesheet" href="https://cdn.example.com/once-ui/once-ui.min.css" />
   <script src="https://cdn.example.com/once-ui/once-ui.min.js"></script>
   ```

### Integration Points (TODO)

Look for `TODO: Once UI` comments in these files:
- `index.html` - CDN integration
- `src/main.jsx` - NPM package import
- `src/App.jsx` - Component replacement
- `src/pages/DevHub.jsx` - UI component usage
- `src/index.css` - Style imports

---

## 🌐 Vercel Deployment

### Connect to Vercel Project (seubs-projects/applepunk)

1. **Log into Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in

2. **Import Repository:**
   - Click "Add New..." → "Project"
   - Select the `SEUB66/DJSTRAPPY` repository
   - Choose the `feature/once-ui-site` branch

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete

5. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `applepunk.com` as a custom domain
   - Follow DNS configuration instructions

### Environment Variables (if needed)

No environment variables are required for basic deployment.

### Preview Deployments

Vercel automatically creates preview deployments for each push to the branch. Check the pull request for preview URLs.

---

## 📝 Checklist for Repo Owner

Before going to production, please complete:

- [ ] **Supply Once UI package/CDN:** Provide the exact npm package name or CDN URL for Once UI integration
- [ ] **Provide missing assets:** Copy profile images/avatars to `src/assets/` or `public/`
- [ ] **Update social links:** Verify all social media links in `DevHub.jsx`
- [ ] **Confirm Vercel setup:** Connect the repository to the `seubs-projects/applepunk` Vercel project
- [ ] **Configure domain:** Set up `applepunk.com` DNS to point to Vercel
- [ ] **Review content:** Update bio and description text as needed

---

## 🛠️ Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Technology Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **React Router DOM 6** - Client-side routing
- **Once UI** - UI component library (pending integration)

---

## 📄 License

This project is part of the DJ Strappy portfolio. See [LICENSE](LICENSE) for details.

---

## 🤝 Contact

- **Email:** [founder@applepunk.com](mailto:founder@applepunk.com)
- **Website:** [applepunk.com](https://applepunk.com)
- **GitHub:** [github.com/SEUB66](https://github.com/SEUB66)
