import { apiQuery } from "$lib/client";
import { AllPosts } from "$lib/graphql/posts.gql";
import type { ServerLoadEvent } from "@sveltejs/kit";

export async function load() {
  const { posts } = await apiQuery<AllPostsQuery>(AllPosts)
  return { posts }
}