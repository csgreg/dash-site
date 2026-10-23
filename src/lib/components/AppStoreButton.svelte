<!-- The App Store, as a black capsule (white on a coloured band): the Apple logo and one word, no smaller line above. -->
<script lang="ts">
	import IconApple from '$lib/icons/IconApple.svelte';
	import { SITE } from '$lib/site';

	let { light = false }: { light?: boolean } = $props();
</script>

<a
	href={SITE.appStoreUrl}
	aria-label="Download Yupdo on the App Store"
	class={[
		'inline-flex items-center gap-2.5 rounded-full py-3.5 pr-7 pl-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4',
		light
			? 'bg-white text-ink shadow-black/15 focus-visible:outline-white'
			: 'bg-ink text-white shadow-ink/25 focus-visible:outline-brand'
	]}
	rel="noopener"
>
	<span class="-mt-1"><IconApple /></span>
	<span class="font-display text-xl leading-none font-black">App Store</span>
</a>
