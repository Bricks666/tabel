export interface Pagination {
	readonly page?: number;
	readonly count?: number;
}

export type Query = {
	readonly [key: string]: string | number | undefined | null;
};
