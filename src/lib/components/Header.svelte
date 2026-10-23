<script lang="ts">
	import Logo from './Logo.svelte';
	import { SITE } from '$lib/site';
</script>

<a
	href="#main"
	class="sr-only z-50 rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>Skip to content</a
>
<header class="sticky top-0 z-40 border-b border-ink/5 bg-white/85 backdrop-blur-lg">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
		<a
			href="/"
			aria-label="Yupdo home"
			class="rounded-lg focus-visible:outline-4 focus-visible:outline-brand"
		>
			<Logo />
		</a>
		<nav aria-label="Main" class="flex items-center gap-1 sm:gap-3">
			<a
				href="/#features"
				class="hidden rounded-full px-3 py-2 font-semibold text-muted hover:text-ink sm:block"
				>Features</a
			>
			<a
				href="/#faq"
				class="hidden rounded-full px-3 py-2 font-semibold text-muted hover:text-ink sm:block"
				>FAQ</a
			>
			<a
				href={SITE.appStoreUrl}
				rel="noopener"
				class="rounded-full bg-brand px-5 py-2.5 font-display text-[17px] font-black text-white shadow-md shadow-brand/30 transition hover:bg-brand-dark"
				>Get the app</a
			>
		</nav>
	</div>
</header>
