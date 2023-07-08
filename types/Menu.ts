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
      name: 'Menu',
      dishes: [
        { name: 'Salade Niçoise', price: 3.25, unit: '100gr' },
        { name: 'Pastasalade met gerookte zalm', price: 2.65, unit: '100gr' },
        { name: 'Gegratineerde bouchot mosselen met Brugse kaas', price: 10 },
        { name: 'Scampi met kruidenboter', price: 12.5 },
        { name: 'Zomeroesters uit Oléron', price: 1.95 },
        { name: 'Gegratineerde oester met prei en champagne', price: 16 },
        { name: 'Tomaat met Nieuwpoortse garnalen en garnituur', price: 15 },
        { name: 'Koude Noorse zalm met garnituur', price: 17.5 },
        { name: 'Babykreeft Belle Vue', price: 27 },
        { name: 'Babykreeft met look en kruidenboter. pasta', price: 27 },
        { name: 'Zeewolf met fijne groenten. puree', price: 17 },
        { name: 'Tongrolletjes met witte wijnsaus. zeekraal en garnalen. puree', price: 25 },
        { name: 'Gebakken zeetong met slaatje en gebakken krieltjes', price: 25 },
        { name: 'Varkenshaasje met Tierentijnmosterd. groentjes en krieltjes', price: 13 },
        { name: 'Piepkuiken met dragonsaus. slaatje en gebakken krieltjes', price: 10 },
        { name: 'Duo van kwartels met peertje en veenbessen. puree', price: 12.5 },
        { name: 'Osso Bucco', price: 2.45, unit: '100gr' }
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Nieuwpoorts visschotel (minimum 4 personen)',
      dishes: [
        {
          name: 'Assortiment aan koude vis- en schaaldierbereidingen',
          description: '(met onder andere tomaat garnaal, gestoomde zalm, gerookte en gecarameliseerde zalm, gerookte paling, salade Niçoise, rivierkreeftjes,…) met groentjes, salades, sausjes, pastasalade en brood'
        },
      ],
      price: 30
    },
    {
      name: 'Sint-Bernardus schotel: (minimum 4 personen)',
      dishes: [
        {
          name: 'Assortiment aan koude vis- en schaaldierbereidingen met extra tartaar van rund en truffel, Parma ham met cavaillon, fijne pur porc salamis en charcuterie, beenham, ...'
        }
      ],
      price: 35
    }
  ]
}

export const MENU_FR: Menu = {
  dishSets: [
    {
      name: 'Menu',
      dishes: [
        { name: 'Salade Niçoise', price: 3.25, unit: '100gr' },
        { name: 'Salade de pâtes au saumon fumé', price: 2.65, unit: '100gr' },
        { name: 'Moules bouchot gratinées au fromage de Bruges', price: 10 },
        { name: 'Scampis au beurre d\'herbes', price: 12.5 },
        { name: 'Huîtres estivales d\'Oléron', price: 1.95 },
        { name: 'Huître gratinée aux poireaux et champagne', price: 16 },
        { name: 'Tomate aux crevettes grises de Nieuport et garniture', price: 15 },
        { name: 'Saumon norvégien froid avec garniture', price: 17.5 },
        { name: 'Langouste Belle Vue', price: 27 },
        { name: 'Langouste à l\'ail et au beurre d\'herbes. pâtes', price: 27 },
        { name: 'Loup de mer aux légumes fins. purée', price: 17 },
        { name: 'Filets de sole à la sauce au vin blanc. salicorne et crevettes. purée', price: 25 },
        { name: 'Sole meunière avec salade et pommes de terre sautées', price: 25 },
        { name: 'Filet de porc à la moutarde Tierentijn. légumes et pommes de terre', price: 13 },
        { name: 'Poussin à la sauce à l\'estragon. salade et pommes de terre sautées', price: 10 },
        { name: 'Duo de cailles avec poire et airelles. purée', price: 12.5 },
        { name: 'Osso Bucco', price: 2.45, unit: '100gr' }
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Assiette de poissons de Nieuport (minimum 4 personnes)',
      dishes: [
        {
          name: 'Assortiment de préparations de poissons et fruits de mer froids',
          description: '(comprenant notamment tomate crevettes, saumon cuit à la vapeur, saumon fumé et caramélisé, anguille fumée, salade Niçoise, écrevisses,...) avec légumes, salades, sauces, salade de pâtes et pain'
        },
      ],
      price: 30
    },
    {
      name: 'Assiette de Sint-Bernardus : (minimum 4 personnes)',
      dishes: [
        {
          name: 'Assortiment de préparations de poissons et fruits de mer froids avec tartare supplémentaire de bœuf et truffe, jambon de Parme avec melon cavaillon, fines saucissons de porc pur et charcuterie, jambon cuit,...'
        }
      ],
      price: 35
    }
  ]
}