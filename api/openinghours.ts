import { Day } from "../types/general/util/time/time";

export interface OpeningHour {
    isClosed?: boolean;
    startTime?: string;
    endTime?: string;
}

export const OPENING_HOURS: Record<Day, OpeningHour> = {
    [Day.Monday]: { startTime: '09:00', endTime: '18:00' },
    [Day.Tuesday]: { startTime: '09:00', endTime: '13:30' },
    [Day.Wednesday]: { isClosed: true },
    [Day.Thursday]: { startTime: '09:00', endTime: '18:00' },
    [Day.Friday]: { startTime: '09:00', endTime: '18:00' },
    [Day.Saturday]: { startTime: '09:00', endTime: '18:00' },
    [Day.Sunday]: { startTime: '09:00', endTime: '18:00' }
}
