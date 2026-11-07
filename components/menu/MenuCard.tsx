import { useTranslation } from "../../i18n/useTranslation";
import { Menu } from "../../types/Menu";
import Reveal from "../general/reveal/Reveal";
import DishMenuCard from "./DishMenuCard";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const MenuCard = ({ menu }: { menu: Menu }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.menu}>
            {menu.description && <p className={styles.description}>{menu.description}</p>}

            {menu.dishSets.map((ds, i) => (
                <Reveal key={`dish-set-${i}`}>
                    <DishSetCard dishSet={ds} />
                </Reveal>
            ))}

            {menu.dishMenus.length > 0 && (
                <>
                    <h2 className={styles.menusTitle}>{t.menu.menus}</h2>
                    {menu.dishMenus.map((dm, i) => (
                        <Reveal key={`dish-menu-${i}`}>
                            <DishMenuCard dishMenu={dm} />
                        </Reveal>
                    ))}
                </>
            )}
        </div>
    );
}

export default MenuCard;
