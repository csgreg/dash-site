<!--
	Everything a page tells search engines and link previews: its title and description, its one canonical address,
	the picture a shared link shows, whether it should be in search at all, structured data, and Safari's banner
	that opens the app (or the App Store) on an iPhone.
-->
<script lang="ts">
	import { SITE, absolute } from '$lib/site';

	type Props = {
		title: string;
		description: string;
		/** The page's path, for its canonical address. */
		path: string;
		/** Keeps the page out of search (an invite link), while its links are still followed. */
		noindex?: boolean;
		/** A link the app opens from Safari's banner when it is installed (an invite). */
		appArgument?: string;
		/** schema.org objects, each written as its own JSON-LD block. */
		jsonLd?: Record<string, unknown>[];
	};

	let { title, description, path, noindex = false, appArgument, jsonLd = [] }: Props = $props();

	const url = $derived(absolute(path));
	const image = absolute(SITE.ogImage);
	// `<` is escaped so the data can never close the script tag it sits in.
	const ld = (data: Record<string, unknown>) =>
		`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</` +
		'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, follow" />
	{:else}
		<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
		<link rel="canonical" href={url} />
	{/if}

	<meta
		name="apple-itunes-app"
		content={`app-id=${SITE.appStoreId}${appArgument ? `, app-argument=${appArgument}` : ''}`}
	/>

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={SITE.ogImageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={SITE.ogImageAlt} />

	{#each jsonLd as data, index (index)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own data, escaped above -->
		{@html ld(data)}
	{/each}
</svelte:head>
