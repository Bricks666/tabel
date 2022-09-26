import { Location } from 'react-router-dom';

export interface PrepareLinkParams {
	readonly path?: string;
	readonly query?: Record<string, string | undefined | number>;
	readonly keepOldQuery?: boolean;
}

const prepareLink = (location: Location, params: PrepareLinkParams): string => {
	const { hash, pathname, search, } = location;
	const { path, keepOldQuery = false, query = {}, } = params;
	const to = path ?? pathname;

	const newQuery = new URLSearchParams(keepOldQuery ? search : {});
	Object.entries(query).forEach(([key, value]) => {
		if (typeof value !== 'undefined' && value !== null) {
			newQuery.set(key, value.toString());
		}
	});
	return `${to}?${newQuery}#${hash}`;
};

export default prepareLink;
