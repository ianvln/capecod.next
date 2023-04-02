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
  price?: string | number;
  unit?: string;
}


export const MENU: Menu = {
  dishSets: [
    {
      name: 'Lentesuggesties',
      dishes: [
        { name: 'Asperges op zijn Vlaams', price: 'Dag' },
        { name: 'Asperges met gerookte Noorse zalm, zure room met bieslook', price: 'Dag' },
        { name: 'Oléron oesters-prei-room met champagne', price: 16 },
        { name: 'Oléron of Oostendse holle oester', price: 1.95 },
        { name: 'Tomaat garnaal met garnituur', price: 15 },
        { name: 'Zeewolf met fijne groenten', price: 17 },
        { name: 'Zalm filet-room tomaat-courgette-basilicum', price: 18.5 },
        { name: 'Volledige kreeft (ong. 500gr) met room van asperges', price: 37.5 },
        { name: 'Volledige kreeft-boter met look en kruiden', price: 35 },
        { name: 'Tongrolletjes-witte wijnsaus-garnalen', price: 24 },
        { name: 'Varkenshaasje \'Tierentijn\'-lente groenten-krieltjes', price: 13 },
        { name: 'Piepkuiken met dragon-slaatje-krieltjes', price: 10 },
        { name: 'Duo van kwartels-conférence met veenbes', price: 12.5 },
        { name: 'Nieuwpoorts visbuffet', price: 30 },
        { name: 'Sint Bernardus- vis en vleesbuffet', price: 36 }
      ]
    }
  ],
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
  dishSets: [
    {
      name: 'Suggestions de printemps',
      dishes: [
        { name: 'Asperges op zijn Vlaams', price: 'Dag' },
        { name: 'Asperges met gerookte Noorse zalm, zure room met bieslook', price: 'Dag' },
        { name: 'Oléron oesters-prei-room met champagne', price: 16 },
        { name: 'Oléron of Oostendse holle oester', price: 1.95 },
        { name: 'Tomaat garnaal met garnituur', price: 15 },
        { name: 'Zeewolf met fijne groenten', price: 17 },
        { name: 'Zalm filet-room tomaat-courgette-basilicum', price: 18.5 },
        { name: 'Volledige kreeft (ong. 500gr) met room van asperges', price: 37.5 },
        { name: 'Volledige kreeft-boter met look en kruiden', price: 35 },
        { name: 'Tongrolletjes-witte wijnsaus-garnalen', price: 24 },
        { name: 'Varkenshaasje \'Tierentijn\'-lente groenten-krieltjes', price: 13 },
        { name: 'Piepkuiken met dragon-slaatje-krieltjes', price: 10 },
        { name: 'Duo van kwartels-conférence met veenbes', price: 12.5 },
        { name: 'Nieuwpoorts visbuffet', price: 30 },
        { name: 'Sint Bernardus- vis en vleesbuffet', price: 36 }
      ]
    }
  ],
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
