import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { RowAllowedTypes } from '@/interfaces/tables';

import styles from './TableBody.module.css';
import { TableRow } from '../TableRow';

export interface TableBodyProps extends CommonProps {
	readonly rows: RowAllowedTypes[][];
}

export const TableBody: React.FC<TableBodyProps> = React.memo(
	function TableBody(props) {
		const { className, rows, } = props;
		return (
			<tbody className={cn(styles.tableBody, className)}>
				{rows.map((row) => (
					<TableRow elements={row} />
				))}
			</tbody>
		);
	}
);
