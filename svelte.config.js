import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	compilerOptions: {hydratable:true},
	preprocess: preprocess({
		scss: {
			prependData: `
				@use "sass:math";
				@import "./static/styles/partials/mediaqueries"; 
				@import "./static/styles/partials/styles";
				@import "./static/styles/partials/variables";
				@import "./static/styles/partials/fonts";
				@import "./static/styles/partials/mixins";
			`,
			sassOptions: { },
		}
	}),
	kit: {
    adapter: vercel({
      edge: false,
		  external: [],
      split: false
    })
  }
};

export default config;
