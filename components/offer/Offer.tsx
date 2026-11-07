import Image from "next/image";
import appetizersImage from "../../assets/appetizers.jpg";
import dishImage from "../../assets/dish.jpg";
import storeImage from "../../assets/store.jpeg";
import { useTranslation } from "../../i18n/useTranslation";
import Reveal from "../general/reveal/Reveal";
import styles from './Offer.module.scss';

const Offer = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.offer}>
            <Reveal className={styles.gallery}>
                <figure className={`${styles.figure} ${styles.figureTall}`}>
                    <Image src={storeImage} alt={t.alt.store} fill placeholder="blur"
                           sizes="(max-width: 860px) 50vw, 300px" className={styles.image} />
                </figure>
                <figure className={styles.figure}>
                    <Image src={dishImage} alt={t.alt.dish} fill placeholder="blur"
                           sizes="(max-width: 860px) 50vw, 300px" className={styles.image} />
                </figure>
                <figure className={styles.figure}>
                    <Image src={appetizersImage} alt={t.alt.appetizers} fill placeholder="blur"
                           sizes="(max-width: 860px) 50vw, 300px" className={styles.image} />
                </figure>
            </Reveal>

            <div className={styles.content}>
                <Reveal>
                    <p className="eyebrow">{t.offer.eyebrow}</p>
                    <h2 className={styles.title}>{t.offer.title}</h2>
                    <p className={styles.intro}>{t.offer.intro}</p>
                </Reveal>

                <ol className={styles.items}>
                    {t.offer.items.map((item, i) => (
                        <li key={item.title} className={styles.item}>
                            <Reveal delay={i * 120}>
                                <span className={styles.number} aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                    <p className={styles.itemText}>{item.text}</p>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Offer;
