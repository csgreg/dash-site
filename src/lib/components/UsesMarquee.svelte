<!--
	"One app for every shared list": two endless rows drifting in opposite directions, like flicking through Lists in
	the app. The first holds a card per use in its list colour; the second, items being ticked off. Each row is two
	copies side by side; only the first copy of the cards is read out (and has headings), the rest is decoration.
	Hovering stops a row; with less motion asked for, the rows stand still and scroll by hand.
-->
<script lang="ts">
	type Use = { title: string; text: string; color: string; ink: string };
	let { uses }: { uses: Use[] } = $props();

	const items = [
		{ text: 'Oat milk', color: '#6c4dff', done: true },
		{ text: 'Take out the bins · Fri 7 PM', color: '#3ddc97', done: false },
		{ text: 'Sunscreen', color: '#7ccbff', done: true },
		{ text: 'Book the face painter', color: '#e8447f', done: false },
		{ text: 'Water the plants', color: '#14935a', done: true },
		{ text: 'Gym bag', color: '#ffc83d', done: false },
		{ text: 'Avocados', color: '#6c4dff', done: false },
		{ text: 'Party playlist', color: '#e8447f', done: true },
		{ text: 'Descale the kettle', color: '#3ddc97', done: false },
		{ text: 'Charge the camera', color: '#7ccbff', done: true }
	];
	const fade =
		'[mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)] overflow-hidden';
</script>

<div class="flex flex-col gap-5">
	<div class={['marquee-row py-3', fade]}>
		<div class="marquee" style:--speed="70s">
			{#each [0, 1] as copy (copy)}
				<div class="flex gap-5 pr-5" aria-hidden={copy === 1 ? 'true' : undefined}>
					{#each uses as use (use.title)}
						<article
							class="relative w-[19rem] shrink-0 overflow-hidden rounded-[1.75rem] p-6 shadow-lg shadow-ink/10 transition hover:-translate-y-1"
							style:background={use.color}
							style:color={use.ink}
						>
							{#if copy === 0}
								<h3 class="text-2xl">{use.title}</h3>
							{:else}
								<p class="font-display text-2xl font-black tracking-tight">{use.title}</p>
							{/if}
							<p class="mt-2 leading-relaxed opacity-85">{use.text}</p>
							<!-- The faint pills in the corner of every list card in the app. -->
							<span
								class="absolute -right-6 bottom-4 flex flex-col gap-1.5 opacity-15"
								aria-hidden="true"
							>
								<span class="block h-4 w-16 rounded-full bg-current"></span>
								<span class="ml-3 block h-4 w-16 rounded-full bg-current"></span>
							</span>
						</article>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<div class={['marquee-row py-2', fade]} aria-hidden="true">
		<div class="marquee marquee-reverse" style:--speed="55s">
			{#each [0, 1] as copy (copy)}
				<div class="flex gap-3 pr-3">
					{#each items as item (item.text)}
						<span
							class="flex shrink-0 items-center gap-2.5 rounded-full bg-white py-2.5 pr-5 pl-3 shadow-md ring-1 shadow-ink/5 ring-ink/5"
						>
							{#if item.done}
								<span
									class="grid size-6 place-items-center rounded-full text-xs font-black text-white"
									style:background={item.color}>✓</span
								>
								<span class="font-medium text-muted line-through">{item.text}</span>
							{:else}
								<span class="size-6 rounded-full border-[2.5px]" style:border-color={item.color}
								></span>
								<span class="font-medium">{item.text}</span>
							{/if}
						</span>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
