import icon192 from './assets/icon-192.png';
import icon512 from './assets/icon-512.png';
const siteName = 'Test';
const siteBackgroundColor = '#000000';

const render = JSON.stringify(
	{
		background_color: siteBackgroundColor,
		display: 'minimal-ui',

		icons: [
			{ sizes: '192x192', src: icon192, type: 'image/png' },
			{ sizes: '512x512', src: icon512, type: 'image/png' }
		],

		name: siteName,
		start_url: '/',
		theme_color: siteBackgroundColor
	},
	null,
	0
);

export const GET = () =>
	new Response(render, {
		headers: { 'content-type': 'application/manifest+json' }
	});
