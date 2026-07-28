# Bariyan Group Website

Complete production-ready corporate website for Bariyan Group — an Indian automotive and industrial lubrication solutions business established in 2017.

## Tech Stack

- Next.js 14 (App Router, Static Export)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Build settings will auto-detect Next.js
4. Add environment variables from `.env.example`

### Static Hosting
Upload the contents of the `out/` directory to any static host (Netlify, Cloudflare Pages, etc.).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `CONTACT_EMAIL` — Form submission receiving email
- `WHATSAPP_NUMBER` — WhatsApp business number
- `COMPANY_NAME`, `COMPANY_PHONE`, `COMPANY_EMAIL` — Company info

## Domain Configuration

For `bariyangroup.com`:
1. Configure DNS A record pointing to your host
2. Add domain in hosting dashboard
3. Enable SSL/HTTPS

## Adding Products

Edit `data/products.ts`:
- Add new product objects following the `Product` interface
- Include slug, category, description, applications, features, benefits, standards, packaging
- Add related product slugs for cross-linking

## Updating Company Info

Edit `data/site.ts` to update:
- Phone, email, address
- Company descriptions
- SEO keywords

## Form Integration

Forms currently show a success state. To enable live delivery:
1. Connect to Email API (Resend, SendGrid, etc.)
2. Or use serverless functions (Vercel, Netlify Functions)
3. Update form handlers in page components

## Information Needed from Bariyan Group

- Official logo files (SVG/PNG)
- Actual product packaging photographs
- CIN/GST numbers (if publicly displayed)
- Official social media profiles (if any)
- Confirmed certifications held by the company
- Form backend service preference
