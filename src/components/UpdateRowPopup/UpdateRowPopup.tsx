import * as React from 'react';
import { BasePopupProps, CommonProps } from '@/interfaces/common';
import MainPopup from '../MainPopup';
import { useQuery } from '@/packages/Query';
import { GET_PARAMS } from '@/consts/api';
import { getOneDataApi } from '@/api/data';
import useGetParams from '@/hooks/useGetParams';
import { LoadingIndicator } from '../LoadingIndicator';
import { UpdateRowForm } from '../UpdateRowForm';
import { POPUPS } from '@/consts/popups';
import useClosePopup from '@/hooks/useClosePopup';

export interface UpdateRowPopupProps extends CommonProps, BasePopupProps {}

export const UpdateRowPopup: React.FC<UpdateRowPopupProps> = React.memo(
	function UpdateRowPopup(props) {
		const { className, ...rest } = props;
		const rowId = Number(useGetParams(GET_PARAMS.rowId));
		const { data, isLoading, isError, } = useQuery(['data', rowId], () =>
			getOneDataApi(rowId));
		const onClose = useClosePopup(POPUPS.updateRow);
		const showLoading = isLoading || isError || !data?.data;
		return (
			<MainPopup className={className} onClose={onClose} {...rest}>
				{showLoading ? (
					<LoadingIndicator />
				) : (
					<UpdateRowForm {...data!.data} afterSubmit={onClose} />
				)}
			</MainPopup>
		);
	}
);
