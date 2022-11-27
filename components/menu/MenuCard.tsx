import { useRef } from "react";
import { Menu } from "../../types/Menu";
import FadeSlideIn from "../general/animation/FadeSlideIn";
import DishMenuCard from "./DishMenuCard";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const ref = useRef<HTMLDivElement>(null);
    const menu = props.menu;
    
    return (
        <>
            <div className={styles.menuCard} ref={ref}>
                {
                    menu.dishSets.map((ds, i) => (
                        <FadeSlideIn key={`dish-set-card-${i}`} parentRef={ref} offsetDelayIndex={i}>
                            <DishSetCard dishSet={ds} />
                        </FadeSlideIn>
                    ))
                }
                <h2 className={styles.menusTitle}> Menu's </h2>
                {
                    menu.dishMenus.map((dm, i) => (
                            <FadeSlideIn key={`dish-set-card-${i}`} parentRef={ref} offsetDelayIndex={i + menu.dishSets.length}>
                                <DishMenuCard dishMenu={dm} />
                            </FadeSlideIn>
                    ))
                }
            </div>
        </>
    );
}

export default MenuCard;