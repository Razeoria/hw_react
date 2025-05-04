import React from 'react';
import styles from './TitleComponent.module.css';

const TitleComponent = ({ children }) => (
    <h2 className={styles.title}>{children}</h2>
);

export default TitleComponent;

