import { useContext, useEffect } from 'react';
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
	keys: KeyType[],
	fetcher: Fetcher<T>
): UseQueryResult<T> => {
	const key = JSON.stringify(keys);
	const modifyCache = useContext(CacheHandlerContext);
	const cache = useContext(QueryContext);
	const queryCache: QueryCache<T> = (cache[key] as QueryCache<T>) || {
		status: 'pending',
		data: undefined,
	};

	useEffect(() => {
		const request = async () => {
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
			}
		};
		request();
	}, [fetcher, key]);

	return {
		isError: queryCache.status === 'reject',
		isLoading: queryCache.status === 'pending',
		isSuccess: queryCache.status === 'fulfilled',
		data: queryCache.data as T | undefined,
	};
};

export default useQuery;
