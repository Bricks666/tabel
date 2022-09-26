import * as React from 'react';
import cn from 'classnames';
import { BasePopupProps, CommonProps, VoidFunction } from '@/interfaces/common';
import useKeyListener from '@/hooks/useKeyListener';
import { FocusTrap } from '../FocusTrap';
import { Overlay } from '../Overlay';

import styles from './MainPopup.module.css';

interface MainPopupProps extends CommonProps, BasePopupProps {
	readonly onClose: VoidFunction;
}

const MainPopup: React.FC<React.PropsWithChildren<MainPopupProps>> = (
	props
) => {
	const { children, className, isOpen, onClose, isFocus = isOpen, } = props;

	useKeyListener({
		onKeyDown: onClose,
		condition: isFocus,
		keys: ['Escape'],
	});

	return (
		<Overlay onClose={onClose}>
			<FocusTrap open={isFocus}>
				<div className={cn(styles.mainPopup, className)}>{children}</div>
			</FocusTrap>
		</Overlay>
	);
};

export default MainPopup;
