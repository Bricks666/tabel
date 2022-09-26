import { useNavigate } from 'react-router-dom';
import { VoidFunction } from '@/interfaces/common';
import useEvent from './useEvent';
import usePrepareLink from './usePrepareLink';
import { GET_PARAMS } from '@/consts/api';

const useClosePopup = (popupQueryName: string): VoidFunction => {
	const navigate = useNavigate();
	const path = usePrepareLink({
		deleteQuery: {
			[GET_PARAMS.popup]: popupQueryName,
			[GET_PARAMS.rowId]: true,
		},
		keepOldQuery: true,
	});

	return useEvent(() => {
		navigate(path, {
			preventScrollReset: true,
		});
	});
};

export default useClosePopup;
