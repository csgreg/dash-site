<svelte:head>
	<title>ListFlow – Collaborative List Manager App for iOS | Share & Manage Lists Together</title>
	<meta
		name="description"
		content="ListFlow is the ultimate collaborative list manager for iPhone. Create, share, and manage lists together in real-time with family, friends, and teams. Download now on the App Store."
	/>
	<meta
		name="keywords"
		content="iOS list app, collaborative lists, shared to-do lists, iPhone list manager, shared shopping list, team task manager, list sharing app"
	/>
	<meta name="author" content="ListFlow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://listflow.app/" />
	<meta property="og:title" content="ListFlow – Collaborative List Manager App for iOS" />
	<meta
		property="og:description"
		content="Create, share, and manage lists together in real-time. Perfect for shopping, tasks, and team collaboration."
	/>
	<meta property="og:image" content="https://listflow.app/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://listflow.app/" />
	<meta name="twitter:title" content="ListFlow – Collaborative List Manager App for iOS" />
	<meta
		name="twitter:description"
		content="Create, share, and manage lists together in real-time. Perfect for shopping, tasks, and team collaboration."
	/>
	<meta name="twitter:image" content="https://listflow.app/og-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://listflow.app/" />

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

<header class="border-b border-gray-200 py-5">
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				<img src="/logo.png" alt="Dash Logo" width="60" height="60" class="block" />
				<span class="text-2xl font-bold text-gray-900">Dash</span>
			</div>

			<nav class="flex items-center gap-6">
				<a
					href="https://apps.apple.com/"
					class="rounded-3xl bg-primary px-5 py-2.5 font-light text-white transition-colors hover:bg-primary-dark"
					target="_blank"
					rel="noopener">Download App</a
				>
			</nav>
		</div>
	</div>
</header>

<section class="py-10 md:py-20">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-6 md:flex-row md:pr-20"
	>
		<div class="gradient z-2 max-w-xl md:pr-20">
			<h1 class="mb-6 text-5xl leading-tight font-extrabold text-gray-900 md:text-6xl">
				Keep your lists in one place
			</h1>
			<p class="mb-8 text-xl leading-relaxed text-gray-600">
				Create, share, and manage lists together in real-time. Perfect for shopping lists, todo
				list, team tasks, travel planning, and everything in between.
			</p>
			<div class="flex gap-4">
				<a
					href="https://apps.apple.com/"
					class="inline-block rounded-4xl bg-secondary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:-translate-y-0.5 hover:bg-secondary-dark hover:shadow-xl hover:shadow-secondary/40"
					target="_blank"
					rel="noopener"
				>
					Download on the App Store
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
		class="gap-4 mx-auto flex max-w-7xl flex-col justify-center px-6 md:flex-row md:gap-16 md:pr-20"
	>
		<h2 class="text-5xl leading-tight font-extrabold text-nowrap text-white md:text-6xl">
			Our vision
		</h2>
		<p class="text-xl text-white">
			We believe that everyone should have access to a simple, intuitive, and powerful list manager
			app. That's why we created Dash, a collaborative list manager app for iOS that allows you to
			create, share, and manage lists together in real-time.
		</p>
	</div>
</section>

<style>
	.gradient {
		background: linear-gradient(90deg, white 75%, transparent);
	}
</style>
