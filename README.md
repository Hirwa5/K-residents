# KARANGWA'S Residences — Next.js & React Web Application

Refactored from static HTML/CSS/JS into a modern, production-ready **Next.js (App Router)** and **React** application built according to best programming practices, component patterns, and type safety.

---

## 🚀 Key Improvements & Architectural Highlights

1. **Modern Framework & Stack**:
   - **Next.js 16 (App Router)** with **React 19** and **TypeScript**.
   - Turbopack-powered high-speed development and production builds.
   - Dynamic Google Fonts integration (`Sora` and `Inter`) via `next/font/google` for zero layout shift and instant typography loading.
   - **Lucide React** for modern, crisp, accessible iconography.

2. **Component-Driven Architecture**:
   - Clean separation of UI components into `common`, `layout`, and feature-specific directories (`home`, `residences`, `gallery`, `transport`, `contact`).
   - Reusable context providers for state management:
     - `ThemeContext`: Light / Dark mode with local storage persistence and system preference detection.
     - `ModalContext`: Unified state for YouTube virtual tour modal and high-res image lightbox.

3. **Single Source of Truth (`src/data/`)**:
   - `siteConfig.ts`: Contact details, WhatsApp numbers, coordinates, navigation links, and amenities.
   - `residences.ts`: Fully typed accommodation units, pricing, capacities, and specs.
   - `gallery.ts`: Photo items with categorized tags and high-resolution assets.
   - `transport.ts`: Distance matrix, driver booking links, and service packages.
   - `faqs.ts`: Structured FAQ questions and answers.

4. **SEO & Performance Best Practices**:
   - Pre-rendered static pages (`SSG`) for instant loading speeds and maximum search engine visibility.
   - Rich metadata tags, OpenGraph previews, semantic HTML5 structure, and accessible ARIA attributes.
   - Form state management with client validation and visual confirmation banner.

---

## 📁 Directory Structure

```text
├── public/                     # Static public assets (favicons, icons)
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── layout.tsx          # Root layout (Metadata, Providers, Header, Footer, Modals)
│   │   ├── page.tsx            # Home page (Hero slideshow, Stats, Amenities, FAQs)
│   │   ├── residences/         # Residences listing with filter
│   │   ├── gallery/            # Visual gallery with category filtering & Lightbox
│   │   ├── transport/          # Airport & city transfer booking
│   │   ├── contact/            # Interactive contact form & embedded Google Map
│   │   └── globals.css         # Curated design tokens & CSS system
│   ├── components/
│   │   ├── common/             # ThemeToggle, ChatWidget, VideoModal, Lightbox
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── home/               # HeroSlideshow, StatsStrip, TeaserCards, AmenitiesGrid, FaqAccordion
│   │   ├── residences/         # ResidencesCatalog
│   │   ├── gallery/            # GalleryCatalog
│   │   ├── transport/          # TransportCatalog
│   │   └── contact/            # ContactSection
│   ├── context/
│   │   ├── ThemeContext.tsx    # Dark/Light theme provider
│   │   └── ModalContext.tsx    # Modal manager (video tour, photo lightbox)
│   └── data/
│       ├── siteConfig.ts       # Central business details & contact info
│       ├── residences.ts       # Accommodation dataset
│       ├── gallery.ts          # Gallery dataset & categories
│       ├── transport.ts        # Transport destinations & services
│       └── faqs.ts             # FAQ questions & answers
├── next.config.mjs             # Next.js configuration (remote image patterns)
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🛠️ Running the Application

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
