export type Width =
	| `${number}px`
	| 'max-content'
	| `${number}%`
	| `${number}fr`;

export interface Column {
	readonly id: number;
	readonly key: string;
	readonly label: string;
	readonly width: Width;
}

export type Row = {
	readonly id: number;
	readonly [key: string]: RowAllowedTypes;
};

export type RowAllowedTypes = number | string | null;

export type OnPageChange = (page: number) => unknown;

export type OnDelete = (rowId: number) => unknown;
