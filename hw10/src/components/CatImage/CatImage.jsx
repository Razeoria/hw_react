import { useState, useEffect, useId } from 'react';
import { getCat } from '../../api/image';

import styles from './CatImage.module.css'

const CatImage = () => {

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCat = async () => {
        try {
            setLoading(true);
            const data = await getCat();
            setImage(data[0].url);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCat();
    }, []);

    return (
        <div className={styles.catBox}>
            <h1 className={styles.h1}>Random Cat Image</h1>
            <div className={styles.imgBox}>
                {image ? <img className={styles.catImg} src={image} alt="Random Cat" /> : <p className={styles.error}>No cat here. Try again!</p>}
                {loading && <p>Loading...</p>}
                {error && <p className={styles.error}>{error}</p>}
            </div>
            <button className={styles.btn} onClick={fetchCat}>Load New Image</button>
        </div>
    )
}

export default CatImage;