/* eslint-disable prefer-template */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { OnDelete } from '../types';
import { Button } from '@/components/Button';
import { Row } from './types';

import styles from './DataGridRow.module.css';

export interface DataGridRowProps extends CommonProps, Row {
	readonly onDelete?: OnDelete;
}

export const DataGridRow: React.FC<DataGridRowProps> = React.memo(
	function DataGridRow(props) {
		const { className, elements, rowId, onDelete, } = props;

		const handleDelete = React.useCallback(() => {
			if (onDelete) {
				onDelete(rowId);
			}
		}, [onDelete, rowId]);

		return (
			<div className={cn(styles.row, className)}>
				{elements.map((element = '') => (
					<div
						className={styles.cell}
						key={element}
						title={element?.toString() ?? ''}
					>
						{element}
					</div>
				))}
				{onDelete && (
					<div className={styles.cell}>
						<Button variant='mono' onClick={handleDelete}>
							Удалить
						</Button>
					</div>
				)}
			</div>
		);
	}
);
