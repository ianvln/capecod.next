import { DishMenu, } from "../../types/Menu";
import DishCard from "./DishCard";
import styles from './DishMenuCard.module.scss';

const DishMenuCard = (props: { dishMenu: DishMenu }) => {
    const dishMenu = props.dishMenu;

    return (
        <div className={styles.dishMenuCard} key={dishMenu.name}>
            <h3> { dishMenu.name } <span> {dishMenu.price} </span> </h3>
            <div>
                {
                    dishMenu.dishes.map((d, i) => (
                        <div key={`dish-card-${i}`} className={styles.dishCard}>
                            <DishCard dish={d} />
                        </div>
                ))}
            </div>
        </div>
    );
}

export default DishMenuCard;