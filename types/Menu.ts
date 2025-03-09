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

export const MENU = {
  dishSets: [
    {
      name: 'Voorgerechten',
      dishes: [
        { name: 'Oesters Oléron en Oisri', price: 3, unit: 'per stuk' },
        { name: '“Héritage” kaviaar 10, 30 en 125g', price: 'dagprijs' },
        { name: 'Garnaal- en kaaskroketten', price: 4.95, unit: 'garnaal' },
        { name: 'Garnaal- en kaaskroketten', price: 2.5, unit: 'kaas' },
        { name: 'Gebakken Sint-Jacobsschelpen met room van boschampignons', price: 15 },
        { name: 'Warme oesters met prei en champagne', price: 21 },
        { name: 'Bisque met stukjes kreeft en Armagnac', price: 17, unit: 'l' }
      ]
    },
    {
      name: 'Hoofdgerechten',
      dishes: [
        { name: 'Halve Canadese kreeft met room van boschampignons en tagliatelle', price: 21 },
        { name: 'Scampi met tagliatelle en knoflooksaus met lente-ui', price: 15 },
        { name: 'Vispannetje van Chef Dries, kreeftensaus en stoemp van groenten', price: 19 },
        { name: 'Volledige Canadese kreeft met kruidenboter en tagliatelle', price: 39 },
        { name: 'Kwartels met steranijssaus, conferencepeer en veenbessen, gratinaardappelen', price: 14 },
        { name: 'Lamsbout met rozemarijn en knoflook, wintergroenten, gratinaardappelen', price: 18.5 },
        { name: 'Parelhoenborst "Fine Champagne" met wintergroenten, gratinaardappelen', price: 21.5 }
      ]
    },
    {
      name: 'Nagerechten',
      dishes: [
        { name: 'Chocoladetaartje', price: 5.5 },
        { name: 'Tiramisu', price: 5.5 },
        { name: 'Cheesecake met framboos', price: 5.5 }
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Menu (voor 2 personen)',
      price: 70,
      dishes: [
        { name: 'Gebakken Sint-Jacobsschelpen met room van boschampignons' },
        { name: 'Lamsbout met rozemarijn en knoflook, wintergroenten en gratinaardappelen' },
        { name: 'Nagerecht naar keuze' }
      ]
    }
  ]
};

export const MENU_FR = {

  dishSets: [
    {
      name: 'Entrées',
      dishes: [
        { name: 'Huîtres Oléron et Oisri', price: 3, unit: 'par pièce' },
        { name: 'Caviar “Héritage” 10, 30 et 125g', price: 'prix du jour' },
        { name: 'Croquettes de crevettes et fromage', price: 4.95, unit: 'crevettes' },
        { name: 'Croquettes de crevettes et fromage', price: 2.5, unit: 'fromage' },
        { name: 'Noix de Saint-Jacques poêlées avec crème de champignons des bois', price: 15 },
        { name: 'Huîtres chaudes au poireau et champagne', price: 21 },
        { name: 'Bisque avec morceaux de homard et Armagnac', price: 17, unit: 'l' }
      ]
    },
    {
      name: 'Plats Principaux',
      dishes: [
        { name: 'Demi-homard canadien avec crème de champignons des bois et tagliatelles', price: 21 },
        { name: 'Scampi avec tagliatelles et sauce à l’ail et ciboulette', price: 15 },
        { name: 'Cassolette de poisson du Chef Dries, sauce au homard et stoemp de légumes', price: 19 },
        { name: 'Homard canadien entier avec beurre à l’ail et aux herbes, tagliatelles', price: 39 },
        { name: 'Cailles avec sauce à l’anis étoilé, poire conférence et canneberges, gratin dauphinois', price: 14 },
        { name: 'Gigot d’agneau au romarin et à l’ail, légumes d’hiver, gratin dauphinois', price: 18.5 },
        { name: 'Suprême de pintade "Fine Champagne" avec légumes d’hiver, gratin dauphinois', price: 21.5 }
      ]
    },
    {
      name: 'Desserts',
      dishes: [
        { name: 'Gâteau au chocolat', price: 5.5 },
        { name: 'Tiramisu', price: 5.5 },
        { name: 'Cheesecake aux framboises', price: 5.5 }
      ]
    }
  ],
  dishMenus: [
    {
      name: 'Menu (pour 2 personnes)',
      price: 70,
      dishes: [
        { name: 'Noix de Saint-Jacques poêlées avec crème de champignons des bois' },
        { name: 'Gigot d’agneau au romarin et à l’ail, légumes d’hiver et gratin dauphinois' },
        { name: 'Dessert au choix' }
      ]
    }
  ]
};
