<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Phone from '$lib/components/Phone.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Ribbon from '$lib/components/Ribbon.svelte';
	import AppStoreButton from '$lib/components/AppStoreButton.svelte';
	import { SITE, absolute } from '$lib/site';

	const title = 'Yupdo: Shared Lists & Family Chores for iPhone';
	const description =
		'Shared grocery lists, chores that repeat and take turns, and plans everyone can help with. Yupdo keeps your household in sync on iPhone, in real time. Free on the App Store.';

	const features = [
		{
			id: 'today',
			eyebrow: 'Today',
			color: '#6c4dff',
			title: 'Your whole day at a glance',
			text: "Today gathers what's due across all your lists, what's coming up next, and what someone asked you to do, so nothing slips between lists.",
			points: [
				'Due today and running late, from every list',
				"Someone asked for a hand? Say yes, can't or later in one tap",
				'Everything you ticked off this week'
			],
			screen: 'today',
			alt: 'The Today screen in Yupdo: things done today, what is due today across lists, and a task someone asked you to do.'
		},
		{
			id: 'share',
			eyebrow: 'Share',
			color: '#e8447f',
			title: 'Share a list. Ask for a hand.',
			text: 'Invite family, roommates or friends with a link. Ask someone to take an item, see who said yes, and who ticked what off.',
			points: [
				'Invite with a link or a short code',
				'Ask for a hand with any item',
				'See who added and who ticked off each item'
			],
			screen: 'party',
			alt: 'A shared birthday party list in Yupdo, with one task you said yes to and one asked of Leo.'
		},
		{
			id: 'repeats',
			eyebrow: 'Repeats',
			color: '#14935a',
			title: 'Chores that come back on their own',
			text: "Bins every Friday at 7. Plants twice a week. Set a repeat once and Yupdo brings the chore back when it's due, so the weekly chores run themselves.",
			points: [
				'Every day, on weekdays, or on the days you pick',
				'Take turns, fair and square: Yupdo knows whose turn is next',
				'Reminders, with quiet hours you choose'
			],
			screen: 'chores',
			alt: 'A weekly chores list in Yupdo with repeating chores coming up, like taking out the bins on Friday at 7 PM.'
		},
		{
			id: 'live',
			eyebrow: 'Live',
			color: '#1f7af2',
			title: 'Shop together, in real time',
			text: "Everyone sees the same grocery list, live. Add oat milk on the way home and it's on the list before anyone reaches the store.",
			points: [
				'Changes show up for everyone instantly',
				'Works offline and catches up when you are back online',
				'Notes on items, like which bakery to go to'
			],
			screen: 'groceries',
			alt: 'A shared grocery list in Yupdo with oat milk, avocados, sourdough bread and more.'
		}
	];

	const more = [
		{
			title: 'Paste a message, get a list',
			text: 'Paste a message or pick a screenshot and every line becomes an item. It is read right on your phone; pictures are never uploaded.',
			color: '#e8447f'
		},
		{
			title: 'Every list in its own colour',
			text: 'Twelve colours and a set of icons, on big cards or small, so every list is easy to spot.',
			color: '#6c4dff'
		},
		{
			title: 'Templates to start fast',
			text: 'Weekly chores, school mornings, groceries, packing and more: ready to use, easy to change.',
			color: '#0e8c8c'
		},
		{
			title: 'One step at a time',
			text: 'Turn on "Do in order" for routines, and each item opens up once the one before it is done.',
			color: '#ea621a'
		},
		{
			title: 'Streaks to keep going',
			text: 'Lists with repeating chores keep a streak, so the whole household can see how it is going.',
			color: '#ffc83d'
		},
		{
			title: 'Nothing lost by mistake',
			text: 'Deleted items wait 30 days in Recently Deleted, so a slip is easy to undo.',
			color: '#14935a'
		}
	];

	const uses = [
		{
			title: 'Shared grocery list',
			text: 'One grocery list the whole family adds to, updated live while you shop.'
		},
		{
			title: 'Family chore chart',
			text: 'Weekly chores that repeat and take turns, so everyone knows whose turn it is.'
		},
		{
			title: 'Trip packing list',
			text: 'Pack together for a weekend away: who brings what, and what is still missing.'
		},
		{
			title: 'Party planning',
			text: 'Plan a birthday with everyone: ask for a hand and see who said yes.'
		},
		{
			title: 'Roommates',
			text: 'A cleaning rota, shared supplies and house to-dos, without the group chat.'
		},
		{
			title: 'School mornings',
			text: 'A morning routine kids can follow, one step after another.'
		}
	];
	const useColors = ['#6c4dff', '#3ddc97', '#7ccbff', '#e8447f', '#ea621a', '#ffc83d'];

	const faq = [
		{
			q: 'Is Yupdo free?',
			a: 'Yes. Yupdo is free to download on the App Store.'
		},
		{
			q: 'Which devices does Yupdo work on?',
			a: 'Yupdo is made for iPhone and needs iOS 18.1 or later. Everyone you share a list with uses the app on their own iPhone.'
		},
		{
			q: 'How do I share a list?',
			a: 'Open the list, tap the gear and choose Share. Send the invite link by message; when someone opens it, they join the list. They can also type the short code in "Join a list".'
		},
		{
			q: 'Can chores repeat and rotate?',
			a: 'Yes. Give any item a repeat, like every Friday at 7 PM or twice a week, and it comes back on its own. Choose "Take turns" and Yupdo knows whose turn is next.'
		},
		{
			q: 'Can I turn a message or a screenshot into a list?',
			a: 'Yes. Paste a message or pick a screenshot and every line becomes an item. The text is read on your phone, pictures are never uploaded, and nothing is added until you say so.'
		},
		{
			q: 'Will I get reminders?',
			a: 'Yes. Items with a time remind you when they are due, and quiet hours keep the evening calm. Reminders are scheduled on your phone.'
		},
		{
			q: 'What happened to Dash?',
			a: 'Dash is now Yupdo: the same app with a new name, a fresh look and new features like Today, repeats and asking for a hand. Your lists come with you.'
		},
		{
			q: 'Is my data private?',
			a: 'We never sell your data. Your lists are stored securely and only shared with the people you invite. Our privacy policy explains the details.'
		}
	];

	const jsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'MobileApplication',
			name: SITE.name,
			alternateName: 'Dash',
			description,
			url: SITE.url,
			image: absolute(SITE.ogImage),
			operatingSystem: 'iOS 18.1 or later',
			applicationCategory: 'LifestyleApplication',
			applicationSubCategory: 'Productivity',
			installUrl: SITE.appStoreUrl,
			downloadUrl: SITE.appStoreUrl,
			screenshot: features.map((f) => absolute(`/screens/${f.screen}.webp`)),
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
			featureList: [
				'Shared lists in real time',
				'Repeating chores',
				'Taking turns',
				'Asking for a hand',
				'Today view of what is due',
				'Lists from a pasted message or screenshot',
				'Reminders with quiet hours',
				'Templates'
			]
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: SITE.name,
			url: SITE.url,
			logo: absolute('/web-app-manifest-512x512.png'),
			email: SITE.email,
			sameAs: [SITE.appStoreUrl]
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: SITE.name,
			alternateName: 'Yupdo app',
			url: SITE.url
		},
		{
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faq.map(({ q, a }) => ({
				'@type': 'Question',
				name: q,
				acceptedAnswer: { '@type': 'Answer', text: a }
			}))
		}
	];
</script>

<Seo {title} {description} path="/" {jsonLd} />

<Header />

<main id="main">
	<!-- Hero -->
	<section class="relative overflow-hidden">
		<Ribbon
			id="hero-ribbon"
			class="inset-x-0 top-16 h-[640px] w-full opacity-80 md:top-0 md:h-full"
			path="M-60 680 C 220 720, 400 650, 580 600 S 840 560, 960 400 S 1120 130, 1290 150"
		/>
		<div
			class="relative mx-auto grid max-w-6xl items-center gap-6 px-5 pt-10 pb-14 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pt-16 md:pb-24"
		>
			<div>
				<p
					class="inline-flex items-center gap-2 rounded-full bg-page px-3.5 py-1.5 text-sm font-semibold text-muted"
				>
					<Logo size={18} name={false} /> Dash is now Yupdo
				</p>
				<h1 class="mt-5 text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
					Shared lists, <span class="text-brand">done together</span>
				</h1>
				<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
					Yupdo is the shared list app for families, couples and roommates. Grocery lists everyone
					adds to, chores that repeat and take turns, and plans where anyone can lend a hand. All in
					sync on iPhone, in real time.
				</p>
				<div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
					<AppStoreButton />
					<span class="text-sm font-semibold text-muted">Free · iPhone · iOS 18.1 or later</span>
				</div>
			</div>

			<div class="relative mx-auto h-[540px] w-full max-w-[460px] sm:h-[620px]">
				<div class="absolute top-6 left-1/2 -translate-x-1/2 rotate-[7deg]">
					<Phone
						src="/screens/lists.webp"
						alt="Yupdo's Lists screen: colourful cards for groceries, weekly chores, a birthday party and a weekend trip."
						width={268}
						eager
						class="sm:w-[300px]!"
					/>
				</div>
				<Badge
					title="Leo said yes"
					detail="Book the face painter"
					mark="L"
					color="#e8447f"
					class="top-24 left-0 sm:-left-4"
				/>
				<Badge
					kind="chip"
					title="Every Friday at 7 PM"
					mark="↻"
					color="#14935a"
					class="top-[52%] right-0 sm:-right-6"
				/>
				<Badge
					title="Nora ticked off"
					detail="Balloons and confetti"
					mark="N"
					color="#ea621a"
					class="bottom-12 left-2 sm:-left-2"
				/>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section id="features" class="bg-page py-20 md:py-28">
		<div class="mx-auto max-w-6xl px-5">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl sm:text-5xl">Everything your household shares, in one app</h2>
				<p class="mt-4 text-lg text-muted">
					From the weekly shop to the bins on Friday: one place for every list you share, so nobody
					has to ask twice in the group chat.
				</p>
			</div>

			<div class="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
				{#each features as feature, index (feature.id)}
					<article class="grid items-center gap-10 md:grid-cols-2 md:gap-16">
						<div class={index % 2 ? 'md:order-2' : ''}>
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
						<div class="relative mx-auto">
							<Phone src={`/screens/${feature.screen}.webp`} alt={feature.alt} width={270} />
							{#if feature.id === 'today'}
								<Badge
									kind="note"
									title="Take out the bins"
									detail="Due at 7:00 PM · Weekly chores"
									class="top-16 -left-10 sm:-left-24"
								/>
							{:else if feature.id === 'share'}
								<Badge
									title="Leo said yes"
									detail="Book the face painter"
									mark="L"
									color="#e8447f"
									class="top-40 -right-8 sm:-right-24"
								/>
							{:else if feature.id === 'repeats'}
								<Badge
									kind="chip"
									title="Fridays at 7 PM"
									mark="↻"
									color="#14935a"
									class="bottom-28 -left-8 sm:-left-20"
								/>
							{:else}
								<Badge
									title="Leo added"
									detail="Blueberries · just now"
									mark="L"
									color="#e8447f"
									sign="+"
									class="top-48 -right-8 sm:-right-24"
								/>
							{/if}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- More features -->
	<section class="py-20 md:py-28">
		<div class="mx-auto max-w-6xl px-5">
			<h2 class="text-center text-4xl sm:text-5xl">And a little more</h2>
			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each more as item (item.title)}
					<div class="rounded-3xl bg-page p-7">
						<span
							class="block h-2.5 w-12 rounded-full"
							style:background={item.color}
							aria-hidden="true"
						></span>
						<h3 class="mt-5 text-2xl">{item.title}</h3>
						<p class="mt-2 leading-relaxed text-muted">{item.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Uses -->
	<section class="bg-page py-20 md:py-28">
		<div class="mx-auto max-w-6xl px-5">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-4xl sm:text-5xl">One app for every shared list</h2>
				<p class="mt-4 text-lg text-muted">
					A shared to-do list for the whole household, whatever you are doing together.
				</p>
			</div>
			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each uses as use, index (use.title)}
					<div class="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
						<span
							class="mt-1 h-10 w-2.5 shrink-0 rounded-full"
							style:background={useColors[index % useColors.length]}
							aria-hidden="true"
						></span>
						<div>
							<h3 class="text-xl">{use.title}</h3>
							<p class="mt-1.5 leading-relaxed text-muted">{use.text}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="py-20 md:py-28">
		<div class="mx-auto max-w-3xl px-5">
			<h2 class="text-center text-4xl sm:text-5xl">Questions, answered</h2>
			<div class="mt-12 flex flex-col gap-3">
				{#each faq as item (item.q)}
					<details
						class="group rounded-3xl bg-page px-6 py-5 open:bg-white open:shadow-md open:ring-1 open:ring-ink/5"
					>
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-black [&::-webkit-details-marker]:hidden"
						>
							{item.q}
							<span
								class="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand transition group-open:rotate-45 group-open:bg-page"
								aria-hidden="true">+</span
							>
						</summary>
						<p class="mt-3 leading-relaxed text-muted">
							{item.a}
							{#if item.q === 'Is my data private?'}
								<a
									href="/privacy"
									class="font-semibold text-brand underline-offset-4 hover:underline"
									>Read the privacy policy</a
								>.
							{/if}
						</p>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<!-- The app's band, as the last word -->
	<section class="px-5 pb-20">
		<div
			class="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand px-8 py-16 text-center text-white md:py-20"
		>
			<div
				class="pointer-events-none absolute -right-8 bottom-10 flex flex-col gap-3 opacity-20"
				aria-hidden="true"
			>
				<span class="block h-9 w-40 rounded-full bg-white"></span>
				<span class="ml-6 block h-9 w-40 rounded-full bg-white"></span>
				<span class="ml-12 block h-9 w-40 rounded-full bg-white"></span>
			</div>
			<h2 class="relative text-4xl sm:text-6xl">Start your first shared list</h2>
			<p class="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
				Make a list, invite the people you do it with, and tick things off together.
			</p>
			<div class="relative mt-8 flex justify-center">
				<AppStoreButton light />
			</div>
		</div>
	</section>
</main>

<Footer />
