import { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OnPageChange } from '@/packages/DataGrid';

export interface UseDataPaginationResult {
	readonly page: number;
	readonly onPageChange: OnPageChange;
}

const useDataPagination = (): UseDataPaginationResult => {
	const { id = 1 } = useParams();
	const navigate = useNavigate();

	const onPageChange = useCallback<OnPageChange>((page) => {
		navigate(`/${page}`);
	}, []);

	return {
		page: +id,
		onPageChange,
	};
};

export default useDataPagination;
