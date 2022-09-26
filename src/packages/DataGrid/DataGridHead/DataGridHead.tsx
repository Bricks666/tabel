import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DataGridContext } from '../DataGridContext';

import styles from './DataGridHead.module.css';
import { DataGridRow } from '../DataGridRow';

export interface DataGridHeadProps extends CommonProps {}

export const DataGridHead: React.FC<DataGridHeadProps> = React.memo(
	function DataGridHead(props) {
		const { className } = props;
		const { columns } = React.useContext(DataGridContext);
		const titles = React.useMemo<string[]>(
			() => columns.map(({ label }) => label),
			[columns]
		);

		return (
			<div className={cn(styles.head, className)}>
				<DataGridRow className={styles.row} elements={titles} />
			</div>
		);
	}
);
