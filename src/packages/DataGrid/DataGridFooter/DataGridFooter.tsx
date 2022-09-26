import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './DataGridFooter.module.css';

export interface DataGridFooterProps extends CommonProps {}

export const DataGridFooter: React.FC<DataGridFooterProps> = React.memo(
	function DataGridFooter(props) {
		const { className } = props;
		return null;
	}
);
