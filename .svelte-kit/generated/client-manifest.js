export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const dictionary = {
	"": [~3],
	"posts": [~4],
	"settings": [~6],
	"posts/[slug]": [~5,[],[2]]
};