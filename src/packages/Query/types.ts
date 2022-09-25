export type QueryStatus = 'pending' | 'reject' | 'fulfilled';

export interface QueryCache<T = unknown> {
	readonly data?: T | undefined;
	readonly status: QueryStatus;
}

export type QueriesCache = Partial<Record<string, QueryCache>>;

export type Fetcher<T> = () => Promise<T>;

export type KeyType = string | number | boolean | null | undefined;

export type CacheModifier = (
	key: string,
	cache: Partial<QueryCache>
) => unknown;
