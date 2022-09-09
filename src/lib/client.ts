import { browser } from '$app/environment'
import { env } from './env';
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

const apiQuery = async <QueryType>(doc: DocumentNode, opt?: WatchQueryOptions) : Promise<QueryType> => {
  const res = await apiQueryAsync<QueryType>(doc, opt).result()
  return res.data
}

const apiQueryAsync = <QueryType>(doc: DocumentNode, opt?: WatchQueryOptions) : ReadableQuery<QueryType> => {
  return client.query(doc, opt)
}

export {
  client, 
  gql,
  apiQuery,
  apiQueryAsync
}