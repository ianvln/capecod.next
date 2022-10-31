import { DishSet } from "../../types/Menu";
import DishCard from "./DishCard";
import styles from './DishSetCard.module.scss';

const DishSetCard = (props: { dishSet: DishSet }) => {
    const dishSet = props.dishSet;
    
    return (
        <div className={styles.dishSetCard} key={dishSet.name}>
            <h2> { dishSet.name } </h2>
            <div>
                {
                    dishSet.dishes.map((d, i) => (
                        <div key={`dish-card-${i}`} className={styles.dishCard}>
                            <DishCard dish={d} />
                        </div>
                ))}
            </div>
        </div>
    );
}

export default DishSetCard;