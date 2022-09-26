import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { POPUPS } from '@/consts/popups';
import { BasePopupProps } from '@/interfaces/common';
import usePopups from './hooks/usePopups';
import useScrollLock from '@/hooks/useScrollLock';
import { UpdateRowPopup } from '../UpdateRowPopup';

const popupsMap: Record<string, React.ComponentType<BasePopupProps>> = {
	[POPUPS.updateRow]: UpdateRowPopup,
};

const Popups: React.FC = () => {
	const { mountedPopups, popups, } = usePopups();

	const popupsCount = mountedPopups.length;
	useScrollLock(!!popupsCount);

	return (
		<React.Fragment key='unique'>
			{mountedPopups.map((popupKey) => {
				const Component = popupsMap[popupKey];

				if (!Component) {
					return null;
				}

				return <Component isOpen={popups.includes(popupKey)} />;
			})}
			<Outlet />
		</React.Fragment>
	);
};
export default Popups;
