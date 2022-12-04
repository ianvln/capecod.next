export interface Menu {
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
    price?: number;
    unit? : string;
}


export const MENU: Menu = {
    dishSets: [
      { 
        name: 'Om te starten',
        dishes: [
          { name: 'Assortiment van 4 koude hapjes', price: 6.5 },
          { name: 'Assortiment van 4 warme hapjes', price: 6.5 },
          { name: 'Assortiment van 4 feestelijke hapjes', price: 13 },
        ]
      },
      { 
        name: 'Om te delen',
        dishes: [
          { name: 'Royaal bord met tapas-hapjes-tapenades-dips', price: 35 },
          { name: 'Quiche met belegen geitenkaas-kastanjes-walnoten-honing (VG)', price: 12 },
          { name: 'Quiche met Jonagolden-rode biet-feta (VG)', price: 12 },
          { name: 'Quiche met spek en prei', price: 12 },
          { name: 'Ganzenlever terrines', description: 'Verschillende huisbereiding en bijhorende confituren zijn verkrijgbaar in de winkel' },
          { name: 'Oesters', description: 'Ruim aanbod aan holle en platte oesters volgens dagelijkse aanvoer zoals Oléron n3 (€1,95), Oostendse holle oester n3 (€1,95),  Oisri oester n3 (€2,75), Oostendse platte oester (€3,50), Cuvée Prestige n3 (€3,50), Gillardeau n3 (€3,75).' },
          { name: '"Royal Belgian Caviar"', description: 'Verkrijgbaar op bestelling (30g, 50g, 125g). Vraag meer uitleg in de winkel' },
        ]
      },
      { 
        name: 'Koude voorgerechten',
        dishes: [
          { name: 'Carpaccio van “Blonde d\'Aquitaine”-parmezaan', price: 10 },
          { name: 'Carpaccio van “Blonde d\'Aquitaine”-parmezaan-truffel uit Carpentras', price: 15 },
          { name: 'Carpaccio van “Blonde d\'Aquitaine”-parmezaan-eekhoorntjesbrood', price: 15 },
          { name: 'Gravlax-sausje met dille-winters slaatje', price: 17 },
          { name: 'Gekarameliseerde zalm-sesam-koriander', price: 17 },
          { name: 'Duo van onze zalmbereidingen', price: 20 },
          { name: 'Gemarineerde Sint-Jacobsnootjes-knolselder-aardpeer-eekhoorntjesbrood', price: 20 },
          { name: 'Klassieke cocktail van handgepelde garnalen', price: 25 },
        ]
      },
      { 
        name: 'Soepen',
        dishes: [
          { name: 'Aspergeroomsoep', price: 7, unit: 'l' },
          { name: 'Roomsoep van boschampignons', price: 8, unit: 'l' },
          { name: 'Nieuwpoortse vissoep-rouille-croutons', price: 10, unit: 'l' },
          { name: 'Bisque van kreeft-kreeftenblokjes-Armagnac', price: 16, unit: 'l' },
        ]
      },
      { 
        name: 'Warme voorgerechten',
        dishes: [
          { name: 'Bladerdeegje-vol au vent van fazant-boschampignons', price: 10 },
          { name: 'Half dozijn scampi-polderboter met look-verse tuin kruiden', price: 13 },
          { name: 'Half dozijn scampi-Indische curry-groentjes', price: 14 },
          { name: 'Sint-Jacobsnootjes in de schelp op grootmoeders wijze', price: 17 },
          { name: 'Half dozijn Oostendse oesters-Champagneroom met prei', price: 16 },
          { name: 'Half dozijn Oisri oester-saus van Chablis-zeekraal', description: '(+10g Royal Belgian Caviar Platinum €25 extra)', price: 20 },
        ]
      },
      { 
        name: 'Kreeftbereidingen (450 à 500gr)',
        dishes: [
          { name: 'Klassieke volledige kreeft “Belle vue”', price: 37.5 },
          { name: 'Volledige kreeft-polderboter met look- verse tuinkruiden-pasta', price: 37.5 },
          { name: 'Volledige kreeft-polderboter- room van boschampignons-pasta', price: 37.5 },
        ]
      },
      { 
        name: 'Visbereidingen (garnituren inbegrepen)',
        dishes: [
          { name: 'Vol au vent uit de Noordzee-bladerdeegje', price: 18 },
          { name: 'Wit van zeewolf- room van fijne groenten', price: 19 },
          { name: 'Nieuwpoortse tongrolletjes-roomsaus met Chablis-zeekraal-garnalen', price: 25 },
          { name: 'Gebakken zeetong-paprika gevuld met Toscaanse groenten-krieltjes', price: 30 },
          { name: 'Wit van tarbot en volledige kreeft-bladspinazie-Nantua saus', description: 'per 2 personen', price: 70 },
        ]
      },
      { 
        name: 'Vlees- en wildbereidingen',
        dishes: [
          { name: 'Koninginnehapje met aardappelpuree (voor onze kleinsten)', price: 10 },
          { name: 'Blanket van fazantenboutjes-room met Calvados-eindejaarsgarnituur', price: 14 },
          { name: 'Duo van kwartels-saus met steranijs en sinaasappel-eindejaarsgarnituur', price: 14 },
          { name: 'Duroc varkenshaasje - room van boschampignons-wintergroenten-gratinaardappelen', price: 15 },
          { name: 'Stoofpot van edelhert-Bourgogne wijn-eindejaarsgarnituur', price: 16 },
          { name: 'Wit van hoeveparelhoen “Grand veneur”-eindejaarsgarnituur', price: 20 },
          { name: 'Tournedos van Vlaamse hazenrug met zwarte pepersaus- honing- eindejaarsgarnituur', price: 25 },
          { name: 'Filet van jong hert-"Grand Veneur"- eindejaarsgarnituur', price: 28 },
        ]
      },
      { 
        name: 'Vegetarische bereidingen',
        dishes: [
          { name: 'Quiche met belegen geitenkaas-walnoten-kastanjes-honing', price: 12 },
          { name: 'Quiche met jonagolden-rode biet-feta', price: 12 },
          { name: 'Ravioli met fourme d\'Ambert-kastanjes-noten', price: 14 },
          { name: 'Ravioli met truffelroom-boschampignons-parmezaan', price: 15 },
        ]
      },
      { 
        name: 'Nagerechten',
        dishes: [
          { name: 'Biscuit van zwarte chocolade', price: 4 },
          { name: 'Bavarois van framboos', price: 4.5 },
          { name: 'Citroentaartje met meringue', price: 4.5 },
          { name: 'Moelleux van zwarte chocolade', price: 5 },
          { name: 'Kaasbordje met zijn garnituren', price: 12 }
        ]
      },
    ],
    dishMenus: [
        { 
            name: 'Knipoog naar 2023',
            description: 'Minimum 2 personen',
            dishes: [
                { name: 'Carpaccio van “Blonde d\'Aquitaine”-parmezaan-eekhoorntjesbrood' },
                { name: 'Blanket van fazantenboutjes-room met Calvados-eindejaarsgarnituur' },
                { name: 'Biscuit van zwarte chocolade' }
            ],
            price: 30
        },
        { 
            name: '"Tussen strand en polder"',
            description: 'Minimum 2 personen',
            dishes: [
                { name: 'Gemarineerde Sint-Jacobsnootjes-knolselder-aardpeer-eekhoorntjesbrood' },
                { name: 'Half kreeftje-bladspinazie-Nantuasaus' },
                { name: 'Wit van hoeveparelhoen “Grand Veneur”-eindejaarsgarnituur' },
                { name: 'Kaasbordje met zijn garnituren (+10 pp)' },
                { name: 'Nagerecht naar keuze' }
            ],
            price: 60
        },
    ]
  }

  export const MENU_FR: Menu = {
    dishSets: [
      { 
        name: 'A l\'apéritif',
        dishes: [
          { name: 'Assortiment de 4 amuses bouche froids', price: 6.5 },
          { name: 'Assortiment de 4 amuses bouche chauds', price: 6.5 },
          { name: 'Assortiment de 4 amuse bouche festifs', price: 13 },
        ]
      },
      { 
        name: 'A partager',
        dishes: [
          { name: 'Assiette Royale de tapenades, tapas, trempettes, apéros, ...', price: 35 },
          { name: 'Quiche au vieux fromage de chèvre-châtaignes-noix-miel (VG)', price: 12 },
          { name: 'Quiche aux jonagolden-betterave rouge-feta (VG)', price: 12 },
          { name: 'Quiche classique-poireaux-lardons', price: 12 },
          { name: 'Terrines de foie d\'oie gras ', description: 'Terrines de foie d\'oie gras fait maison et les accompagenments sont disponible dans le magasin.' },
          { name: 'Huîtres', description: 'Ruim aanbod aan holle en platte oesters volgens dagelijkse aanvoer zoals Oléron n3 (€1,95), Oostendse holle oester n3 (€1,95),  Oisri oester n3 (€2,75), Oostendse platte oester (€3,50), Cuvée Prestige n3 (€3,50), Gillardeau n3 (€3,75).' },
          { name: '"Royal Belgian Caviar"', description: '10g, 30g, 50g et 125g à commander d\'avance' },
        ]
      },
      { 
        name: 'Entrées froides',
        dishes: [
          { name: 'Carpaccio de “Blonde d\'Aquitaine”-parmesan', price: 10 },
          { name: 'Carpaccio de “Blonde d\'Aquitaine”-parmesan-cèpes', price: 15 },
          { name: 'Carpaccio de “Blonde d\'Aquitaine”-parmesan-truffes de Carpentras', price: 15 },
          { name: 'Gravlax-petite sauce à l\'aneth-salade de la saison', price: 17 },
          { name: 'Saumon Norvégien caramélisé-sésame-coriandre', price: 17 },
          { name: 'Le duo de nos préparations de saumon', price: 20 },
          { name: 'Noix de Saint-Jacques marinées céleri-rave topinambours cèpes', price: 20 },
          { name: 'Le cocktail Classique de crevettes de Nieuport, épluchés à la main', price: 25 },
        ]
      },
      { 
        name: 'Soupes',
        dishes: [
          { name: 'Crème d\'asperges', price: 7, unit: 'l' },
          { name: 'Crème de champignons de bois', price: 8, unit: 'l' },
          { name: 'Soupe de poisson de Nieuport-rouille-croutons', price: 10, unit: 'l' },
          { name: 'Bisque de homard-batonnets de homard- Armagnac', price: 16, unit: 'l' },
        ]
      },
      { 
        name: 'Entrées chaudes',
        dishes: [
          { name: 'Bouchée au vol au vent de faisan', price: 10 },
          { name: 'Demi douzaine de scampi-beurre de polders à l\'ail et aux herbes', price: 13 },
          { name: 'Demi douzaine de scampi-curry Indien - wok de légumes	', price: 14 },
          { name: 'Noix de Saint-Jacques dans leur coquille “Grand Mère”', price: 17 },
          { name: 'Demi douzaine d\' huîtres d\'Ostende-crème de champagne et poireaux', price: 16 },
          { name: 'Demi douzaine d\' huîtres Oisri- sauce au Chablis-salicornes', description: '(+10g Royal Belgian Caviar Platinum €25 extra)', price: 20 },
        ]
      },
      { 
        name: 'Homards (450 à 500gr)',
        dishes: [
          { name: 'Homard entier “Belle Vue”', price: 37.5 },
          { name: 'Homard entier-beurre des polders à l\'ail et aux herbes-pâte', price: 37.5 },
          { name: 'Homard entier-crème de champignons de bois-pâtes', price: 37.5 },
        ]
      },
      { 
        name: 'Poissons (garnitures comprises)',
        dishes: [
          { name: 'Bouchée au vol au vent de la Mer du Nord', price: 18 },
          { name: 'Blanc de loup de mer-petits légumes', price: 19 },
          { name: 'Filets de sole de Nieuport-crème de chablis-salicornes-crevettes', price: 25 },
          { name: 'Sole meunière-poivron farçi aux légumes toscans-grenailles', price: 30 },
          { name: 'Blanc de turbot et homard entier-épinards-sauce Nantua', description: 'par 2 personnes', price: 70 },
        ]
      },
      { 
        name: 'Viandes et gibiers (garnitures comprises)',
        dishes: [
          { name: 'Bouchée à la Reine ( pour nos petits convives)', price: 10 },
          { name: 'Blanquette de cuisses de faisan-crème au calvados garniture de fin d\'année	', price: 14 },
          { name: 'Duo de cailles-sauce à l\'anisétoilé et orange - garniture de fin d\'année	', price: 14 },
          { name: 'Filet mignon de porc \'Duroc\'-crème de champignons de bois-légumes d\'hiver-gratin Dauphinois', price: 15 },
          { name: 'Civet de cerf- vin de Bourgogne-garniture de fin d\'année', price: 16 },
          { name: 'Blanc de pintadeau de ferme “Grand Veneur” -garniture de fin d\'année', price: 20 },
          { name: 'Rable de lièvre-crème de poivre noir-miel-garniture de fin d\'année', price: 25 },
          { name: 'Filet de cerf-“Grand Veneur” - garniture de fin d\'années', price: 28 },
        ]
      },
      { 
        name: 'Plats végétariens',
        dishes: [
          { name: 'Quiche au vieux fromage de chèvre-châtaigne-noix-miel', price: 12 },
          { name: 'Quiche aux jonagolden-betterave rouge-feta', price: 12 },
          { name: 'Ravioles à la Fourme d\'Ambert-châtaignes-noix', price: 14 },
          { name: 'Raviloles aux truffes-champignons de bois-parmesan', price: 15 },
        ]
      },
      { 
        name: 'Nagerechten',
        dishes: [
          { name: 'Biscuit au chocolat noir', price: 4 },
          { name: 'Bavarois aux framboises', price: 4.5 },
          { name: 'Tarte au citron à la méringue', price: 4.5 },
          { name: 'Moelleux au chocolat noir', price: 5 },
          { name: 'Assiette de fromages avec ses garnitures', price: 12 }
        ]
      },
    ],
    dishMenus: [
        { 
            name: 'Menu Clin d\'oeuil à 2023',
            description: 'Minimum 2 personnes',
            dishes: [
                { name: 'Carpaccio de “Blonde d\'Aquitaine”-parmesan-cèpes' },
                { name: 'Blanquette de cuisses de faisan-crème au calvados garniture de fin d\'année' },
                { name: 'Biscuit au chocolat noir' }
            ],
            price: 30
        },
        { 
            name: '"Entre plage et polders"',
            description: 'Minimum 2 personnes',
            dishes: [
                { name: 'Les noix de Saint-Jacques marinés-céleri rave-topinambour-cèpes' },
                { name: 'Demi homard-épinards-sauce Nantua' },
                { name: 'Blanc de pintadeau de ferme "Grand Veneur" -garniture de fin d’année ' },
                { name: 'Assiette de fromages avec ses garnitures (+10 pp)' },
                { name: 'Dessert au choix' }
            ],
            price: 60
        },
    ]
  }
