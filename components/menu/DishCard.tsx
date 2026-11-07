import { useTranslation } from "../../i18n/useTranslation";
import { Dish } from "../../types/Menu";
import styles from './DishCard.module.scss';

const formatPrice = (price: string | number, locale: string) =>
    typeof price === 'string'
        ? price
        : new Intl.NumberFormat(`${locale}-BE`, { style: 'currency', currency: 'EUR' }).format(price);

const DishCard = ({ dish }: { dish: Dish }) => {
    const { locale } = useTranslation();
    const hasPrice = dish.price !== undefined && dish.price !== '';

    return (
        <div className={styles.dish}>
            <div className={styles.row}>
                <span className={styles.name}>{dish.name}</span>
                {hasPrice && (
                    <>
                        <span className={styles.leader} aria-hidden />
                        <span className={styles.price}>
                            {formatPrice(dish.price!, locale)}
                            {dish.unit && <span className={styles.unit}> / {dish.unit}</span>}
                        </span>
                    </>
                )}
            </div>
            {dish.description && <p className={styles.description}>{dish.description}</p>}
        </div>
    );
}

export default DishCard;
