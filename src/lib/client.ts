import { env } from '$lib/env'
import { SvelteApolloClient } from "svelte-apollo-client";
import ApolloClientCore from '@apollo/client/core/core.cjs';
const {InMemoryCache, gql} = ApolloClientCore;

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