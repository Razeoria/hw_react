import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';
import UserList from '../UserList/UserList';
import styles from './Filter.module.css';

const UserFilter = () => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.filter);
    const allUsers = useSelector(state => state.users) || [];

    const visibleUsers = allUsers.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleChange = e => {
    dispatch(setFilter(e.target.value));
    };

    return (
    <div className={styles.filterBox}>
        <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by name..."
        />
        <UserList users={visibleUsers} />
    </div>
    );
};

export default UserFilter;
