<script lang="ts">
	import type { PageData } from '../../../.svelte-kit/types/src/routes/post/$types';
	export let data: PageData;
	const { posts } = data;
</script>

<ul id="posts">

	{#each posts as post}
		<li>
			<a href={`/posts/${post.slug}`}>{post.title}</a>
		</li>
	{/each}
</ul>
<style lang="scss">
</style>
