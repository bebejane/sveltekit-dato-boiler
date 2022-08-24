import { client } from "$lib/client";
import { MenuDocument } from "$lib/graphql";

export async function load() {

  const { data: { allMenus } } = await client.query(MenuDocument).result() as { data: MenuQuery }

  return { allMenus }
}