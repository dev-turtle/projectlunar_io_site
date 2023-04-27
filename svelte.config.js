import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

// export default {
//     kit: {
//         adapter: adapter({
//             // default options are shown. On some platforms
//             // these options are set automatically — see below
//             pages: 'build',
//             assets: 'build',
//             fallback: null,
//             precompress: false,
//             strict: true
//         })
//     }
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
   
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		prerender: {
			crawl: true
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;