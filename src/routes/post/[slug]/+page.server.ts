import { client } from "$lib/client";
import { Post } from "$lib/graphql/posts.gql";

export async function load({ params }) {
  
  let { data: { post } } = await client.query(Post, {variables:{slug:params.slug}}).result();
  return { post }
}