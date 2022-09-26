import * as React from 'react';
import { createPortal } from 'react-dom';

export const Portal: React.FC<React.PropsWithChildren> = (props) => {
	const { children, } = props;
	const [container, setContainer] = React.useState<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const wrapper = document.createElement('div');
		document.body.append(wrapper);
		setContainer(wrapper);

		return () => {
			document.body.removeChild(wrapper);
		};
	}, []);

	return container ? createPortal(children, container) : null;
};
