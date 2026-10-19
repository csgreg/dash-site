<!--
	Where an invite link lands when the app is not installed (with the app, iOS opens the list in Yupdo straight
	away). Kept out of search: there is one per invite.
-->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import AppStoreButton from '$lib/components/AppStoreButton.svelte';
	import { absolute } from '$lib/site';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const path = $derived(`/join/${encodeURIComponent(data.listId)}`);
</script>

<Seo
	title="You're invited to a list on Yupdo"
	description="Someone shared a list with you on Yupdo. Get the app for iPhone to join it and tick things off together."
	{path}
	noindex
	appArgument={absolute(path)}
/>

<Header />

<main id="main" class="flex min-h-[70vh] items-center justify-center px-5 py-16">
	<div class="max-w-2xl text-center">
		<h1 class="text-5xl leading-tight sm:text-6xl">You're invited to a list</h1>
		<p class="mt-6 text-xl leading-relaxed text-muted">
			Someone shared a list with you on Yupdo. Get the app, then open this link again on your iPhone
			to join it.
		</p>
		<div class="mt-8 flex justify-center">
			<AppStoreButton />
		</div>
		<p class="mt-10 text-muted">
			Or, in Yupdo, tap Add, then Join with a code, and type this code:
		</p>
		<p
			class="mx-auto mt-3 inline-block rounded-2xl bg-page px-6 py-3 font-display text-3xl font-black tracking-widest text-ink select-all"
		>
			{data.listId}
		</p>
	</div>
</main>

<Footer />
