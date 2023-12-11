import { CSSProperties } from "react";
import { OpeningHourByDate } from "../../api/openinghours";
import { Language } from "../../types/general/util/lang/language";

interface OpeningHoursProps {
    openingHours: OpeningHourByDate[]
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
                { props.openingHours.map((o) => (
                    <tr key={`opening-hour-${o.dateNl}`} style={rowStyle}>
                        <th style={headerStyle} align="left"> { props.language === Language.Dutch ? o.dateNl : o.dateFr } </th>
                        { 
                            !o.isClosed && 
                                (<td align="right"> { o.startTime } - { o.endTime } </td>)
                        }
                        {
                            o.isClosed &&
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