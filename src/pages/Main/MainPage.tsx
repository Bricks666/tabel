import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { TablePagination } from '@/components/TablePagination';
import { DataTable } from '@/components/DataTable';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	return (
		<MainLayout className={styles.main}>
			<DataTable />
			<TablePagination />
		</MainLayout>
	);
};

export default MainPage;
