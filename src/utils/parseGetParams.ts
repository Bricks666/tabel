const parseGetParams = <T extends string>(
	rawQuery: string | null | undefined
): T[] => {
	return (rawQuery?.split(',') || []) as T[];
};

export default parseGetParams;
