import styles from './CityCard.module.css';
const CityCard = ({ cityItem }) => {
    return (
        <div className={styles.cityCard}>
            <h3>{cityItem.name}</h3>
            <img src={cityItem.imageUrl} alt={cityItem.name} />
            <p>{cityItem.description}</p>
            <ul>
                {cityItem.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};
export default CityCard;