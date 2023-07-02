import { Language } from "../lang/language";

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export const getDayDescription = (day: Day, language: Language) => {
    const dayDescriptionsNl = {
        [Day.Sunday]: 'Zondag',
        [Day.Monday]: 'Maandag',
        [Day.Tuesday]: 'Dinsdag',
        [Day.Wednesday]: 'Woensdag',
        [Day.Thursday]: 'Donderdag',
        [Day.Friday]: 'Vrijdag',
        [Day.Saturday]: 'Zaterdag'
    }

    const dayDescriptionsFr = {
        [Day.Sunday]: 'Dimanche',
        [Day.Monday]: 'Lundi',
        [Day.Tuesday]: 'Mardi',
        [Day.Wednesday]: 'Mecredi',
        [Day.Thursday]: 'Jeudi',
        [Day.Friday]: 'Vendredi',
        [Day.Saturday]: 'Samedi'
    }

    switch(language) {
        case Language.Dutch: return dayDescriptionsNl[day];
        case Language.French: return dayDescriptionsFr[day];
    }
}