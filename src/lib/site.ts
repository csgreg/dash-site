// Everything the pages say about the app in one place: its name, where the site lives, and where to get it.

export const SITE = {
	name: 'Yupdo',
	/** The address people reach (the bare domain redirects here), so links, the sitemap and canonicals all use it. */
	url: 'https://www.justdashapp.com',
	appStoreId: '6755497276',
	appStoreUrl: 'https://apps.apple.com/app/id6755497276',
	email: 'support@justdashapp.com',
	/** The picture a shared link shows (made by design/web/make_web_assets.py in the app's repo). */
	ogImage: '/og-image.png',
	ogImageAlt:
		'Yupdo: shared lists, done together. A shared list on an iPhone, with Leo saying yes to a task.'
} as const;

export const absolute = (path: string) => new URL(path, SITE.url).href;
