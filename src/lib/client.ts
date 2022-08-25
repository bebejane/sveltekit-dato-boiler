import { env } from '$lib/env'
import { InMemoryCache, gql } from '@apollo/client/core/core.cjs';
import { SvelteApolloClient } from "svelte-apollo-client";


const GRAPHQL_API_ENDPOINT = `https://graphql.datocms.com`;
const GRAPHQL_API_TOKEN = env.VITE_GRAPHQL_API_TOKEN;

const client = SvelteApolloClient({
  uri: GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
  headers: { Authorization: `Bearer ${GRAPHQL_API_TOKEN}` },
  ssrMode: true
});

export {
  client, 
  gql
}