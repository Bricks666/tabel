import * as React from 'react';
import { QueryContext, CacheHandlerContext } from './context';
import { CacheModifier, QueryCache } from './types';

export const QueryProvider: React.FC<React.PropsWithChildren> = (props) => {
	const { children, } = props;
	const [cache, setCache] = React.useState<Record<string, QueryCache>>({});

	const modifyCache = React.useCallback<CacheModifier>((key, newCache) => {
		setCache((oldCache) => ({
			...oldCache,
			[key]: {
				...oldCache[key],
				...newCache,
			},
		}));
	}, []);

	return (
		<QueryContext.Provider value={cache}>
			<CacheHandlerContext.Provider value={modifyCache}>
				{children}
			</CacheHandlerContext.Provider>
		</QueryContext.Provider>
	);
};
