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

interface GetOneDataResponse {
	readonly data: DataModel;
}

export const getOneDataApi = async (
	id: number
): Promise<GetOneDataResponse> => {
	const result = await instance.get<GetOneDataResponse>(`/data/${id}`);
	return result.data;
};

export const deleteDataApi = async (id: number): Promise<void> => {
	await instance.delete(`/data/${id}`);
};

export interface CreateDataParams {
	readonly name: string;
	readonly count: number;
	readonly distance: number;
	readonly date: string;
}

export const createDataApi = async (
	params: CreateDataParams
): Promise<void> => {
	await instance.post('/data', params);
};

export interface UpdateDataApi {
  readonly id: number
	readonly name?: string;
	readonly count?: number;
	readonly distance?: number;
	readonly date?: string;
}

export const updateDataApi = async (
	params: UpdateDataApi
): Promise<void> => {
	const { id, ...body } = params;
	await instance.put(`/data/${id}`, body);
};
