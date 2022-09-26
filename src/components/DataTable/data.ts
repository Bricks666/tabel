import { Column } from '@/packages/DataGrid';

export const columns: Column[] = [
	{
		id: 1,
		key: 'id',
		label: 'Id',
		width: '5%',
	},

	{
		id: 2,
		key: 'name',
		label: 'Name',
		width: '15%',
	},

	{
		id: 3,
		key: 'count',
		label: 'Count',
		width: '15%',
	},

	{
		id: 4,
		key: 'distance',
		label: 'Distance',
		width: '15%',
	},
	{
		id: 5,
		key: 'date',
		label: 'Date',
		width: '20%',
	}
];
