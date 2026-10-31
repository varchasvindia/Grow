# varchasv Website

Premium, responsive varchasv India marketing website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Customize
- `src/lib/data.ts`: navigation, services, projects, stats and testimonials.
- `src/app/globals.css`: brand colors, layout, responsive styling and visual effects.
- `src/components/layout/Brand.tsx`: reusable varchasv logo lockup.
- `public/images/`: add your own optimized images and update image paths in `data.ts`.

## Contact form
`POST /api/contact` validates name, email, phone and message with Zod. The starter endpoint logs valid enquiries on the server and returns a success response. Before production, connect an email provider or CRM in `src/app/api/contact/route.ts`; server logs alone are not a durable lead-management system.

## Notes
The supplied reference is a visual direction. Replace sample portfolio names, testimonials, contact details and performance figures with verified varchasv information before publishing. The external Unsplash image URLs are demo imagery; download licensed brand photography into `public/images/` for production.
