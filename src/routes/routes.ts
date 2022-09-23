import { ComponentType } from 'react';

export interface Route {
	readonly Component: ComponentType;
	readonly path: string;
}

export const routes: Route[] = [];
