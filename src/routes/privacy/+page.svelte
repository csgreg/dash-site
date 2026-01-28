<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		<p class="mb-10 text-sm text-gray-500">Last updated: 28.01.2026</p>

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
					<li>App analytics data (e.g., app opens, screen views, feature usage)</li>
					<li>Device information (for app functionality)</li>
					<li>Feedback submissions (optional email, message, type, timestamp)</li>
					<li>Authentication data from Apple or Google (when using third-party sign-in)</li>
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
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We also cache data locally on your device for offline access. This cached data syncs
					automatically when you're online and is deleted when you uninstall the app or delete your
					account.
				</p>
			</section>

			<!-- Third-Party Services -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Third-Party Services</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We use the following third-party services to provide our app:
				</p>
				<div class="mb-4 space-y-4 text-base leading-relaxed text-gray-700">
					<div>
						<strong>Firebase (Google):</strong> Authentication, database, cloud storage, and
						analytics
						<br />
						• Privacy Policy:
						<a
							href="https://firebase.google.com/support/privacy"
							target="_blank"
							rel="noopener noreferrer"
							class="text-secondary hover:text-secondary-dark"
							>firebase.google.com/support/privacy</a
						>
					</div>
					<div>
						<strong>Sign in with Apple:</strong> For authentication
						<br />
						• Privacy Policy:
						<a
							href="https://www.apple.com/legal/privacy"
							target="_blank"
							rel="noopener noreferrer"
							class="text-secondary hover:text-secondary-dark">apple.com/legal/privacy</a
						>
					</div>
					<div>
						<strong>Google Sign-In:</strong> For authentication
						<br />
						• Privacy Policy:
						<a
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
							class="text-secondary hover:text-secondary-dark">policies.google.com/privacy</a
						>
					</div>
					<p>
						These services may collect device and usage information as described in their privacy
						policies.
					</p>
					<p>You can disable analytics collection anytime in Profile settings.</p>
				</div>
			</section>

			<!-- Data Sharing -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Data Sharing</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					We do not sell, trade, or rent your personal data to third parties.
				</p>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					Your data may be shared in these limited circumstances:
				</p>
				<ul class="list-inside list-disc space-y-2 text-base text-gray-700">
					<li>
						<strong>List Collaborators:</strong> When you share a list, collaborators can view the list
						name, items, and your user ID (not your email or personal information)
					</li>
					<li>
						<strong>Service Providers:</strong> Firebase/Google processes your data to provide cloud
						storage and authentication
					</li>
					<li>
						<strong>Legal Requirements:</strong> We may disclose data if required by law or to protect
						our rights
					</li>
				</ul>
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
					We retain your data as long as your account is active.
				</p>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					If you delete your account, we will immediately delete your user profile and all lists you
					created.
				</p>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					For shared lists where you're a member (but not the creator), you will be removed from the
					list but the list itself will remain for other collaborators.
				</p>
			</section>

			<!-- Legal Basis -->
			<section>
				<h2 class="mb-3 text-2xl font-bold text-gray-900">Legal Basis (EU Users)</h2>
				<p class="mb-4 text-base leading-relaxed text-gray-700">
					For users in the European Union, we process your data based on your consent (provided when
					you accept this Privacy Policy) and to fulfill our contract to provide the app service.
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
