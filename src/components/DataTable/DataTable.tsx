import * as React from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { DataGrid, Row } from '@/packages/DataGrid';
import { columns } from './data';
import useDataPagination from './hooks/useDataPagination';
import useData from './hooks/useData';
import { useMutation } from '@/packages/Query';
import { deleteDataApi } from '@/api/data';
import useEvent from '@/hooks/useEvent';
import prepareLink from '@/utils/prepareLink';
import { GET_PARAMS } from '@/consts/api';
import { POPUPS } from '@/consts/popups';

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
		const location = useLocation();
		const navigate = useNavigate();
		const { mutate, } = useMutation('data', deleteDataApi);
		const pagination = useDataPagination();
		const { data: rows, onPageCount, totalCount, } = data;
		const onUpdate = useEvent((rowId: number) => {
			const path = prepareLink(location, {
				query: {
					[GET_PARAMS.popup]: POPUPS.updateRow,
					[GET_PARAMS.rowId]: rowId,
				},
			});
			navigate(path);
		});
		return (
			<DataGrid
				className={cn(styles.dataTable, className)}
				columns={columns}
				rows={rows as unknown as Row[]}
				count={totalCount}
				onPageCount={onPageCount}
				onDelete={mutate}
				onUpdate={onUpdate}
				{...pagination}
			/>
		);
	}
);
