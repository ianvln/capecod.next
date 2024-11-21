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
      name: "Om te delen",
      dishes: [
        { name: "Quiche met spek en prei", price: 12 },
        { name: "Quiche met boschampignons en truffel", price: 15 },
        { name: "Pinsa met chitaké, pijpajuin, truffel en mozzarella", price: 15 },
        { name: "Pinsa met geitenkaas, zoete aardappel, knolselder en honing", price: 15 }
      ]
    },
    {
      name: "Allerlei delicatessen",
      dishes: [
        { name: "Oléron N3", price: 3 },
        { name: "Oisri N3", price: 3.5 },
        { name: "Umami N3", price: 4 },
        { name: "Gilardeau N3", price: 4.5 },
        { name: "Kaviaar 'Heritage' Oscietra in 30, 50 of 125gr" },
        { name: "Onze huisbereide ganzenlever terrines, garnaal en kaaskroketten, apero kroketjes" }
      ]
    },
    {
      name: "Koude voorgerechten",
      dishes: [
        { name: "Carpaccio van wit blauw rund, caroli extra vierge, parmezaan", price: 12.5 },
        { name: "Carpaccio van wit blauw rund, caroli extra vierge, parmezaan en truffel", price: 16.5 },
        { name: "Gekarameliseerde Mowi zalm met winters slaatje", price: 17.5 },
        { name: "Klassieke cocktail van Mowi zalm", price: 17.5 },
        { name: "Klassieke krabcocktail", price: 25 }
      ]
    },
    {
      name: "Soepen",
      dishes: [
        { name: "Aspergeroomsoep", price: 9 },
        { name: "Thaise pittige pompoensoep", price: 9 },
        { name: "Vissoep met rouille en croutons", price: 12 },
        { name: "Bisque van kreeft met stukjes kreeft en Armagnac", price: 17 }
      ]
    },
    {
      name: "Warme voorgerechten",
      dishes: [
        { name: "Bladerdeegje van Noordzeevis", price: 16 },
        { name: "Sint-Jacobsnootjes in de schelp op Oma’s wijze", price: 17.5 },
        { name: "Sint-Jacobsnootjes met prei en truffel en polderboter", price: 18.5 },
        { name: "Warme Oléron oesters met prei en champagne", price: 21 }
      ]
    },
    {
      name: "Kreeftbereidingen (450 à 500gr)",
      dishes: [
        { name: "Klassieke Kreeft ‘Belle Vue’", price: 41.5 },
        { name: "Kreeft met lookboter en tuinkruiden en tagliatelle", price: 41.5 }
      ]
    },
    {
      name: "Visbereidingen (garnituren inbegrepen)",
      dishes: [
        { name: "Wit van zeewolf met fijne groenten", price: 20 },
        { name: "Gegratineerd vispannetje volgens chef Dries", price: 21.5 },
        { name: "Haasje van Mowi zalm, coulis van prei, bloemkool en broccoli", price: 22.5 },
        { name: "Tongrolletjes met witte wijn saus en garnalen", price: 27.5 }
      ]
    },
    {
      name: "Vlees en wild bereidingen",
      dishes: [
        { name: "Voor de kleinsten: Balletjes in tomatensaus en puree", price: 10 },
        { name: "Varkenshaasje met boschampignons, wintergroenten en gratin", price: 16.5 },
        { name: "Wit van kalkoen met portosaus, wintergroenten en gratin", price: 14.5 },
        { name: "Blanket van fazantenboutjes met calvados, eindejaarsgarnituur en selderpuree", price: 16.5 },
        { name: "Hoeveparelhoen met ‘Fine Champagne’ saus, eindejaarsgarnituur en gratin", price: 22.5 },
        { name: "Edelhert nootjes ‘Grand Veneur’ met eindejaarsgarnituur en selderpuree", price: 29.5 }
      ]
    },
    {
      name: "Vegetarische gerechten",
      dishes: [
        { name: "Quiche met boschampignons en truffel", price: 15 },
        { name: "Lasagne van broccolis, pittige tomatensaus en pijnboompitten", price: 15 },
        { name: "Pinsa met geitenkaas, zoete aardappel, knolselder en honing", price: 15 }
      ]
    },
    {
      name: "Desserts",
      dishes: [
        { name: "Buche van chocolade", price: 5.5 },
        { name: "Tiramisu van chef Dries", price: 5.5 },
        { name: "Cheesecake met aardbeien", price: 5.5 }
      ]
    }
  ],
  dishMenus: []
};
