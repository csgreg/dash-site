<!-- A screen of the app in an iPhone frame. The screens are 780 x 1696 (design/web in the app's repo). -->
<script lang="ts">
	type Props = { src: string; alt: string; width?: number; eager?: boolean; class?: string };
	let { src, alt, width = 280, eager = false, class: className = '' }: Props = $props();
</script>

<div
	class={[
		'relative rounded-[2.75rem] bg-[#101016] p-[9px] shadow-2xl ring-1 shadow-ink/25 ring-black/10',
		className
	]}
	style:width={`${width}px`}
>
	<img
		{src}
		{alt}
		width="780"
		height="1696"
		class="block h-auto w-full rounded-[2.2rem]"
		loading={eager ? 'eager' : 'lazy'}
		fetchpriority={eager ? 'high' : 'auto'}
		decoding="async"
	/>
</div>
