import { Pagination } from '@/interfaces/api';
import { data } from '@/mocks/data';
import { Row } from '@/models/Row';

export const getDtaApi = async ({
	count = 50,
	page = 1,
}: Pagination): Promise<Row[]> => {
	console.log('fetch');
	return Promise.resolve(data.slice(count * (page - 1), count * page));
};
