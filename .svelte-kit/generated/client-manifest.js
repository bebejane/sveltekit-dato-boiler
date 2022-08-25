export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')
];

export const dictionary = {
	"": [~2],
	"posts": [~3],
	"settings": [~5],
	"posts/[slug]": [~4]
};