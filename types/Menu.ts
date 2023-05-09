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
  ],
  dishMenus: [
    {
      name: 'Moederdag',
      dishes: [
        { name: 'Asperges met dragonroom-gemarineerde zalm-jonge erwtjes' },
        { name: 'Bisque van kreeft' },
        { name: 'Babykreeft met coulis van tomaat-chorizo-kerstomaat-tagliatelle' },
        { name: 'Charlotte met limoen en aardbeien' }
      ],
      price: 45
    }
  ]
}

export const MENU_FR: Menu = {
  dishSets: [
  ],
  dishMenus: [
    {
      name: 'Menu \'Fête des Mères\'',
      dishes: [
        { name: 'Asperges-crème à l\'estragon-saumon mariné- petits pois' },
        { name: 'Bisque de homard' },
        { name: 'Homard \'Bébé\' au coulis de tomates-chorizo-tomates cérises-tagliatelle' },
        { name: 'Charlotte au citron vert et fraises' }
      ],
      price: 45
    },
  ]
}
