<!--
	The main features as one story with one phone.

	Wide screens: the phone stays in place beside the text while it scrolls. As each step reaches the middle of the
	screen, the phone cross-fades to its screen, the step's badge pops in, and the ribbon behind draws itself further.

	Small screens: the steps are chips above the phone, and only the chosen step's text shows under it. The steps play
	through on their own while the story is on screen (a fill on the chip shows the time left), until someone taps a
	chip or swipes the phone. All four texts are always in the page.
-->
<script lang="ts" module>
	export type Feature = {
		id: string;
		eyebrow: string;
		color: string;
		title: string;
		text: string;
		points: string[];
		screen: string;
		alt: string;
		badge: {
			kind?: 'person' | 'chip' | 'note';
			title: string;
			detail?: string;
			mark?: string;
			color?: string;
			sign?: string;
			/** Where it floats over the phone on wide screens, and on small ones. */
			place: string;
			placeSmall: string;
		};
	};
</script>

<script lang="ts">
	import Phone from './Phone.svelte';
	import Badge from './Badge.svelte';
	import { atCenter, reveal, whileInView } from '$lib/motion';

	let { features }: { features: Feature[] } = $props();
	let active = $state(0);
	const current = $derived(features[active]);

	/** How long each step shows on small screens before the next one. */
	const STEP_MS = 6000;
	/** Small screens play the steps by themselves until someone chooses one. */
	let playing = $state(true);
	let inView = $state(false);
	let small = $state(false);
	let swipeFrom: number | null = null;

	$effect(() => {
		const query = matchMedia('(max-width: 767px)');
		const still = matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => {
			small = query.matches;
			if (still.matches) playing = false;
		};
		update();
		query.addEventListener('change', update);
		return () => query.removeEventListener('change', update);
	});

	$effect(() => {
		if (!playing || !inView || !small) return;
		const next = setTimeout(() => (active = (active + 1) % features.length), STEP_MS);
		return () => clearTimeout(next);
	});

	function choose(index: number) {
		active = (index + features.length) % features.length;
		playing = false;
	}

	function swipeEnd(event: PointerEvent) {
		if (swipeFrom === null) return;
		const dx = event.clientX - swipeFrom;
		swipeFrom = null;
		if (Math.abs(dx) > 40) choose(active + (dx < 0 ? 1 : -1));
	}
</script>

<div
	use:whileInView={(visible) => (inView = visible)}
	class="relative flex flex-col md:grid md:grid-cols-2 md:gap-16"
>
	<!-- The ribbon behind the phone, drawn as the story scrolls by. It stays inside its drawing, rounded at both ends
		(its bends are vertical where they meet, so nothing swings out and gets cut off). -->
	<svg
		class="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 md:block"
		viewBox="0 0 400 2000"
		preserveAspectRatio="xMidYMid meet"
		fill="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="story-ribbon" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="#ae9dff" />
				<stop offset="0.35" stop-color="#f298b9" />
				<stop offset="0.7" stop-color="#94ecc6" />
				<stop offset="1" stop-color="#b7e2ff" />
			</linearGradient>
		</defs>
		<path
			class="scroll-draw"
			pathLength="1"
			d="M 300 80 C 300 260, 90 300, 90 520 C 90 740, 320 760, 320 980 C 320 1200, 80 1220, 80 1440 C 80 1660, 250 1700, 240 1920"
			stroke="url(#story-ribbon)"
			stroke-width="44"
			stroke-linecap="round"
		/>
	</svg>

	<!-- Small screens: the steps as chips, like the app's. -->
	<div
		class="order-1 -mx-5 flex [scrollbar-width:none] gap-2 overflow-x-auto px-5 pt-2 pb-1 md:hidden"
		role="tablist"
		aria-label="Features"
	>
		{#each features as feature, index (feature.id)}
			<button
				type="button"
				role="tab"
				aria-selected={index === active}
				aria-controls={feature.id}
				onclick={() => choose(index)}
				class="relative shrink-0 overflow-hidden rounded-full px-4 py-2 font-display text-[17px] font-black transition-colors duration-300"
				style:background={index === active ? feature.color : '#f4f3f8'}
				style:color={index === active ? '#ffffff' : '#5f5a70'}
			>
				{#if index === active && playing && inView && small}
					{#key active}
						<span
							class="chip-progress absolute inset-y-0 left-0 bg-white/25"
							style:animation-duration={`${STEP_MS}ms`}
							aria-hidden="true"
						></span>
					{/key}
				{/if}
				<span class="relative">{feature.eyebrow}</span>
			</button>
		{/each}
	</div>

	<ol class="relative order-3 max-md:min-h-[25rem] md:order-none">
		{#each features as feature, index (feature.id)}
			<li
				id={feature.id}
				use:atCenter={() => (active = index)}
				class={[
					'flex flex-col justify-center pt-8 md:min-h-[82vh] md:py-0',
					index === active ? 'step-in' : 'max-md:hidden'
				]}
			>
				<div use:reveal>
					<p class="font-display text-lg font-black max-md:hidden" style:color={feature.color}>
						{feature.eyebrow}
					</p>
					<h3 class="mt-2 text-4xl leading-tight max-md:mt-0 sm:text-5xl">{feature.title}</h3>
					<p class="mt-5 text-lg leading-relaxed text-muted">{feature.text}</p>
					<ul class="mt-6 flex flex-col gap-3">
						{#each feature.points as point (point)}
							<li class="flex items-start gap-3 text-ink">
								<span
									class="mt-1 grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-black text-white"
									style:background={feature.color}
									aria-hidden="true">✓</span
								>
								{point}
							</li>
						{/each}
					</ul>
				</div>
			</li>
		{/each}
	</ol>

	<!-- The phone: in place beside the story on wide screens, under the chips on small ones (swipe to change). -->
	<div class="relative order-2 md:order-none">
		<div class="flex items-center justify-center pt-8 md:sticky md:top-0 md:h-screen md:pt-0">
			<div
				class="relative touch-pan-y"
				role="group"
				aria-label="The app's screens; on a phone, swipe for the next feature"
				onpointerdown={(event) => (swipeFrom = event.clientX)}
				onpointerup={swipeEnd}
				onpointercancel={() => (swipeFrom = null)}
			>
				<Phone width={250} class="md:w-[300px]!">
					{#each features as feature, index (feature.id)}
						<img
							src={`/screens/${feature.screen}.webp`}
							alt={feature.alt}
							width="780"
							height="1696"
							loading="lazy"
							decoding="async"
							draggable="false"
							class="absolute inset-0 h-full w-full transition duration-700 ease-out select-none"
							style:opacity={index === active ? 1 : 0}
							style:transform={index === active ? 'none' : 'scale(1.05)'}
						/>
					{/each}
				</Phone>
				{#key active}
					<div class="pointer-events-none absolute inset-0 md:hidden">
						<Badge
							kind={current.badge.kind}
							title={current.badge.title}
							detail={current.badge.detail}
							mark={current.badge.mark}
							color={current.badge.color}
							sign={current.badge.sign}
							delay={200}
							class={current.badge.placeSmall}
						/>
					</div>
					<div class="pointer-events-none absolute inset-0 hidden md:block">
						<Badge
							kind={current.badge.kind}
							title={current.badge.title}
							detail={current.badge.detail}
							mark={current.badge.mark}
							color={current.badge.color}
							sign={current.badge.sign}
							delay={250}
							class={current.badge.place}
						/>
					</div>
				{/key}
			</div>

			<!-- Wide screens: where the story is, one dot per step, the current one long and in its colour. -->
			<div
				class="absolute top-1/2 right-0 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
				aria-hidden="true"
			>
				{#each features as feature, index (feature.id)}
					<span
						class="block w-2.5 rounded-full transition-all duration-500"
						style:height={index === active ? '2.25rem' : '0.625rem'}
						style:background={index === active ? feature.color : '#e5e3ec'}
					></span>
				{/each}
			</div>
		</div>
	</div>
</div>
