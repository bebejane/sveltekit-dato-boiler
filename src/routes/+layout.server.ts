import type { ServerLoadEvent } from "@sveltejs/kit";
import { apiQuery } from "$lib/client";
import { GlobalDocument } from "$lib/graphql";

export async function load({url} : ServerLoadEvent) {
  const {site} = await apiQuery<GlobalQuery>(GlobalDocument)

  return { site, pathname: url.pathname }
}