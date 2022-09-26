import { FilterType } from '@/interfaces/tables';
import { Row } from '@/models/Row';

export const columns: (keyof Row)[] = [
	'id',
	'name',
	'count',
	'distance',
	'date'
];

export const searchableColumns = columns.filter(
	(column) => column !== 'date' && column !== 'id'
);

export const filterTypes: FilterType[] = ['contain', 'equal', 'less', 'great'];

export const filterTypeNamesMap: Record<FilterType, string> = {
	contain: 'Содержит',
	equal: 'Равно',
	great: 'Больше',
	less: 'Меньше',
};
