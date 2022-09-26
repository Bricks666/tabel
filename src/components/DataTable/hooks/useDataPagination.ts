import { useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { OnPageChange } from '@/packages/DataGrid';
import prepareLink from '@/utils/prepareLink';

export interface UseDataPaginationResult {
	readonly page: number;
	readonly onPageChange: OnPageChange;
}

const useDataPagination = (): UseDataPaginationResult => {
	const { id = 1, } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const onPageChange = useCallback<OnPageChange>((page) => {
		const path = prepareLink(location, {
			keepOldQuery: true,
			path: `/${page}`,
		});
		navigate(path);
	}, []);

	return {
		page: +id,
		onPageChange,
	};
};

export default useDataPagination;
