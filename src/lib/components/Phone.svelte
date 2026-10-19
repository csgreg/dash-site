<!--
	A screen of the app in an iPhone frame. The screens are 780 x 1696 (design/web in the app's repo). Give `src` for
	one screen, or children to fill the screen yourself (the feature story's screens that cross-fade).
-->
<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		src?: string;
		alt?: string;
		width?: number;
		eager?: boolean;
		class?: string;
		children?: Snippet;
	};
	let {
		src,
		alt = '',
		width = 280,
		eager = false,
		class: className = '',
		children
	}: Props = $props();
</script>

<div
	class={[
		'relative rounded-[2.75rem] bg-[#101016] p-[9px] shadow-2xl ring-1 shadow-ink/25 ring-black/10',
		className
	]}
	style:width={`${width}px`}
>
	<div class="relative aspect-[780/1696] overflow-hidden rounded-[2.2rem] bg-page">
		{#if src}
			<img
				{src}
				{alt}
				width="780"
				height="1696"
				class="block h-full w-full"
				loading={eager ? 'eager' : 'lazy'}
				fetchpriority={eager ? 'high' : 'auto'}
				decoding="async"
			/>
		{:else}
			{@render children?.()}
		{/if}
	</div>
</div>
