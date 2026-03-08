# Blackout Network

A full Next.js preparedness website focused on emergency, survival, off-grid, and blackout gear.

## Included
- Homepage
- Best gear hub
- Comparisons hub
- Guides hub
- Dynamic article pages
- Category pages
- Contact page
- Newsletter signup section
- Product comparison tables
- SEO-friendly metadata helpers

## Quick Start

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Content Editing

All site content lives in:

- `lib/site-data.js`

You can edit products, guides, comparisons, featured picks, and categories there.

## Product Links

Placeholder product links are included in `lib/site-data.js`. Replace them with your preferred destination URLs when you are ready to publish.

## Contact / Newsletter APIs

Current API routes return success responses and can be connected to your preferred email provider:
- `app/api/contact/route.js`
- `app/api/newsletter/route.js`

Wire them to Resend, MailerLite, ConvertKit, or your preferred provider.

## Deploy

Recommended:
- Vercel

## Notes

This build avoids database dependencies so you can launch quickly and start publishing content.
