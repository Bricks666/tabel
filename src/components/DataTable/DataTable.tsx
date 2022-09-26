import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DataGrid } from '@/packages/DataGrid';
import { columns } from './data';
import useDataPagination from './hooks/useDataPagination';
import useData from './hooks/useData';
import { useMutation } from '@/packages/Query';
import { deleteDataApi } from '@/api/data';

import styles from './DataTable.module.css';

export type DataTableProps = CommonProps;

export const DataTable: React.FC<DataTableProps> = React.memo(
	function DataTable(props) {
		const { className, } = props;
		const {
			data = {
				data: [],
				onPageCount: 50,
				totalCount: 0,
			},
		} = useData();
		const { mutate, } = useMutation('data', deleteDataApi);
		const pagination = useDataPagination();
		const { data: rows, onPageCount, totalCount, } = data;
		return (
			<DataGrid
				className={cn(styles.dataTable, className)}
				columns={columns}
				rows={rows}
				count={totalCount}
				onPageCount={onPageCount}
				onDelete={mutate}
				{...pagination}
			/>
		);
	}
);
