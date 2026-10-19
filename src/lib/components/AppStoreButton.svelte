<!-- "Download on the App Store", as a black capsule like Apple's badge. -->
<script lang="ts">
	import IconApple from '$lib/icons/IconApple.svelte';
	import { SITE } from '$lib/site';

	let { light = false }: { light?: boolean } = $props();
</script>

<a
	href={SITE.appStoreUrl}
	class={[
		'inline-flex items-center gap-3 rounded-full py-3 pr-7 pl-5 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4',
		light
			? 'bg-white text-ink shadow-black/15 focus-visible:outline-white'
			: 'bg-ink text-white shadow-ink/25 focus-visible:outline-brand'
	]}
	rel="noopener"
>
	<IconApple />
	<span class="flex flex-col leading-tight">
		<span class="text-xs font-medium opacity-80">Download on the</span>
		<span class="font-display text-xl font-black">App Store</span>
	</span>
</a>
