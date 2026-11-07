export const nl = {
    meta: {
        title: 'Cape Cod — Traiteur & fijne voeding in Nieuwpoort',
        description: 'Cape Cod in Nieuwpoort: kreeft, oesters, visbereidingen, salades, pasta, wijnen, kazen en fijne vleeswaren.',
        ogLocale: 'nl_BE'
    },
    nav: {
        label: 'Hoofdnavigatie',
        welcome: 'Welkom',
        offer: 'Aanbod',
        menu: 'Suggesties',
        openinghours: 'Openingsuren',
        contact: 'Contact'
    },
    header: {
        openMenu: 'Menu openen',
        closeMenu: 'Menu sluiten',
        language: 'Taal',
        skipToContent: 'Naar de inhoud'
    },
    hero: {
        eyebrow: 'Traiteur · Fijne voeding · Nieuwpoort',
        welcome: 'Welkom',
        tagline: 'Kreeft, oesters, visbereidingen en fijne delicatessen, met zorg bereid aan de kust.',
        ctaHours: 'Openingsuren',
        ctaCall: 'Bel ons'
    },
    news: {
        eyebrow: 'Nieuws',
        title: 'Een nieuw hoofdstuk',
        text:
            'Met veel enthousiasme kondigen we aan dat Dries vanaf maandag de winkel van Cape Cod overneemt. ' +
            'Hij staat klaar om jullie te ontvangen met dezelfde kwaliteit, service en passie die jullie gewend zijn. ' +
            'Spring gerust eens binnen en geef hem een warm welkom!'
    },
    offer: {
        eyebrow: 'Ons aanbod',
        title: 'Smaken van de kust',
        intro: 'Tongstrelende gerechten als kreeftschotels, oester- en visbereidingen, salades en pasta’s, geflankeerd door exclusieve wijnen, kazen en fijne vleeswaren.',
        items: [
            { title: 'Kreeft & oesters', text: 'Kreeftschotels, verse oesters en feestelijke zeevruchten.' },
            { title: 'Vis & traiteur', text: 'Huisbereide visgerechten, salades en pasta’s om thuis van te genieten.' },
            { title: 'Wijn, kaas & charcuterie', text: 'Exclusieve wijnen, kazen en fijne vleeswaren uit onze toonbank.' }
        ]
    },
    openingHours: {
        eyebrow: 'Kom langs',
        title: 'Openingsuren',
        closed: 'Gesloten',
        today: 'Vandaag',
        status: {
            openUntil: (time: string) => `Nu open · tot ${time}`,
            closed: 'Nu gesloten',
            opensToday: (time: string) => `Nu gesloten · opent om ${time}`,
            opensTomorrow: (time: string) => `Nu gesloten · opent morgen om ${time}`,
            opensOn: (day: string, time: string) => `Nu gesloten · opent ${day.toLowerCase()} om ${time}`
        }
    },
    days: {
        monday: 'Maandag',
        tuesday: 'Dinsdag',
        wednesday: 'Woensdag',
        thursday: 'Donderdag',
        friday: 'Vrijdag',
        saturday: 'Zaterdag',
        sunday: 'Zondag'
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Bezoek ons',
        address: 'Adres',
        phone: 'Telefoon',
        email: 'E-mail',
        directions: 'Routebeschrijving',
        companyNumber: 'Ondernemingsnummer'
    },
    menu: {
        menus: 'Menu’s',
        perPerson: 'persoon'
    },
    alt: {
        logo: 'Cape Cod logo',
        store: 'Onze toonbank met wijnen, kazen en fijne vleeswaren',
        dish: 'Visbereiding met Noordzeegarnalen en zeekraal',
        appetizers: 'Assortiment van verfijnde hapjes'
    }
};

export type Messages = typeof nl;
