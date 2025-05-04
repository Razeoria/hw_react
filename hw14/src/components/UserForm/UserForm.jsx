import React, { useId, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TitleComponent from '../TitleComponent/TitleComponent';
import styles from './UserForm.module.css';

const UserForm = ({ onSetUserInfo }) => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
    } = useForm();
    const nameInputId = useId();
    const statusInputId = useId();
    const focusRef = useRef();
    useEffect(() => {
    focusRef.current.focus();
    }, []);
    const handleSave = data => {
    onSetUserInfo(data);
    reset();
    };

    return (
    <div className={styles.formBox}>
        <TitleComponent>Edit User Information</TitleComponent>
        <form onSubmit={handleSubmit(handleSave)} className={styles.form}>
        <div className={styles.field}>
            <label ref={focusRef} htmlFor={nameInputId}>
            Name:
            </label>
            <input
            id={nameInputId}
            placeholder="Enter name"
            className={styles.input}
            {...register('username', { required: 'This field is required' })}
            />
            {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
            )}
        </div>
        <div className={styles.field}>
            <label htmlFor={statusInputId}>Status:</label>
            <input
            id={statusInputId}
            placeholder="Enter status"
            className={styles.input}
            {...register('userStatus', { required: 'This field is required' })}
            />
            {errors.userStatus && (
            <p className={styles.error}>{errors.userStatus.message}</p>
            )}
        </div>
        <button type="submit" className={styles.btn}>
            Save
        </button>
        </form>
    </div>
    );
};

export default UserForm;
