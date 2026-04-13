# RS.Media — Next.js Website

A complete multi-page professional media buyer portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services` | All 6 services with details |
| `/results` | 6 case studies with metrics |
| `/process` | 5-step process system |
| `/why-me` | Why Me + comparison table |
| `/clients` | Testimonials + industry grid |
| `/blog` | Blog posts + newsletter |
| `/faq` | FAQ accordion |
| `/contact` | Application form |

## Tech Stack

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Fonts:** Syne (headings) + Plus Jakarta Sans (body) + Fraunces (italic accents)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build
npm run start
```

## Deploy to Vercel (Recommended — Free)

```bash
# Option A: Vercel CLI
npm install -g vercel
vercel

# Option B: GitHub → vercel.com
# Push to GitHub, import repo on vercel.com, deploy in 1 click
```

## Deploy to Netlify

```bash
npm run build
# Upload the /out folder to Netlify drag-and-drop
```

## Project Structure

```
rs-media/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles + Tailwind
│   ├── page.tsx            # Homepage
│   ├── services/page.tsx
│   ├── results/page.tsx
│   ├── process/page.tsx
│   ├── why-me/page.tsx
│   ├── clients/page.tsx
│   ├── blog/page.tsx
│   ├── faq/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx          # Responsive nav + mobile menu
│   ├── Footer.tsx          # 4-column footer
│   ├── FloatingButtons.tsx # WhatsApp + Back to top
│   └── UI.tsx              # Shared reusable components
├── lib/
│   └── useReveal.ts        # Scroll reveal hook
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Update Your Info
- **WhatsApp number:** Search `923001234567` and replace with yours
- **Email:** Search `hello@rizwansaleem.com` and replace
- **Upwork URL:** Search `upwork.com/rizwansaleem` and replace
- **Name:** Already uses "RS.Media" branding throughout

### Colors (tailwind.config.ts)
```js
blue: { DEFAULT: "#1a52ff" }  // Change primary accent color
```

### Fonts (app/globals.css + layout.tsx)
Replace the Google Fonts import URL with your preferred fonts.
