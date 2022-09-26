/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Button } from '@/components/Button';
import { DataGridContext } from '../DataGridContext';

import styles from './DataGridPagination.module.css';

export type DataGridPaginationProps = CommonProps;

export const DataGridPagination: React.FC<DataGridPaginationProps> = React.memo(
	function DataGridPagination(props) {
		const { className, } = props;
		const { page, onPageCount, onPageChange, count, } =			React.useContext(DataGridContext);
		const startElementNumber = (page - 1) * onPageCount + 1;
		const endElementNumber = page * onPageCount;

		const disableBackButton = page === 1;
		const disableForwardButton = page === Math.ceil(count / onPageCount);

		const onForward = React.useCallback(() => {
			onPageChange(page + 1);
		}, [page, onPageChange]);

		const onBack = React.useCallback(() => {
			onPageChange(page - 1);
		}, [page, onPageChange]);

		return (
			<div className={cn(styles.pagination, className)}>
				<span>
					{startElementNumber} - {endElementNumber} из
					{count}
				</span>
				<Button onClick={onBack} variant='mono' disabled={disableBackButton}>
					Назад
				</Button>
				<Button
					onClick={onForward}
					variant='mono'
					disabled={disableForwardButton}
				>
					Вперед
				</Button>
			</div>
		);
	}
);
