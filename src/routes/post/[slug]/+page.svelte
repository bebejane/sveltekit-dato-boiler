<script>
  import { page } from '$app/stores'
	export let data;	
  const { post } = data;
  console.log($page);
  
</script>

<svelte:head>
	<title>Post</title>
</svelte:head>

<div>
  /{$page.params.slug} = {post?.title}
  
</div>

<style lang="scss">

</style>