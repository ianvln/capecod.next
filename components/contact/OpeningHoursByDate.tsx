import { CSSProperties } from "react";
import { OpeningHourByDate } from "../../api/openinghours";
import { useTranslation } from "../../i18n/useTranslation";

interface OpeningHoursProps {
    openingHours: OpeningHourByDate[]
}

const OpeningHoursByDate = (props: OpeningHoursProps) => {
    const { t, locale } = useTranslation();

    return (
        <>
            <table style={tableStyle}>
                <tbody>
                { props.openingHours.map((o) => (
                    <tr key={`opening-hour-${o.date.nl}`} style={rowStyle}>
                        <th style={headerStyle} align="left"> { o.date[locale] } </th>
                        { 
                            !o.isClosed && 
                                (<td align="right"> { o.startTime } - { o.endTime } </td>)
                        }
                        {
                            o.isClosed &&
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

export default OpeningHoursByDate;