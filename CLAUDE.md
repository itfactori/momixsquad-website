# CLAUDE.md — Momix Squad Website

## Project Overview

Momix Squad is a community website for mothers at every stage of parenthood. It provides resources across child development, self-care, hobbies, and nutrition. The site targets moms-to-be through "super moms" (parents of adult children) and includes Islamic/spiritual guidance content with interactive self-assessment surveys.

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | **Nuxt 4.2.1** (Vue 3, TypeScript)     |
| UI Library   | **@nuxt/ui 4.2.1** (Nuxt UI)           |
| CSS          | **Tailwind CSS 4** (utility-first)      |
| Animations   | **motion-v 1.7.3** (Vue motion library) |
| Content      | **@nuxt/content 3.8.2** (YAML/MD collections) |
| Images       | **@nuxt/image 2.x**                    |
| OG Images    | **nuxt-og-image 5.x**                  |
| Utilities    | **@vueuse/nuxt 13.x**                  |
| Email        | **resend 6.x** (Resend API for contact form) |
| Icons        | `@iconify-json/heroicons`, `@iconify-json/lucide`, `@iconify-json/simple-icons` |
| Linting      | ESLint 9 + Prettier                    |
| Deployment   | **Netlify** (static SSG)               |

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (SSG by default)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format with Prettier
npm run format:check # Check formatting
npm run typecheck    # Run vue-tsc type checking
npm run postinstall  # Runs `nuxt prepare` (auto after npm install)
```

## Project Structure

```
momixsquad-website/
├── app/
│   ├── app.config.ts          # UI colors, footer, social links, global settings
│   ├── app.vue                # Root app component
│   ├── error.vue              # Error page
│   ├── assets/css/main.css    # Global styles, custom fonts, animations, mesh-bg
│   ├── components/
│   │   ├── AppHeader.vue      # Site header with navigation
│   │   ├── AppFooter.vue      # Site footer with social links
│   │   ├── HeroSection.vue    # Reusable hero/banner section
│   │   ├── ContentCard.vue    # Content display card
│   │   ├── NavDropdown.vue    # Navigation dropdown menu
│   │   ├── SurveyForm.vue     # Reusable interactive survey/questionnaire component
│   │   ├── InteractivePlaceholder.vue  # Placeholder for upcoming features
│   │   └── icons/             # Custom SVG icon components
│   │       ├── MomsToBeIcon.vue
│   │       ├── NewMomsIcon.vue
│   │       ├── ToddlerMomsIcon.vue
│   │       ├── SchoolAgedMomsIcon.vue
│   │       ├── TeenMomsIcon.vue
│   │       ├── SuperMomsIcon.vue
│   │       └── mom-stages/    # Stage illustration images (jpg)
│   ├── layouts/
│   │   ├── default.vue        # Main layout with header/footer
│   │   └── coming-soon.vue    # Layout for placeholder/coming-soon pages
│   ├── pages/                 # File-based routing (see Routing below)
│   ├── plugins/
│   │   └── motion-fix.client.ts  # Client-side motion library fix
│   └── utils/
│       └── clipboard.ts       # Clipboard utility
├── content.config.ts          # @nuxt/content collection definitions (Zod schemas)
├── server/
│   └── api/
│       └── contact.post.ts    # POST /api/contact — sends email via Resend
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── robots.txt
│   ├── hero/                  # Hero section images
│   └── icons/                 # Icon assets
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.ts         # Tailwind theme extensions (colors, fonts, animations)
├── eslint.config.mjs          # ESLint flat config
├── netlify.toml               # Netlify build settings
├── .env.example               # Environment variable template
├── renovate.json              # Dependency update bot config
└── package.json
```

## Routing / Pages

All pages live in `app/pages/`. Nuxt file-based routing applies.

### Home
| Route   | File              |
| ------- | ----------------- |
| `/`     | `index.vue`       |
| `/home` | `home.vue`        |

### Development (child development stages)
| Route                          | File                          |
| ------------------------------ | ----------------------------- |
| `/development`                 | `development/index.vue`       |
| `/development/moms-to-be`     | `development/moms-to-be.vue`  |
| `/development/new-moms`       | `development/new-moms.vue`    |
| `/development/toddler-moms`   | `development/toddler-moms.vue`|
| `/development/school-aged-moms`| `development/school-aged-moms.vue` |
| `/development/teens-moms`     | `development/teens-moms.vue`  |
| `/development/super-moms`     | `development/super-moms.vue`  |
| `/development/questionnaires` | `development/questionnaires.vue` |
| `/development/quiz-activities`| `development/quiz-activities.vue` |

### Care
| Route                             | File                              |
| --------------------------------- | --------------------------------- |
| `/care/care`                      | `care/care.vue`                   |
| `/care/self-care`                 | `care/self-care.vue`              |
| `/care/mental-health`             | `care/mental-health.vue`          |
| `/care/mental-physical-health`    | `care/mental-physical-health.vue` |
| `/care/spiritual-wellness`        | `care/spiritual-wellness.vue`     |

### Hobbies
| Route                          | File                              |
| ------------------------------ | --------------------------------- |
| `/hobbies/hobbies`            | `hobbies/hobbies.vue`             |
| `/hobbies/creative`           | `hobbies/creative.vue`            |
| `/hobbies/skill-based`        | `hobbies/skill-based.vue`         |
| `/hobbies/social-community`   | `hobbies/social-community.vue`    |

### Other
| Route        | File             |
| ------------ | ---------------- |
| `/nutrition` | `nutrition.vue`  |
| `/contact`   | `contact.vue`    |

## Components

- **AppHeader** — Main navigation bar with logo and dropdown menus
- **AppFooter** — Footer with copyright, color mode toggle, and social links (configured in `app.config.ts`)
- **HeroSection** — Reusable page hero/banner with title, description, and optional CTA
- **ContentCard** — Card for displaying content items (articles, resources)
- **NavDropdown** — Dropdown navigation component for sub-sections
- **SurveyForm** — Reusable interactive survey component with Likert scales, du'a prompts, reflection boxes, scoring, and affirmations. Used on all development stage pages.
- **InteractivePlaceholder** — Placeholder component for features not yet built
- **Icon components** (`icons/`) — Custom SVG icons for each mom stage (MomsToBeIcon, NewMomsIcon, etc.)

## Surveys

Each development stage page includes an interactive self-assessment survey using the `SurveyForm` component:

| Page               | Survey Title                                        | Questions | Max Score |
| ------------------ | --------------------------------------------------- | --------- | --------- |
| `moms-to-be`       | Motherhood Readiness Survey                         | 27        | 108       |
| `new-moms`         | How Balanced Is My Motherhood? — New Moms Edition   | 15        | 60        |
| `toddler-moms`     | Toddler Mom Check-In                                | 16        | 64        |
| `school-aged-moms` | How Balanced Is My Motherhood? — School-Aged Edition | 16        | 64        |
| `super-moms`       | How Balanced Is My Motherhood? — Empty Nest Edition  | 21        | 84        |

Survey data is defined as a const in each page's `<script setup>` and passed as props to `<SurveyForm>`. Surveys include Islamic du'a prompts, reflection text boxes, humor sections, score-based interpretation, and daily affirmations.

## Layouts

- **`default.vue`** — Standard layout wrapping content with `AppHeader` and `AppFooter`
- **`coming-soon.vue`** — Minimal layout for placeholder/in-progress pages

## Styling Conventions

### Approach
- **Tailwind utility-first** — Use Tailwind classes in templates. Avoid custom CSS except for global styles in `main.css`.
- Dark mode via `class` strategy (set in `tailwind.config.ts` as `darkMode: 'class'`).

### Color Palette
Configured in both `tailwind.config.ts` (theme extensions) and `app.config.ts` (Nuxt UI):
- **Primary:** `pink` (brand color, `#ec4899` at 500)
- **Secondary:** `purple` (`#a855f7` at 500)
- **Neutral:** `stone`
- **Custom:** `deep-purple` scale (dark backgrounds matching logo, `#1a0d2e` at 950)

### Fonts
Loaded from Google Fonts via `<link>` in `nuxt.config.ts`:
- **Body:** DM Sans (`font-sans`)
- **Headings/Display:** Playfair Display (`font-display`, `font-serif`)
- **Mono:** JetBrains Mono (`font-mono`)

All `<h1>`–`<h6>` elements automatically use Playfair Display via global CSS rule in `main.css`.

### Custom Animations
Defined in `tailwind.config.ts` and `main.css`:
- `animate-fade-in`, `animate-fade-in-up`, `animate-fade-in-down`
- `animate-slide-in-left`, `animate-slide-in-right`
- `animate-scale-in`, `animate-bounce-subtle`
- `animate-float`, `animate-glow`, `animate-shimmer`, `animate-pulse-soft`

### Utilities
- `.mesh-bg` — Radial gradient mesh background (light/dark variants) defined in `main.css`
- `.font-display` — Playfair Display font

### Transitions
- Page transitions: `page-enter-active` / `page-leave-active` (slide up/down with fade)
- Layout transitions: `layout-enter-active` / `layout-leave-active` (fade)
- Configured in `nuxt.config.ts` under `app.pageTransition` and `app.layoutTransition`

## Content System

Uses `@nuxt/content` v3 with typed collections defined in `content.config.ts`.

### Collections

| Collection  | Type   | Source                | Description                      |
| ----------- | ------ | --------------------- | -------------------------------- |
| `index`     | `page` | `index.yml`           | Homepage (hero, about, experience, testimonials, FAQ) |
| `projects`  | `data` | `projects/*.yml`      | Project entries (title, image, URL, tags, date) |
| `blog`      | `page` | `blog/*.md`           | Blog posts (author, date, image, read time) |
| `pages`     | `page` | `projects.yml`, `blog.yml` | Listing pages with button links |
| `speaking`  | `page` | `speaking.yml`        | Speaking events (category, date, location) |
| `about`     | `page` | `about.yml`           | About page content and images    |

Schemas use Zod with reusable builders: `createBaseSchema()`, `createButtonSchema()`, `createImageSchema()`, `createAuthorSchema()`, `createTestimonialSchema()`.

> **Note:** The `content/` directory does not currently exist in the repo. Content YAML/MD files need to be created to populate these collections.

## App Configuration

`app/app.config.ts` defines runtime app config:

```ts
{
  global: {
    picture: { dark, light, alt },
    meetingLink: '/contact',
    email: 'info@momixsquad.com',
    available: true
  },
  ui: {
    colors: { primary: 'pink', secondary: 'purple', neutral: 'stone', ... },
    button: { defaultVariants: { color: 'primary' } },
    card: { defaultVariants: { variant: 'soft' } },
    pageHero: { slots: { container, title, description } }
  },
  footer: {
    credits: '(c) {year} Momix Squad. All rights reserved.',
    colorMode: true,
    links: [ Instagram, Facebook, Twitter ]
  }
}
```

## Server API

### `POST /api/contact`
**File:** `server/api/contact.post.ts`

Sends contact form submissions via **Resend** email API.

Accepts JSON body:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "subject": "string (required)",
  "category": "string (optional)",
  "message": "string (required)"
}
```

Returns `400` if required fields are missing, `500` if `RESEND_API_KEY` is not set or email fails.

Emails are sent to the address in `CONTACT_EMAIL` (defaults to `info@momixsquad.com`) with `replyTo` set to the submitter's email.

> **Note:** For production, verify a domain with Resend to send from your own domain. Until then, emails are sent from `onboarding@resend.dev`.

## Environment Variables

| Variable              | Purpose                           | Default                |
| --------------------- | --------------------------------- | ---------------------- |
| `RESEND_API_KEY`      | Resend API key for email delivery | — (required)           |
| `CONTACT_EMAIL`       | Recipient for contact form emails | `info@momixsquad.com`  |
| `NUXT_PUBLIC_SITE_URL`| Public site URL (for OG images)   | —                      |
| `NITRO_PRESET`        | Nitro deployment preset           | `static`               |

## Deployment

- **Platform:** Netlify
- **Build command:** `npm run build`
- **Publish directory:** `.output/public`
- **Node version:** 20
- **Preset:** Static SSG (`NITRO_PRESET=static`)
- Prerendering starts at `/` and crawls all links (`crawlLinks: true`)
- Config in `netlify.toml`
- Set `RESEND_API_KEY` in Netlify environment variables for contact form to work

## Coding Conventions & Best Practices

### Vue & TypeScript
- **Vue SFCs** use `<script setup lang="ts">` with Composition API
- **Nuxt auto-imports** — No manual imports needed for Vue/Nuxt composables, components, or utilities
- **TypeScript** — Strict mode via `vue-tsc`; project uses `tsconfig.json` extending `.nuxt/tsconfig.json`
- **Component naming** — PascalCase filenames, auto-registered by Nuxt
- **Nested components** — Icon components in `components/icons/` are auto-imported as `<IconsComponentName>`

### Code Cleanliness
- **No inline comments** — Code should be self-documenting through clear naming
- **No magic numbers** — Extract constants with descriptive names
- **No dead code** — Remove unused variables, imports, and components completely
- **No backwards-compatibility shims** — Delete unused code rather than commenting it out
- **Single responsibility** — Each component and function should do one thing well

### Patterns
- **Reusable components** — Extract shared UI patterns into components (e.g., `SurveyForm`, `ContentCard`, `HeroSection`)
- **Data-driven rendering** — Define page-specific data as typed consts in `<script setup>`, pass as props to components
- **Composition over duplication** — Prefer composing components with props over copy-pasting markup
- **Icons** use Iconify class names: `i-heroicons-*`, `i-lucide-*`, `i-simple-icons-*`

### HTML & Accessibility
- **No nested `<a>` tags** — Invalid HTML; use `<span>` or `<div>` for nested clickable content
- **Semantic HTML** — Use proper heading hierarchy, `<section>`, `<nav>`, `<main>`
- **ARIA labels** — Add `aria-label` to icon-only links and buttons
- **External links** — Always include `target="_blank"` and `rel="noopener"` for external URLs

### Styling
- **Tailwind utility-first** — Avoid custom CSS classes; use Tailwind utilities in templates
- **Responsive design** — Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Dark mode** — Always provide dark mode variants using `dark:` prefix
- **Consistent spacing** — Use Tailwind's spacing scale consistently

### Error Handling
- **Server endpoints** — Use `createError()` with appropriate status codes
- **Form submissions** — Show user-friendly error messages, not raw error objects
- **API calls** — Always wrap `$fetch` in try/catch blocks

## Known TODOs / Incomplete Areas

1. **Content directory** — The `content/` directory with YAML/MD source files for `@nuxt/content` collections does not exist yet. Content needs to be authored.
2. **Motion fix** — A client plugin (`plugins/motion-fix.client.ts`) and CSS overrides in `main.css` force visibility on motion elements, suggesting motion-v hydration/SSR issues that may need proper resolution.
3. **Resend domain verification** — Contact form currently sends from `onboarding@resend.dev`. Verify a domain with Resend to send from a branded address.
4. **Newsletter subscription** — The newsletter form on the contact page is a placeholder with no backend integration.
