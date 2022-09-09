<script lang="ts">
	import type { PageData } from './$types';	
	import Col from '$lib/components/Col.svelte';
	import Row from '$lib/components/Row.svelte';
	import Grid from '$lib/components/Grid.svelte';
	export let data: PageData;
	const { site } = data;
	
</script>


<svelte:head>
	<title>{site.globalSeo?.siteName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Grid>
	<Row>
		<Col label="1" size="20%"/>
		<Col label="2" size="20%"/>
		<Col label="3" size="20%"/>
		<Col label="4" size="20%"/>
		<Col label="5" size="20%"/>
	</Row>
	<Row>
		<Col label="1x" size="20%"/>
		<Col label="2x" size="80%"/>
	</Row>
	<Row>
		<Col label="1x" size="30%"/>
		<Col label="2x" size="30%"/>
		<Col label="2x" size="30%"/>
		<Col label="2x" size="10%"/>
	</Row>
</Grid>

<style lang="scss">
	
</style>
