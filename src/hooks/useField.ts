import { ChangeEventHandler, useCallback, useState } from 'react';
import { VoidFunction } from '@/interfaces/common';

export type AllowedElements = HTMLInputElement | HTMLSelectElement;

export interface UseFieldResult<T, Element extends AllowedElements> {
	readonly value: T;
	readonly onChange: ChangeEventHandler<Element>;
	readonly reset: VoidFunction;
	readonly isDirty: boolean;
}

const useField = <T, Element extends AllowedElements>(
	initialState: T
): UseFieldResult<T, Element> => {
	const [value, setValue] = useState(initialState);
	const onChange = useCallback<ChangeEventHandler<Element>>((evt) => {
		setValue(evt.target.value as T);
	}, []);
	const reset = useCallback(() => {
		setValue(initialState);
	}, []);

	return {
		onChange,
		value,
		reset,
		isDirty: value !== initialState,
	};
};

export default useField;
