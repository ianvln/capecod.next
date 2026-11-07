export const CONTACT = {
    name: 'Cape Cod',
    street: 'Lombardsijdestraat 7J',
    postalCode: '8620',
    city: 'Nieuwpoort',
    country: 'BE',
    phone: '058 23 39 19',
    phoneHref: 'tel:+3258233919',
    phoneE164: '+32 58 23 39 19',
    email: 'info@capecod.be',
    companyNumber: '0772 371 309',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent('Cape Cod, Lombardsijdestraat 7J, 8620 Nieuwpoort'),
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.capecod.be';
