import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import {
	DataGridContextProps,
	DataGridContextProvider,
} from '../DataGridContext';
import { DataGridRoot } from '../DataGridRoot';

export interface DataGridProps extends CommonProps, DataGridContextProps {}

export const DataGrid: React.FC<DataGridProps> = React.memo(function DataGrid(
	props
) {
	const { className, ...contextValue } = props;
	return (
		<DataGridContextProvider {...contextValue}>
			<DataGridRoot className={className} />
		</DataGridContextProvider>
	);
});
