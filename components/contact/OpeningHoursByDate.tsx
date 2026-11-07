import classNames from "classnames";
import { OpeningHourByDate } from "../../api/openinghours";
import { useTranslation } from "../../i18n/useTranslation";
import styles from './OpeningHours.module.scss';

interface OpeningHoursByDateProps {
    openingHours: OpeningHourByDate[];
}

/** Opening hours for specific dates, e.g. around the holidays. */
const OpeningHoursByDate = ({ openingHours }: OpeningHoursByDateProps) => {
    const { t, locale } = useTranslation();

    return (
        <table className={styles.table}>
            <tbody>
            {openingHours.map(o => (
                <tr key={o.date.nl} className={classNames(styles.row, { [styles.closed]: o.isClosed })}>
                    <th scope="row" className={styles.day}>{o.date[locale]}</th>
                    <td className={styles.hours}>
                        {o.isClosed ? t.openingHours.closed : <>{o.startTime} – {o.endTime}</>}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default OpeningHoursByDate;
