export interface Pagination {
	readonly page?: number;
	readonly count?: number;
}

export type Query = {
	readonly [key: string]: QueryValue;
};

export type QueryValue = string | number | undefined | null;
