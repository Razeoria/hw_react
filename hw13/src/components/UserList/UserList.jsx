import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

const UsersList = ({ users }) => {
    const items = users.map(user => (
    <UserItem key={user.id} {...user} />
    ));

    return <ul className={styles.userList}>{items}</ul>;
};

export default UsersList;

