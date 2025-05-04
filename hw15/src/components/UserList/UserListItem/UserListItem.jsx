

import styles from './UserListItem.module.css';

const UserListItem = ({ item }) => {
    return (
        <li className={styles.item}>
            {item.name}
        </li>
    )
};

export default UserListItem;