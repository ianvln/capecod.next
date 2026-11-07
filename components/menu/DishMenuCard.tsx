import { useTranslation } from "../../i18n/useTranslation";
import { DishMenu } from "../../types/Menu";
import DishCard from "./DishCard";
import styles from './DishMenuCard.module.scss';

const DishMenuCard = ({ dishMenu }: { dishMenu: DishMenu }) => {
    const { t, locale } = useTranslation();
    const price = new Intl.NumberFormat(`${locale}-BE`, { style: 'currency', currency: 'EUR' }).format(dishMenu.price);

    return (
        <div className={styles.dishMenu}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.name}>{dishMenu.name}</h3>
                    {dishMenu.description && <p className={styles.description}>{dishMenu.description}</p>}
                </div>
                <div className={styles.price}>
                    {price} <span className={styles.per}>/ {t.menu.perPerson}</span>
                </div>
            </div>
            <div className={styles.dishes}>
                {dishMenu.dishes.map((d, i) => <DishCard key={`dish-${i}`} dish={d} />)}
            </div>
        </div>
    );
}

export default DishMenuCard;
