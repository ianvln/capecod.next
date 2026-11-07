import { DishSet } from "../../types/Menu";
import DishCard from "./DishCard";
import styles from './DishSetCard.module.scss';

const DishSetCard = ({ dishSet }: { dishSet: DishSet }) => (
    <div className={styles.dishSet}>
        <h3 className={styles.name}>{dishSet.name}</h3>
        <div className={styles.dishes}>
            {dishSet.dishes.map((d, i) => <DishCard key={`dish-${i}`} dish={d} />)}
        </div>
    </div>
);

export default DishSetCard;
