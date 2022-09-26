import { useEffect } from 'react';
import { VoidFunction } from '@/interfaces/common';

export interface UseKeyListenerOptions {
	readonly onKeyDown: VoidFunction;
	readonly keys?: string[];
	readonly condition?: boolean;
	readonly prevent?: boolean;
}

const useKeyListener = (options: UseKeyListenerOptions): void => {
	const { onKeyDown, keys, prevent = true, condition = true, } = options;

	useEffect(() => {
		if (!condition) {
			return;
		}
		const handler = (evt: KeyboardEvent) => {
			if (!keys || keys.includes(evt.key)) {
				onKeyDown();
			}
		};

		document.addEventListener('keydown', handler);

		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, [onKeyDown, condition, prevent, ...(keys || [])]);
};

export default useKeyListener;
