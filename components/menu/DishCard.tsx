import { Dish } from "../../types/Menu";
import styles from './DishCard.module.scss';

const DishCard = (props: { dish: Dish }) => {
    const dish = props.dish;
    
    return (
        <>
            <div className={styles.heading}>
                <h3 className={styles.title}> {dish.name} </h3>
                <span className={styles.price}> &euro; {dish.price} </span>
            </div>
            { dish.description && <div className={styles.subHeading}> {dish.description} </div> }
        </>
    );
}

export default DishCard;