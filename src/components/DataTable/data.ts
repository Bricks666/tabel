import { Column } from '@/packages/DataGrid';

export const columns: Column[] = [
	{
		id: 1,
		key: 'id',
		label: 'Id',
		width: 110,
	},

	{
		id: 2,
		key: 'name',
		label: 'Name',
		width: 150,
	},

	{
		id: 3,
		key: 'count',
		label: 'Count',
		width: 150,
	},

	{
		id: 4,
		key: 'distance',
		label: 'Distance',
		width: 150,
	},
	{
		id: 5,
		key: 'date',
		label: 'Date',
		width: 300,
	},
];
