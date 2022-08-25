import { browser } from '$app/env'
import { env } from '$lib/env'
import { InMemoryCache, gql } from '@apollo/client/core/index.js';
import { SvelteApolloClient } from "svelte-apollo-client";

const client = SvelteApolloClient({
  uri: 'https://graphql.datocms.com',
  cache: new InMemoryCache(),
  headers: { Authorization: `Bearer ${env.VITE_GRAPHQL_API_TOKEN}` },
  ssrMode: !browser
});

export {
  client, 
  gql
}