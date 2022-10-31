import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import useIntersectionObserver from "../../effects/general/useIntersectionObserver";
import { Menu } from "../../types/Menu";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = (props: { menu: Menu }) => {
    const menu = props.menu;
    
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const dishSetCardAnimationProps = (dishSetIndex: number) => useSpring({ delay: 500 + dishSetIndex * 200, from: { opacity: 0, y: 100 }, to: { opacity: shouldAnimate ? 1 : 0, y: shouldAnimate ? 0 : 0 }});

    useEffect(() => {
        if (shouldAnimate) { 
            return;
        }

        if (isVisible) {
            setShouldAnimate(true);
        }
    }, [isVisible]);

    return (
        <>
            <div ref={ref} className={styles.menu}>
                {
                    menu.dishSets.map((ds, i) => (
                        <animated.div style={dishSetCardAnimationProps(i)}>
                            <div key={`dish-set-card-${i}`} className={styles.dishSetCard}>
                                <DishSetCard dishSet={ds} />
                            </div>
                        </animated.div>
                    ))
                } 
            </div>
        </>
    );
}

export default MenuCard;