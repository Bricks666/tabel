import { Row } from '@/packages/DataGrid';

export interface DataModel extends Row {
	readonly id: number;
	readonly name: string;
	readonly count: number;
	readonly distance: number;
	readonly date: string;
}
