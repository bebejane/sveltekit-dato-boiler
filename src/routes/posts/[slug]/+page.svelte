<script lang="ts">
	import type { PageData } from '../../../../.svelte-kit/types/src/routes/post/[slug]/$types';
	export let data: PageData;
	const { post } = data;
</script>

<div id="posts">
	{post.title}
</div>

<style lang="scss">
</style>
