import { Locale } from "../i18n";
import { Day } from "../types/general/util/time/time";

export interface OpeningHour {
    isClosed?: boolean;
    startTime?: string;
    endTime?: string;
}

export interface OpeningHourByDate {
    date: Record<Locale, string>;
    isClosed?: boolean;
    startTime?: string;
    endTime?: string;
}

export const OPENING_HOURS: Record<Day, OpeningHour> = {
    [Day.Monday]: { startTime: '09:00', endTime: '18:30' },
    [Day.Tuesday]: { isClosed: true },
    [Day.Wednesday]: { isClosed: true },
    [Day.Thursday]: { startTime: '09:00', endTime: '18:30' },
    [Day.Friday]: { startTime: '09:00', endTime: '18:30' },
    [Day.Saturday]: { startTime: '09:00', endTime: '18:30' },
    [Day.Sunday]: { startTime: '09:00', endTime: '18:30' }
}

export const OPENING_HOURS_BY_DATE_BEFORE_XMAS: OpeningHourByDate[] = [
    { date: { nl: 'Zaterdag 16 december', fr: 'Samedi 16 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Zondag 17 december', fr: 'Dimanche 17 décembre' }, isClosed: true },
    { date: { nl: 'Maandag 18 december', fr: 'Lundi 18 décembre' }, isClosed: true },
    { date: { nl: 'Dinsdag 19 december', fr: 'Mardi 19 décembre' }, isClosed: true },
    { date: { nl: 'Woensdag 20 december', fr: 'Mercredi 20 décembre' }, isClosed: true },
    { date: { nl: 'Donderdag 21 december', fr: 'Jeudi 21 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Vrijdag 22 december', fr: 'Vendredi 22 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Zaterdag 23 december', fr: 'Samedi 23 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Zondag 24 december', fr: 'Dimanche 24 décembre' }, startTime: '08:00', endTime: '16:30' }
];

export const OPENING_HOURS_BY_DATE_AFTER_XMAS_BEFORE_NYE: OpeningHourByDate[] = [
    { date: { nl: 'Maandag 25 december', fr: 'Lundi 25 décembre' }, startTime: '10:00', endTime: '13:00' },
    { date: { nl: 'Dinsdag 26 december', fr: 'Mardi 26 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Woensdag 27 december', fr: 'Mercredi 27 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Donderdag 28 december', fr: 'Jeudi 28 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Vrijdag 29 december', fr: 'Vendredi 29 décembre' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Zaterdag 30 december', fr: 'Samedi 30 décembre' }, startTime: '09:00', endTime: '13:30' },
    { date: { nl: 'Zondag 31 december', fr: 'Dimanche 31 décembre' }, startTime: '08:00', endTime: '16:30' }
];

export const OPENING_HOURS_BY_DATE_AFTER_NYE: OpeningHourByDate[] = [
    { date: { nl: 'Maandag 1 januari', fr: 'Lundi 1er janvier' }, startTime: '13:00', endTime: '13:00' },
    { date: { nl: 'Dinsdag 2 januari', fr: 'Mardi 2 janvier' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Woensdag 3 januari', fr: 'Mercredi 3 janvier' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Donderdag 4 januari', fr: 'Jeudi 4 janvier' }, startTime: '09:00', endTime: '17:30' },
    { date: { nl: 'Vrijdag 5 januari', fr: 'Vendredi 5 janvier' }, startTime: '09:00', endTime: '17:30' }
];
