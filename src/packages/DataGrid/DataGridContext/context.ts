import { createContext } from 'react';
import { DataGridContextValue } from './types';

export const DataGridContext = createContext<DataGridContextValue>(
	undefined as any
);
