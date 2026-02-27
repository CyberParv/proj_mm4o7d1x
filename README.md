# Fixed



![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

---

## About

Build a premium fitness gym website called Elite Fitness. It needs a hero section with an energetic background, a classes page showing yoga, HIIT, spinning and crossfit with schedules, a membership pricing page with 3 tiers (Basic, Pro, Elite), a trainers page with photos and bios of 6 trainers, a gallery of the gym facility, a BMI calculator tool, client transformation testimonials with before/after stats, a blog section, and a contact page with a free trial signup form. Use a bold dark theme with neon green accents.


## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |


## Project Structure

```
├── .env.example
├── _no_backend.txt
├── _no_custom_components.txt
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── components/
│   ├── CTASparkles.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroStarfield.tsx
│   ├── Navbar.tsx
│   ├── PricingTable.tsx
│   ├── StatsCounter.tsx
│   ├── TeamGrid.tsx
│   ├── TestimonialsAnimated.tsx
│   └── ui/
│       ├── aceternity-input.tsx
│       ├── aceternity-label.tsx
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── backgrounds/
│       │   ├── meteors.tsx
│       │   ├── shooting-stars.tsx
│       │   ├── sparkles.tsx
│       │   └── stars-background.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── text/
│       │   └── flip-words.tsx
│       └── textarea.tsx
├── lib/
│   ├── types.ts
│   ├── utils.ts
│   └── validators.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm4o7d1x.git

# Navigate to the project
cd proj_mm4o7d1x

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm4o7d1x)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
