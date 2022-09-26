export type QueryStatus = 'pending' | 'reject' | 'fulfilled' | 'uninitialized';

export interface QueryCache<T = unknown> {
	readonly data?: T | undefined;
	readonly status: QueryStatus;
}

export type QueriesCache = Partial<Record<string, QueryCache>>;

export type Fetcher<T, P extends Array<unknown> = never> = (
	...args: P
) => Promise<T>;

export type KeyType = string | number | boolean | null;

export type CacheModifier = (
	key: string,
	cache?: Partial<QueryCache>
) => unknown;
