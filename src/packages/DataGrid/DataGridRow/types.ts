import { RowAllowedTypes } from '../types';

export interface Row {
	readonly elements: RowAllowedTypes[];
	readonly rowId: number;
}
