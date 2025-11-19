# WPH Portfolio

A polished personal site that packages career highlights, signature projects, and curated contact channels. Built with the Next.js App Router, the experience leans on motion, accessible UI primitives, and content-driven sections to keep everything fast and expressive.

<p align="center">
  <img src="./public/images/readme/desktop-preview.png" alt="Desktop preview" height="320" style="margin:0 8px;">
  <img src="./public/images/readme/tablet-preview.png" alt="Tablet preview" height="320" style="margin:0 8px;">
  <img src="./public/images/readme/mobile-preview.png" alt="Mobile preview" height="320" style="margin:0 8px;">
</p>

> Live demo: [wph-portofolio-8.vercel.app](https://wph-portofolio-8.vercel.app)

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white" alt="Next.js" height="30">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" height="30">
  <img src="https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white" alt="React" height="30">
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000" alt="shadcn/ui" height="30">
  <img src="https://img.shields.io/badge/Radix%20UI-161618?logo=radix-ui&logoColor=white" alt="Radix UI" height="30">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" height="30">
  <img src="https://img.shields.io/badge/Motion-000000?logo=framer&logoColor=white" alt="Motion" height="30">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint" height="30">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" alt="Prettier" height="30">
</p>

## Highlights

- Story-driven layout with dedicated work, experience, and contact flows
- Motion-based micro-interactions powered by `motion` keep sections lively
- shadcn/ui surfaces layered on Radix primitives ensure accessible dialogs and selects
- Tailwind CSS 4.0 pipeline with custom typography utilities generated at build-time
- Centralized content constants make portfolio refreshes a copy-only task

## Page Modules

- **Work** – Grid of case studies with detail cards sourced from `src/lib/constants/pages/work.ts`
- **Experience** – Timeline-inspired list that reuses shared item components
- **Contact** – Structured list of channels, embedded map card, and CTA copy

## Architecture Overview

```
src/
├── app/                       # Next.js App Router entry points
├── components/
│   └── page/
│       ├── work/              # Work section and cards
│       ├── experience/        # Experience list + item primitives
│       └── contact/           # Contact hero, list, and blocks
└── lib/
    ├── constants/             # Content sources for each page
    └── theme/                 # Tailwind typography generator
```

- `components/page/*` hold presentation logic for each section
- `lib/constants/*` centralizes data for easy editing without touching React code
- `lib/theme/generate-typography.js` builds the typography utilities consumed by Tailwind

## Getting Started

Install dependencies and generate typography utilities:

```bash
npm install
npm run generate:utilities
```

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site. Changes under `src` hot-reload automatically.

## Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the Next.js dev server with Turbopack |
| `npm run build` | Create an optimized production build        |
| `npm run start` | Run the production server                   |
| `npm run lint`  | Lint the project with ESLint                |

## Deployment

Deploy via [Vercel](https://vercel.com) or any platform that supports Next.js 16. Ensure that the `prebuild` script (typography generation) runs before `next build`.
