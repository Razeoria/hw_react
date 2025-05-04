
import UserListItem from "./UserListItem/UserListItem";

import styles from './UserList.module.css';

const UserList = ({ items = [] }) => {

    const elements = items.map(item => (
        <UserListItem key={item.id} item={item} />
    ))

    return (
        <ul className={styles.listContainer}>
            {elements}
        </ul>
    )
};

export default UserList;