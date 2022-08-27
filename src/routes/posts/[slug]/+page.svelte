<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown'
	import { Image } from 'svelte-datocms'
	export let data: PageData;
	const { post } = data;
	
</script>
	

<div id="posts">
	<h1>{post?.title}</h1>
	<SvelteMarkdown source={post?.content}/>
	<div id="image">
		<Image data={post?.image.responsiveImage}/>
	</div>
</div>

<style lang="scss">
	#posts{
		position: relative;
	}
	#image{		
		width: 100%;
		
	}
</style>
