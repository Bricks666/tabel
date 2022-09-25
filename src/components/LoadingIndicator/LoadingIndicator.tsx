import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './LoadingIndicator.module.css';

export type LoadingIndicatorProps = CommonProps

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = React.memo(
	function LoadingIndicator(props) {
		const { className, } = props;
		return <div className={cn(styles.loadingIndicator, className)} />;
	}
);
