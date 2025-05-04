import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
    <nav className={styles.navigation}>
        <ul className={styles.navList}>
        <li>
            <NavLink to='/' className={styles.navLink}>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/posts' className={styles.navLink}>
            All Posts
            </NavLink>
        </li>
        </ul>
    </nav>
    );
};

export default MainNavigation;
