# Aymen Kamel — Portfolio

Personal portfolio of **Aymen Kamel**, AI engineer and full-stack developer based in Sfax, Tunisia. It showcases applied computer-vision projects (SmartPlayAI / HeroScore, MÉMORA), technical expertise, education and contact details, in French and English.

## Features

- Bilingual interface (FR / EN) with a persistent language switch
- Editorial dark design with scroll-driven reveals and section progress navigation
- Case-study pages for flagship projects
- Responsive layout, from mobile to large desktop
- Downloadable resume modal and direct contact links

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript, Vite (SWC) |
| Styling | Tailwind CSS, shadcn/ui, Radix UI |
| Routing & data | React Router, TanStack Query |
| Hosting | Netlify (static build) |
| Optional backend | Firebase (Firestore rules, Cloud Functions) |

## Getting started

Requirements: **Node.js 20+** and npm.

```sh
git clone https://github.com/aymen-kamel/ay_portfolio.git
cd ay_portfolio
npm ci
npm run dev
```

The dev server runs on <http://localhost:8080>.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

### Environment variables

Copy `.env.example` to `.env` and fill in your own values. The file is git-ignored; never commit real credentials.

## Project structure

```
src/
  components/   Page sections (Hero, Projects, Skills, Experience, About, Contact…)
  components/ui shadcn/ui primitives
  context/      Language provider
  hooks/        Reusable hooks
  i18n/         FR / EN translations
  pages/        Route components
public/         Static assets
functions/      Firebase Cloud Functions (optional)
```

## Deployment

The site is a static Vite build: run `npm run build` and publish the `dist/` folder. On Netlify, use `npm run build` as the build command and `dist` as the publish directory, and add a redirect of all paths to `/index.html` for client-side routing.

## Contributing

This is a personal project, but issues and suggestions are welcome. Commits follow the [Conventional Commits](https://www.conventionalcommits.org/) style (`feat:`, `fix:`, `chore:`, `docs:`).

## Contact

- Email: <kamelaymen793@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/aymen-kamel-b135a3301/>
- GitHub: <https://github.com/aymen-kamel>
