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
          { name: 'Filet van jong hert-"Grand Veneur"- eindejaarsgarnituur', price: 70 },
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
            name: '“Tussen strand en polder”',
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