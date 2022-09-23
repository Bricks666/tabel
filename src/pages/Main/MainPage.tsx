/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Table } from '@/components/Table';

import styles from './Main.module.css';

const MainPage: React.FC = () => {
	return (
		<MainLayout>
			<Table />
		</MainLayout>
	);
};

export default MainPage;
