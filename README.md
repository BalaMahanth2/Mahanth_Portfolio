# Mahanth — DevOps Engineer Portfolio

A modern, premium portfolio site built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Dark-mode, glassmorphism, neon glows, terminal aesthetics — and deploy-ready for Vercel.

> Aspiring DevOps Engineer · Python Automation Developer · Pipeline Developer

---

## Features

- Animated terminal-style hero with typing roles
- Glowing name with gradient animation
- Glassmorphism cards with neon hover glow
- Animated grid background, floating DevOps icons, and drifting particles
- Sticky animated navbar + scroll-progress indicator
- Skills section with animated progress bars
- Premium project cards with tech-stack chips
- Vertical animated DevOps journey timeline
- GitHub stats widgets (contributions, streak, top languages)
- Contact form (mailto-based — no backend required)
- Fully responsive, accessible, SEO-optimized
- Dark mode by default

## Tech Stack

| Layer       | Tools                                              |
| ----------- | -------------------------------------------------- |
| Framework   | Next.js 14 (App Router), React 18                  |
| Styling     | Tailwind CSS, custom CSS variables                 |
| Animation   | Framer Motion                                      |
| Icons       | Lucide React, React Icons                          |
| Fonts       | Inter, JetBrains Mono (Google Fonts)               |
| Deployment  | Vercel                                             |

## Project Structure

```
Mahanth_portfolio/
├── app/
│   ├── globals.css         # Tailwind + custom styles (terminal, glass, neon)
│   ├── layout.jsx          # Root layout + metadata + navbar/footer
│   └── page.jsx            # Home page assembling all sections
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   ├── Background.jsx      # Grid + gradient blobs + particles
│   ├── FloatingIcons.jsx   # DevOps icons drifting in hero
│   ├── TerminalBlock.jsx   # Typewriter terminal component
│   ├── SectionTitle.jsx    # Reusable section heading
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Timeline.jsx
│   ├── Certifications.jsx
│   ├── GitHubStats.jsx
│   └── Contact.jsx
├── lib/
│   └── data.js             # ALL portfolio data — edit here
├── public/
│   ├── favicon.svg
│   └── resume.txt          # Replace with resume.pdf
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site hot-reloads on edits.

### 3. Build for production

```bash
npm run build
npm start
```

## Customize Your Content

**All copy lives in [`lib/data.js`](lib/data.js)** — name, email, GitHub username, skills, projects, experience, timeline, certifications. Update that one file and the whole site updates.

Key fields:

- `profile.name`, `profile.email`, `profile.github`, `profile.linkedin`
- `profile.resume` — link to your resume PDF (place at `public/resume.pdf`)
- `profile.roles` — array of titles for the hero typewriter
- `skills` — categories + per-skill proficiency level (0–100)
- `projects` — title, description, tech stack, GitHub URL, demo URL
- `experience` — company, role, bullets
- `timeline` — your learning journey milestones
- `certifications` — credential cards
- `githubUsername` — used by the GitHub stats widgets

### Add Your Resume

1. Drop your file at `public/resume.pdf`.
2. Delete `public/resume.txt`.
3. The Hero and Contact "Download Resume" buttons will serve it.

### Change the Color Theme

Edit the gradient stops in `tailwind.config.js` under `colors.neon` and the gradient utilities in `app/globals.css` (`.neon-text`, `.btn-primary`).

## Deploy to Vercel

### Option A: GitHub + Vercel UI (recommended)

1. Push this repo to GitHub.
2. Visit [vercel.com/new](https://vercel.com/new).
3. Import the repository — Vercel auto-detects Next.js.
4. Click **Deploy**.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel            # first time — links the project
vercel --prod     # deploy production build
```

Your site will be live at `https://<your-project>.vercel.app` (and any custom domain you attach).

## SEO & Performance Notes

- Metadata and OpenGraph tags are set in `app/layout.jsx` — update the `metadataBase` URL to your final Vercel domain.
- Images use Next.js `Image` patterns where appropriate; remote patterns for the GitHub stats widgets are whitelisted in `next.config.mjs`.
- Fonts are loaded from Google Fonts via `<link>` with `preconnect` — swap to `next/font` if you want zero external font requests.

## License

MIT — free to fork and adapt for your own portfolio.

---

Built with care to look premium and recruiter-friendly. If it lands you the role, drop me a line. 🚀
