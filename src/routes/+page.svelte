<script lang="ts">
	import type { PageData } from './$types';
	import Col from './Col.svelte';
	import Row from './Row.svelte';
	export let data: PageData;
	const { site } = data;
</script>

<svelte:head>
	<title>{site.globalSeo?.siteName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Row>
	<Col label="1" size="20%"/>
	<Col label="2" size="20%"/>
	<Col label="3" size="20%"/>
	<Col label="4" size="20%"/>
	<Col label="5" size="20%"/>
</Row>
<Row>
	<Col label="1x" size="20%"/>
	<Col label="2x" size="30%"/>
	
</Row>

<style lang="scss">
	
</style>
