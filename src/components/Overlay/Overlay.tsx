/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { Portal } from '../Portal';
import { VoidFunction, CommonProps } from '@/interfaces/common';

import styles from './Overlay.module.css';

export interface OverlayProps extends CommonProps {
	readonly onClose?: VoidFunction;
}

export const Overlay: React.FC<React.PropsWithChildren<OverlayProps>> = (props) => {
	const { children, className, onClose, } = props;
	return (
		<Portal>
			<div className={styles.overlay} role='dialog'>
				<div
					className={styles.backdrop}
					role={onClose && 'button'}
					onClick={onClose}
					tabIndex={0}
					title={onClose && 'overlay'}
				/>
				<div className={className}>{children}</div>
			</div>
		</Portal>
	);
};
