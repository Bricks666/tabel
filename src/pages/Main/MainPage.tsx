import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { TablePagination } from '@/components/TablePagination';
import { DataTable } from '@/components/DataTable';
import { FilterForm } from '@/components/FilterForm';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	return (
		<MainLayout className={styles.main}>
			<FilterForm className={styles.form} />
			<DataTable />
			<TablePagination />
		</MainLayout>
	);
};

export default MainPage;
