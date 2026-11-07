import { DishMenu, } from "../../types/Menu";
import { useTranslation } from "../../i18n/useTranslation";
import DishCard from "./DishCard";
import styles from './DishMenuCard.module.scss';

const DishMenuCard = (props: { dishMenu: DishMenu }) => {
    const dishMenu = props.dishMenu;
    const { t } = useTranslation();

    return (
        <div className={styles.dishMenuCard} key={dishMenu.name}>
            <div className={styles.dishMenuHeader}>
                <div>
                    <h3 className={styles.dishMenuName}> { dishMenu.name } </h3>
                    { dishMenu.description && <span className={styles.dishMenuDescription}> { dishMenu.description } </span> }
                </div>
                <div className={styles.dishMenuPrice}>
                    &euro; {dishMenu.price} <span className={styles.dishMenuPricePer}> / {t.menu.perPerson} </span>
                </div>
            </div>
            
            <hr className={styles.menuLine} />
            <div className={styles.dishMenuCardContent}>
                {
                    dishMenu.dishes.map((d, i) => (
                        <div key={`dish-card-${i}`}>
                            <DishCard dish={d} />
                        </div>
                ))}
            </div>
        </div>
    );
}

export default DishMenuCard;