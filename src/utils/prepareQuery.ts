import { Query } from '@/interfaces/api';

const prepareQuery = (query: Query, defaultValue?: string): URLSearchParams => {
	const newQuery = new URLSearchParams(defaultValue);

	Object.entries(query).forEach(([key, value]) => {
		if (typeof value !== 'undefined' && value !== null) {
			newQuery.set(key, value.toString());
		}
	});

	return newQuery;
};

export default prepareQuery;
