import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './Field.module.css';

export interface FieldProps
	extends CommonProps,
		React.InputHTMLAttributes<HTMLInputElement> {
	readonly label?: string;
}

export const Field: React.FC<FieldProps> = React.memo(function Field(props) {
	const { className, label, ...rest } = props;
	const id = React.useId();
	return (
		<div className={cn(styles.field, className)}>
			{label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<input className={styles.input} id={id} {...rest} />
		</div>
	);
});
