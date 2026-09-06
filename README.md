# Stephen Moran

Personal portfolio for Stephen Moran, a Frontend / Product Engineer based in Dublin.

[stephenmoran.dev](https://stephenmoran.dev)

## Tech

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Biome](https://biomejs.dev) for linting and formatting
- [Schibsted Grotesk](https://fonts.google.com/specimen/Schibsted+Grotesk) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), loaded via `next/font/google`

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Run Biome checks:

```bash
npm run lint
```

Run the TypeScript check:

```bash
npx tsc --noEmit
```

Create a production build:

```bash
npm run build
```

## Structure

- `src/app` — routing, root layout, global styles, and the favicon
- `src/components` — page sections (`Hero`, `Projects`, `ProjectRow`, `About`, `Footer`)
- `src/data` — project content (`projects.ts`)

## Deployment

Deployed with [Vercel](https://vercel.com).

Live at [stephenmoran.dev](https://stephenmoran.dev).
