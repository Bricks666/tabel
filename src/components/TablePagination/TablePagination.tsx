import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { OnPaginationChange, Pagination } from '../Pagination';

export type TablePaginationProps = CommonProps;

export const TablePagination: React.FC<TablePaginationProps> = React.memo(
	function TablePagination(props) {
		const { className, } = props;
		const { id, } = useParams();
		const navigate = useNavigate();

		const onChange = React.useCallback<OnPaginationChange>((page) => {
			navigate(`/${page}`);
		}, []);

		return (
			<Pagination
				className={className}
				page={Number(id)}
				onChange={onChange}
				count={3}
			/>
		);
	}
);
