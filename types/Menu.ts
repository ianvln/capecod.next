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
      name: "Aspergegerechten",
      dishes: [
        { name: "Asperges op zijn Vlaams", price: "Dag" },
        { name: "Asperges met gerookte Noorse zalm, zure room met kruiden", price: "Dag" },
        { name: "Sint-Jacobsnootjes in room van asperges", price: 15 },
        { name: "Oléron oesters in preiroom met champagne", price: 21 }
      ]
    },
    {
      name: "Visgerechten",
      dishes: [
        { name: "Zeewolf met fijne groenten", price: 17 },
        { name: "Zalm filet met room van asperges en fijne erwtjes", price: 21 },
        { name: "Volledige kreeft (ong. 500gr) met room van asperges", price: 39.5 },
        { name: "Volledige kreeft (ong. 500gr.) met boter look en kruiden", price: 39.5 },
        { name: "Tongrolletjes met witte wijnsaus en garnalen", price: 25 },
        { name: "Nieuwpoorts visbuffet", price: 30 }
      ]
    },
    {
      name: "Vleesgerechten",
      dishes: [
        { name: "Varkenshaasje ‘Tierentijn’ met groentjes en krieltjes", price: 14 },
        { name: "Piepkuiken met dragon, slaatje en gebakken krieltjes", price: 11 },
        { name: "Duo van kwartels met conférence met veenbes", price: 14 },
        { name: "Lamsbout met rozemarijn, groentjes en gratinaardappelen", price: 18.5 },
        {
          name: "Wit van hoeveprelhoen ‘Fine Champgne’, groentjes en gratinaarappelen",
          price: 21.5
        },
        { name: "Sint Bernardus vis- en vleesbuffet", price: 36 }
      ]
    }
  ],
  dishMenus: []
};

export const MENU_FR = {
  dishSets: [
    {
      name: "Plats aux asperges",
      dishes: [
        { name: "Asperges à la flamande", price: "Jour" },
        { name: "Asperges au saumon fumé norvégien, crème aux herbes", price: "Jour" },
        { name: "Noix de Saint-Jacques dans une sauce aux asperges", price: 15 },
        { name: "Huîtres d'Oléron dans une crème de poireaux au champagne", price: 21 }
      ]
    },
    {
      name: "Plats de poisson",
      dishes: [
        { name: "Loup de mer aux légumes fins", price: 17 },
        { name: "Filet de saumon, sauce aux asperges et petits pois fins", price: 21 },
        { name: "Homard entier (env. 500g) à la crème d’asperges", price: 39.5 },
        { name: "Homard entier (env. 500g) au beurre à l'ail et aux herbes", price: 39.5 },
        { name: "Rouleaux de sole, sauce au vin blanc et crevettes", price: 25 },
        { name: "Buffet de poissons de Nieuport", price: 30 }
      ]
    },
    {
      name: "Plats de viande",
      dishes: [
        { name: "Filet de porc ‘Tierentijn’ avec légumes et pommes de terre grenailles", price: 14 },
        { name: "Poussin à l’estragon, salade et pommes grenailles sautées", price: 11 },
        { name: "Duo de cailles avec poire conférence et canneberge", price: 14 },
        { name: "Gigot d’agneau au romarin, légumes et gratin dauphinois", price: 18.5 },
        {
          name: "Blanc de poulet fermier ‘Fine Champagne’, légumes et gratin dauphinois",
          price: 21.5
        },
        { name: "Buffet terre et mer Saint Bernardus", price: 36 }
      ]
    }
  ],
  dishMenus: []
};
