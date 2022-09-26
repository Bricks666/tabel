import { useParams } from 'react-router-dom';
import { getDataApi, GetDataApiResponse } from '@/api/data';
import { GET_PARAMS } from '@/consts/api';
import { useQuery, UseQueryResult } from '@/packages/Query';
import useGetParams from '@/hooks/useGetParams';

const useData = (): UseQueryResult<GetDataApiResponse> => {
	const { id = 1, } = useParams();
	const filterType = useGetParams(GET_PARAMS.filterType);
	const filterBy = useGetParams(GET_PARAMS.filterBy);
	const filterValue = useGetParams(GET_PARAMS.filterValue);

	return useQuery(['data', +id, filterType, filterValue, filterBy], () =>
		getDataApi({ page: +id, filterType, filterBy, filterValue, }));
};

export default useData;
