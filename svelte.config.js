import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		// You only need the next line if you *moved* app.html under src/
		// files: { appTemplate: 'app.html' }
	}
};
