

<script>
	import Aside from "$lib/components/Aside.svelte";
	export let data;
	
	const {posts} = data;

	let post;
	let color = "red";
	let innerWidth = 0;
	let pos = { x: 0, y: 0 };

	
	function handleClick(e) {
		const index = parseInt(e.currentTarget.dataset.index);
		const p = posts[index];
		post = post && p.id === post.id ? undefined : p;
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="grid" on:mousemove={({ clientX: x, clientY: y }) => (pos = { x, y })}>
	<div id="header">Width: {innerWidth} X: {pos.x}, Y: {pos.y}</div>
	<Aside {post} />
	<div id="content" style:color>
		{#if posts}
			{#each posts as p, i}
				<section data-index={i} on:click={handleClick} class:selected={p.id === post?.id}>
					<div class="icon">
						<img class="icon-image" src={`${p.image.url}?w=100`} alt={p.image.alt} />
					</div>
					<div class="title">{p.title}</div>
				</section>
			{/each}
		{/if}
	</div>
	<div id="footer">Footer</div>
</div>

<style lang="scss">
	#grid {
		background-color: bisque;
		display: grid;

		grid-gap: var(--gutter);
		grid-template-columns: 3fr 7fr;
		grid-template-rows: 1fr 1000px 1fr;

		#header {
			grid-column: 1/3;
			background-color: pink;
		}

		#content {
			display: grid;
			grid-template-columns: 100%;
			grid-row: 2/3;
			grid-auto-rows: 50px;
			background-color: rgb(124, 180, 180);
			overflow-y: scroll;
			padding: 0;
			section {
				display: grid;
				grid-template-columns: 3rem 1fr;
				background-color: #000;
				cursor: pointer;
				div {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 5px;
					background-color: cadetblue;
				}
				.icon {
					grid-column: 1/2;
					justify-content: center;
					.icon-image {
						object-fit: cover;
						max-width: 100%;
					}
				}
				.title {
					grid-column: 2/2;
				}
				&.selected {
					text-transform: uppercase;
					color: rgb(255, 255, 255);
					.icon,
					.title {
						background-color: rgb(96, 135, 206);
					}
				}
			}
		}
		#footer {
			grid-row: 3/3;
			grid-column: 1/3;
			background-color: burlywood;
		}
	}
</style>