export interface CommonProps {
	className?: string;
}

export type VoidFunction = () => void;

export interface BasePopupProps {
	readonly isOpen: boolean;
	readonly isFocus?: boolean;
}

export type AnyFunction = (...args: any[]) => any;

export type AnyObject = Record<string, unknown>;

export type AddType<T extends AnyObject, AT> = {
	[K in keyof T]: T[K] | AT;
};
