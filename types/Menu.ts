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

export const MENU: Menu = {
  dishSets: [
    {
      name: 'Om te starten',
      dishes: [
        { name: 'Assortiment van 4 koude hapjes', price: 7.5 },
        { name: 'Assortiment van 4 warme hapjes', price: 7.5 },
        { name: 'Assortiment van 4 feesthapjes', price: 15 }
      ]
    },
    {
      name: 'Om te delen',
      dishes: [
        { name: 'Royaal tapas bord', price: 39 },
        { name: 'Quiche met spek en prei', price: 12 },
        { name: 'Turkse pizza - chorizo - paprika', price: 12 },
        { name: 'Plaattaart - peer - Fourme d\'Ambert (VG)', price: 13 },
        { name: 'Warme camembert - truffel - Cappocolo-stokbrood', price: 15 },
        { name: 'Ganzenleverterrines met Sauternes of met Port & truffel en de bijhorende garnituren en confituren' },
        { name: '\"Imperial Heritage Caviar\" (10,30, 50 et 125gr) op bestelling' },
      ]
    },
    {
      name: 'Oesters',
      dishes: [
        { name: 'Oléron nr3 & Oostendse holle oester nr3', price: 2.5 },
        { name: 'Ierse Oisri nr3', price: 3 },
        { name: 'Cuvée prestige nr3 & Oostendse platte 0000', price: 3.75 },
        { name: 'Gillardeau nr3', price: 4 }
      ]
    },
    {
      name: 'Koude voorgerechten',
      dishes: [
        { name: 'Carpaccio van \"Blonde d\'Aquitaine\"-parmezaan', price: 12 },
        { name: 'Carpaccio van \"Blonde d\'Aquitaine\"-parmezaan -truffel', price: 16 },
        { name: 'Gemarineerde Noorse zalm-eekhoorntjesbroodnootjes-knolletjes', price: 17.5 },
        { name: 'Gemarineerde Noorse zalm Graxlav-winters slaatje', price: 17.5 },
        { name: 'Gemarineerde Sint-Jacobsnootjes-tagliatelle van prei-oesterblad-mousseline van oesters', price: 21 },
        { name: 'Klassieke cocktail van kreeft', price: 35 }
      ]
    },
    {
      name: 'Soepen',
      dishes: [
        { name: 'Aspergesoep', price: 8, unit: 'L' },
        { name: 'Roomsoep van boschampignons', price: 10, unit: 'L' },
        { name: 'Nieuwpoortse vissoep-rouille-croutons', price: 11, unit: 'L' },
        { name: 'Bisque van kreeft-stukjes kreeft- Armagnac', price: 17, unit: 'L' },
      ]
    },
    {
      name: 'Warme voorgerechten',
      dishes: [
        { name: 'Half dozijn scampi- polderboter met look & kruiden', price: 14 },
        { name: 'Half dozijn Oostendse oester/Champagneroom-prei', price: 17 },
        { name: 'Sint-Jacobsnootjes in de schelp op oma\'s wijze', price: 17.5 },
        { name: 'Bladerdeegje-kalfszwezerikenTruffel-boschampignons', price: 23 },
        { name: 'Gepofte aardappel-ganzenlever-eekhoorntjesbrood', price: 23 },
        { name: 'Half dozijn Oisri oester- room van Chablis-zeekraal (10gr extra \'Imperial Heritage\' kaviaar +€25)', price: 21 },
        { name: 'Bretoense langoustines-bieslook-look-parmezaanmozzarella', price: 23 },
      ]
    },
    {
      name: 'Kreeftbereidingen (450 à 500gr)',
      dishes: [
        { name: 'Klassieke volledige kreeft \"Belle Vue\"', price: 39.5 },
        { name: 'Volledige kreeft-polderboter met look & kruiden-pasta', price: 39.5 },
        { name: 'Klassieke volledige Kreeft \'Thermidor\'-pasta', price: 39.5 },
      ]
    },
    {
      name: 'Visbereidingen (garnituren inbegrepen)',
      dishes: [
        { name: 'Lievens vispannetje uit de Noordzee', price: 19.5 },
        { name: 'Wit van zeewolf-room van fijne groenten', price: 19.5 },
        { name: 'Noorse zalmfilet- room van grond witloof- gerookt spek', price: 21 },
        { name: 'Nieuwpoortse tongrolletjes- room van Chablis-zeekraalgarnalen', price: 25 },
        { name: 'Tarbot en volledige kreeft in Bouilabaise -groentjes -krieltjes- rouille- croutons (per 2 P)', price: 78 },
      ]
    },
    {
      name: 'Vlees -en wildbereidingen (garnituren inbegrepen)',
      dishes: [
        { name: 'Koninginnenhapje met aardappelpuree (voor de allerkleinsten)', price: 11 },
        { name: 'Duroc varkenshaasje-sausje met boschampignons wintergroenten- gratin dauphinois', price: 15.5 },
        { name: 'Stoofpotje van Edelhert-Bourgogne wijn eindejaarsgarnituur- knolselderpuree', price: 17.5 },
        { name: 'Lamsbout met look& rozemarijn-tajine van wintergroenten gratin dauphinois', price: 18.5 },
        { name: 'Wit van hoeveparelhoen- \'Fine Champagne\'- eindejaarsgarnituur- gratin dauphinois', price: 21.5 },
        { name: 'Rib-eye van kalf met look en rozemarijn- tajine van wintergroenten- gratin dauphinois', price: 25 },
        { name: 'Tournedos van hazenrug uit de Polders-room van honing & zwarte peper- eindejaarsgarnituur-knolselderpuree', price: 25 },
        { name: 'Filet van Edelhert \'Grand Veneur\'- eindejaarsgarnituur-knolselderpuree', price: 29.5 },
      ]
    },
    {
      name: 'Vegetarische gerechten',
      dishes: [
        { name: 'Plaattaart met peer & Fourme d\'Ambert', price: 13 },
        { name: 'Pasta roulade-spinazie-ricotta-tomaat', price: 13 },
        { name: 'Lasagne-witloof-tallegio-parmezaan-noten', price: 15 },
      ]
    },
    {
      name: 'Desserts',
      dishes: [
        { name: 'Tiramisu', price: 4.5 },
        { name: 'Nagerecht met zwarte chocolade', price: 5 },
        { name: 'Nagerecht met framboos en pistache', price: 5 },
        { name: 'Citroentaartje met meringue', price: 5 },
        { name: 'Kaasbordje met zijn garnituren', price: 12 },
      ]
    },
  ],
  dishMenus: [
    {
      name: 'Menu knipoog naar 2024 (Min 2P)',
      dishes: [
        { name: 'Carpaccio van \"Blonde d\'Aquitaine\"-parmezaan' },
        { name: 'Lieven\'s vispannetje uit de Noordzee' },
        { name: 'Tiramisu' }
      ],
      price: 35
    },
    {
      name: 'Menu tussen strand & polders (Min 2P)',
      dishes: [
        { name: 'Gemarineerde sint-Jacobsnootjes/tagliatelle van prei/oesterbladmousseline van oesters (10gr extra \'Imperial Heritage\' kaviaar +€25)' },
        { name: 'Bretoense langoustines-bieslook-look-parmezaan-mozzarella' },
        { name: 'Wit van hoeveparelhoen-\'Fine Champagne\'-eindejaarsgarnituur-gratin dauphinois' },
        { name: 'Kaasbordje met zijn garnituren (+12€PP)' },
        { name: 'Nagerecht naar keuze' }
      ],
      price: 69
    }
  ]
};

export const MENU_FR: Menu = {
  dishSets: [
    {
      name: 'Pour commencer',
      dishes: [
        { name: 'Assortiment de 4 amuse-gueules froids', price: 7.5 },
        { name: 'Assortiment de 4 amuse-gueules chauds', price: 7.5 },
        { name: 'Assortiment de 4 amuse-gueules festifs', price: 15 }
      ]
    },
    {
      name: 'Pour partager',
      dishes: [
        { name: 'Plateau de tapas généreux', price: 39 },
        { name: 'Quiche aux lardons et poireaux', price: 12 },
        { name: 'Pizza turque - chorizo - poivron', price: 12 },
        { name: 'Tarte à la poire - Fourme d\'Ambert (VG)', price: 13 },
        { name: 'Camembert chaud - truffe - Cappocolo-pain', price: 15 },
        { name: 'Terrines de foie gras au Sauternes ou au Porto & truffe avec leurs garnitures et confitures assorties' },
        { name: '\"Imperial Heritage Caviar\" (10, 30, 50 et 125gr) sur commande' },
      ]
    },
    {
      name: 'Huîtres',
      dishes: [
        { name: 'Oléron nr3 & Huître creuse d\'Ostende nr3', price: 2.5 },
        { name: 'Ostréa irlandaise Oisri nr3', price: 3 },
        { name: 'Cuvée prestige nr3 & Huître plate d\'Ostende 0000', price: 3.75 },
        { name: 'Gillardeau nr3', price: 4 }
      ]
    },
    {
      name: 'Entrées froides',
      dishes: [
        { name: 'Carpaccio de \"Blonde d\'Aquitaine\" au parmesan', price: 12 },
        { name: 'Carpaccio de \"Blonde d\'Aquitaine\" au parmesan - truffe', price: 16 },
        { name: 'Saumon norvégien mariné - cèpes - petits légumes racines', price: 17.5 },
        { name: 'Saumon norvégien mariné Graxlav - salade d\'hiver', price: 17.5 },
        { name: 'Noix de Saint-Jacques marinées - tagliatelles de poireaux - mousseline d\'huitres', price: 21 },
        { name: 'Cocktail classique de homard', price: 35 }
      ]
    },
    {
      name: 'Soupes',
      dishes: [
        { name: 'Soupe d\'asperges', price: 8, unit: 'L' },
        { name: 'Crème de champignons', price: 10, unit: 'L' },
        { name: 'Soupe de poissons de Nieuport-rouille-croutons', price: 11, unit: 'L' },
        { name: 'Bisque de homard-morceaux de homard-Armagnac', price: 17, unit: 'L' },
      ]
    },
    {
      name: 'Entrées chaudes',
      dishes: [
        { name: 'Demi-douzaine de scampis-beurre de polder à l\'ail & aux herbes', price: 14 },
        { name: 'Demi-douzaine d\'huîtres Ostendaises/Champagneroom-poireaux', price: 17 },
        { name: 'Noix de Saint-Jacques dans la coquille à la manière de grand-mère', price: 17.5 },
        { name: 'Feuilleté-ris de veau-truffe-champignons des bois', price: 23 },
        { name: 'Pomme de terre cuite au four-foie gras-cèpes', price: 23 },
        { name: 'Demi-douzaine d\'huîtres Oisri-Chablis-zeekraal (10g de plus de caviar \'Imperial Heritage\' +25€)', price: 21 },
        { name: 'Langoustines bretonnes-ciboulette-ail-parmesan-mozzarella', price: 23 },
      ]
    },
    {
      name: 'Préparations de homard (450 à 500g)',
      dishes: [
        { name: 'Homard entier classique \"Belle Vue\"', price: 39.5 },
        { name: 'Homard entier-beurre de polder à l\'ail & aux herbes-pâtes', price: 39.5 },
        { name: 'Homard entier classique \"Thermidor\"-pâtes', price: 39.5 },
      ]
    },
    {
      name: 'Préparations de poissons (garnitures incluses)',
      dishes: [
        { name: 'Ragoût de poissons de Lieven de la mer du Nord', price: 19.5 },
        { name: 'Blanc de loup de mer-crème de légumes fins', price: 19.5 },
        { name: 'Filet de saumon norvégien-crème de chicon- lard fumé', price: 21 },
        { name: 'Rouleaux de sole de Nieuport-crème de Chablis-crevettes à la crème de chicon', price: 25 },
        { name: 'Turbot et homard entier en bouillabaisse -légumes -pommes de terre- rouille-croutons (pour 2 P)', price: 78 },
      ]
    },
    {
      name: 'Préparations de viandes et gibiers (garnitures incluses)',
      dishes: [
        { name: 'Croquette royale avec purée de pommes de terre (pour les tout-petits)', price: 11 },
        { name: 'Filet de porc Duroc-sauce aux champignons des bois-légumes d\'hiver-gratin dauphinois', price: 15.5 },
        { name: 'Ragoût de cerf de Virginie-vin de Bourgogne-garniture de fin d\'année-purée de céleri-rave', price: 17.5 },
        { name: 'Gigot d\'agneau à l\'ail et au romarin-tajine de légumes d\'hiver-gratin dauphinois', price: 18.5 },
        { name: 'Blanc de poulet de ferme-\'Fine Champagne\'-garniture de fin d\'année-gratin dauphinois', price: 21.5 },
        { name: 'Entrecôte de veau à l\'ail et au romarin-tajine de légumes d\'hiver-gratin dauphinois', price: 25 },
        { name: 'Tournedos de dos de lièvre des Polders-crème de miel & poivre noir-garniture de fin d\'année-purée de céleri-rave', price: 25 },
        { name: 'Filet de cerf Grand Veneur-garniture de fin d\'année-purée de céleri-rave', price: 29.5 },
      ]
    },
    {
      name: 'Plats végétariens',
      dishes: [
        { name: 'Tarte à la poire & Fourme d\'Ambert', price: 13 },
        { name: 'Roulade de pâte épinards-ricotta-tomate', price: 13 },
        { name: 'Lasagne-chicon-tallegio-parmesan-noix', price: 15 },
      ]
    },
    {
      name: 'Desserts',
      dishes: [
        { name: 'Tiramisu', price: 4.5 },
        { name: 'Dessert au chocolat noir', price: 5 },
        { name: 'Dessert à la framboise et à la pistache', price: 5 },
        { name: 'Tartelette au citron meringuée', price: 5 },
        { name: 'Assiette de fromages avec ses garnitures', price: 12 },
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Menu Clin d\'oeuil à 2023 (Min 2P)',
      dishes: [
        { name: 'Carpaccio de \"Blonde d\'Aquitaine\" au parmesan' },
        { name: 'Casserole de poisson de Lieven de la mer du Nord' },
        { name: 'Tiramisu' }
      ],
      price: 35
    },
    {
      name: 'Menu entre plage & polders (Min 2P)',
      dishes: [
        { name: 'Noix de Saint-Jacques marinées/tagliatelles de poireaux/mousseline d\'huîtres (10g de \"Imperial Heritage\" caviar supplémentaire +25€)' },
        { name: 'Langoustines de Bretagne-ciboulette-ail-parmesan-mozzarella' },
        { name: 'Blanc de poulet de ferme-\'Fine Champagne\'-garniture du Nouvel An-gratin dauphinois' },
        { name: 'Assiette de fromages avec ses accompagnements (+12€PP)' },
        { name: 'Dessert au choix' }
      ],
      price: 69
    }
  ]
}
