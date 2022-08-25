import type * as Kit from '@sveltejs/kit';

interface RouteParams extends Partial<Record<string, string>> {}
interface LayoutParams extends RouteParams {}

export type Errors = null;
export type PageData = Omit<LayoutData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.server.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.server.js').load>>>;
export type PageServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+page.server.js').load>>>;
export type PageServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<RouteParams, LayoutServerData, OutputData>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type Action = Kit.Action<RouteParams>
export type LayoutData = Omit<Record<never, never>, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.server.js').load>>>> & Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.server.js').load>>>;
export type LayoutServerData = Kit.AwaitedProperties<Awaited<ReturnType<typeof import('../../../../src/routes/+layout.server.js').load>>>;
export type LayoutServerLoad<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.ServerLoad<LayoutParams, Record<never, never>, OutputData>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];