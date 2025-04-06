import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
    } = useForm();

    const firstFieldValue = watch("firstField");

    const onSubmit = (data) => {
    console.log("Form submitted:", data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>First Field</label>
        <input
        {...register("firstField", { required: true, minLength: 6 })}
        className={styles.input}
        />
        {errors.firstField && (
        <p className={styles.error}>Минимум 6 символов</p>
        )}

        {firstFieldValue?.length >= 6 && (
        <>
            <label className={styles.label}>Second Field</label>
            <input
            {...register("secondField", { required: true })}
            className={styles.input}
            />
            {errors.secondField && (
            <p className={styles.error}>Обязательное поле</p>
            )}
        </>
        )}

        <button type="submit" className={styles.button}>Submit</button>
    </form>
    );
};

export default DynamicForm;
