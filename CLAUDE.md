# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Solvfun Web is the landing page for Solvfun App — a Solana self-hosted wallet focused on Meme coin trading. The site showcases app features, security (self-custody), and drives downloads.

## Repository Structure

```
solvfun-web/
├── src/              ← Next.js App Router 页面和组件
├── public/           ← 静态资源
├── CLAUDE.md
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion + Magic UI + React Bits
- **Package Manager**: bun (NOT npm or yarn)
- **Deployment**: Vercel

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server
bun run build        # Production build
bun run lint         # Run linter
```

## Typography System

Three font families with strict role separation:

| Token | Font | Role |
|-------|------|------|
| `font-brand` | Space Grotesk | Headings, titles, token names, hero text (600/700) |
| `font-ui` | Satoshi | Body text, utility numbers, metadata, labels (400/500/700) |
| `font-price` | Manrope | Token prices and portfolio totals only (500/600) |

**Key rules:**
- Space Grotesk: headings only, never in body text or dense metadata rows
- Manrope: price values only, never for non-monetary numbers
- Satoshi: carries the workload for all dense UI and non-price numbers
- In data-dense rows: token name = Space Grotesk, metadata = Satoshi, price = Manrope
- Price numbers use `font-variant-numeric: lining-nums tabular-nums`

## Page Structure

Landing page sections: Hero → Features (self-custody, meme trading, speed, security) → App Screenshots → How It Works (3-step) → Security Explanation → Download CTA → Footer

Additional pages: `/privacy`, `/terms`, optionally `/download`

## Design Direction

- **Theme**: Dark, tech-forward, Web3 crypto aesthetic
- **References**: Phantom (elegant simplicity), Jupiter (Solana ecosystem, vibrant)
- **Tone**: Professional crypto meets Meme culture energy
- **Color**: 70-20-10 rule, high-contrast CTAs, gradient meshes over solid backgrounds
- **Motion**: Orchestrated page-load animations, scroll-triggered sections, 200-400ms durations
- **Mobile-first**: Hero centers, grids collapse to single column

