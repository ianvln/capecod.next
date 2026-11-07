import { CSSProperties } from "react";
import { OpeningHour } from "../../api/openinghours";
import { useTranslation } from "../../i18n/useTranslation";
import { Day, DAY_KEYS } from "../../types/general/util/time/time";

interface OpeningHoursProps {
    openingHours: Record<Day, OpeningHour>;
}

const OpeningHours = (props: OpeningHoursProps) => {
    const { t } = useTranslation();

    return (
        <>
            <table style={tableStyle}>
                <tbody>
                { [...Array(7)].map((_, i) => (
                    <tr key={`opening-hour-${i}`} style={rowStyle}>
                        <th style={headerStyle} align="left"> { t.days[DAY_KEYS[i as Day]] } </th>
                        { 
                            !props.openingHours[i as Day].isClosed && 
                                (<td align="right"> { props.openingHours[i as Day].startTime } - { props.openingHours[i as Day].endTime } </td>)
                        }
                        {
                            props.openingHours[i as Day].isClosed &&
                                (<td align="right"> { t.openingHours.closed } </td>)
                        }
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

const tableStyle: CSSProperties = {
    width: '100%'
}

const rowStyle: CSSProperties = {
    height: 30
}

const headerStyle: CSSProperties = {
    textTransform: 'uppercase',
    fontWeight: 'normal'
}

export default OpeningHours;