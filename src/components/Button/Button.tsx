/* eslint-disable react/button-has-type */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './Button.module.css';

export interface ButtonProps
	extends CommonProps,
		React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
	props
) => {
	const { className, children, ...rest } = props;
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
