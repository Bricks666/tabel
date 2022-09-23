/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Table } from '@/components/Table';
import { TablePagination } from '@/components/TablePagination';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	return (
		<MainLayout className={styles.main}>
			<Table />
			<TablePagination />
		</MainLayout>
	);
};

export default MainPage;
