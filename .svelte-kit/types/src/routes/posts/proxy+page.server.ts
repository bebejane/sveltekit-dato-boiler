// @ts-nocheck
import { apiQuery} from "$lib/client";
import { AllPostsDocument } from "$lib/graphql";
import { invalid } from '@sveltejs/kit';
import type { Actions } from "./$types";

export async function load() {
  const { posts }  = await apiQuery<AllPostsQuery>(AllPostsDocument, { query: AllPostsDocument })
  return { posts }
}

export type Validation = {
  missing: {
    [key: string] : boolean
  },
  error: {
    [key: string] : string
  }
}
export type Success = {
  success: boolean
}

export const actions = {
    default: async({request}: import('./$types').RequestEvent) : Promise<Validation | Success> => {

      const validation : Validation = { missing:{}, error:{} }

      const data = await request.formData();
      const title = data.get('title')
      const content = data.get('content')
      

      for(const k of data.keys()){
        if(!data.get(k))
          validation.missing[k] = true;
      }
      
      if(Object.keys(validation.missing).length || Object.keys(validation.error).length) 
        return invalid<Validation>(400, validation);
      
      return { success: true }
    }
};null as any as Actions;