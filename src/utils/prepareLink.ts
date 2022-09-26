import { Location } from 'react-router-dom';
import prepareQuery from './prepareQuery';

export interface PrepareLinkParams {
	readonly path?: string;
	readonly query?: Record<string, string | undefined | number>;
	readonly keepOldQuery?: boolean;
}

const prepareLink = (location: Location, params: PrepareLinkParams): string => {
	const { hash, pathname, search, } = location;
	const { path, keepOldQuery = false, query = {}, } = params;
	const to = path ?? pathname;

	const newQuery = prepareQuery(query, keepOldQuery ? search : '');
	return `${to}?${newQuery}#${hash}`;
};

export default prepareLink;
