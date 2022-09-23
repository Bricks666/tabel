import * as React from 'react';
import { AppRoutes } from '@/components/AppRoutes';

const App = () => {
	return (
		<div>
			<React.Suspense>
				<AppRoutes />
			</React.Suspense>
		</div>
	);
};

export default App;
