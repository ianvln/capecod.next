import type { Messages } from "../../../../i18n";
import type { OpeningHour } from "../../../../api/openinghours";

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export const DAYS: Day[] = [Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday, Day.Saturday, Day.Sunday];

export const DAY_KEYS: Record<Day, keyof Messages['days']> = {
    [Day.Monday]: 'monday',
    [Day.Tuesday]: 'tuesday',
    [Day.Wednesday]: 'wednesday',
    [Day.Thursday]: 'thursday',
    [Day.Friday]: 'friday',
    [Day.Saturday]: 'saturday',
    [Day.Sunday]: 'sunday'
}

export const SHOP_TIME_ZONE = 'Europe/Brussels';

const WEEKDAYS: Record<string, Day> = {
    Mon: Day.Monday, Tue: Day.Tuesday, Wed: Day.Wednesday, Thu: Day.Thursday,
    Fri: Day.Friday, Sat: Day.Saturday, Sun: Day.Sunday
};

export interface ShopTime {
    day: Day;
    minutes: number;
}

/** Current weekday and minutes since midnight in the shop's time zone, regardless of the visitor's. */
export const getShopTime = (date: Date = new Date()): ShopTime => {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: SHOP_TIME_ZONE,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(date);
    const get = (type: Intl.DateTimeFormatPartTypes) => parts.find(p => p.type === type)?.value ?? '';

    return { day: WEEKDAYS[get('weekday')], minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

const toMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

const isOpenDay = (hour: OpeningHour): hour is Required<OpeningHour> =>
    !hour.isClosed && !!hour.startTime && !!hour.endTime;

export type OpenStatus =
    | { open: true; closesAt: string }
    | { open: false; next?: { day: Day; time: string; daysAhead: number } };

export const getOpenStatus = (hours: Record<Day, OpeningHour>, now: ShopTime): OpenStatus => {
    const today = hours[now.day];

    if (isOpenDay(today)) {
        if (now.minutes >= toMinutes(today.startTime) && now.minutes < toMinutes(today.endTime)) {
            return { open: true, closesAt: today.endTime };
        }
        if (now.minutes < toMinutes(today.startTime)) {
            return { open: false, next: { day: now.day, time: today.startTime, daysAhead: 0 } };
        }
    }

    for (let daysAhead = 1; daysAhead <= 7; daysAhead++) {
        const day = ((now.day + daysAhead) % 7) as Day;
        const hour = hours[day];
        if (isOpenDay(hour)) {
            return { open: false, next: { day, time: hour.startTime, daysAhead } };
        }
    }

    return { open: false };
}
