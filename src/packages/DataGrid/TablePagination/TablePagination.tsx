import * as React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { OnPaginationChange, Pagination } from '../Pagination';
import prepareLink from '@/utils/prepareLink';
import useData from '@/hooks/useData';

export type TablePaginationProps = CommonProps;

export const TablePagination: React.FC<TablePaginationProps> = React.memo(
	function TablePagination(props) {
		const { className, } = props;
		const { id = 1, } = useParams();
		const navigate = useNavigate();
		const location = useLocation();
		const { data, } = useData();

		const { onPageCount, totalCount, } = data || {
			data: [],
			onPageCount: 50,
			totalCount: 0,
		};

		const count = Math.ceil(totalCount / onPageCount);
		const onChange = React.useCallback<OnPaginationChange>(
			(page) => {
				navigate(
					prepareLink(location, {
						keepOldQuery: true,
						path: `/${page}`,
					})
				);
			},
			[location]
		);

		return (
			<Pagination
				className={className}
				page={Number(id)}
				onChange={onChange}
				count={count}
			/>
		);
	}
);
