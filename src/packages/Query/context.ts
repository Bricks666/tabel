import { createContext } from 'react';
import { CacheModifier, QueriesCache } from './types';

export const QueryContext = createContext<QueriesCache>({});

export const CacheHandlerContext = createContext<CacheModifier>(
	() => undefined
);
