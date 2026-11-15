import { useTranslation } from "../../i18n/useTranslation";
import { Menu } from "../../types/Menu";
import Reveal from "../general/reveal/Reveal";
import DishMenuCard from "./DishMenuCard";
import DishSetCard from "./DishSetCard";
import styles from './MenuCard.module.scss';

const isEmailAddress = /^[^\s@]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;
const emailAddressPattern = /([^\s@]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)/g;

const MenuCard = ({ menu }: { menu: Menu }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.menu}>
            {menu.description && (
                <p className={styles.description}>
                    {menu.description.split(emailAddressPattern).map((part, i) =>
                        isEmailAddress.test(part)
                            ? <a key={i} className={styles.descriptionLink} href={`mailto:${part}`}>{part}</a>
                            : part
                    )}
                </p>
            )}

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
