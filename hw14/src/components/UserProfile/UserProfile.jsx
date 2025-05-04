import React from 'react';
import { useDispatch } from 'react-redux';
import User from '../User/User';
import UserForm from '../UserForm/UserForm';
import { setUserInfo } from '../../redux/actionCreators';
import styles from './UserProfile.module.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const saveUser = info => {
    dispatch(setUserInfo(info));
    };

    return (
    <main className={styles.wrapper}>
        <section className={styles.profileSection}>
        <h1 className={styles.title}>User Profile</h1>
        <User />
        <UserForm onSetUserInfo={saveUser} />
        </section>
    </main>
    );
};

export default UserProfile;
