# TRUPTI XEROX Project - Copilot Instructions

## Project Overview
TRUPTI XEROX is a modern, high-performance React + Vite website for a premium document and service center. The site features multiple service offerings, smooth animations, mobile optimization, and conversion-focused design.

## Technology Stack
- React 18 with TypeScript
- Vite 5 for fast builds
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for routing
- Lenis for smooth scrolling

## Development Guidelines

### Component Structure
- Layout components: `src/components/layout/`
- Section components: `src/components/sections/`
- Pages: `src/pages/`
- Utilities: `src/utils/`

### Key Files to Know
- `src/App.tsx` - Main app with routing and Lenis setup
- `src/utils/services.ts` - Service data definitions
- `tailwind.config.js` - Design system configuration
- `vite.config.ts` - Build configuration

### Naming Conventions
- Components: PascalCase (e.g., `HeroSection.tsx`)
- CSS classes: kebab-case with Tailwind
- Files: kebab-case or PascalCase for components

### Design System
- Primary Color: Yellow (`#FFD700`)
- Dark: Black (`#000000`)
- Light: White (`#FFFFFF`)
- Accent: Red (`#FF0000`)

### Animation Best Practices
- Use Framer Motion for all animations
- Keep animations smooth and subtle
- Avoid excessive bouncing or distraction
- Use stagger effects for lists

### Mobile Optimization
- Mobile-first development approach
- Test all changes on mobile view
- Ensure buttons are at least 48px tall
- Use responsive grid (1-4 columns)

## Common Tasks

### Adding a New Component
1. Create file in appropriate directory
2. Use TypeScript with proper typing
3. Include Framer Motion animations
4. Use Tailwind CSS for styling
5. Export as default

### Modifying Services
Edit `src/utils/services.ts` to add/update service data.

### Styling
- Use Tailwind classes first
- Custom CSS in `src/index.css`
- Follow the color palette strictly

### Testing
- Check responsive design at breakpoints
- Verify animations on slower devices
- Test all links (phone, WhatsApp, directions)

## Performance Requirements
- Page load under 2 seconds
- Lazy load heavy components
- Optimize images (WebP preferred)
- Minimal JavaScript
- Clean asset management

## Git & Deployment
- No backend required (static site)
- Build output: `dist/` folder
- Ready for static hosting (Vercel, Netlify, etc.)

## Helpful Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build locally
npm run lint     # Linting
```

## Contact Information for Testing
- Phone: +91 9999 999 999 (placeholder - update as needed)
- WhatsApp: Available via contact buttons
- Hours: Mon-Sat 10 AM - 7 PM, Sun 12 PM - 6 PM

## Important Notes
- All phone numbers are placeholders - update before deployment
- Service data in `services.ts` can be expanded with more details
- Testimonials are hardcoded - can be replaced with API data
- Statistics are demo values - update with real data
