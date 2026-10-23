<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<!--
	Icons for every browser and the home screen, at fixed addresses in static/ (the manifest names its icons by path,
	and browsers and search engines also ask for /favicon.ico). Titles, descriptions and previews come from each page
	(Seo).
-->
<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Yupdo" />
	<meta name="application-name" content="Yupdo" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

{@render children?.()}
