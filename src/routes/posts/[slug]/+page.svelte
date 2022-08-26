<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { post } = data;
</script>

<div id="posts">
	{post?.title}
</div>

<style lang="scss">
</style>
