import classNames from "classnames";
import { OpeningHour } from "../../api/openinghours";
import useShopTime from "../../effects/general/useShopTime";
import { useTranslation } from "../../i18n/useTranslation";
import { Day, DAY_KEYS, getOpenStatus } from "../../types/general/util/time/time";
import styles from './OpenStatus.module.scss';

interface OpenStatusProps {
    openingHours: Record<Day, OpeningHour>;
    className?: string;
}

/** "Open now · until 18:30" style badge, computed in the shop's time zone. Renders only on the client. */
const OpenStatus = ({ openingHours, className }: OpenStatusProps) => {
    const { t } = useTranslation();
    const now = useShopTime();

    if (!now) {
        return <span className={classNames(styles.status, styles.placeholder, className)} aria-hidden />;
    }

    const status = getOpenStatus(openingHours, now);
    const messages = t.openingHours.status;

    let label = messages.closed;
    if (status.open) {
        label = messages.openUntil(status.closesAt);
    } else if (status.next) {
        const { day, time, daysAhead } = status.next;
        label = daysAhead === 0 ? messages.opensToday(time)
            : daysAhead === 1 ? messages.opensTomorrow(time)
            : messages.opensOn(t.days[DAY_KEYS[day]], time);
    }

    return (
        <span className={classNames(styles.status, { [styles.open]: status.open }, className)} role="status">
            <span className={styles.dot} aria-hidden />
            {label}
        </span>
    );
}

export default OpenStatus;
