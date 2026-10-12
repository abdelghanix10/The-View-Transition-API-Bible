# The View Transition

A cinematic portfolio website for a portrait photographer, built with Next.js and animated using GSAP. The project focuses on immersive transitions, scroll-based motion, and a minimalist editorial aesthetic.

## Features

- Modern App Router setup with Next.js
- Smooth scroll experiences with Lenis
- Character and line-based text animations with GSAP and SplitText
- Responsive portfolio layout for projects and info pages
- Optimized local image handling with Next.js Image
- Clean, dark editorial visual design

## Tech Stack

- Next.js 16
- React 19
- GSAP
- Lenis
- TypeScript

## Getting Started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Production Build

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Project Structure

- `src/app` — page routes and app layout
- `src/components` — reusable UI components
- `public` — static assets such as images
- `next.config.ts` — project configuration

## Notes

This project is tailored for portfolio-style storytelling and motion-driven page transitions. If you want to customize the content, update the pages under `src/app` and replace the local image assets in `public`.
