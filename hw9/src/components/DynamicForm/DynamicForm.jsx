import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
    } = useForm({
    // Можно добавить defaultValues, если нужно
    // defaultValues: { firstField: '', secondField: '' }
    });

    const firstFieldValue = watch('firstField');

    const onSubmit = (data) => {
    console.log('Form submitted:', data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* Первый инпут с подсказкой */}
        <label className={styles.label}>
        First Field
        <span className={styles.hint}>(не менее 6 символов)</span>
        </label>
        <input
        {...register('firstField', {
            required: 'Поле обязательно для заполнения',
            minLength: {
            value: 6,
            message: 'Минимум 6 символов'
            }
        })}
        className={errors.firstField ? styles.inputError : styles.input}
        placeholder="Введите не менее 6 символов"
        />
        {errors.firstField && (
        <p className={styles.error}>{errors.firstField.message}</p>
        )}

      {/* Условный рендер второго поля */}
        {firstFieldValue?.length >= 6 && (
        <>
            <label className={styles.label}>Second Field</label>
            <input
            {...register('secondField', {
                required: 'Поле обязательно для заполнения'
            })}
            className={errors.secondField ? styles.inputError : styles.input}
            placeholder="Обязательное поле"
            />
            {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
            )}
        </>
        )}

        <button type="submit" className={styles.button}>
        Submit
        </button>
    </form>
    );
};

export default DynamicForm;
