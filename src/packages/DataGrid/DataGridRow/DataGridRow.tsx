import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { RowAllowedTypes } from '../types';
import { DataGridContext } from '../DataGridContext';

import styles from './DataGridRow.module.css';

export interface DataGridRowProps extends CommonProps {
	readonly elements: Array<RowAllowedTypes>;
}

export const DataGridRow: React.FC<DataGridRowProps> = React.memo(
	function DataGridRow(props) {
		const { className, elements, } = props;
		const { columns, } = React.useContext(DataGridContext);

		const gridTemplateColumns: string = columns
			.map(({ width, }) => `${width}px`)
			.join(' ');

		return (
			<div
				className={cn(styles.row, className)}
				style={{
					gridTemplateColumns,
				}}
			>
				{elements.map((element) => (
					<div className={styles.cell} key={element}>
						{element}
					</div>
				))}
			</div>
		);
	}
);
