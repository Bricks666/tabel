/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import cn from 'classnames';
import { CommonProps, VoidFunction } from '@/interfaces/common';
import { updateDataApi } from '@/api/data';
import useField from '@/hooks/useField';
import { useMutation } from '@/packages/Query';
import { Button } from '../Button';
import { Field } from '../Field';
import { DataModel } from '@/models/Row';

import styles from './UpdateRowForm.module.css';

export interface UpdateRowFormProps extends CommonProps, DataModel {
	readonly afterSubmit?: VoidFunction;
}

export const UpdateRowForm: React.FC<UpdateRowFormProps> = React.memo(
	function UpdateRowForm(props) {
		const { className, afterSubmit, ...defaultValues } = props;
		const {
			isDirty: nameIsDirty,
			reset: _n,
			...name
		} = useField(defaultValues.name);
		const {
			isDirty: countIsDirty,
			reset: _c,
			...count
		} = useField(defaultValues.count);
		const {
			isDirty: distanceIsDirty,
			reset: _d,
			...distance
		} = useField(defaultValues.distance);
		const { mutate, } = useMutation('data', updateDataApi);

		const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			await mutate({
				id: defaultValues.id,
				count: count.value,
				date: defaultValues.date,
				distance: distance.value,
				name: name.value,
			});
			if (afterSubmit) {
				afterSubmit();
			}
		};

		const disableButton = !nameIsDirty && !countIsDirty && !distanceIsDirty;

		return (
			<form className={cn(styles.updateRowForm, className)} onSubmit={onSubmit}>
				<legend className={styles.legend}>Создание записи</legend>
				<Field className={styles.name} {...name} label='Имя' />
				<Field {...count} label='Количество' type='number' />
				<Field {...distance} label='Расстояние' type='number' />
				<Button
					className={styles.button}
					type='submit'
					disabled={disableButton}
				>
					Сохранить
				</Button>
			</form>
		);
	}
);
