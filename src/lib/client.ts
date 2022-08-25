import { browser } from '$app/env'
import { env } from '$lib/env'
import { InMemoryCache, gql, type DocumentNode, type WatchQueryOptions } from '@apollo/client/core/index.js';
import { SvelteApolloClient, type ReadableQuery } from "svelte-apollo-client";

const client = SvelteApolloClient({
  uri: 'https://graphql.datocms.com',
  cache: new InMemoryCache(),
  headers: { Authorization: `Bearer ${env.VITE_GRAPHQL_API_TOKEN}` },
  ssrMode: !browser,
  defaultOptions:{
    watchQuery:{
      pollInterval:1000
    }
  }
});

const apiQuery = <QueryType>(doc : DocumentNode, opt : WatchQueryOptions) : ReadableQuery<QueryType> => {
  return client.query(doc, opt)
}

export {
  client, 
  gql,
  apiQuery
}