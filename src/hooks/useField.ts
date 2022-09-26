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
	defaultValue: T
): UseFieldResult<T, Element> => {
	const [value, setValue] = useState(defaultValue);
	const onChange = useCallback<ChangeEventHandler<Element>>((evt) => {
		setValue(evt.target.value as T);
	}, []);
	const reset = useCallback(() => {
		setValue(defaultValue);
	}, []);

	return {
		onChange,
		value,
		reset,
		isDirty: value !== defaultValue,
	};
};

export default useField;
