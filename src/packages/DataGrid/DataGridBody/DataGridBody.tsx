import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DataGridRow, Row } from '../DataGridRow';
import { DataGridContext } from '../DataGridContext/context';

import styles from './DataGridBody.module.css';

export interface DataGridBodyProps extends CommonProps {}

export const DataGridBody: React.FC<DataGridBodyProps> = React.memo(
	function DataGridBody(props) {
		const { className, } = props;
		const { columns, rows, onDelete, } = React.useContext(DataGridContext);

		const preparedRows = React.useMemo<Array<Row>>(() => {
			return rows.map((row) => {
				const elements = columns.map(({ key, }) => row[key]);
				return {
					elements,
					rowId: row.id,
				};
			});
		}, [columns, rows]);

		return (
			<main className={cn(styles.tableBody, className)}>
				{preparedRows.map((row) => (
					<DataGridRow
						{...row}
						columns={columns}
						onDelete={onDelete}
						key={row.rowId}
					/>
				))}
			</main>
		);
	}
);
