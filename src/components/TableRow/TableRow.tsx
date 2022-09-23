import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { RowAllowedTypes } from '@/interfaces/tables';

import styles from './TableRow.module.css';

export interface TableRowProps extends CommonProps {
	readonly elements: Array<RowAllowedTypes>;
}

export const TableRow: React.FC<TableRowProps> = React.memo(function TableRow(
	props
) {
	const { className, elements, } = props;
	return (
		<tr className={cn(styles.tableRow, className)}>
			{elements.map((element) => (
				<td className={styles.cell} key={element}>
					{element}
				</td>
			))}
		</tr>
	);
});
