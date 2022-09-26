import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './Select.module.css';

export interface SelectProps
	extends CommonProps,
		React.SelectHTMLAttributes<HTMLSelectElement> {
	readonly label?: string;
}

export const Select: React.FC<React.PropsWithChildren<SelectProps>> = (
	props
) => {
	const { className, label, ...rest } = props;
	const id = React.useId();
	return (
		<div className={cn(styles.select, className)}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<select className={styles.control} {...rest} />
		</div>
	);
};
