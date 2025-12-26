<script lang="ts">
	import IconApple from '$lib/icons/IconApple.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Join List - Dash</title>
	<meta name="description" content="Download Dash to join and collaborate on shared lists" />
	<meta property="og:url" content={`https://justdashapp.com/join/${data.listId}`} />
	<meta property="og:title" content="Join a List in Dash" />
	<meta
		property="og:description"
		content="Join a shared list in Dash and collaborate with others in real-time."
	/>
	<meta name="twitter:url" content={`https://justdashapp.com/join/${data.listId}`} />
	<meta name="twitter:title" content="Join a List in Dash" />
	<meta
		name="twitter:description"
		content="Join a shared list in Dash and collaborate with others in real-time."
	/>
</svelte:head>

<Header />

<main class="flex min-h-screen flex-col items-center justify-center px-6 py-20">
	<div class="max-w-2xl text-center">
		<h1 class="mb-6 text-5xl leading-tight font-extrabold text-gray-900 md:text-6xl">
			You've been invited to join a list
		</h1>
		<p class="mb-8 text-xl leading-relaxed text-gray-600">
			Download Dash to collaborate on lists with your friends, family, and colleagues. Keep everyone
			on the same page with real-time updates and seamless sharing.
		</p>
		<a
			href="https://apps.apple.com/app/apple-store/id6755497276"
			class="inline-flex items-center gap-2 rounded-4xl bg-secondary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:-translate-y-0.5 hover:bg-secondary-dark hover:shadow-xl hover:shadow-secondary/40"
			target="_blank"
			rel="noopener"
		>
			<IconApple />
			Download for iOS
		</a>
	</div>
</main>

<Footer />
