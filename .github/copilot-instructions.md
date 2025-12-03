# Copilot Instructions for DJSTRAPPY

## Project Overview

This is DJ Strappy's personal website built with Astro and TailwindCSS. It's a marketing/portfolio website featuring music, videos, and contact functionality.

## Tech Stack

- **Framework**: Astro v5 (Static Site Generator)
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Icons**: Astro Icon with Iconify
- **Package Manager**: pnpm (preferred), npm, or yarn

## Project Structure

```
/
├── public/              # Static assets served as-is
├── src/
│   ├── assets/          # Processed assets
│   │   ├── branding/    # Logo, favicon, brand elements
│   │   ├── images/      # Page images
│   │   └── audio/       # Audio files
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (.astro files)
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
└── astro.config.mjs     # Astro configuration
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Coding Standards

### Astro Components

- Use `.astro` extension for Astro components
- Place reusable components in `src/components/`
- Use semantic HTML elements
- Follow the existing component naming conventions (PascalCase for component files)

### TypeScript

- Use TypeScript for type safety
- Path aliases are configured: `@/*` maps to `src/*` and `~/*` maps to project root
- Enable strict null checks as per tsconfig.json

### Styling

- Use TailwindCSS utility classes for styling
- Follow mobile-first responsive design
- Use the existing TailwindCSS configuration
- Prettier is configured with 2-space indentation

### File Naming

- Component files: PascalCase (e.g., `VideoSection.astro`)
- Utility files: camelCase (e.g., `utils.ts`)
- Page files: lowercase (e.g., `contact.astro`)

## Important Guidelines

1. **Assets**: Place static assets in `public/` and processed assets in `src/assets/`
2. **Images**: Use Astro's built-in image optimization when possible
3. **SEO**: The project uses `astro-seo` - maintain SEO metadata on pages
4. **Sitemap**: The project auto-generates sitemaps via `@astrojs/sitemap`
5. **Icons**: Use `astro-icon` with the configured icon sets (bx, simple-icons, uil)

## Sensitive Files

- Do NOT modify or commit `.env` files
- Do NOT commit any API keys or secrets

## Testing Changes

1. Run `pnpm dev` to start the development server
2. Check the browser console for errors
3. Verify responsive design at different breakpoints
4. Run `pnpm build` to ensure production build succeeds

## Pull Request Guidelines

- Make small, focused changes
- Test changes locally before submitting
- Ensure the build passes without errors
- Update documentation if adding new features
