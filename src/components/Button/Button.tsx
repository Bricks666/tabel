/* eslint-disable react/button-has-type */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './Button.module.css';
import { Variant } from './types';

export interface ButtonProps
	extends CommonProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {
	readonly variant?: Variant;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
	props
) => {
	const { className, children, variant = 'color', ...rest } = props;
	return (
		<button className={cn(styles.button, styles[variant], className)} {...rest}>
			{children}
		</button>
	);
};
