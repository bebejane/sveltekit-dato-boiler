<script>
  import { createEventDispatcher } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown'
  const dispatch = createEventDispatcher();
  
	export let post;
	
</script>

<div id="aside" on:click={(e)=> dispatch('click', e)}>
  {#if post}
    <h1>{post.title}</h1>
    <SvelteMarkdown source={post.content}/>
    <a href={`/post/${post.slug}`}>Link</a>
  {/if}
</div>

<style lang="scss">
  #aside{
    background-color: rgb(239, 181, 239);
    grid-row: 2/3;
    overflow: scroll;
    padding: 20px;
  }
</style>