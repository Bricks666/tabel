import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '@/consts/routes';

const NotFoundPage: React.FC = () => {
	return <Navigate to={PATHS.default} replace />;
};

export default NotFoundPage;
