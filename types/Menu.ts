import type { Locale } from "../i18n";

/** Toggle the seasonal suggestions section (and its navigation item) on the home page. */
export const SHOW_MENU = true;

export interface Menu {
  description?: string;
  dishSets: DishSet[];
  dishMenus: DishMenu[];
}

export interface DishSet {
  name: string;
  dishes: Dish[];
}

export interface DishMenu {
  name: string;
  description?: string;
  dishes: Dish[];
  price: number;
}

export interface Dish {
  name: string;
  description?: string;
  price?: string | number;
  unit?: string;
}

const MENU_NL: Menu = {
    description: "Onze suggesties voor het eindejaar 2026 \n\nBestel eenvoudig via info@capecod.be. Je bestelling is definitief na onze bevestiging. \nKERST: bestel vóór 20/12 om 12u - EINDEJAAR: bestel vóór 27/12 om 12u\nAfhalen 24/12 en 31/12 tussen 13u30 tot 17u of 25/12 en 01/01 tussen 9u tot 11u.",

    dishSets: [
        {
            name: "HAPJES om het feest smaakvol te openen",
            dishes: [
                { name: "Assortiment van 4 koude hapjes", price: 8.5 },
                { name: "Assortiment van 4 warme hapjes", price: 8.5 },
                { name: "Assortiment van 4 luxe feesthapjes", price: 15 }
            ]
        },
        {
            name: "QUICHES om te delen (4-6 personen)",
            dishes: [
                { name: "Quiche met boschampignons en truffel", price: 17 },
                { name: "Quiche met chorizo en knolselder", price: 17 },
                { name: "Quiche met spek en prei", price: 15 },
                { name: "Quiche met gerookte zalm en Mimolette kaas", price: 17 }
            ]
        },
        {
            name: "OESTERS, KAVIAAR, GANZELEVER en KROKETTEN",
            dishes: [
                { name: "Gilardeau n° 3", price: 4.5, unit: "per stuk" },
                { name: "Marennes d’Olérons n° 3", price: 3, unit: "per stuk" },
                { name: "Warme Oléron n° 3 oesters met prei en champagne", price: 23, description: "6 stuks" },
                {
                    name: "Kaviaar ‘Heritage’ Oscietra en Beluga",
                    description: "keuze uit 30, 50 of 125 gram"
                },
                { name: "Huisbereide ganzenleverterrines" },
                { name: "Garnaalkroketten" }
            ]
        },
        {
            name: "SOEPEN",
            dishes: [
                { name: "Aspergeroomsoep", price: 9 },
                { name: "Boschampignonsoep", price: 9 },
                { name: "Bisque van kreeft met stukjes kreeft en Armagnac", price: 18 }
            ]
        },
        {
            name: "KOUDE VOORGERECHTEN (fris en makkelijk op te dienen)",
            dishes: [
                { name: "Carpaccio van wit-blauw rund, parmezaan en truffel", price: 18 },
                { name: "Gebrande Schotse zalm met cruditeiten", price: 18.5 },
                { name: "Gerookte zalm met zure room en z’n garnituur", price: 21.5 },
                { name: "Klassieke cocktail met handgepelde Nieuwpoortse garnalen", price: 32 },
                { name: "Vitello tonnato", price: 21.5 }
            ]
        },
        {
            name: "WARME VOORGERECHTEN (onze feestelijke klassiekers)",
            dishes: [
                { name: "Gegratineerd vispannetje Royale", price: 18, description: "zeewolf, zalm, garnalen, kabeljauw" },
                { name: "Scampi’s in lookroom en tuinkruiden", price: 16 },
                { name: "Sint-Jacobsnootjes, gebakken met room van boschampignons", price: 18 },
                { name: "Sint-Jacobsnootjes, in de schelp op Oma’s wijze", price: 18 },
                { name: "Truffelravioli met morilles", price: 18.5 },
                { name: "Warme burrata met tomaat", price: 16 },
                { name: "Warme Oléron n° 3 oesters met prei en champagne", price: 23, description: "6 stuks" }
            ]
        },
        {
            name: "KREEFT (volledige kreeften van 450-500 gram uit Canada)",
            dishes: [
                { name: "Klassieke Kreeft 'Belle Vue'", price: 41 },
                { name: "Kreeft lookboter en tuinkruiden, met tagliatelle", price: 41 },
                { name: "Kreeft op z’n Italiaans", price: 41, description: "tomaat, oregano, look, salie" }
            ]
        },
        {
            name: "VISBEREIDINGEN (geserveerd met puree van bintjes en prei)",
            dishes: [
                { name: "Gegratineerd vispannetje Royale", price: 24.5, description: "zeewolf, zalm, garnalen, kabeljauw" },
                { name: "Gebakken wilde zeebaars op Toscaanse wijze, met tagliatelle", price: 29.5 },
                { name: "Kabeljauwhaasje met fijne groentjes en lichte curry", price: 21.5 },
                { name: "Tarbotfilet in witte wijnsaus en bladspinazie", price: 38.5 },
                { name: "Tongrolletjes met witte wijnsaus en Nieuwpoortse garnalen", price: 32.5 },
                { name: "Zalm met dillesaus en venkel", price: 21.5 }
            ]
        },
        {
            name: "VLEES en WILD BEREIDINGEN (winterse gerechten vol smaak)",
            dishes: [
                { name: "Blanket van fazant met Calvados, met eindejaarsgarnituur en selderpuree", price: 19.5 },
                { name: "Civet van hert, met eindejaarsgarnituur en selderpuree", price: 21.5 },
                { name: "Filet van edelhert ‘Grand Veneur’, met eindejaarsgarnituur en selderpuree", price: 33.5 },
                { name: "Hoeveparelhoen fine champagne, met eindejaarsgarnituur en gratin", price: 24.5 },
                { name: "Kalkoen met portosaus, wintergroenten en gratin", price: 16.5 },
                { name: "Varkenshaasje met room van boschampignons, wintergroenten en gratin", price: 18.5 },
                { name: "Balletjes in tomatensaus met aardappelpuree (voor de kleinsten)", price: 10 }
            ]
        },
        {
            name: "VEGETARISCHE BEREIDINGEN",
            dishes: [
                { name: "Warme burrata met tomaat", price: 16 },
                { name: "Quiche met boschampignons en truffel", price: 17 },
                { name: "Rouillade van aubergine", price: 15 },
                { name: "Truffelravioli met morilles", price: 18.5 }
            ]
        },
        {
            name: "NAGERECHTEN (om feestelijk af te sluiten)",
            dishes: [
                { name: "Buche van chocolade", price: 5.5 },
                { name: "Tiramisu met speculoos", price: 5.5 },
                { name: "Fris citroentaartje met meringue", price: 5.5 }
            ]
        }
    ],
    dishMenus: []
};

const MENU_FR: Menu = {
    description: "Suggestions de fin d’année 2026 \n\nPassez votre commande via info@capecod.be. \nVotre commande sera définitive après notre confirmation. \nNOËL: commandez avant le 20/12 à 12 h \nFIN D’ANNÉE: commandez avant le 27/12 à 12 h\nRetrait les 24/12 et 31/12 de 13 h 30 à 17 h ou les 25/12 et 01/01 de 9 h à 11 h.",

    dishSets: [
        {
            name: "AMUSES-BOUCHES",
            dishes: [
                { name: "Assortiment de 4 amuse-bouches froids", price: 8.5 },
                { name: "Assortiment de 4 amuse-bouches chauds", price: 8.5 },
                { name: "Assortiment de 4 amuse-bouches festifs de luxe", price: 15 }
            ]
        },
        {
            name: "QUICHES à partager (4-6 personnes)",
            dishes: [
                { name: "Quiche aux champignons des bois et à la truffe", price: 17 },
                { name: "Quiche au chorizo et au céleri-rave", price: 17 },
                { name: "Quiche aux lardons et aux poireaux", price: 15 },
                { name: "Quiche au saumon fumé et au fromage Mimolette", price: 17 }
            ]
        },
        {
            name: "HUÎTRES, CAVIAR, FOIE GRAS et CROQUETTES",
            dishes: [
                { name: "Huîtres Gillardeau n° 3", price: 4.5, unit: "pièce" },
                { name: "Huîtres de Marennes-Oléron n° 3", price: 3, unit: "pièce" },
                { name: "Huîtres chaudes d’Oléron n° 3, aux poireaux et au champagne", price: 23, description: "6 pièces" },
                {
                    name: "Caviar “Heritage” Osciètre et Béluga",
                    description: "disponibles en portions de 30, 50 ou 125 grammes"
                },
                { name: "Terrines de foie gras maison" },
                { name: "Croquettes de crevettes" }
            ]
        },
        {
            name: "POTAGES",
            dishes: [
                { name: "Velouté d’asperges", price: 9 },
                { name: "Velouté de champignons des bois", price: 9 },
                { name: "Bisque de homard, éclats de homard et Armagnac", price: 18 }
            ]
        },
        {
            name: "ENTRÉES FROIDES",
            dishes: [
                { name: "Carpaccio de bœuf blanc-bleu, parmesan et truffe", price: 18 },
                { name: "Saumon écossais snacké, accompagné de crudités", price: 18.5 },
                { name: "Saumon fumé, crème aigre et ses garnitures", price: 21.5 },
                { name: "Cocktail classique aux crevettes grises de Nieuport, décortiquées à la main", price: 32 },
                { name: "Vitello tonnato", price: 21.5 }
            ]
        },
        {
            name: "ENTRÉES CHAUDES",
            dishes: [
                { name: "Gratinée de poissons Royale", price: 18, description: "lotte, saumon, crevettes et cabillaud" },
                { name: "Scampis à la crème d’ail et aux herbes fraîches", price: 16 },
                { name: "Noix de Saint-Jacques poêlées, crème de champignons des bois", price: 18 },
                { name: "Noix de Saint-Jacques en coquille, préparées à l’ancienne, façon grand-mère", price: 18 },
                { name: "Ravioles à la truffe et aux morilles", price: 18.5 },
                { name: "Burrata chaude à la tomate", price: 16 },
                { name: "Huîtres chaudes d’Oléron n° 3, aux poireaux et au champagne", price: 23, description: "6 pièces" }
            ]
        },
        {
            name: "HOMARDS (homards entiers du Canada de 450 à 500 grammes)",
            dishes: [
                { name: "Homard « Belle-Vue » à la façon classique", price: 41 },
                { name: "Homard au beurre à l’ail et aux herbes fraîches, accompagné de tagliatelles", price: 41 },
                { name: "Homard à l’italienne", price: 41, description: "tomate, origan, ail et sauge" }
            ]
        },
        {
            name: "POISSONS (servis avec une purée de pommes de terre Bintje et de poireaux)",
            dishes: [
                { name: "Gratinée de poissons Royale", price: 24.5, description: "lotte, saumon, crevettes et cabillaud" },
                { name: "Bar sauvage poêlé à la toscane, accompagné de tagliatelles", price: 29.5 },
                { name: "Dos de cabillaud, petits légumes et sauce légère au curry", price: 21.5 },
                { name: "Filet de turbot, sauce au vin blanc et épinards en feuilles", price: 38.5 },
                { name: "Roulades de sole, sauce au vin blanc et crevettes grises de Nieuport", price: 32.5 },
                { name: "Saumon, sauce à l’aneth et fenouil", price: 21.5 }
            ]
        },
        {
            name: "VIANDES et GIBIERS",
            dishes: [
                { name: "Blanquette de faisan en sauce crémeuse au Calvados, garniture de fêtes et purée de céleri-rave", price: 19.5 },
                { name: "Civet de cerf, garniture de fêtes et purée de céleri-rave", price: 21.5 },
                { name: "Filet de cerf « Grand Veneur », garniture de fêtes et purée de céleri-rave", price: 33.5 },
                { name: "Pintade fermière à la Fine Champagne, garniture de fêtes et gratin", price: 24.5 },
                { name: "Dinde, sauce au porto, légumes d’hiver et gratin", price: 16.5 },
                { name: "Filet mignon de porc, crème de champignons des bois, légumes d’hiver et gratin", price: 18.5 },
                { name: "Boulettes de viande à la sauce tomate et de la purée de pommes de terre (pour les enfants)", price: 10 }
            ]
        },
        {
            name: "PLATS VÉGÉTARIENS",
            dishes: [
                { name: "Burrata chaude à la tomate", price: 16 },
                { name: "Quiche aux champignons des bois et à la truffe", price: 17 },
                { name: "Rouillade d’aubergines", price: 15 },
                { name: "Ravioles à la truffe et aux morilles", price: 18.5 }
            ]
        },
        {
            name: "Desserts",
            dishes: [
                { name: "Bûche au chocolat", price: 5.5 },
                { name: "Tiramisu au spéculoos", price: 5.5 },
                { name: "Petite tarte au citron et à la meringue", price: 5.5 }
            ]
        }
    ],
    dishMenus: []
};

export const MENUS: Record<Locale, Menu> = { nl: MENU_NL, fr: MENU_FR };
