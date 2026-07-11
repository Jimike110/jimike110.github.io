# JIMIKE Studio Website

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

Open `src/content.ts`. It contains the studio details, contact links, projects, services and principles used throughout the site.

Visual styles live in `src/styles.css`. Page structure and components live in `src/App.tsx`.

## Build and deploy

```bash
npm run build
```

Deploy the generated `dist` directory, or connect this folder directly to Vercel/Netlify using `npm run build` and `dist` as the output directory.

## Before launch

- Replace the Nevaria project link with its final public concept URL.
- Confirm the email and social links in `src/content.ts`.
- Add verified testimonials only when received from real clients.
- Add analytics and a custom domain after deployment.
