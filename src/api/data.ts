import { Pagination } from '@/interfaces/api';
import { Row } from '@/models/Row';
import { instance } from './core';

export interface GetDataApiResponse {
	readonly data: Row[];
	readonly totalCount: number;
	readonly onPageCount: number;
}

export interface GetDataApiParams extends Pagination {
	readonly filterBy?: string;
	readonly filterValue?: string;
	readonly filterType?: string;
}

export const getDataApi = async (
	params: GetDataApiParams
): Promise<GetDataApiResponse> => {
	const query = new URLSearchParams({});
	Object.entries(params).forEach(([key, value]) => {
		console.log(key, value);
		if (typeof value !== 'undefined' && value !== null) {
			query.set(key, value);
		}
	});
	const result = await instance.get<GetDataApiResponse>(`/data?${query}`);
	return result.data;
};
