/* eslint-disable prefer-template */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { RowClickHandler } from '../types';
import { Button } from '@/components/Button';
import { Row } from './types';

import styles from './DataGridRow.module.css';

export interface DataGridRowProps extends CommonProps, Row {
	readonly onDelete?: RowClickHandler;
	readonly onUpdate?: RowClickHandler;
}

export const DataGridRow: React.FC<DataGridRowProps> = React.memo(
	function DataGridRow(props) {
		const { className, elements, rowId, onDelete, onUpdate, } = props;

		const handleDelete = React.useCallback(() => {
			if (onDelete) {
				onDelete(rowId);
			}
		}, [onDelete, rowId]);

		const handleUpdate = React.useCallback(() => {
			if (onUpdate) {
				onUpdate(rowId);
			}
		}, [onUpdate, rowId]);

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
				<div className={styles.cell}>
					{onDelete && (
						<Button variant='mono' onClick={handleDelete}>
							Удалить
						</Button>
					)}
					{onUpdate && (
						<Button variant='mono' onClick={handleUpdate}>
							Изменить
						</Button>
					)}
				</div>
			</div>
		);
	}
);
