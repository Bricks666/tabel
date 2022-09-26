import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './DataGridToolbar.module.css';

export interface DataGridToolbarProps extends CommonProps {}

export const DataGridToolbar: React.FC<DataGridToolbarProps> = React.memo(
	function DataGridToolbar(props) {
		const { className } = props;
		return null;
	}
);
