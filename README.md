# Sadra Madonna Lindsay — Next.js + Firebase site (static export)

A production-style marketing + storefront site built with **Next.js App Router** and **Firebase**, deployed as a **static export to GitHub Pages**. It supports browsing content (music, books, products), a cart experience that syncs to Firestore, and a checkout flow that records orders and emails confirmations.

- **Live site**: `https://sadramadonnalindsay.com/` (GitHub Pages with Custom Domain)

## Why I built this (for employers)

I wanted a portfolio project that feels like real work: a client-facing site with branding and content *plus* an e-commerce-ish flow that forces practical engineering decisions—auth, persistence, async UX, and deployment constraints—without hiding behind a tutorial template.

## What you can do

- **Browse**: Home, Books, Music, and Store sections (responsive UI with animation).
- **Auth**: Register / Sign in with **Firebase Authentication**.
- **Cart**:
  - Anonymous users get a **session cart** persisted to Firestore (`carts/{sessionId}`).
  - Signed-in users get a **user cart** persisted to Firestore (`users/{uid}/cart/current`).
  - On login, the session cart **migrates** into the user cart.
  - Cart state stays in sync via Firestore **real-time listeners** (`onSnapshot`).
- **Checkout** (signed-in users):
  - Creates an order in Firestore (`users/{uid}/orders`).
  - Sends an order confirmation email via **EmailJS**.

## Tech stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS (v4), `tailwind-merge`
- **UI/UX**: Framer Motion, React Icons, `react-hot-toast`
- **Backend services**: Firebase (Auth, Firestore, Storage)
- **Email**: EmailJS (client-side transactional email)
- **Deployment**: Static export (`output: 'export'`) + GitHub Pages / GitHub Actions

## Project structure (high level)

- `src/app/*`: Routes (Home, Books, Music, Store, Cart, Checkout, Sign in/Register, Profile)
- `src/context/*`: Global state (User + Cart)
- `src/lib/firebase.ts`: Firebase client initialization
- `src/services/emailService.ts`: EmailJS order confirmation
- `.github/workflows/nextjs.yml`: GitHub Pages build + deploy workflow

## Running locally

### Prereqs

- Node.js 20+
- npm (or your preferred package manager)

### Install + run

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Deploying (GitHub Pages)

This repo is configured for GitHub Pages with a static export:

- `next.config.ts` sets:
  - `output: 'export'`
  - `trailingSlash: true`
  - `images.unoptimized: true` (required for static export)
  - `basePath` / `assetPrefix` when `GITHUB_PAGES=true`

### Option A: GitHub Actions (recommended)

Push to `master`. The workflow in `.github/workflows/nextjs.yml` builds and publishes the `out/` directory to Pages.

### Option B: Manual deploy from your machine

```bash
npm run deploy
```

That runs a GitHub Pages build and publishes `out/` via `gh-pages`.

## Firebase + Firestore notes

- **Firestore rules**: see `DEPLOY_FIRESTORE_RULES.md` for deploying the included rules to your Firebase project.
- **Data model** (simplified):
  - `users/{uid}`
  - `users/{uid}/cart/current`
  - `users/{uid}/orders/{orderId}`
  - `carts/{sessionId}`
  - `mailingList/*`

## EmailJS notes

Order confirmation is sent from the checkout flow using EmailJS. Setup details and template variables are documented in `EMAILJS_SETUP.md`.

## What’s “production-like” here (and what isn’t)

- **Production-like**
  - Real-time persistence patterns (anonymous → authenticated migration)
  - Async UI states + failure paths (checkout processing + email status)
  - CI/CD deployment pipeline for a static-hosting target
  - Clear separation between UI, context/state, and service modules

- **Intentionally scoped / not implemented**
  - No payment processor integration (the checkout records an order + sends instructions).
  - Product/book catalogs are currently **sample data** in the route files (easy to swap for Firestore later).
  - No server-side API routes (by design—GitHub Pages static export constraint).

## References (README guidance)

I used GitHub’s README recommendations and a practical template checklist while writing this:

- GitHub Docs: “About the repository README file” (`https://docs.github.com/articles/about-readmes`)
- freeCodeCamp: “How to Write a Good README File for Your GitHub Project” (`https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/`)
