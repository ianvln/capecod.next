import { CSSProperties } from "react";
import { OpeningHour } from "../../api/openinghours";
import { Language } from "../../types/general/util/lang/language";
import { Day, getDayDescription } from "../../types/general/util/time/time";

interface OpeningHoursProps {
    openingHours: Record<Day, OpeningHour>;
    language: Language;
}

const CLOSED_IN_DUTCH = 'Gesloten';
const CLOSED_IN_FRENCH = 'Fermée';

const getClosedInLanguage = (language: Language) => language === Language.Dutch ? CLOSED_IN_DUTCH : CLOSED_IN_FRENCH;

const OpeningHours = (props: OpeningHoursProps) => {
    return (
        <>
            <table style={tableStyle}>
                <tbody>
                { [...Array(7)].map((_, i) => (
                    <tr key={`opening-hour-${i}`} style={rowStyle}>
                        <th style={headerStyle} align="left"> { getDayDescription(i, props.language) } </th>
                        { 
                            !props.openingHours[i as Day].isClosed && 
                                (<td align="right"> { props.openingHours[i as Day].startTime } - { props.openingHours[i as Day].endTime } </td>)
                        }
                        {
                            props.openingHours[i as Day].isClosed &&
                                (<td align="right"> { getClosedInLanguage(props.language) } </td>)
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