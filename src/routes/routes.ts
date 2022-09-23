import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { ROUTES } from '@/consts/routes';

export interface Route {
	readonly Component: React.ComponentType<CommonProps>;
	readonly path: string;
}

const MainPage = React.lazy(() => import('../pages/Main'));
const NotFoundPage = React.lazy(() => import('../pages/NotFound'));

export const routes: Route[] = [
	{
		path: ROUTES.main,
		Component: MainPage,
	},

	{
		path: ROUTES.notFound,
		Component: NotFoundPage,
	},
];
