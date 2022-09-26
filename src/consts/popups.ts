export interface Popups {
	readonly updateRow: string;
}

export const POPUPS: Popups = {
	updateRow: 'ur',
};

export type PopupKeys = keyof Popups;
