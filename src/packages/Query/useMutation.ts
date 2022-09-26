import { useCallback, useContext } from 'react';
import { CacheHandlerContext, QueryContext } from './context';
import { Fetcher, KeyType } from './types';

export type Mutate<P extends Array<unknown>> = (
	...args: P
) => Promise<unknown> | unknown;

export interface UseMutationResult<P extends Array<unknown>> {
	readonly mutate: Mutate<P>;
}

const useMutation = <P extends Array<unknown>>(
	key: KeyType,
	fetcher: Fetcher<unknown, P>
): UseMutationResult<P> => {
	const cache = useContext(QueryContext);
	const modifyCache = useContext(CacheHandlerContext);
	const mutate = useCallback(
		async (...args: P) => {
			try {
				await fetcher(...args);
				const invalidKeys = Object.keys(cache).filter((cacheKey) => {
					return cacheKey.includes(String(key));
				});
				invalidKeys.forEach((invalidKey) =>
					modifyCache(invalidKey, { status: 'uninitialized', }));
			} catch (error) {
				console.log('error', error);
			}
		},
		[key, cache]
	);

	return {
		mutate,
	};
};

export default useMutation;
