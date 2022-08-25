import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {hydratable:true},
	preprocess: preprocess({
		scss: {
			prependData: `
				@use "sass:math";
				@import "./src/@styles/partials/mediaqueries"; 
				@import "./src/@styles/partials/styles";
				@import "./src/@styles/partials/variables";
				@import "./src/@styles/partials/fonts";
				@import "./src/@styles/partials/mixins";
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
