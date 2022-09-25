import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Table } from '../Table';
import { columns } from '@/consts/dataTable';
import useData from '@/hooks/useData';

import styles from './DataTable.module.css';

export type DataTableProps = CommonProps;

export const DataTable: React.FC<DataTableProps> = React.memo(
	function DataTable(props) {
		const { className } = props;
		const { data } = useData();
		const rows = React.useMemo(() => {
			if (!data) {
				return [];
			}
			return data.data.map((row) => columns.map((column) => row[column]));
		}, [data]);

		return (
			<Table
				className={cn(styles.dataTable, className)}
				titles={columns}
				rows={rows}
			/>
		);
	}
);
