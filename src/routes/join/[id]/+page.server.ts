import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Redirect to App Store with the list ID as a parameter
	// The app will handle the deep link using the apple-app-site-association
	throw redirect(302, `https://apps.apple.com/app/apple-store/id6755497276`);
};
