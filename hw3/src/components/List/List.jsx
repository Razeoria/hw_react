import { useState } from "react";
import peopleList from "./peopleList";
import styles from "./List.module.css";

const List = () => {
    const [list, setList] = useState(peopleList);
    const deleteListItem = (id) => {
        setList(prevList => {
            return prevList.filter(item => item.id !== id)
        })
    }

    const elements = list.map(item => (
        <div key={item.id} className={styles.listItem}>
            <p>name: {item.name}</p>
            <p>age: {item.age}</p>
            <button onClick={() => deleteListItem(item.id)} className={styles.buttonDel}>Delete</button>
        </div>
    ));

    return (
        <div className={styles.listsContainer}>{elements}</div>
    )
};

export default List;