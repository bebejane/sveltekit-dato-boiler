import { apiQuery } from "$lib/client";
import { PostDocument } from "$lib/graphql";
import type { ServerLoadEvent } from "@sveltejs/kit";

export async function load({ params }: ServerLoadEvent) {
  const { post } = await apiQuery<PostQuery>(PostDocument, { query: PostDocument, variables: { slug: params.slug } })
  return { post }
}