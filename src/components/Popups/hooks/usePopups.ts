/* eslint-disable no-undef */
import { useEffect, useMemo, useState } from 'react';
import { PopupKeys } from '@/consts/popups';
import parseGetParams from '@/utils/parseGetParams';
import useGetParams from '@/hooks/useGetParams';
import { GET_PARAMS } from '@/consts/api';

export interface UsePopupsResult {
	readonly mountedPopups: PopupKeys[];
	readonly popups: PopupKeys[];
}

const usePopups = (): UsePopupsResult => {
	const rawPopups = useGetParams(GET_PARAMS.popup);
	const [mountedPopups, setMountedPopups] = useState<PopupKeys[]>(() =>
		parseGetParams<PopupKeys>(rawPopups));
	useEffect(() => {
		setTimeout(
			() => setMountedPopups(parseGetParams<PopupKeys>(rawPopups)),
			210
		);
	}, [rawPopups]);

	const popups = useMemo(
		() => parseGetParams<PopupKeys>(rawPopups),
		[rawPopups]
	);

	return {
		mountedPopups,
		popups,
	};
};

export default usePopups;
