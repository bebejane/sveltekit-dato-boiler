import { client } from "$lib/client";
import { AllPostsDocument } from "$lib/graphql";

export async function load() {

  const { data: { posts } } = await client.query(AllPostsDocument).result() as { data: AllPostsQuery }

  return { posts }
}