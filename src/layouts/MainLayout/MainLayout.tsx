import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

export interface MainLayoutProps extends CommonProps {}

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { className, children } = props;
	return <div className={cn(className)}>{children}</div>;
};
