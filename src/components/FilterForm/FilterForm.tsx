import * as React from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Field } from '../Field';
import useField from '@/hooks/useField';
import { Button } from '../Button';
import { filterTypes, searchableColumns } from '@/consts/dataTable';
import { Select } from '../Select';
import { GET_PARAMS } from '@/consts/api';
import prepareLink from '@/utils/prepareLink';
import { PATHS } from '@/consts/routes';

import styles from './FilterForm.module.css';

export type FilterFormProps = CommonProps;

export const FilterForm: React.FC<FilterFormProps> = React.memo(
	function FilterForm(props) {
		const { className, } = props;
		const navigate = useNavigate();
		const location = useLocation();
		const { reset: resetValue, isDirty: valueIsDirty, ...value } = useField('');
		const {
			reset: resetColumn,
			isDirty: columnIsDirty,
			...column
		} = useField(-1);
		const { reset: resetType, isDirty: typeIsDirty, ...type } = useField(-1);

		const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			const path = prepareLink(location, {
				query: {
					[GET_PARAMS.filterBy]: column.value,
					[GET_PARAMS.filterType]: type.value,
					[GET_PARAMS.filterValue]: value.value,
				},
				path: PATHS.default,
			});

			navigate(path);
		};

		const onReset = (evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			const path = prepareLink(location, {});
			navigate(path);
			resetColumn();
			resetType();
			resetValue();
		};

		const disableButton = !columnIsDirty || !valueIsDirty || !typeIsDirty;
		return (
			<form
				className={cn(styles.filterForm, className)}
				onSubmit={onSubmit}
				onReset={onReset}
			>
				<legend className={styles.legend}>Фильтрация</legend>
				<Field className={styles.value} {...value} label='Значение' />
				<Select className={styles.type} {...type} label='Способ'>
					<option value={-1}>Не выбран</option>
					{filterTypes.map((filterType) => (
						<option value={filterType} key={filterType}>
							{filterType}
						</option>
					))}
				</Select>
				<Select className={styles.column} {...column} label='Поле'>
					<option value={-1}>Не выбран</option>
					{searchableColumns.map((filterType) => (
						<option value={filterType} key={filterType}>
							{filterType}
						</option>
					))}
				</Select>
				<Button
					className={styles.submit}
					type='submit'
					disabled={disableButton}
				>
					Фильтровать
				</Button>
				<Button className={styles.reset} type='reset'>
					Сбросить фильтры
				</Button>
			</form>
		);
	}
);
