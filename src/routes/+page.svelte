<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { site } = data;
</script>

<svelte:head>
	<title>{site.globalSeo?.siteName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="home">
	{site.globalSeo?.siteName}
</div>

<style lang="scss">
	#home {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
