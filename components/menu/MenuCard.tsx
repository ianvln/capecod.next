import { Menu } from "../../types/Menu";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const menu = props.menu;

    return (
        <>
            <div className={styles.menu}>
                {
                    menu.dishSets.map((ds, i) => (
                        <div  key={`dish-set-card-${i}`} className={styles.dishSetCard}>
                            <DishSetCard dishSet={ds} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default MenuCard;