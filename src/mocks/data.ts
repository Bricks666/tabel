import { faker } from '@faker-js/faker';
import { Row } from '@/models/Row';

export const data: Row[] = Array(150)
	.fill(0)
	.map(() => ({
		id: faker.datatype.number(),
		count: faker.datatype.number(),
		date: faker.date.past().toLocaleDateString(),
		distance: faker.datatype.number(),
		name: faker.company.name(),
	}));

export const titles: (keyof Row)[] = ['name', 'count', 'distance', 'date'];
