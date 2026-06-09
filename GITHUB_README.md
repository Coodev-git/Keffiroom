# KeffiRooms - Verified Student Housing Platform

A modern, premium student housing marketplace with dark/light mode, real-time verification, and WhatsApp-based coordination.

## Features

- **Dark & Light Mode** - Beautiful theme toggle for user preference
- **AI Studio Glow Aesthetic** - Premium dark mode with glassmorphism effects
- **Smooth Animations** - Fluid transitions and glowing effects throughout
- **WhatsApp Integration** - Seamless contact coordination between seekers and agents
- **Verified Listings** - Trust-focused verification system for all properties
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Material Symbols** - Professional icon system (no emojis)

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Build**: Vite
- **Routing**: Wouter
- **Icons**: Lucide React + Material Symbols
- **Animations**: CSS + Framer Motion

## Project Structure

```
keffirooms/
├── client/
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Landing.tsx     # Hero with role selection
│   │   │   ├── SeekerHome.tsx  # Property listings
│   │   │   ├── AuthSeeker.tsx  # Seeker login
│   │   │   ├── AuthAgent.tsx   # Agent login
│   │   │   ├── AuthAdmin.tsx   # Admin login
│   │   │   ├── AgentDashboard.tsx
│   │   │   └── AdminPanel.tsx
│   │   ├── components/         # Reusable UI components
│   │   ├── contexts/           # React contexts (Theme)
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilities
│   │   ├── App.tsx             # Main routing
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles & theme
│   ├── index.html              # HTML template
│   └── public/                 # Static assets
├── server/                     # Backend placeholder
├── shared/                     # Shared types
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/Coodev-git/KeffiRooms.git
cd KeffiRooms

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm build

# Preview the build
pnpm preview

# Type checking
pnpm check
```

## Key Features Explained

### Dark/Light Mode Toggle
- Located in top-right corner
- Persistent theme preference (can be enhanced with localStorage)
- All components automatically adapt to theme

### WhatsApp Contact Integration
When a seeker clicks "Contact Agent":
1. App opens WhatsApp with pre-filled message
2. Message includes listing details + seeker info
3. Coordinator (you) receives notification at +2347066068160
4. You manually connect seeker and agent

### Verification System
- Admin panel for reviewing pending listings
- Approve/reject workflow
- Verified badge on all approved properties
- Glow effects on verified items

### Animations
- Fade-up on page load
- Slide-in for navigation
- Scale effects on interactions
- Glow pulse on verified badges
- Float animation on hero images

## Customization

### Colors
Edit `client/src/index.css` root variables:
```css
:root {
  --primary: #0D8B7E;
  --accent: #16A34A;
  /* ... more colors ... */
}
```

### WhatsApp Number
Update in `client/src/pages/SeekerHome.tsx`:
```typescript
const whatsappUrl = `https://wa.me/2347066068160?text=...`;
```

### Fonts
Google Fonts are already imported. Update in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

## Deployment

### Deploy to Netlify
```bash
# Build
pnpm build

# Drag dist/public folder to Netlify
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages
```bash
# Build
pnpm build

# Push dist/public to gh-pages branch
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## File Sizes

- Uncompressed: ~360 KB
- Minified: ~150 KB
- Gzipped: ~45 KB

## Performance

- Optimized bundle splitting
- CSS-in-JS for theme switching
- GPU-accelerated animations
- Lazy loading ready

## Documentation

- `README.md` - Full project documentation
- `REDESIGN_NOTES.md` - Design system details
- `UPGRADE_SUMMARY.md` - Feature summary
- `ideas.md` - Design brainstorm document

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or issues, please open a GitHub issue or contact the development team.

## Roadmap

- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Payment processing (Paystack/Stripe)
- [ ] Advanced search filters
- [ ] User profiles
- [ ] Reviews and ratings
- [ ] Messaging system
- [ ] Notifications
- [ ] Analytics dashboard

## Credits

Built with React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

Design: AI Studio Glow - Premium Dark Mode with Glassmorphism

---

**Made for NSUK Students - Trusted Housing, Every Time**
