import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';
import Popups from '../Popups';

export const AppRoutes: React.FC = React.memo(function AppRoutes() {
	return (
		<Routes>
			<Route path='/*' element={<Popups />}>
				{routes.map(({ Component, path, }) => (
					<Route path={path} element={<Component />} key={path} />
				))}
			</Route>
		</Routes>
	);
});
