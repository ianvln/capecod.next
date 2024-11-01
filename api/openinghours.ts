import { Day } from "../types/general/util/time/time";

export interface OpeningHour {
    isClosed?: boolean;
    startTime?: string;
    endTime?: string;
}

export interface OpeningHourByDate {
    dateNl: string;
    dateFr: string;
    isClosed?: boolean;
    startTime?: string;
    endTime?: string;
}

export const OPENING_HOURS: Record<Day, OpeningHour> = {
    [Day.Monday]: { startTime: '09:00', endTime: '18:45' },
    [Day.Tuesday]: { isClosed: true },
    [Day.Wednesday]: { isClosed: true },
    [Day.Thursday]: { startTime: '09:00', endTime: '18:45' },
    [Day.Friday]: { startTime: '09:00', endTime: '18:45' },
    [Day.Saturday]: { startTime: '09:00', endTime: '18:45' },
    [Day.Sunday]: { startTime: '09:00', endTime: '18:45' }
}

export const OPENING_HOURS_BY_DATE_BEFORE_XMAS: OpeningHourByDate[] = [
    { dateNl: 'Zaterdag 16 december', startTime: '09:00', endTime: '17:30', dateFr: 'Samedi 16 décembre' },
    { dateNl: 'Zondag 17 december', isClosed: true, dateFr: 'Dimanche 17 décembre' },
    { dateNl: 'Maandag 18 december', isClosed: true, dateFr: 'Lundi 18 décembre' },
    { dateNl: 'Dinsdag 19 december', isClosed: true, dateFr: 'Mardi 19 décembre' },
    { dateNl: 'Woensdag 20 december', isClosed: true, dateFr: 'Mercredi 20 décembre' },
    { dateNl: 'Donderdag 21 december', startTime: '09:00', endTime: '17:30', dateFr: 'Jeudi 21 décembre' },
    { dateNl: 'Vrijdag 22 december', startTime: '09:00', endTime: '17:30', dateFr: 'Vendredi 22 décembre' },
    { dateNl: 'Zaterdag 23 december', startTime: '09:00', endTime: '17:30', dateFr: 'Samedi 23 décembre' },
    { dateNl: 'Zondag 24 december', startTime: '08:00', endTime: '16:30', dateFr: 'Dimanche 24 décembre' }
];

export const OPENING_HOURS_BY_DATE_AFTER_XMAS_BEFORE_NYE: OpeningHourByDate[] = [
    { dateNl: 'Maandag 25 december', startTime: '10:00', endTime: '13:00', dateFr: 'Lundi 25 décembre' },
    { dateNl: 'Dinsdag 26 december', startTime: '09:00', endTime: '17:30', dateFr: 'Mardi 26 décembre' },
    { dateNl: 'Woensdag 27 december', startTime: '09:00', endTime: '17:30', dateFr: 'Mercredi 27 décembre' },
    { dateNl: 'Donderdag 28 december', startTime: '09:00', endTime: '17:30', dateFr: 'Jeudi 28 décembre' },
    { dateNl: 'Vrijdag 29 december', startTime: '09:00', endTime: '17:30', dateFr: 'Vendredi 29 décembre' },
    { dateNl: 'Zaterdag 30 december', startTime: '09:00', endTime: '13:30', dateFr: 'Samedi 30 décembre' },
    { dateNl: 'Zondag 31 december', startTime: '08:00', endTime: '16:30', dateFr: 'Dimanche 31 décembre' }
];

export const OPENING_HOURS_BY_DATE_AFTER_NYE: OpeningHourByDate[] = [
    { dateNl: 'Maandag 1 januari', startTime: '13:00', endTime: '13:00', dateFr: 'Lundi 1er janvier' },
    { dateNl: 'Dinsdag 2 januari', startTime: '09:00', endTime: '17:30', dateFr: 'Mardi 2 janvier' },
    { dateNl: 'Woensdag 3 januari', startTime: '09:00', endTime: '17:30', dateFr: 'Mercredi 3 janvier' },
    { dateNl: 'Donderdag 4 januari', startTime: '09:00', endTime: '17:30', dateFr: 'Jeudi 4 janvier' },
    { dateNl: 'Vrijdag 5 januari', startTime: '09:00', endTime: '17:30', dateFr: 'Vendredi 5 janvier' }
];
