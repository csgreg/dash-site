import type { PageServerLoad } from './$types';

// One page per invite, made on request.
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
	return {
		listId: params.id
	};
};
