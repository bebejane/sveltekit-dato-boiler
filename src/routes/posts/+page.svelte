<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;

	$: console.log(form, typeof form);
	const { posts } = data;
	
</script>

<ul id="posts">
	{#each posts as post}
		<li>
			<a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a>
		</li>
	{/each}
</ul>

<form method="POST" use:enhance>
	<label for="title">Title</label>
	{#if form?.missing.title}
		<div class="missing">Missing title</div>
	{/if}
	<input name="title" type="text" />
	<label for="content">Content</label>
	{#if form?.missing.content}
		<div class="missing">Missing Content</div>
	{/if}
	<textarea name="content" />
	<button>Add</button>
</form>

<style lang="scss">
	form {
		margin-top: 20px;
		display: block;
		flex-direction: column;
		input,
		textarea {
			display: block;
		}
	}
	ul {
		list-style: none;
	}
	.missing {
		display: block;
		font-size: 14px;
		color: red;
	}
</style>
