import { client } from "$lib/client";
import { AllPosts } from "$lib/graphql/posts.gql";

export async function load({ params }) {
  let { data: { posts } } = await client.query(AllPosts).result();
  return { posts }
}