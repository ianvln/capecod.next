import Head from "next/head";
import { CONTACT, SITE_URL } from "../../api/contact";
import { OPENING_HOURS } from "../../api/openinghours";
import heroImage from "../../assets/background.jpg";
import { useTranslation } from "../../i18n/useTranslation";
import { Day, DAYS } from "../../types/general/util/time/time";

const SCHEMA_DAYS: Record<Day, string> = {
    [Day.Monday]: 'Monday',
    [Day.Tuesday]: 'Tuesday',
    [Day.Wednesday]: 'Wednesday',
    [Day.Thursday]: 'Thursday',
    [Day.Friday]: 'Friday',
    [Day.Saturday]: 'Saturday',
    [Day.Sunday]: 'Sunday'
};

/** schema.org data so search engines can show address, phone and opening hours. */
const StructuredData = () => {
    const { t } = useTranslation();

    const data = {
        '@context': 'https://schema.org',
        '@type': 'FoodEstablishment',
        name: CONTACT.name,
        description: t.meta.description,
        url: SITE_URL,
        image: `${SITE_URL}${heroImage.src}`,
        telephone: CONTACT.phoneE164,
        email: CONTACT.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT.street,
            postalCode: CONTACT.postalCode,
            addressLocality: CONTACT.city,
            addressCountry: CONTACT.country
        },
        openingHoursSpecification: DAYS
            .filter(day => !OPENING_HOURS[day].isClosed)
            .map(day => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: SCHEMA_DAYS[day],
                opens: OPENING_HOURS[day].startTime,
                closes: OPENING_HOURS[day].endTime
            }))
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                key="structured-data"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
        </Head>
    );
}

export default StructuredData;
