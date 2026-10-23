<!--
	The App Store screenshots' ribbon: a thick rounded line drifting through the brand colours in soft pastels, with a
	few pills scattered around it like the burst when a list is finished. It draws itself in as the page opens, then
	the pills pop. Purely decorative.
-->
<script lang="ts">
	let { path, class: className = '', id }: { path: string; class?: string; id: string } = $props();

	const pills = [
		{ x: 600, y: 70, w: 70, color: '#ffe194', angle: -24, delay: 1300 },
		{ x: 1010, y: 90, w: 60, color: '#b7e2ff', angle: 32, delay: 1500 },
		{ x: 980, y: 600, w: 64, color: '#f298b9', angle: -38, delay: 1700 },
		{ x: 470, y: 660, w: 54, color: '#94ecc6', angle: 18, delay: 1900 }
	];
</script>

<svg
	class={['pointer-events-none absolute', className]}
	viewBox="0 0 1200 700"
	fill="none"
	aria-hidden="true"
	preserveAspectRatio="xMidYMid slice"
>
	<defs>
		<linearGradient {id} x1="0" y1="0" x2="1" y2="0">
			<stop offset="0" stop-color="#ae9dff" />
			<stop offset="0.35" stop-color="#f298b9" />
			<stop offset="0.65" stop-color="#ffe194" />
			<stop offset="1" stop-color="#94ecc6" />
		</linearGradient>
	</defs>
	<path
		class="motion-draw"
		pathLength="1"
		d={path}
		stroke={`url(#${id})`}
		stroke-width="56"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	{#each pills as pill (pill.x)}
		<g
			class="motion-pop"
			style:--d={`${pill.delay}ms`}
			style="transform-box: fill-box; transform-origin: center"
		>
			<rect
				x={pill.x}
				y={pill.y}
				width={pill.w}
				height="22"
				rx="11"
				fill={pill.color}
				transform={`rotate(${pill.angle} ${pill.x + pill.w / 2} ${pill.y + 11})`}
			/>
		</g>
	{/each}
</svg>
