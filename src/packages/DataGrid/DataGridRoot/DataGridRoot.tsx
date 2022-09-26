import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DataGridHead } from '../DataGridHead';
import { DataGridBody } from '../DataGridBody';
import { DataGridToolbar } from '../DataGridToolbar';
import { DataGridFooter } from '../DataGridFooter';

import styles from './DataGridRoot.module.css';

export interface DataGridRootProps extends CommonProps {}

export const DataGridRoot: React.FC<DataGridRootProps> = React.memo(
	function DataGridRoot(props) {
		const { className } = props;
		return (
			<div className={cn(styles.dataGridRoot, className)}>
				<DataGridToolbar />
				<div className={styles.inner}>
					<DataGridHead />
					<DataGridBody />
					<DataGridFooter />
				</div>
			</div>
		);
	}
);
