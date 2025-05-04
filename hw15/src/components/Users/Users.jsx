import { useState, useCallback, useMemo } from "react";

import UserList from "../UserList/UserList";
import FilterUsers from "../FilterUsers/FilterUsers";

import userList from "../../data/userList";

import styles from './Users.module.css';

const Users = () => {

    const [filter, setFilter] = useState("");

    const getFilterText = (newText) => {
        setFilter(newText)
    }

    const filterUsers = useCallback((filterText, userList) => {
        return userList.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
    }, []);

    const filteredUsers = useMemo(() => filterUsers(filter, userList), [filter, filterUsers])

    return (
        <div className="wrapper">
            <div className={styles.container}>
                <h2 className={styles.title}>User List</h2>
                <FilterUsers getFilterText={getFilterText} />
                <UserList items={filteredUsers} />
            </div>
        </div>
    )
};

export default Users;