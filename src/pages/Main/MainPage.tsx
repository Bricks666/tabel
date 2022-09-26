import * as React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { DataTable } from '@/components/DataTable';
import { FilterForm } from '@/components/FilterForm';
import { CreateDataForm } from '@/components/CreateDataForm';

import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
	return (
		<MainLayout className={styles.main}>
			<CreateDataForm className={styles.form} />
			<FilterForm className={styles.form} />
			<DataTable className={styles.table} />
		</MainLayout>
	);
};

export default MainPage;
