import classNames from "classnames";
import { OpeningHour } from "../../api/openinghours";
import useShopTime from "../../effects/general/useShopTime";
import { useTranslation } from "../../i18n/useTranslation";
import { Day, DAYS, DAY_KEYS } from "../../types/general/util/time/time";
import styles from './OpeningHours.module.scss';

interface OpeningHoursProps {
    openingHours: Record<Day, OpeningHour>;
}

const OpeningHours = ({ openingHours }: OpeningHoursProps) => {
    const { t } = useTranslation();
    const now = useShopTime();

    return (
        <table className={styles.table}>
            <tbody>
            {DAYS.map(day => {
                const hour = openingHours[day];
                const isToday = now?.day === day;

                return (
                    <tr key={day} className={classNames(styles.row, { [styles.today]: isToday, [styles.closed]: hour.isClosed })}>
                        <th scope="row" className={styles.day}>
                            {t.days[DAY_KEYS[day]]}
                            {isToday && <span className={styles.todayBadge}>{t.openingHours.today}</span>}
                        </th>
                        <td className={styles.hours}>
                            {hour.isClosed ? t.openingHours.closed : <>{hour.startTime} – {hour.endTime}</>}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default OpeningHours;
