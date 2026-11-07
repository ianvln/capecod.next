import type { Locale } from "../i18n";

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
    description: "Onze suggesties voor het eindejaar 2025",
    dishSets: [
        {
            name: "Hapjes om het feest smaakvol te openen",
            dishes: [
                { name: "Assortiment van 4 koude hapjes", price: 7.5 },
                { name: "Assortiment van 4 warme hapjes", price: 7.5 },
                { name: "Assortiment van 4 luxe feesthapjes", price: 15 }
            ]
        },
        {
            name: "Hartige gebakjes om te delen",
            dishes: [
                { name: "Klassieke quiche met spek en prei", price: 12 },
                { name: "Feestelijke quiche met boschampignons en truffel", price: 15 },
                { name: "Pittige quiche met chorizo en knolselder", price: 15 },
                { name: "Pinsa met beukenzwam, coppa en mozzarella", price: 15 },
                { name: "Pinsa met Brugse brokkelkaas, zoete aardappel, knolselder en honing", price: 15 }
            ]
        },
        {
            name: "Geen feest zonder OESTERS, KAVIAAR, GANZENLEVER, KROKETTEN,…",
            dishes: [
                { name: "Marennes d’Olérons Nr3", price: 2.75, unit: "per stuk" },
                { name: "Ierse Oisri Nr3", price: 3, unit: "per stuk" },
                { name: "Gilardeau N3", price: 4.25, unit: "per stuk" },
                {
                    name: "Kaviaar ‘Heritage’ Oscietra en Beluga",
                    description: "Beschikbaar in 30, 50 of 125gr"
                },
                {
                    name: "Onze huisbereide ganzenleverterrines, garnaal- en kaaskroketten"
                }
            ]
        },
        {
            name: "Koude voorgerechten (fris en makkelijk op te dienen)",
            dishes: [
                { name: "Carpaccio van wit blauw rund, parmezaan", price: 12.5 },
                { name: "Carpaccio van wit blauw rund, parmezaan en truffel", price: 16.5 },
                { name: "Tataki van wit blauw rund met Oosterse garnituren", price: 16.5 },
                { name: "Gebrande Schotse zalm met winters slaatje", price: 17.5 },
                { name: "Klassieke cocktail met handgepelde Nieuwpoortse garnalen", price: 32 },
                { name: "Klassieke cocktail met Canadese kreeft", price: 32 }
            ]
        },
        {
            name: "Soepen",
            dishes: [
                { name: "Aspergeroomsoep", price: 9 },
                { name: "Roomsoep met boschampignons", price: 9 },
                { name: "Vissoep met rouille en croutons", price: 12 },
                { name: "Bisque van kreeft met stukjes kreeft en armagnac", price: 17 }
            ]
        },
        {
            name: "Warme voorgerechten (al jaren onze feestelijke klassiekers)",
            dishes: [
                { name: "Scampi’s in roomsausje met look en fijne kruiden", price: 14 },
                { name: "Sint-Jacobsnootjes in de schelp op Oma’s wijze", price: 17.5 },
                { name: "Sint-Jacobsnootjes gebakken met room van boschampignons", price: 17.5 },
                {
                    name: "Gegratineerd vispannetje ‘Royale’ (zeewolf, zalm, garnalen en Sint-Jacobsn.)",
                    price: 17.5
                },
                { name: "Warme Oléron oesters (6) met prei en champagne", price: 21, unit: "per 6" },
                { name: "Gebakken ganzenlever met gekarameliseerde appel", price: 22.5 }
            ]
        },
        {
            name: "Kreeft (volledige kreeften van 450 à 500gr uit Canada)",
            dishes: [
                { name: "Klassieke Kreeft ‘Belle Vue’", price: 41.5, unit: "450–500g" },
                {
                    name: "Kreeft lookboter en tuinkruiden en tagliatelle",
                    price: 41.5,
                    unit: "450–500g"
                },
                { name: "Kreeft met Florentine saus en groene asperges", price: 41.5, unit: "450–500g" }
            ]
        },
        {
            name: "Visbereidingen (geserveerd met puree van bintjes en prei)",
            dishes: [
                { name: "Wit van zeewolf met fijne groenten", price: 20 },
                { name: "Zalm met Florentine saus en groene asperges", price: 22.5 },
                {
                    name: "Gegratineerd vispannetje ‘Royale’ (zeewolf, zalm, garnalen en Sint-Jacobsn.)",
                    price: 22.5
                },
                {
                    name: "Gebakken wilde zeebaars met risotto van groene asperges en kreeftensaus",
                    price: 27.5
                },
                { name: "Tongrolletjes met witte wijn saus en Nieuwpoortse garnalen", price: 28.5 }
            ]
        },
        {
            name: "Vlees en wild bereidingen (stevige winterse gerechten vol smaak)",
            dishes: [
                { name: "Voor de kleinsten: Balletjes in tomatensaus en puree", price: 10 },
                { name: "Wit van kalkoen met portosaus, wintergroenten en gratin", price: 14.5 },
                { name: "Varkenshaasje met room van boschampignons, wintergroenten en gratin", price: 16.5 },
                { name: "Blanket van fazant met calvados, eindejaarsgarnituur en selderpuree", price: 16.5 },
                { name: "Civet van hert, eindejaarsgarnituur en selderpuree", price: 17.5 },
                {
                    name: "Koude Tataki van wit blauw rund met Oosterse garnituren en noedelsalade",
                    price: 21.5
                },
                { name: "Hoeveparelhoen ‘fine champagne’, eindejaarsgarnituur en gratin", price: 22.5 },
                { name: "Hazenrug zwarte pepersaus, eindejaarsgarnituur en selderpuree", price: 31.5 },
                { name: "Filet van edelhert ‘Grand Veneur’, eindejaarsgarnituur en selderpuree", price: 33.5 }
            ]
        },
        {
            name: "Vegetarische bereidingen",
            dishes: [
                { name: "Quiche met boschampignons en truffel", price: 15 },
                { name: "Risotto met groene asperges en parmezaan", price: 15 },
                { name: "Pinsa met Brugse brokkel kaas, zoete aardappel, knolselder en honing", price: 15 }
            ]
        },
        {
            name: "Nagerechten (om feestelijk af te sluiten, onze zoete ideetjes)",
            dishes: [
                { name: "De Italiaanse klassieker, tiramisu met koffie en amaretto", price: 5 },
                { name: "Fris citroentaartje met meringue", price: 5 },
                {
                    name: "Ons onweerstaanbaar gebakje met lava van zwarte chocolade (moelleux)",
                    price: 5
                },
                { name: "Onze selectie van verfijnde mini dessertjes voor bij de koffie", price: 5 },
                { name: "Buche met zijdezachte chocolade", price: 5.5 }
            ]
        }
    ],
    dishMenus: []
};

const MENU_FR: Menu = {
    description: "Suggestions de fin d’année 2025",
    dishSets: [
        {
            name: "Amuse-bouches",
            dishes: [
                { name: "Assortiment de 4 amuse-bouches froids", price: 7.5 },
                { name: "Assortiment de 4 amuse-bouches chauds", price: 7.5 },
                { name: "Assortiment de 4 amuse-bouches de luxe", price: 15 }
            ]
        },
        {
            name: "À partager",
            dishes: [
                { name: "Quiche classique au lard et poireaux", price: 12 },
                { name: "Quiche festive aux champignons des bois et truffe", price: 15 },
                { name: "Quiche relevée au chorizo et céleri-rave", price: 15 },
                { name: "Pinsa aux champignons des bois, coppa et mozzarella", price: 15 },
                {
                    name: "Pinsa au vieux fromage de Bruges, patate douce, céleri-rave et miel",
                    price: 15
                }
            ]
        },
        {
            name: "Huîtres, caviar, foie gras, croquettes…",
            dishes: [
                { name: "Huîtres Marennes d’Oléron n°3", price: 2.75, unit: "pièce" },
                { name: "Huîtres Irlandaises Oisri n°3", price: 3, unit: "pièce" },
                { name: "Huîtres Gilardeau n°3", price: 4.25, unit: "pièce" },
                {
                    name: "Caviar “Heritage” Oscietra et Beluga",
                    description: "Disponible en 30, 50 ou 125 g"
                },
                {
                    name: "Nos terrines de foie gras maison, croquettes de crevettes et de fromage"
                }
            ]
        },
        {
            name: "Entrées froides",
            dishes: [
                { name: "Carpaccio de bœuf blanc-bleu, parmesan", price: 12.5 },
                { name: "Carpaccio de bœuf blanc-bleu, parmesan et truffe", price: 16.5 },
                { name: "Tataki de bœuf blanc-bleu aux garnitures Orientales", price: 16.5 },
                { name: "Saumon Ecossais légèrement brûlé, salade hivernale", price: 17.5 },
                {
                    name: "Cocktail classique aux crevettes de Nieuport décortiquées à la main",
                    price: 32
                },
                { name: "Cocktail classique au homard Canadien", price: 32 }
            ]
        },
        {
            name: "Soupes",
            dishes: [
                { name: "Crème d’asperges", price: 9 },
                { name: "Crème de champignons des bois", price: 9 },
                { name: "Soupe de poisson avec rouille et croûtons", price: 12 },
                { name: "Bisque de homard avec morceaux de homard et armagnac", price: 17 }
            ]
        },
        {
            name: "Entrées chaudes",
            dishes: [
                { name: "Scampis à la crème, ail et fines herbes", price: 14 },
                { name: "Noix de Saint-Jacques dans leur coquille “grand-mère”", price: 17.5 },
                { name: "Noix de Saint-Jacques poêlées, crème de champignons des bois", price: 17.5 },
                {
                    name: "Gratin de poisson “Royale” (loup de mer, saumon, crevettes et Saint-Jacques)",
                    price: 17.5
                },
                { name: "Huîtres d’Oléron chaudes (6) aux poireaux et champagne", price: 21, unit: "6 pcs" },
                { name: "Foie gras poêlé, pomme caramélisée", price: 22.5 }
            ]
        },
        {
            name: "Homard (450 à 500gr du Canada)",
            dishes: [
                { name: "Homard classique “Belle Vue”", price: 41.5, unit: "450–500g" },
                { name: "Homard au beurre d’ail et fines herbes, tagliatelles", price: 41.5, unit: "450–500g" },
                { name: "Homard sauce Florentine et asperges vertes", price: 41.5, unit: "450–500g" }
            ]
        },
        {
            name: "Poissons (servis avec purée de pommes de terre et poireaux)",
            dishes: [
                { name: "Blanc de loup de mer aux petits légumes", price: 20 },
                { name: "Saumon sauce Florentine et asperges vertes", price: 22.5 },
                {
                    name: "Gratin de poisson “Royale” (loup de mer, saumon, crevettes et Saint-Jacques)",
                    price: 22.5
                },
                {
                    name: "Bar sauvage poêlé, risotto aux asperges vertes et sauce au homard",
                    price: 27.5
                },
                { name: "Filets de sole, sauce au vin blanc et crevettes de Nieuport", price: 28.5 }
            ]
        },
        {
            name: "Viande et gibiers (garnitures comprises)",
            dishes: [
                { name: "Pour les plus jeunes : Boulettes sauce tomate, purée", price: 10 },
                { name: "Blanc de dinde sauce porto, légumes d’hiver et gratin", price: 14.5 },
                {
                    name: "Filet mignon de porc, crème de champignons des bois, légumes d’hiver et gratin",
                    price: 16.5
                },
                {
                    name: "Blanquette de faisan au calvados, garniture de fin d’année et purée de céleri",
                    price: 16.5
                },
                { name: "Civet de cerf, garniture de fin d’année et purée de céleri", price: 17.5 },
                {
                    name: "FROID Tataki de bœuf blanc-bleu, garnitures Orientales et salade de nouilles",
                    price: 21.5
                },
                {
                    name: "Pintade fermière “fine champagne”, garniture de fin d’année et gratin",
                    price: 22.5
                },
                {
                    name: "Rable de lièvre, sauce au poivre noir, garniture de fin d’année et purée de céleri",
                    price: 31.5
                },
                {
                    name: "Filet de cerf ‘Grand Veneur’, garniture de fin d’année et purée de céleri",
                    price: 33.5
                }
            ]
        },
        {
            name: "Plats végétariens",
            dishes: [
                { name: "Quiche aux champignons des bois et truffe", price: 15 },
                { name: "Risotto aux asperges vertes et parmesan", price: 15 },
                {
                    name: "Pinsa au fromage de Bruges, patate douce, céleri-rave et miel",
                    price: 15
                }
            ]
        },
        {
            name: "Desserts",
            dishes: [
                { name: "Tiramisu au café et à l’amaretto", price: 5 },
                { name: "Tartelette au citron et meringue", price: 5 },
                { name: "Notre irrésistible moelleux au chocolat noir", price: 5 },
                {
                    name: "Notre sélection de mini-desserts raffinés pour accompagner le café",
                    price: 5
                },
                { name: "Bûche au chocolat", price: 5.5 }
            ]
        }
    ],
    dishMenus: []
};

export const MENUS: Record<Locale, Menu> = { nl: MENU_NL, fr: MENU_FR };
