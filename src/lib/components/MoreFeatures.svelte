<!--
	"And a little more": the smaller features as a bento of tiles in their list colours, each with a little picture of
	it in the app's style (a pasted message turning into items, the colours, templates, steps that open up in order, a
	streak, a deleted item coming back). The pictures play as they scroll into view.
-->
<script lang="ts">
	import { reveal } from '$lib/motion';

	const tint = (hex: string, alpha = '1c') => `${hex}${alpha}`;
	const colours = [
		'#6c4dff',
		'#a21caf',
		'#e8447f',
		'#e5365e',
		'#ea621a',
		'#ffc83d',
		'#3ddc97',
		'#14935a',
		'#0e8c8c',
		'#7ccbff',
		'#1f7af2',
		'#3b3b46'
	];
	const pasted = ['Paper plates', 'Juice boxes', 'Party hats', 'Balloons'];
	const week = [3, 5, 2, 6, 4, 7, 5];
</script>

<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
	<!-- Paste a message -->
	<article
		use:reveal
		class="flex flex-col gap-8 overflow-hidden rounded-[2rem] p-8 lg:col-span-2 lg:row-span-2"
		style:background={tint('#e8447f')}
	>
		<div>
			<h3 class="text-3xl">Paste a message, get a list</h3>
			<p class="mt-3 max-w-md leading-relaxed text-muted">
				Paste a message or pick a screenshot and every line becomes an item. It is read right on
				your phone; pictures are never uploaded.
			</p>
		</div>
		<div class="mt-auto flex flex-col gap-4" aria-hidden="true">
			<div
				use:reveal
				class="relative max-w-sm self-start rounded-3xl rounded-bl-md bg-white px-5 py-4 text-ink shadow-md"
			>
				Could you grab paper plates, juice boxes, party hats and a few more balloons?
			</div>
			<div class="ml-auto w-full max-w-xs rounded-3xl bg-white p-2 shadow-lg">
				{#each pasted as item, index (item)}
					<div
						use:reveal
						style:--d={`${300 + index * 140}ms`}
						class="flex items-center gap-3 rounded-2xl px-3 py-2.5"
					>
						<span class="size-5 rounded-full border-[2.5px] border-pink/50"></span>
						<span class="font-medium">{item}</span>
					</div>
				{/each}
			</div>
		</div>
	</article>

	<!-- Colours -->
	<article use:reveal class="rounded-[2rem] p-8 lg:col-span-2" style:background={tint('#6c4dff')}>
		<h3 class="text-3xl">Every list in its own colour</h3>
		<p class="mt-3 leading-relaxed text-muted">
			Twelve colours and a set of icons, on big cards or small, so every list is easy to spot.
		</p>
		<div class="mt-6 flex flex-wrap gap-2.5" aria-hidden="true">
			{#each colours as colour, index (colour)}
				<span
					use:reveal
					style:--d={`${index * 50}ms`}
					class="grid size-9 place-items-center rounded-full text-sm font-black text-white"
					style:background={colour}
					style:box-shadow={index === 2 ? `0 0 0 3px white, 0 0 0 6px ${colour}` : undefined}
					>{index === 2 ? '✓' : ''}</span
				>
			{/each}
		</div>
	</article>

	<!-- Templates -->
	<article
		use:reveal
		style:--d="80ms"
		class="overflow-hidden rounded-[2rem] p-8"
		style:background={tint('#0e8c8c')}
	>
		<h3 class="text-2xl">Templates to start fast</h3>
		<p class="mt-2 leading-relaxed text-muted">Weekly chores, school mornings, packing and more.</p>
		<div class="mt-6 flex flex-col items-start gap-2" aria-hidden="true">
			{#each [['School mornings', '#ffc83d', '#17122a', -6], ['Weekly chores', '#0e8c8c', '#fff', 3], ['Packing list', '#7ccbff', '#17122a', -2]] as [name, bg, ink, angle], index (name)}
				<span
					use:reveal
					style:--d={`${200 + index * 120}ms`}
					class="rounded-2xl px-4 py-2.5 font-display font-black whitespace-nowrap shadow-md"
					style:margin-left={`${index * 0.9}rem`}
					style:background={bg}
					style:color={ink}
					style:rotate={`${angle}deg`}>{name}</span
				>
			{/each}
		</div>
	</article>

	<!-- In order -->
	<article
		use:reveal
		style:--d="160ms"
		class="rounded-[2rem] p-8"
		style:background={tint('#ea621a')}
	>
		<h3 class="text-2xl">One step at a time</h3>
		<p class="mt-2 leading-relaxed text-muted">
			"Do in order" opens each item once the one before is done.
		</p>
		<div class="mt-5 flex flex-col gap-2" aria-hidden="true">
			{#each [['Brush teeth', true], ['Get dressed', false], ['Pack the bag', false]] as [step, open], index (step)}
				<span
					use:reveal
					style:--d={`${250 + index * 120}ms`}
					class="flex items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-sm"
					class:opacity-60={!open}
				>
					{#if open}
						<span class="size-5 rounded-full border-[2.5px] border-orange/60"></span>
					{:else}
						<svg width="20" height="20" viewBox="0 0 20 20" class="text-muted">
							<rect x="4" y="9" width="12" height="8" rx="2.5" fill="currentColor" />
							<path
								d="M7 9V7a3 3 0 0 1 6 0v2"
								stroke="currentColor"
								stroke-width="2.2"
								fill="none"
							/>
						</svg>
					{/if}
					<span class="font-medium">{step}</span>
				</span>
			{/each}
		</div>
	</article>

	<!-- Streaks -->
	<article
		use:reveal
		class="flex flex-col gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-end lg:col-span-2"
		style:background={tint('#ffc83d', '33')}
	>
		<div class="flex-1">
			<h3 class="text-3xl">Streaks to keep going</h3>
			<p class="mt-3 leading-relaxed text-muted">
				Lists with repeating chores keep a streak, so the whole household can see how it is going.
			</p>
		</div>
		<div class="flex items-end gap-2" aria-hidden="true">
			<span
				class="mr-3 flex items-center gap-1.5 self-center rounded-full bg-white px-4 py-2 font-display text-2xl font-black shadow-md"
			>
				<svg width="20" height="24" viewBox="0 0 20 24"
					><path
						d="M10 1c1 4 6 6 6 13a6 6 0 0 1-12 0c0-3 1.5-5 3-6 0 2 1 3 2 3 0-3-1-6 1-10z"
						fill="#ea621a"
					/></svg
				>12
			</span>
			{#each week as height, index (index)}
				<span class="flex h-28 w-4 items-end overflow-hidden rounded-full bg-white/70">
					<span
						use:reveal
						style:--d={`${index * 90}ms`}
						class="block w-full rounded-full bg-brand"
						style:height={`${(height / 7) * 100}%`}
					></span>
				</span>
			{/each}
		</div>
	</article>

	<!-- Nothing lost -->
	<article
		use:reveal
		style:--d="80ms"
		class="flex flex-col gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center lg:col-span-2"
		style:background={tint('#14935a')}
	>
		<div class="flex-1">
			<h3 class="text-3xl">Nothing lost by mistake</h3>
			<p class="mt-3 leading-relaxed text-muted">
				Deleted items wait 30 days in Recently Deleted, so a slip is easy to undo.
			</p>
		</div>
		<div
			use:reveal
			style:--d="250ms"
			class="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md"
			aria-hidden="true"
		>
			<span class="size-5 rounded-full border-[2.5px] border-green/50"></span>
			<span class="font-medium text-muted line-through">Avocados</span>
			<span class="ml-3 rounded-full bg-green px-3 py-1 text-sm font-bold text-white">Restore</span>
		</div>
	</article>
</div>
