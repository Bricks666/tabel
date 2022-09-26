import { Column, Row } from '../types';

export interface DataGridContextValue {
	readonly rows: Array<Row>;
	readonly columns: Array<Column>;
	readonly page: number;
	readonly count: number;
	readonly onPageCount: number;
	readonly onPageChange: (page: number) => unknown;
	readonly onFilterSubmit?: (
		filters: Record<string, string | number | undefined>
	) => unknown;
}
