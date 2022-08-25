import { sveltekit } from '@sveltejs/kit/vite';
import graphql from '@rollup/plugin-graphql';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),graphql()],
	optimizeDeps: {
		exclude: ['@apollo/client', 'svelte-apollo'],
	},
	ssr: {
		noExternal: ['@apollo/client', 'svelte-apollo'],
	},
};

export default config;
