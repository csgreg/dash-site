<script lang="ts">
	import Logo from './Logo.svelte';
	import { SITE } from '$lib/site';
</script>

<footer class="border-t border-ink/5 bg-white">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:justify-between md:text-left"
	>
		<div class="flex flex-col items-center gap-2 md:items-start">
			<Logo size={28} />
			<p class="text-sm text-muted">Shared lists and family chores for iPhone.</p>
		</div>
		<nav
			aria-label="Footer"
			class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
		>
			<a href={SITE.appStoreUrl} rel="noopener" class="text-muted hover:text-ink"
				>Yupdo on the App Store</a
			>
			<a href="/privacy" class="text-muted hover:text-ink">Privacy Policy</a>
			<a
				href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
				rel="noopener"
				class="text-muted hover:text-ink">Terms of Use</a
			>
			<a href={`mailto:${SITE.email}`} class="text-muted hover:text-ink">Contact</a>
		</nav>
		<p class="text-sm text-muted">© 2026 Yupdo</p>
	</div>
</footer>
