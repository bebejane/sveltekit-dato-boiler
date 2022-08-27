<script>
	import '$lib/styles/index.scss';
	import PostCount from '$lib/components/PostCount.svelte';
</script>

<nav>
	<ul>
		<li>
			<a sveltekit:prefetch href="/">Home</a>
			<a sveltekit:prefetch href="/settings">Settings</a>
			<a sveltekit:prefetch href="/posts">Posts (<PostCount/>)</a>
		</li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style lang="scss">

	:global(img){
		width: 100%;
	}
	main {
		padding-left: var(--outer-margin);
		padding-right: var(--outer-margin);
		padding-top: calc(var(--navbar-height));
		margin-top: var(--outer-margin);
	}

	a {
		color: $white;
		font-size: 14px;
	}

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		color: #fff;
		background-color: rgb(65, 33, 80);
		min-height: calc(var(--navbar-height));
		z-index: 100;
		@include mq($until: tablet) {
			background-color: $black !important;
		}
	}

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: calc(var(--navbar-height));
		margin: 0;
		padding-left: 20px;
		list-style: none;
	}
</style>
