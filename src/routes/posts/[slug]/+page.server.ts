import { client } from "$lib/client";
import { PostDocument } from "$lib/graphql";

export async function load({params}) {

  const { data: { post } } = await client.query(PostDocument, {variables:{slug:params.slug}}).result() as { data: PostQuery }

  return { post }
}