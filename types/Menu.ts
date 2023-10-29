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
      name: 'Voorgerechten',
      dishes: [
        { name: 'Gebakken Sint-Jacobsnootjes/room van grondwitloof/spekchips', price: 16 },
        { name: 'Half dozijn oesters/room van prei en champagne', price: 16 },
        { name: 'Half dozijn scampi/polderboter met look en kruiden', price: 13 },
        { name: 'Oesters uit Zeeland, Normandië, Oléron of Gilardeau, volgens aanvoer' },
      ]
    },
    {
      name: 'Hoofdgerechten',
      dishes: [
        { name: 'Zeewolf/fijne groenten', price: 17 },
        { name: 'Kabeljauw/tomaat/courgette/basilicum', price: 14 },
        { name: 'Tagliatelli/scampi/tomaat/courgette/basilicum', price: 15 },
        { name: 'Zalm filet/tomaat/courgetti/basilicum', price: 18.5 },
        { name: 'Tongrolletjes/witte wijnsaus/Nieuwpoortse garnalen', price: 25 },
        { name: 'Volledige kreeft (450 à 500gr)/polderboter met look en kruiden', price: 37 },
        { name: 'Frans piepkuikentje/gebakken krieltjes/dragonsaus/slaatje', price: 10 },
        { name: 'Catalaans varkenshaasje/Tierentijnmosterd saus/erwten en wortelen', price: 13 },
        { name: 'Civet van hert/najaarsfruit/Sint-Bernardus bier/selderpuree', price: 15 },
        { name: 'Tournedos van hazenrug/room van zwarte peper/najaarsfruit/seldepuree', price: 25 },
        { name: 'Filet van hert/najaarsfruit/gebakken witloof/selderpuree', price: 27.5 },
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Nieuwpoorts visbuffet (minimum 6 personen)',
      dishes: [
        {
          name: 'Uitgebreid buffet met onder andere:',
          description: 'Tomaat met garnalen, rauwe gemarineerde zalm, gerookte Noorse zalm, Hollandse gerookte paling, salade Niçoise, visterrine, rivierkreeft. Salade, brood, groenten, salades en sausjes zijn voorzien.'
        },
      ],
      price: 30
    },
    {
      name: 'Sint-Bernardus buffet: (minimum 6 personen)',
      dishes: [
        {
          name: 'Uitgebreid buffet met alle gerechten als in visbuffet met volgende extra bereidingen:',
          description: 'Tartaar van rundsvlees met truffel en parmesan, parmaham, pur porc salamis, ambachtelijk gekookte beenham, pastei en rillette. Brood, groenten, salades en sausjes zijn voorzien'
        }
      ],
      price: 35
    }
  ]
}

export const MENU_FR: Menu = {
  dishSets: [
    {
      name: 'Entrées',
      dishes: [
        { name: 'Noix de Saint-Jacques poêlées/crème de chicon/chips de lard', price: 16 },
        { name: 'Demi-douzaine d\'huîtres/crème de poireau et champagne', price: 16 },
        { name: 'Demi-douzaine de scampis/beurre de polder à l\'ail et aux herbes', price: 13 },
        { name: 'Huîtres de Zélande, Normandie, Oléron ou Gilardeau, selon l\'approvisionnement' },
      ]
    },
    {
      name: 'Plats Principaux',
      dishes: [
        { name: 'Loup de mer/légumes fins', price: 17 },
        { name: 'Morue/tomate/courgette/basilic', price: 14 },
        { name: 'Tagliatelles/scampis/tomate/courgette/basilic', price: 15 },
        { name: 'Filet de saumon/tomate/courgettes/basilic', price: 18.5 },
        { name: 'Filets de sole/sauce au vin blanc/crevettes de Nieuport', price: 25 },
        { name: 'Homard entier (450 à 500g)/beurre de polder à l\'ail et aux herbes', price: 37 },
        { name: 'Poussin français/petites pommes de terre sautées/sauce à l\'estragon/salade', price: 10 },
        { name: 'Filet de porc catalan/sauce à la moutarde de Tierentijn/pois et carottes', price: 13 },
        { name: 'Civet de cerf/fruits d\'automne/bière Saint-Bernard/purée de céleri', price: 15 },
        { name: 'Tournedos de dos de lièvre/crème de poivre noir/fruits d\'automne/purée de céleri', price: 25 },
        { name: 'Filet de cerf/fruits d\'automne/chicon braisé/purée de céleri', price: 27.5 },
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Buffet de poissons de Nieuport (minimum 6 personnes)',
      dishes: [
        {
          name: 'Buffet complet comprenant notamment :',
          description: 'Tomate aux crevettes, saumon mariné cru, saumon fumé norvégien, anguille fumée hollandaise, salade niçoise, terrine de poisson, écrevisse. Salade, pain, légumes, salades et sauces sont inclus.'
        },
      ],
      price: 30
    },
    {
      name: 'Buffet Saint-Bernardus : (minimum 6 personnes)',
      dishes: [
        {
          name: 'Buffet complet avec tous les plats du buffet de poissons ainsi que les préparations supplémentaires suivantes :',
          description: 'Tartare de bœuf à la truffe et parmesan, jambon de Parme, saucissons pur porc, jambon cuit artisanal, pâté et rillettes. Pain, légumes, salades et sauces sont inclus.'
        }
      ],
      price: 35
    }
  ]
}
