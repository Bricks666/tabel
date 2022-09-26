export const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost';
export const API_PORT = process.env.REACT_APP_API_PORT || '3001';
export const API_URL =	process.env.REACT_APP_API_URL || `${API_HOST}:${API_PORT}`;

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
