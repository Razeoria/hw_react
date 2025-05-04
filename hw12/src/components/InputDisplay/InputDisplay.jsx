import React from 'react';
import styles from './InputDisplay.module.css';

const InputDisplay = ({ onChangeValue }) => {
    const handleInput = ({ target: { value } }) => {
    onChangeValue(value);
    };

    return (
    <div className={styles.wrapper}>
        <input
        type="text"
        className={styles.input}
        onChange={handleInput}
        />
    </div>
    );
};

export default InputDisplay;
