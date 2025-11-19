<script lang="ts">
	import '../app.css';
	import manifest from '$lib/assets/site.webmanifest';
	import svgFavicon from '$lib/assets/favicon.svg';
	import pngFavicon from '$lib/assets/favicon-96x96.png';
	import icoFavicon from '$lib/assets/favicon.ico';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={pngFavicon} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={svgFavicon} />
	<link rel="shortcut icon" href={icoFavicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<meta name="apple-mobile-web-app-title" content="Dash" />
	<link rel="manifest" href={manifest} />
</svelte:head>

{@render children?.()}
