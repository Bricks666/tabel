import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DataGridRow } from '../DataGridRow';
import { DataGridContext } from '../DataGridContext/context';

import styles from './DataGridBody.module.css';
import { RowAllowedTypes } from '../types';

export interface DataGridBodyProps extends CommonProps {}

export const DataGridBody: React.FC<DataGridBodyProps> = React.memo(
	function DataGridBody(props) {
		const { className, } = props;
		const { columns, rows, } = React.useContext(DataGridContext);

		const preparedRows = React.useMemo<Array<Array<RowAllowedTypes>>>(() => {
			return rows.map((row) => columns.map(({ key, }) => row[key]));
		}, [columns, rows]);

		return (
			<main className={cn(styles.tableBody, className)}>
				{preparedRows.map((row) => (
					<DataGridRow elements={row} />
				))}
			</main>
		);
	}
);
