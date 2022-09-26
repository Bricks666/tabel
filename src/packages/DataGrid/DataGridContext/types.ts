import { Column, RowClickHandler, OnPageChange, Row } from '../types';

export interface DataGridContextValue {
	readonly rows: Array<Row>;
	readonly columns: Array<Column>;
	readonly page: number;
	readonly count: number;
	readonly onPageCount: number;
	readonly onPageChange: OnPageChange;
	readonly onDelete?: RowClickHandler;
	readonly onUpdate?: RowClickHandler;
}
