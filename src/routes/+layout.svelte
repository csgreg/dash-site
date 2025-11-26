<script lang="ts">
	import '../app.css';
	import manifest from '$lib/assets/site.webmanifest';
	import svgFavicon from '$lib/assets/favicon.svg';
	import pngFavicon from '$lib/assets/favicon-96x96.png';
	import icoFavicon from '$lib/assets/favicon.ico';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';
	import ogImage from '$lib/assets/og-image.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={pngFavicon} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={svgFavicon} />
	<link rel="shortcut icon" href={icoFavicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<meta name="apple-mobile-web-app-title" content="Dash" />
	<link rel="manifest" href={manifest} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<title>Dash – Collaborative List Manager App for iOS | Share & Manage Lists Together</title>
	<meta
		name="description"
		content="Dash is the ultimate collaborative list manager for iPhone. Create, share, and manage lists together in real-time with family, friends, and teams. Download now on the App Store."
	/>
	<meta
		name="keywords"
		content="iOS list app, collaborative lists, shared to-do lists, iPhone list manager, shared shopping list, team task manager, list sharing app"
	/>
	<meta name="author" content="Dash" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://justdashapp.com/" />
	<meta property="og:title" content="Dash – Collaborative List Manager App for iOS" />
	<meta
		property="og:description"
		content="Create, share, and manage lists together in real-time. Perfect for shopping, tasks, and team collaboration."
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://justdashapp.app/" />
	<meta name="twitter:title" content="Dash – Collaborative List Manager App for iOS" />
	<meta
		name="twitter:description"
		content="Create, share, and manage lists together in real-time. Perfect for shopping, tasks, and team collaboration."
	/>
	<meta name="twitter:image" content={ogImage} />

	<link rel="canonical" href="https://justdashapp.com/" />
</svelte:head>

{@render children?.()}
