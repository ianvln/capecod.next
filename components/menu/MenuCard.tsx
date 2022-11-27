import { Fade, Slide } from "react-awesome-reveal";
import { Menu } from "../../types/Menu";
import DishMenuCard from "./DishMenuCard";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const menu = props.menu;
    
    return (
        <>
            <div className={styles.menuCard}>
                {
                    menu.dishSets.map((ds, i) => (
                        <Fade key={`dish-set-card-${i}`} >
                            <DishSetCard dishSet={ds} />
                        </Fade>
                    ))
                }
                <h2 className={styles.menusTitle}> Menu's </h2>
                {
                    menu.dishMenus.map((dm, i) => (
                        <Fade key={`dish-menu-card-${i}`}>
                            <DishMenuCard dishMenu={dm} />
                        </Fade>
                    ))
                }
            </div>
        </>
    );
}

export default MenuCard;