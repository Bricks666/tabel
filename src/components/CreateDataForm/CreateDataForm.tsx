import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Field } from '../Field';
import useField from '@/hooks/useField';
import { Button } from '../Button';
import { useMutation } from '@/packages/Query';
import { createDataApi } from '@/api/data';

import styles from './CreateDataForm.module.css';

export interface CreateDataFormProps extends CommonProps {}

export const CreateDataForm: React.FC<CreateDataFormProps> = React.memo(
	function CreateDataForm(props) {
		const { className, } = props;
		const { reset: resetName, isDirty: nameIsDirty, ...name } = useField('');
		const { reset: resetCount, isDirty: countIsDirty, ...count } = useField(0);
		const {
			reset: resetDistance,
			isDirty: distanceIsDirty,
			...distance
		} = useField(0);
		const { reset: resetDate, isDirty: dateIsDirty, ...date } = useField('');
		const { mutate, } = useMutation('data', createDataApi);

		const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			await mutate({
				count: count.value,
				date: date.value,
				distance: distance.value,
				name: name.value,
			});
			resetName();
			resetCount();
			resetDistance();
			resetDate();
		};

		const disableButton =			!nameIsDirty || !countIsDirty || !distanceIsDirty || !dateIsDirty;

		return (
			<form
				className={cn(styles.createDataForm, className)}
				onSubmit={onSubmit}
			>
				<legend className={styles.legend}>Создание записи</legend>
				<Field className={styles.name} {...name} label='Имя' />
				<Field
					className={styles.count}
					{...count}
					label='Количество'
					type='number'
				/>
				<Field
					className={styles.distance}
					{...distance}
					label='Расстояние'
					type='number'
				/>
				<Field
					className={styles.date}
					{...date}
					label='Дата'
					type='datetime-local'
				/>
				<Button
					className={styles.button}
					type='submit'
					disabled={disableButton}
				>
					Создать
				</Button>
			</form>
		);
	}
);
