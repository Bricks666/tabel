import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './MainLayout.module.css';

export type MainLayoutProps = CommonProps

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children, } = props;
	return <div className={cn(styles.layout, className)}>{children}</div>;
};
