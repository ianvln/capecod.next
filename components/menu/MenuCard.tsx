import { useRef } from "react";
import { Menu } from "../../types/Menu";
import FadeSlideIn from "../general/animation/FadeSlideIn";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const ref = useRef<HTMLDivElement>(null);
    const menu = props.menu;
    
    return (
        <>
            <div className={styles.menu} ref={ref}>
                {
                    menu.dishSets.map((ds, i) => (
                            <FadeSlideIn key={`dish-set-card-${i}`} className={styles.dishSetCard} parentRef={ref} offsetDelayIndex={i}>
                                <DishSetCard dishSet={ds} />
                            </FadeSlideIn>
                    ))
                }
            </div>
            
        </>
    );
}

export default MenuCard;