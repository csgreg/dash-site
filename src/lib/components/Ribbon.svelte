<!--
	The App Store screenshots' ribbon: a thick rounded line drifting through the brand colours in soft pastels, with a
	few pills scattered around it like the burst when a list is finished. Purely decorative.
-->
<script lang="ts">
	let { path, class: className = '', id }: { path: string; class?: string; id: string } = $props();
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
		d={path}
		stroke={`url(#${id})`}
		stroke-width="56"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<rect
		x="600"
		y="70"
		width="70"
		height="24"
		rx="12"
		fill="#ffe194"
		transform="rotate(-24 635 82)"
	/>
	<rect
		x="1010"
		y="90"
		width="60"
		height="22"
		rx="11"
		fill="#b7e2ff"
		transform="rotate(32 1040 101)"
	/>
	<rect
		x="980"
		y="600"
		width="64"
		height="22"
		rx="11"
		fill="#f298b9"
		transform="rotate(-38 1012 611)"
	/>
	<rect
		x="470"
		y="660"
		width="54"
		height="20"
		rx="10"
		fill="#94ecc6"
		transform="rotate(18 497 670)"
	/>
</svg>
