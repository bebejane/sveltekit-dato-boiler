<script lang="ts">
	import { apiQueryAsync } from '$lib/client';
	import { AllPostsDocument } from '$lib/graphql';
	
  const q = apiQueryAsync<AllPostsQuery>(AllPostsDocument, {query: AllPostsDocument, pollInterval: 30000});

</script>

{#if $q.loading}
  .
{:else if $q.error}
  . 
{:else if $q.data}
  {$q.data.posts.length}
{:else}
  0
{/if}