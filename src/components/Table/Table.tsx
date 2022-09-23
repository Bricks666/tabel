import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { TableHead } from '../TableHead';
import { TableBody } from '../TableBody';
import { RowAllowedTypes } from '@/interfaces/tables';
import { data } from '@/mocks/data';

import styles from './Table.module.css';

export type TableProps = CommonProps

export const Table: React.FC<TableProps> = React.memo(function Table(props) {
	const { className, } = props;

	const titles = Object.keys(data[0]);
	const rows = React.useMemo<RowAllowedTypes[][]>(
		() => data.slice(0, 50).map((row) => Object.values(row)),
		[]
	);

	return (
		<table className={cn(styles.table, className)}>
			<TableHead titles={titles} />
			<TableBody rows={rows} />
		</table>
	);
});
