import { useSearchParams } from 'react-router-dom';

const useGetParams = <T extends string>(param: string): T | undefined => {
	const [params] = useSearchParams();
	return (params.get(param) || undefined) as T | undefined;
};

export default useGetParams;
