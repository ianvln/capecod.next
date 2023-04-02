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
  unit?: string;
}


export const MENU: Menu = {
  dishSets: [],
  dishMenus: [
    {
      name: 'Paasmenu',
      description: 'Verkrijgbaar van 8 tot en met 10 april, graag twee voordien bestellen',
      dishes: [
        { name: 'Asperges-handgepelde Nieuwpoorste garnalen - zure room met tuinkruiden - Royal Belgian Caviar' },
        { name: 'Bisque van kreeft-Armagnac-stukjes kreeft' },
        { name: 'Lamsbout met rozemarijn - mengeling van lentegroenten - gratin aardappelen' },
        { name: 'Chocolade mousse taartje-aardbei-vanilleroom' }
      ],
      price: 39.5
    }
  ]
}

export const MENU_FR: Menu = {
  dishSets: [],
  dishMenus: [
    {
      name: 'Menu de Pâques',
      description: 'Disponible du 8 jusq\'au 10 avril, à commander deux jours d\'avance',
      dishes: [
        { name: 'Asperges-crevettes de Nieuport épluchés à la main - crème aigre-herbes du jardin - Royal Belgian Caviar' },
        { name: 'Bisque de homard-Armagnac-dés de homard' },
        { name: 'Gigot d\'agneau au romarin-mélange de légumes printaniers- p. Gratin Dauphinois' },
        { name: 'Biscuit de mousse au chocolat-fraises-crème Anglaise' }
      ],
      price: 39.5
    },
  ]
}
