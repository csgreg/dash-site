<!--
	A small white card from the app, floating over a phone's edge: a person ("Leo said yes"), a chip with a symbol
	("Every Friday at 7 PM") or a notification. Decorative: the text around each phone says the same.
-->
<script lang="ts">
	type Props = {
		kind?: 'person' | 'chip' | 'note';
		title: string;
		detail?: string;
		/** The person's initial, or the chip's symbol. */
		mark?: string;
		/** The person's or the symbol's colour. */
		color?: string;
		/** The little sign on a person's bubble (a tick, a plus). */
		sign?: string;
		class?: string;
	};
	let {
		kind = 'person',
		title,
		detail,
		mark = '',
		color = '#e8447f',
		sign = '✓',
		class: className = ''
	}: Props = $props();
</script>

<div
	aria-hidden="true"
	class={[
		'pointer-events-none absolute z-10 flex items-center gap-3 bg-white shadow-xl ring-1 shadow-ink/15 ring-ink/5',
		kind === 'note' ? 'rounded-3xl px-4 py-3.5' : 'rounded-full py-2 pr-6 pl-2',
		className
	]}
>
	{#if kind === 'note'}
		<svg width="40" height="40" viewBox="0 0 40 40" class="shrink-0">
			<rect width="40" height="40" rx="10" fill="#fff" stroke="#e5e3ec" />
			<rect x="7" y="9" width="18" height="6" rx="3" fill="#6c4dff" />
			<rect x="10" y="17" width="18" height="6" rx="3" fill="#e8447f" />
			<rect x="13" y="25" width="18" height="6" rx="3" fill="#ffc83d" />
		</svg>
		<span class="flex flex-col">
			<span class="flex items-center justify-between gap-6 text-xs text-muted">
				<span class="font-semibold">Yupdo</span><span>now</span>
			</span>
			<span class="font-semibold text-ink">{title}</span>
			{#if detail}<span class="text-sm text-ink/80">{detail}</span>{/if}
		</span>
	{:else}
		<span
			class="relative grid size-11 shrink-0 place-items-center rounded-full font-display text-lg font-black text-white"
			style:background={color}
		>
			{mark}
			{#if kind === 'person'}
				<span
					class="absolute -right-1 -bottom-1 grid size-5 place-items-center rounded-full border-2 border-white bg-green text-[10px] font-black"
					>{sign}</span
				>
			{/if}
		</span>
		<span class="flex flex-col leading-tight">
			<span class="font-display text-[17px] font-black text-ink">{title}</span>
			{#if detail}<span class="text-sm text-muted">{detail}</span>{/if}
		</span>
	{/if}
</div>
