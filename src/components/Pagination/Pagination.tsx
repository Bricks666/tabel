/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { OnPaginationChange } from './types';

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
		const startPage =	count - page < halfRange
			? count - range
			: halfRange < page
				? page - halfRange
				: 0;

		const pages = new Array(pagesCount).fill(0);

		return (
			<ul className={cn(styles.pagination, className)}>
				{pages.map((_, i) => {
					const num = startPage + i + 1;
					return (
						<li
							className={cn(styles.element, {
								[styles.elementActive]: page === num,
							})}
							onClick={() => onChange(num)}
							tabIndex={0}
							role={itemRole}
							key={num}
						>
							{num}
						</li>
					);
				})}
			</ul>
		);
	}
);
