# www.justdashapp.com

The website of Yupdo (formerly Dash), the shared list app for iPhone: the landing page, the privacy policy, the page
an invite link opens when the app is not installed (`/join/<code>`), and the file that lets those links open the app
(`/.well-known/apple-app-site-association`). SvelteKit and Tailwind, deployed on Vercel.

## Working on it

```sh
bun install        # or npm install
bun run dev        # http://localhost:5173
bun run check      # types and Svelte
bun run build      # needs Node 18, 20 or 22 (the Vercel adapter refuses others)
```

## Where things are

- `src/lib/site.ts`: the name, the site's address (`https://www.justdashapp.com`; the bare domain redirects there),
  the App Store link and the contact email. Change them here only.
- `src/lib/components/Seo.svelte`: every page's title, description, canonical address, link preview, Safari's app
  banner and structured data. Each page passes its own.
- `src/routes/+page.svelte`: the landing page. Its FAQ feeds both the page and the FAQ structured data.
- `src/routes/privacy/+page.svelte`: the same policy as in the app (Profile → Privacy Policy); change both together.
- `static/screens/*.webp` and `static/og-image.png` are made from app captures by `design/web/make_web_assets.py` in
  the app's repository (`python3 design/web/make_web_assets.py design/web/raw ../dash-site/static`).
- `static/`: the icons and manifest at fixed addresses, `robots.txt`. The sitemap is `src/routes/sitemap.xml`.

## Search

- Pages are prerendered to plain HTML. The invite pages are made on request and say `noindex`.
- Every page has one canonical address on `www`. In Vercel, make the bare domain's redirect to `www` permanent (308)
  rather than temporary (307).
- Submit `https://www.justdashapp.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Structured data: MobileApplication, Organization, WebSite and FAQPage. Do not add ratings until the App Store shows
  real ones.
