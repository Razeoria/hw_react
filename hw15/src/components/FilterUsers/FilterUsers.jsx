

import styles from './FilterUsers.module.css';

const FilterUsers = ({ getFilterText }) => {

    const handleChange = (event) => {
        getFilterText(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form className={styles.form}>
            <input
                type="text"
                placeholder="Search by name"
                onChange={handleChange}
                className={styles.input} />
        </form>
    )
};

export default FilterUsers;