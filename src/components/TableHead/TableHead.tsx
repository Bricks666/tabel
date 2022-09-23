import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './TableHead.module.css';

export interface TableHeadProps extends CommonProps {
	readonly titles: string[];
}

export const TableHead: React.FC<TableHeadProps> = React.memo(
	function TableHead(props) {
		const { className, titles, } = props;
		return (
			<thead className={cn(styles.tableHead, className)}>
				<tr>
					{titles.map((title) => (
						<th className={styles.cell} key={title}>
							{title}
						</th>
					))}
				</tr>
			</thead>
		);
	}
);
