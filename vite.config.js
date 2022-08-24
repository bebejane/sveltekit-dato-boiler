import { sveltekit } from '@sveltejs/kit/vite';
import graphql from '@rollup/plugin-graphql';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),graphql()]
};

export default config;
