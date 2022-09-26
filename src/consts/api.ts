export const API_URL = process.env.API_URL || 'http://localhost:3001';

export interface GetParams {
	readonly filterType: string;
	readonly filterValue: string;
	readonly filterBy: string;
	readonly rowId: string;
	readonly popup: string;
}

export const GET_PARAMS: GetParams = {
	filterBy: 'fb',
	filterType: 'ft',
	filterValue: 'fv',
	popup: 'pp',
	rowId: 'ri',
};
