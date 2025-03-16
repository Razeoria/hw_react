import citiesData from './citiesData';
import styles from './CitySelector.module.css';

const CitySelector = ({ updateCity }) => {
    const optionElements = citiesData.map((item) => (
        <option key={item.name} value={item.name}>{item.name}</option>
    ))
    const handleChange = (event) => {
        const id = event.target.selectedIndex;
        updateCity(citiesData[id]);
    };
    return (
        <form className={styles.cityForm}>
            <h2>Выберите город:</h2>
            <select name="city" id="selectCity" onChange={handleChange}>
                {optionElements}
            </select>
        </form>
    );
};
export default CitySelector;