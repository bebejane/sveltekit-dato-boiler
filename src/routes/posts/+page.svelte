<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { posts } = data;
</script>

<ul id="posts">

	{#each posts as post}
		<li>
			<a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a>
		</li>
	{/each}
</ul>
<style lang="scss">
	ul{
		list-style: none;
	}
</style>
