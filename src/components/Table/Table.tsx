import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { RowAllowedTypes } from '@/interfaces/tables';

import styles from './Table.module.css';

export interface TableProps extends CommonProps {
	readonly rows: RowAllowedTypes[][];
	readonly titles: string[];
}

export const Table: React.FC<TableProps> = React.memo(function Table(props) {
	const { className, rows, titles, } = props;

	return (
		<table className={cn(styles.table, className)}>
			<TableHead titles={titles} />
			<TableBody rows={rows} />
		</table>
	);
});
