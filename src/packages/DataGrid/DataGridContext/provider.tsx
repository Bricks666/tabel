import * as React from 'react';
import { DataGridContext } from './context';
import { DataGridContextValue } from './types';

export interface DataGridContextProps extends DataGridContextValue {}

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
		onUpdate,
	} = props;

	const value = React.useMemo<DataGridContextValue>(
		() => ({
			columns,
			count,
			onPageCount,
			onPageChange,
			page,
			rows,
			onDelete,
			onUpdate,
		}),
		[columns, count, onPageCount, onPageChange, page, rows, onDelete, onUpdate]
	);

	return (
		<DataGridContext.Provider value={value}>
			{children}
		</DataGridContext.Provider>
	);
};
