import React, { useState } from 'react';
import InputDisplay from '../InputDisplay/InputDisplay';
import ValueDisplay from '../ValueDisplay/ValueDisplay';
import styles from './MyDisplay.module.css';

function DisplayContainer() {
    const [text, setText] = useState('');

    return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Current and Previous Value</h2>
        <InputDisplay onChangeValue={setText} />
        <ValueDisplay value={text} />
    </div>
    );
}

export default DisplayContainer;
