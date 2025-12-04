# DJ STRAPPY

DJ STRAPPY's personal website for music and video creation services.

🌐 **Website**: [djstrappy.vercel.app](https://djstrappy.vercel.app)  
📧 **Contact**: [contact@djstrappy.com](mailto:contact@djstrappy.com)

## Features

- **Home Page** (`/`) - Landing page with services overview
- **The Studio** (`/devhub`) - Studio hub with quick links, contact info, and bio
- **Redirects**: `/man-cave` redirects to `/devhub`

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing

## Local Development

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/SEUB66/DJSTRAPPY.git
cd DJSTRAPPY

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

## Deployment to Vercel

### Build Settings

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Project Structure

```
/
├── public/
│   ├── CNAME              # Custom domain for deployment
│   ├── favicon.svg        # Site favicon
│   ├── opengraph.jpg      # Social sharing image
│   └── robots.txt         # Search engine directives
├── src/
│   ├── assets/            # Assets
│   ├── components/
│   │   └── Footer.jsx     # Site footer with contact
│   ├── pages/
│   │   ├── About.jsx      # Home/landing page
│   │   └── DevHub.jsx     # Studio page
│   ├── App.jsx            # Main app with routing
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Contact Information

- **Email**: [contact@djstrappy.com](mailto:contact@djstrappy.com)
- **Website**: [djstrappy.vercel.app](https://djstrappy.vercel.app)
- **GitHub**: [@SEUB66](https://github.com/SEUB66)

## License

Copyright © 2024 DJ STRAPPY. All rights reserved.
