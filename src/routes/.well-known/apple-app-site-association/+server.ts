const appleAppSiteAssociation = {
	applinks: {
		apps: [],
		details: [
			{
				appID: '8VZSVBTHF7.com.csgergo.dash',
				paths: ['/join/*']
			}
		]
	}
} as const;

export const GET = () => {
	return new Response(JSON.stringify(appleAppSiteAssociation), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store'
		}
	});
};
