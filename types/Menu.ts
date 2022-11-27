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
          { name: 'Carpaccio van “Blonde d’Aquitaine”-parmezaan', price: 10 },
          { name: 'Carpaccio van “Blonde d’Aquitaine”-parmezaan-truffel uit Carpentras', price: 15 },
          { name: 'Carpaccio van “Blonde d’Aquitaine”-parmezaan-eekhoorntjesbrood', price: 15 },
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
          { name: 'Bisque van kreef-kreeftenblokjes-Armagnac', price: 10, unit: 'l' },
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
          { name: 'Half dozijn Oisri oester-saus van Chablis-zeekraal', description: '(+10g Royal Belgian Caviar Platinum €25 extra', price: 20 },
        ]
      },
    ],
    dishMenus: [
        { 
            name: 'Menu Knipoog naar 2023 (Min 2P)', 
            dishes: [
                { name: 'Carpaccio van “Blonde d’Aquitaine”-parmezaan-eekhoorntjesbrood' },
                { name: 'Blanket van fazantenboutjes-room met Calvados-eindejaarsgarnituur' },
                { name: 'Biscuit van zwarte chocolade' }
            ],
            price: 30
        },
        { 
            name: 'Ons feestmenu “Tussen strand en polder” (Min 2P)', 
            dishes: [
                { name: 'Gemarineerde Sint-Jacobsnootjes-knolselder-aardpeer-eekhoorntjesbrood' },
                { name: 'Half kreeftje-bladspinazie-Nantuasaus' },
                { name: 'Wit van hoeveparelhoen “Grand Veneur”-eindejaarsgarnituur' },
                { name: 'Kaasbordje met zijn garnituren (+10 pp)' },
                { name: 'Nagerecht naar keuze' }
            ],
            price: 30
        },
    ]
  }