import { SITE } from '$lib/site';

// The pages search engines should know about (invites are left out on purpose: there is one per list).
const pages = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/privacy', changefreq: 'yearly', priority: '0.3' }
];

export const prerender = true;

export const GET = () => {
	const today = new Date().toISOString().slice(0, 10);
	const urls = pages
		.map(
			({ path, changefreq, priority }) =>
				`<url><loc>${new URL(path, SITE.url).href}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
		)
		.join('');
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
