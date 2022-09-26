import { Query } from '@/interfaces/api';
import { AddType } from '@/interfaces/common';

const prepareQuery = (
	query: Query,
	defaultValue?: string,
	deletedQuery: AddType<Query, boolean> = {}
): URLSearchParams => {
	const newQuery = new URLSearchParams(defaultValue);

	Object.entries(query).forEach(([key, value]) => {
		const deletedValue = deletedQuery[key];
		if (!deletedValue && typeof value !== 'undefined' && value !== null) {
			newQuery.set(key, value.toString());
		} else if (deletedQuery) {
			newQuery.delete(key);
		}
	});

	return newQuery;
};

export default prepareQuery;
