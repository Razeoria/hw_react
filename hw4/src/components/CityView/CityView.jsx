import { useState } from 'react';
import CitySelector from './CitySelector/CitySelector';
import CityCard from './CityCard/CityCard';
import styles from './CityView.module.css';
import { initialState } from './CitySelector/citiesData';

const CityView = () => {
    const [stateCity, setStateCity] = useState(initialState);
    const updateCity = (newCity) => {
        setStateCity(newCity)
    };
    return (
        <div className={styles.citySection}>
            <div className={styles.cityContainer}>
                <CitySelector updateCity={updateCity} />
                <CityCard cityItem={stateCity} />
            </div>
        </div>
    );
};
export default CityView;