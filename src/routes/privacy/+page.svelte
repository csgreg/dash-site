<!-- The same policy as in the app (Profile → Privacy Policy); change both together. -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/site';

	const updated = { iso: '2026-09-30', text: '30.09.2026' };
	const link = 'font-semibold text-brand underline-offset-4 hover:underline';
</script>

<Seo
	title="Privacy Policy | Yupdo"
	description="How Yupdo handles your data: what we collect, why, who your lists are shared with, how long we keep it, and your rights. We never sell your data."
	path="/privacy"
/>

<Header />

<main id="main" class="mx-auto max-w-3xl px-5 py-14 md:py-20">
	<h1 class="text-5xl">Privacy Policy</h1>
	<p class="mt-3 text-sm text-muted">
		Last updated: <time datetime={updated.iso}>{updated.text}</time>
	</p>

	<div
		class="prose prose-lg mt-10 max-w-none prose-headings:font-display prose-headings:font-black prose-a:text-brand"
	>
		<h2>Introduction</h2>
		<p>
			Welcome to Yupdo. We respect your privacy and are committed to protecting your personal data.
		</p>
		<p>
			This privacy policy will inform you about how we handle your personal data when you use our
			app.
		</p>

		<h2>Data We Collect</h2>
		<p>We collect and process the following data:</p>
		<ul>
			<li>Email address (for authentication)</li>
			<li>First name (optional, if provided)</li>
			<li>Lists and items you create</li>
			<li>App analytics data (e.g., app opens, screen views, feature usage)</li>
			<li>Device information (for app functionality)</li>
			<li>Feedback submissions (optional email, message, type, timestamp)</li>
			<li>Authentication data from Apple or Google (when using third-party sign-in)</li>
		</ul>
		<p>
			Text you paste and pictures you choose in "Add from Text" are read on your phone. Pictures are
			never uploaded; only the items you decide to add are saved.
		</p>

		<h2>How We Use Your Data</h2>
		<p>We use your data to:</p>
		<ul>
			<li>Provide and maintain our service</li>
			<li>Authenticate your account</li>
			<li>Sync your data across devices</li>
			<li>Show streaks and progress on your lists</li>
			<li>Improve our app and user experience</li>
		</ul>

		<h2>Data Storage</h2>
		<p>
			Your data is stored securely using Firebase (Google Cloud Platform). We implement appropriate
			security measures to protect your personal information.
		</p>
		<p>
			We also cache data locally on your device for offline access. This cached data syncs
			automatically when you're online and is deleted when you uninstall the app or delete your
			account.
		</p>

		<h2>Third-Party Services</h2>
		<p>We use the following third-party services to provide our app:</p>
		<ul>
			<li>
				<strong>Firebase (Google):</strong> Authentication, database, cloud storage, and analytics.
				Privacy Policy:
				<a href="https://firebase.google.com/support/privacy" rel="noopener noreferrer" class={link}
					>firebase.google.com/support/privacy</a
				>
			</li>
			<li>
				<strong>Sign in with Apple:</strong> For authentication. Privacy Policy:
				<a href="https://www.apple.com/legal/privacy" rel="noopener noreferrer" class={link}
					>apple.com/legal/privacy</a
				>
			</li>
			<li>
				<strong>Google Sign-In:</strong> For authentication. Privacy Policy:
				<a href="https://policies.google.com/privacy" rel="noopener noreferrer" class={link}
					>policies.google.com/privacy</a
				>
			</li>
		</ul>
		<p>
			These services may collect device and usage information as described in their privacy
			policies.
		</p>
		<p>You can disable analytics collection anytime in Profile settings.</p>

		<h2>Data Sharing</h2>
		<p>We do not sell, trade, or rent your personal data to third parties.</p>
		<p>Your data may be shared in these limited circumstances:</p>
		<ul>
			<li>
				<strong>List Collaborators:</strong> When you share a list, collaborators can view the list name
				and items, who added or completed each item and when, your user ID, and the first name you have
				set in Yupdo (not your email or other personal information). Your first name is stored on a list
				only once it is shared, and is removed when you leave the list or delete your account. They can
				also see due times, repeat schedules, who an item is for, and the answer to a request (for example
				"Can't today").
			</li>
			<li>
				<strong>Service Providers:</strong> Firebase/Google processes your data to provide cloud storage
				and authentication
			</li>
			<li>
				<strong>Legal Requirements:</strong> We may disclose data if required by law or to protect our
				rights
			</li>
		</ul>

		<h2>Your Rights</h2>
		<p>You have the right to:</p>
		<ul>
			<li>Access your personal data</li>
			<li>Correct inaccurate data</li>
			<li>Delete your account and data</li>
			<li>Export your data</li>
			<li>Withdraw consent at any time</li>
		</ul>

		<h2>Data Retention</h2>
		<p>We retain your data as long as your account is active.</p>
		<p>
			Items you delete, clear or remove from a list are kept in a hidden archive for 30 days, so a
			mistake can be fixed, and are then deleted automatically the next time the list is opened.
			Past occurrences of repeating items are kept the same way for 30 days, to count the list's
			streak. Deleting a list or your account deletes its archive and its repeat schedules too.
		</p>
		<p>
			Reminders are scheduled by Yupdo on your phone and are not sent through our servers. "Remind
			me" times and quiet hours stay on your phone.
		</p>
		<p>
			If you delete your account, we will immediately delete your user profile and all lists you
			created.
		</p>
		<p>
			For shared lists where you're a member (but not the creator), you will be removed from the
			list, but the list itself will remain for other collaborators.
		</p>

		<h2>Legal Basis (EU Users)</h2>
		<p>
			For users in the European Union, we process your data based on your consent (provided when you
			accept this Privacy Policy) and to fulfill our contract to provide the app service.
		</p>

		<h2>Contact Us</h2>
		<p>
			If you have any questions about this Privacy Policy, please contact us at:
			<a href={`mailto:${SITE.email}`} class={link}>{SITE.email}</a>
		</p>
	</div>
</main>

<Footer />
