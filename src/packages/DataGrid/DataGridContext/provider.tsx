import * as React from 'react';
import { Width } from '../types';
import { DataGridContext } from './context';
import { DataGridContextValue } from './types';

export interface DataGridContextProps
	extends Omit<DataGridContextValue, 'minColumnWidth'> {
	readonly minColumnWidth?: Width;
}

export const DataGridContextProvider: React.FC<
	React.PropsWithChildren<DataGridContextProps>
> = (props) => {
	const {
		children,
		columns,
		count,
		onPageCount,
		onPageChange,
		page,
		rows,
		onDelete,
		minColumnWidth = '100px',
	} = props;

	const value = React.useMemo<DataGridContextValue>(
		() => ({
			columns,
			count,
			minColumnWidth,
			onPageCount,
			onPageChange,
			page,
			rows,
			onDelete,
		}),
		[
			columns,
			count,
			minColumnWidth,
			onPageCount,
			onPageChange,
			page,
			rows,
			onDelete
		]
	);

	return (
		<DataGridContext.Provider value={value}>
			{children}
		</DataGridContext.Provider>
	);
};
