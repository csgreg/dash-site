<!--
	The main features as one story. On wide screens a single phone stays in place beside the text while it scrolls:
	as each step reaches the middle of the screen, the phone cross-fades to its screen, the step's badge pops in, and
	the ribbon behind draws itself further. On small screens each step shows its own phone under its text.
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
			/** Where it floats over the big phone, and over the small one. */
			place: string;
			placeSmall: string;
		};
	};
</script>

<script lang="ts">
	import Phone from './Phone.svelte';
	import Badge from './Badge.svelte';
	import { atCenter, reveal } from '$lib/motion';

	let { features }: { features: Feature[] } = $props();
	let active = $state(0);
	const current = $derived(features[active]);
</script>

<div class="relative md:grid md:grid-cols-2 md:gap-16">
	<!-- The ribbon behind the phone, drawn as the story scrolls by. -->
	<svg
		class="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 md:block"
		viewBox="0 0 400 2000"
		preserveAspectRatio="xMidYMid slice"
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
			d="M 360 -30 C 40 220, 400 430, 110 660 S 380 1060, 70 1300 S 400 1700, 220 2040"
			stroke="url(#story-ribbon)"
			stroke-width="44"
			stroke-linecap="round"
		/>
	</svg>

	<ol class="relative">
		{#each features as feature, index (feature.id)}
			<li
				id={feature.id}
				use:atCenter={() => (active = index)}
				class="flex flex-col justify-center py-14 md:min-h-[82vh] md:py-0"
			>
				<div use:reveal>
					<p class="font-display text-lg font-black" style:color={feature.color}>
						{feature.eyebrow}
					</p>
					<h3 class="mt-2 text-4xl leading-tight sm:text-5xl">{feature.title}</h3>
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

				<div class="relative mx-auto mt-12 md:hidden" use:reveal>
					<Phone src={`/screens/${feature.screen}.webp`} alt={feature.alt} width={240} />
					<Badge
						kind={feature.badge.kind}
						title={feature.badge.title}
						detail={feature.badge.detail}
						mark={feature.badge.mark}
						color={feature.badge.color}
						sign={feature.badge.sign}
						class={feature.badge.placeSmall}
					/>
				</div>
			</li>
		{/each}
	</ol>

	<div class="relative hidden md:block">
		<div class="sticky top-0 flex h-screen items-center justify-center">
			<div class="relative">
				<Phone width={300}>
					{#each features as feature, index (feature.id)}
						<img
							src={`/screens/${feature.screen}.webp`}
							alt={feature.alt}
							width="780"
							height="1696"
							loading="lazy"
							decoding="async"
							class="absolute inset-0 h-full w-full transition duration-700 ease-out"
							style:opacity={index === active ? 1 : 0}
							style:transform={index === active ? 'none' : 'scale(1.05)'}
						/>
					{/each}
				</Phone>
				{#key active}
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
				{/key}
			</div>

			<!-- Where the story is: one dot per step, the current one long and in its colour. -->
			<div
				class="absolute top-1/2 right-0 flex -translate-y-1/2 flex-col gap-2.5"
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
