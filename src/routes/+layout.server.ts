import { apiQuery } from "$lib/client";
import { GlobalDocument } from "$lib/graphql";

export async function load() {

  const {site} = await apiQuery<GlobalQuery>(GlobalDocument)

  return { site }
}