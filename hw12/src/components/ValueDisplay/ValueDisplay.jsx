import React, { useRef, useEffect } from 'react';
import styles from './ValueDisplay.module.css';

const DisplayValues = ({ value }) => {
    const prev = useRef('');
    
    useEffect(() => {
    prev.current = value;
    }, [value]);

    return (
    <div className={styles.container}>
        <p className={styles.text}>
        Current: <span className={styles.valueText}>{value}</span>
        </p>
        <p className={styles.text}>
        Previous: <span className={styles.valueText}>{prev.current}</span>
        </p>
    </div>
    );
};

export default DisplayValues;
