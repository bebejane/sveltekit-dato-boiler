import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {hydratable:true},
	preprocess: preprocess({
		scss: {
			prependData: `
				@use "sass:math";
				@import "./src/lib/styles/partials/mediaqueries"; 
				@import "./src/lib/styles/partials/styles";
				@import "./src/lib/styles/partials/variables";
				@import "./src/lib/styles/partials/fonts";
				@import "./src/lib/styles/partials/mixins";
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
