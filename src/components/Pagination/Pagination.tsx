/* eslint-disable no-nested-ternary */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { OnPaginationChange } from './types';
import { Button } from '../Button';

import styles from './Pagination.module.css';

export interface PaginationProps extends CommonProps {
	readonly count: number;
	readonly page: number;
	readonly onChange: OnPaginationChange;
	readonly range?: number;
	readonly itemRole?: React.AriaRole;
}

export const Pagination: React.FC<PaginationProps> = React.memo(
	function Pagination(props) {
		const {
			className,
			page,
			onChange,
			count,
			range = 10,
			itemRole = 'button',
		} = props;

		const isMoreRange = count > range;
		const pagesCount = isMoreRange ? range : count;
		const halfRange = range / 2;
		let startPage = 0;

		if (isMoreRange) {
			if (count - page < halfRange) {
				startPage = count - range;
			} else if (halfRange < page) {
				startPage = page - halfRange;
			}
		}
		const pages = new Array(pagesCount).fill(0);

		return (
			<ul className={cn(styles.pagination, className)}>
				{pages.map((_, i) => {
					const num = startPage + i + 1;
					return (
						<li key={num}>
							<Button
								className={cn({
									[styles.elementActive]: page === num,
								})}
								onClick={() => onChange(num)}
								role={itemRole}
							>
								{num}
							</Button>
						</li>
					);
				})}
			</ul>
		);
	}
);
