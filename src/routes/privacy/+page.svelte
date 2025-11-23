<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const currentDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>Privacy Policy - Dash</title>
	<meta name="description" content="Privacy Policy for Dash - Learn how we protect your data" />
</svelte:head>

<div class="min-h-screen bg-white">
	<Header />

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-6 py-12">
		<h1 class="mb-4 text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
		<p class="mb-10 text-sm text-gray-500">Last updated: {currentDate}</p>

		<div class="space-y-8">
			<!-- Introduction -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Introduction</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					Welcome to Dash. We respect your privacy and are committed to protecting your personal
					data. This privacy policy will inform you about how we handle your personal data when you
					use our app.
				</p>
			</section>

			<!-- Data We Collect -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Data We Collect</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We collect and process the following data:
				</p>
				<ul class="list-inside list-disc space-y-2 text-base text-gray-700">
					<li>Email address (for authentication)</li>
					<li>First name (optional, if provided)</li>
					<li>Lists and items you create</li>
					<li>Usage statistics (items created, achievements)</li>
					<li>Device information (for app functionality)</li>
				</ul>
			</section>

			<!-- How We Use Your Data -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">How We Use Your Data</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">We use your data to:</p>
				<ul class="list-inside list-disc space-y-2 text-base text-gray-700">
					<li>Provide and maintain our service</li>
					<li>Authenticate your account</li>
					<li>Sync your data across devices</li>
					<li>Track achievements and rewards</li>
					<li>Improve our app and user experience</li>
				</ul>
			</section>

			<!-- Data Storage -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Data Storage</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					Your data is stored securely using Firebase (Google Cloud Platform). We implement
					appropriate security measures to protect your personal information.
				</p>
			</section>

			<!-- Data Sharing -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Data Sharing</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We do not sell, trade, or rent your personal data to third parties. Your data is only
					shared with collaborators on lists you explicitly choose to share.
				</p>
			</section>

			<!-- Your Rights -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Your Rights</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">You have the right to:</p>
				<ul class="list-inside list-disc space-y-2 text-base text-gray-700">
					<li>Access your personal data</li>
					<li>Correct inaccurate data</li>
					<li>Delete your account and data</li>
					<li>Export your data</li>
					<li>Withdraw consent at any time</li>
				</ul>
			</section>

			<!-- Data Retention -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Data Retention</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We retain your data as long as your account is active. If you delete your account, we
					will delete your personal data within 30 days.
				</p>
			</section>

			<!-- Contact -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Contact Us</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					If you have any questions about this Privacy Policy, please contact us at: <a
						href="mailto:support@justdashapp.com"
						class="text-secondary hover:text-secondary-dark">support@justdashapp.com</a
					>
				</p>
			</section>
		</div>
	</main>

	<Footer />
</div>
