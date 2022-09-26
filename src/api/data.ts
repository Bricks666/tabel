import { Pagination, Query } from '@/interfaces/api';
import { DataModel } from '@/models/Row';
import prepareQuery from '@/utils/prepareQuery';
import { instance } from './core';

export interface GetDataApiResponse {
	readonly data: DataModel[];
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
	const query = prepareQuery(params as Query);
	const result = await instance.get<GetDataApiResponse>(`/data?${query}`);
	return result.data;
};

export const deleteDataApi = async (id: number): Promise<void> => {
	await instance.delete(`/data/${id}`);
};
