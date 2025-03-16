import { useState } from 'react';
import ratingList from './ratingList';
import styles from "./Rating.module.css";

const Rating = ({ initialValue }) => {
    const [ratingValue, setRatingValue] = useState(initialValue);
    const handleRating = (value) => {
        setRatingValue(value);
    };

    return (
        <div className={styles.ratingContainer}>
            <img src={ratingList[ratingValue - 1] || ratingList[0]} alt={`Рейтинг: ${ratingValue}`}
                className={styles.ratingImage} />
            <h3>Рейтинг: {ratingValue}</h3>
            <div className={styles.ratingButtonContainer}>
                <button onClick={() => handleRating(1)} className={styles.ratingButton}>Плохо</button>
                <button onClick={() => handleRating(2)} className={styles.ratingButton}>Удовлетворительно</button>
                <button onClick={() => handleRating(3)} className={styles.ratingButton}>Хорошо</button>
                <button onClick={() => handleRating(4)} className={styles.ratingButton}>Отлично</button>
            </div>
        </div>
    );
};

export default Rating;