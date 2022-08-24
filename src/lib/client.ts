import { browser } from '$app/env'
import { env } from '$lib/env'
import { InMemoryCache } from "@apollo/client/core";
import { SvelteApolloClient } from "svelte-apollo-client";
import { gql } from "@apollo/client/core";

const GRAPHQL_API_ENDPOINT = `https://graphql.datocms.com`;
const GRAPHQL_PREVIEW_API_ENDPOINT = `https://graphql.datocms.com/preview`;
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