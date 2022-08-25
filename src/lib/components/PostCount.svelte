<script lang="ts">
	import { apiQuery } from '$lib/client';
	import { AllPostsDocument } from '$lib/graphql';
	const q = apiQuery<AllPostsQuery>(AllPostsDocument, {
		query: AllPostsDocument,
		pollInterval: 30000
	});
</script>

{#if $q.loading}
  .
{:else if $q.error}
  {$q.error}
{:else if $q.data}
  {$q.data.posts.length}
{:else}
  0
{/if}