import { useContext, useEffect, useCallback } from 'react';
import { CacheHandlerContext, QueryContext } from './context';
import { Fetcher, KeyType, QueryCache } from './types';

export interface UseQueryResult<T> {
	readonly data?: T;
	readonly isLoading: boolean;
	readonly isError: boolean;
	readonly isSuccess: boolean;
}

const requestInFly = new Set<string>();

const useQuery = <T>(
	keys: Array<KeyType | undefined>,
	fetcher: Fetcher<T>
): UseQueryResult<T> => {
	const key = JSON.stringify(keys);
	const modifyCache = useContext(CacheHandlerContext);
	const cache = useContext(QueryContext);
	const queryCache: QueryCache<T> = (cache[key] as QueryCache<T>) || {
		status: 'uninitialized',
		data: undefined,
	};

	const isUninitialized = queryCache.status === 'uninitialized';

	const request = useCallback(async () => {
		if (requestInFly.has(key)) {
			return;
		}

		requestInFly.add(key);
		try {
			modifyCache(key, {
				status: 'pending',
			});
			const data = (await fetcher()) as T;
			modifyCache(key, { data, status: 'fulfilled', });
		} catch {
			modifyCache(key, {
				status: 'reject',
			});
		} finally {
			requestInFly.delete(key);
		}
	}, [fetcher, key]);

	useEffect(() => {
		if (isUninitialized) {
			request();
		}
	}, [isUninitialized, request]);

	return {
		isError: queryCache.status === 'reject',
		isLoading: queryCache.status === 'pending',
		isSuccess: queryCache.status === 'fulfilled',
		data: queryCache.data as T | undefined,
	};
};

export default useQuery;
