import type { Messages } from './nl';

export const fr: Messages = {
    meta: {
        title: 'Cape Cod — Traiteur & épicerie fine à Nieuport',
        description: 'Cape Cod à Nieuport : homard, huîtres, préparations de poisson, salades, pâtes, vins, fromages et charcuteries fines.',
        ogLocale: 'fr_BE'
    },
    nav: {
        label: 'Navigation principale',
        welcome: 'Bienvenue',
        offer: 'Notre offre',
        menu: 'Suggestions',
        openinghours: 'Heures d’ouverture',
        contact: 'Contact'
    },
    header: {
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
        language: 'Langue',
        skipToContent: 'Aller au contenu'
    },
    hero: {
        eyebrow: 'Traiteur · Épicerie fine · Nieuport',
        welcome: 'Bienvenue',
        tagline: 'Homard, huîtres, préparations de poisson et fines délicatesses, préparés avec soin à la côte.',
        ctaHours: 'Heures d’ouverture',
        ctaCall: 'Appelez-nous'
    },
    news: {
        eyebrow: 'Nouvelles',
        title: 'Un nouveau chapitre',
        text:
            'Nous avons le plaisir de vous annoncer que Dries reprendra la boutique Cape Cod à partir de lundi. ' +
            'Il se fera un plaisir de vous accueillir avec la même qualité, le même service et la même passion que vous connaissez. ' +
            'N’hésitez pas à passer lui dire bonjour et à lui réserver un accueil chaleureux !'
    },
    offer: {
        eyebrow: 'Notre offre',
        title: 'Les saveurs de la côte',
        intro: 'Des plats délicieux tels que des plateaux de homard, des préparations d’huîtres et de poissons, des salades et des pâtes, accompagnés de vins exclusifs, de fromages et de charcuteries fines.',
        items: [
            { title: 'Homard & huîtres', text: 'Plateaux de homard, huîtres fraîches et fruits de mer festifs.' },
            { title: 'Poisson & traiteur', text: 'Plats de poisson, salades et pâtes faits maison, à savourer chez vous.' },
            { title: 'Vins, fromages & charcuterie', text: 'Vins exclusifs, fromages et charcuteries fines de notre comptoir.' }
        ]
    },
    openingHours: {
        eyebrow: 'Passez nous voir',
        title: 'Heures d’ouverture',
        closed: 'Fermé',
        today: 'Aujourd’hui',
        status: {
            openUntil: (time: string) => `Ouvert · jusqu’à ${time}`,
            closed: 'Fermé actuellement',
            opensToday: (time: string) => `Fermé · ouvre à ${time}`,
            opensTomorrow: (time: string) => `Fermé · ouvre demain à ${time}`,
            opensOn: (day: string, time: string) => `Fermé · ouvre ${day.toLowerCase()} à ${time}`
        }
    },
    days: {
        monday: 'Lundi',
        tuesday: 'Mardi',
        wednesday: 'Mercredi',
        thursday: 'Jeudi',
        friday: 'Vendredi',
        saturday: 'Samedi',
        sunday: 'Dimanche'
    },
    contact: {
        eyebrow: 'Contact',
        title: 'Rendez-nous visite',
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'E-mail',
        directions: 'Itinéraire',
        companyNumber: 'Numéro d’entreprise'
    },
    menu: {
        menus: 'Menus',
        perPerson: 'personne'
    },
    alt: {
        logo: 'Logo Cape Cod',
        store: 'Notre comptoir avec vins, fromages et charcuteries fines',
        dish: 'Préparation de poisson aux crevettes grises et salicorne',
        appetizers: 'Assortiment d’amuse-bouches raffinés'
    }
};
