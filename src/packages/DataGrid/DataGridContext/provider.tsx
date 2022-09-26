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
		onFilterSubmit,
		onPageCount,
		onPageChange,
		page,
		rows,
	} = props;

	const value = React.useMemo<DataGridContextValue>(
		() => ({
			columns,
			count,
			onFilterSubmit,
			onPageCount,
			onPageChange,
			page,
			rows,
		}),
		[columns, count, onFilterSubmit, onPageCount, onPageChange, page, rows]
	);

	return (
		<DataGridContext.Provider value={value}>
			{children}
		</DataGridContext.Provider>
	);
};
