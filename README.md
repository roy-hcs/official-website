# Haame Website - Next.js 15.3.5

This is the refactored version of the Haame website, migrated from Vue 3 to Next.js 15.3.5.

## 🚀 Features

- **Next.js 15.3.5** - Latest version with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Custom Fonts** - Inter font family loaded from assets
- **Responsive Design** - Mobile-first approach
- **Modern Components** - React functional components with hooks

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── common/            # Shared components
│   │   └── ContainerWrap.tsx
│   └── sections/          # Page section components
│       ├── TopHeader.tsx
│       ├── SystemDes.tsx
│       ├── ProductionNav.tsx
│       ├── OurProduction.tsx
│       ├── Advantage.tsx
│       ├── EcosystemPartners.tsx
│       ├── CooperativePartner.tsx
│       ├── LatestNews.tsx
│       └── MyFooter.tsx
├── lib/                   # Utilities
│   └── utils.ts
├── public/                # Static assets
│   └── assets/           # Images, fonts, etc.
└── package.json
```

## 🎨 Design System

### Colors

- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Gradient combinations for modern UI

### Typography

- Inter font family (Light, Regular, Medium, SemiBold, Bold)
- Responsive text sizes
- Proper line heights for readability

### Components

- **TopHeader**: Hero section with navigation and background image
- **SystemDes**: Feature cards with icons and descriptions
- **ProductionNav**: Tabbed navigation for products
- **OurProduction**: Product showcase with features
- **Advantage**: Benefits section with stats
- **EcosystemPartners**: Partner logos and ecosystem illustration
- **CooperativePartner**: Partnership details and benefits
- **LatestNews**: News articles with newsletter signup
- **MyFooter**: Complete footer with links and contact info

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Key Refactoring Changes

### From Vue 3 to Next.js 15.3.5

1. **Component Migration**:
   - Converted Vue SFC components to React functional components
   - Used React hooks instead of Vue Composition API
   - Migrated template syntax to JSX

2. **Styling**:
   - Replaced raw CSS with Tailwind CSS classes
   - Maintained visual consistency with original design
   - Added custom font loading for Inter font family

3. **Assets Management**:
   - Moved assets from `src/assets` to `public/assets`
   - Updated image imports to use Next.js `Image` component
   - Proper asset optimization with Next.js

4. **State Management**:
   - Replaced Vue reactive state with React useState
   - Used React hooks for component lifecycle

5. **Routing**:
   - Leveraged Next.js App Router for routing
   - File-based routing system

6. **TypeScript Integration**:
   - Added proper TypeScript types for all components
   - Type-safe props and state management

## 🎯 Features Implemented

- [x] Responsive design with mobile-first approach
- [x] Custom font loading (Inter family)
- [x] Image optimization with Next.js Image component
- [x] Tailwind CSS for styling
- [x] TypeScript for type safety
- [x] Component-based architecture
- [x] Modern React patterns (hooks, functional components)
- [x] SEO-friendly with Next.js built-in features
- [x] Production-ready build system

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers
