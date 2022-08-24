<script>
	export let data;
	const menu = data.allMenus
	
</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css">
</svelte:head>

<main>
	<ul>
		{#each menu as item }
			<li><a href="/">{item.title}</a></li>
		{/each}
	</ul>
	<slot/>
</main>

<style lang="scss">
	
	:root {
		--navbar-height: 65px;
	}
	main {
		padding: var(--padding);
		padding-top: var(--navbar-height);

	}
	ul{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		background-color: #fff;
		padding-left: var(--padding);
		max-height: var(--navbar-height);
		min-height: var(--navbar-height);
		margin: 0;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		li{
			margin-right: var(--gutter);
		}
	}

</style>