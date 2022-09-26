export interface Column {
	readonly id: number;
	readonly key: string;
	readonly label: string;
	readonly width: number | 'max-content' | `${string}%`;
}

export type Row = {
	readonly id: number;
	readonly [key: string]: RowAllowedTypes;
};

export type RowAllowedTypes = number | string | null;

export type OnPageChange = (page: number) => unknown;

export type OnDelete = (rowId: number) => unknown;
