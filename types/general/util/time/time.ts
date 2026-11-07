import type { Messages } from "../../../../i18n";

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export const DAY_KEYS: Record<Day, keyof Messages['days']> = {
    [Day.Monday]: 'monday',
    [Day.Tuesday]: 'tuesday',
    [Day.Wednesday]: 'wednesday',
    [Day.Thursday]: 'thursday',
    [Day.Friday]: 'friday',
    [Day.Saturday]: 'saturday',
    [Day.Sunday]: 'sunday'
}
