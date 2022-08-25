import { client } from "$lib/client";
import { GlobalDocument } from "$lib/graphql";

export async function load() {

  const { data: { site } } = await client.query(GlobalDocument).result() as { data: GlobalQuery }

  return { site }
}