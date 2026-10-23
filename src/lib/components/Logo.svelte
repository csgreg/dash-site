<!-- The logo: three pills, each a step further right (purple, pink, yellow), and the name beside it. -->
<script lang="ts">
	let { size = 32, name = true }: { size?: number; name?: boolean } = $props();
</script>

<span class="inline-flex items-center gap-2.5">
	<svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
		<rect x="2" y="4" width="20" height="6.5" rx="3.25" fill="#6c4dff" />
		<rect x="5" y="12.75" width="20" height="6.5" rx="3.25" fill="#e8447f" />
		<rect x="8" y="21.5" width="20" height="6.5" rx="3.25" fill="#ffc83d" />
	</svg>
	{#if name}
		<span class="font-display text-2xl font-black tracking-tight text-ink">Yupdo</span>
	{/if}
</span>
