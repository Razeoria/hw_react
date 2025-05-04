import React from 'react';
import { useSelector } from 'react-redux';

import TitleComponent from '../TitleComponent/TitleComponent';
import styles from './User.module.css';

const User = () => {
    const { username, userStatus } = useSelector(state => state.user);

    return (
    <div className={styles.userBox}>
        <TitleComponent>User Information</TitleComponent>
        <div className={styles.infoBox}>
        <p>
            Name: <span className={styles.value}>{username}</span>
        </p>
        <p>
            Status: <span className={styles.value}>{userStatus}</span>
        </p>
        </div>
    </div>
    );
};

export default User;
