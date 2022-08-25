import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}

export type Errors = null;
export type PageData = import('../$types.js').LayoutData;
export type PageServerData = null;
export type PageServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<RouteParams, import('../$types.js').LayoutServerData, OutputData>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type Action = Kit.Action<RouteParams>