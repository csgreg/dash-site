<script>
	import IconApple from '$lib/icons/IconApple.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "MobileApplication",
			"name": "ListFlow",
			"operatingSystem": "iOS",
			"applicationCategory": "ProductivityApplication",
			"url": "https://listflow.app/",
			"description": "Collaborative list manager app for iOS. Create, share, and manage lists together in real-time.",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.8",
				"reviewCount": "1820"
			}
		}
	</script>
</svelte:head>

<Header />

<section class="py-10 md:py-20">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-6 md:flex-row md:pr-20"
	>
		<div class="gradient z-2 max-w-xl md:pr-20">
			<h1 class="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
				Keep your lists in one place
			</h1>
			<p class="mb-8 text-xl leading-relaxed text-gray-600">
				Stop juggling lists across messages and notes apps. Dash brings all your shared lists
				together in one beautiful place—perfect for coordinating with friends, family, and
				colleagues.
			</p>
			<div class="flex gap-4">
				<a
					href="https://apps.apple.com/app/apple-store/id6755497276"
					class="rounded-4xl bg-secondary shadow-secondary/30 hover:bg-secondary-dark hover:shadow-secondary/40 inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
					target="_blank"
					rel="noopener"
				>
					<IconApple />
					Download for iOS
				</a>
			</div>
		</div>

		<div class="z-1 hidden max-h-[370px] justify-center md:ml-[-300px] md:flex">
			<img
				src="/clumsy.svg"
				alt="Cumsy person"
				width="600"
				height="800"
				class="mr-[-100px] h-auto max-w-full rounded-3xl"
			/>
		</div>
	</div>
</section>

<section class="bg-primary py-10 md:py-20">
	<div
		class="mx-auto flex max-w-7xl flex-col justify-center gap-4 px-6 md:flex-row md:gap-16 md:pr-20"
	>
		<h2 class="text-nowrap text-5xl font-extrabold leading-tight text-white md:text-6xl">
			Our vision
		</h2>
		<p class="text-xl leading-relaxed text-white">
			We believe that everyone should have access to a simple, intuitive, and powerful list manager
			app. That's why we created Dash, a collaborative list manager app for iOS that allows you to
			create, share, and manage lists together in real-time.
		</p>
	</div>
</section>

<section class="bg-white py-12 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-10 text-center md:mb-14">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Why Dash</h2>
			<p class="mt-3 text-lg text-gray-600 md:text-xl">
				Built to make shared lists effortless, beautiful, and lightning fast.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-3 md:gap-8">
			<div
				class="rounded-4xl from-secondary to-secondary-dark shadow-secondary/30 bg-gradient-to-br p-8 text-left shadow-lg"
			>
				<h3 class="mb-3 text-xl font-bold text-white">Effortless shared lists</h3>
				<p class="text-base leading-relaxed text-white/90">
					Create and manage all your lists in one place&mdash;from everyday to-dos to shared
					shopping lists and trip planning. Invite others to collaborate so everyone stays on the
					same page without messy message threads.
				</p>
			</div>

			<div
				class="rounded-4xl from-secondary to-secondary-dark shadow-secondary/30 bg-gradient-to-br p-8 text-left shadow-lg"
			>
				<h3 class="mb-3 text-xl font-bold text-white">Feels native to Apple</h3>
				<p class="text-base leading-relaxed text-white/90">
					Dash is thoughtfully designed to fit right into the Apple ecosystem, with familiar UI,
					smooth interactions, and support for the latest iOS features so it feels like a natural
					part of your iPhone.
				</p>
			</div>

			<div
				class="rounded-4xl from-secondary to-secondary-dark shadow-secondary/30 bg-gradient-to-br p-8 text-left shadow-lg"
			>
				<h3 class="mb-3 text-xl font-bold text-white">Instant, real-time sync</h3>
				<p class="text-base leading-relaxed text-white/90">
					Every change you make syncs instantly across all devices and collaborators. Check off an
					item and everyone sees it update in real time&mdash;no refresh, no delay.
				</p>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	.gradient {
		background: linear-gradient(90deg, white 75%, transparent);
	}
</style>
