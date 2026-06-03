# depan-pro

A modern landing page built with Next.js, React, and TypeScript.

## ✨ Features

- Responsive landing page (mobile, tablet, desktop)
- Hero section with animated phone mockup and call-to-action
- Stats banner (verified artisans, satisfaction, response time)
- Problems vs. solution comparison
- Core advantages showcase (AI, real-time tracking, eco-friendly)
- Product showcase: mobile app + professional dashboard mockups
- Tech stack highlights
- Emergency services grid (plumbing, locksmith, electricity, etc.)
- "How it works" 4-step walkthrough
- Customer testimonials
- Waitlist signup form (controlled React form)
- QR code demo section
- Footer with contact and links
- Navigation with smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Plain CSS — global stylesheet with CSS custom properties
- **Fonts**: `next/font/google` (Inter + Merriweather)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ — [Download here](https://nodejs.org/)
- A code editor — we recommend [VS Code](https://code.visualstudio.com/)
- Git installed
- Internet access for the build (fonts are fetched at build time)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/depanpro.git
cd depanpro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

> 💡 **VS Code tip**: open the integrated terminal with Ctrl+\` (or Cmd+\` on Mac)

## 📁 Project Structure

- `src/app` — Next.js App Router entry points: `layout.tsx` (fonts + metadata), `page.tsx` (assembles all sections), `globals.css` (global styles and CSS variables)
- `src/components/sections` — Landing page section components (Header, Hero, Stats, Solution, Features, Showcase, TechStack, Services, Steps, Testimonials, Waitlist, QrSection, Footer)

## 📝 License

MIT