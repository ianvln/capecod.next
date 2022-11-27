import { Dish } from "../../types/Menu";
import styles from './DishCard.module.scss';

const DishCard = (props: { dish: Dish }) => {
    const dish = props.dish;
    
    return (
        <div className={styles.dishCard}>
            <div className={styles.heading}>
                <div className={styles.dishName}> {dish.name} </div> 
                { dish.price && <span className={styles.price}> &euro; {dish.price} {dish.unit && <span> / {dish.unit} </span>} </span> }
            </div>
            { dish.description && <div className={styles.subHeading}> {dish.description} </div> }
        </div>
    );
}

export default DishCard;