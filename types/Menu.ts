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

export const MENU_FR = {
  dishSets: [
    {
      name: "À partager",
      dishes: [
        { name: "Quiche au lard et poireaux", price: 12 },
        { name: "Quiche aux champignons des bois et truffe", price: 15 },
        { name: "Pinsa aux shiitake, ciboulette, truffe et mozzarella", price: 15 },
        { name: "Pinsa au fromage de chèvre, patate douce, céleri-rave et miel", price: 15 }
      ]
    },
    {
      name: "Divers délices",
      dishes: [
        { name: "Oléron N3", price: 3 },
        { name: "Oisri N3", price: 3.5 },
        { name: "Umami N3", price: 4 },
        { name: "Gillardeau N3", price: 4.5 },
        { name: "Caviar 'Heritage' Oscietra en 30, 50 ou 125gr" },
        { name: "Nos terrines de foie gras maison, croquettes de crevettes et fromages, croquettes apéro" }
      ]
    },
    {
      name: "Entrées froides",
      dishes: [
        { name: "Carpaccio de bœuf Blanc Bleu, huile d'olive extra vierge, parmesan", price: 12.5 },
        { name: "Carpaccio de bœuf Blanc Bleu, huile d'olive extra vierge, parmesan et truffe", price: 16.5 },
        { name: "Saumon Mowi caramélisé, salade d'hiver", price: 17.5 },
        { name: "Cocktail classique de saumon Mowi", price: 17.5 },
        { name: "Cocktail classique de crabe", price: 25 }
      ]
    },
    {
      name: "Soupes",
      dishes: [
        { name: "Crème d'asperges", price: 9 },
        { name: "Soupe thaï épicée au potiron", price: 9 },
        { name: "Soupe de poisson avec rouille et croûtons", price: 12 },
        { name: "Bisque de homard avec morceaux de homard et Armagnac", price: 17 }
      ]
    },
    {
      name: "Entrées chaudes",
      dishes: [
        { name: "Feuilleté de poisson de la mer du Nord", price: 16 },
        { name: "Saint-Jacques en coquille à la façon de grand-mère", price: 17.5 },
        { name: "Saint-Jacques au poireau, truffe et beurre des polders", price: 18.5 },
        { name: "Huîtres Oléron chaudes au poireau et champagne", price: 21 }
      ]
    },
    {
      name: "Préparations de homard (450 à 500g)",
      dishes: [
        { name: "Homard classique ‘Belle Vue’", price: 41.5 },
        { name: "Homard au beurre d'ail et herbes fraîches avec tagliatelles", price: 41.5 }
      ]
    },
    {
      name: "Préparations de poisson (garnitures incluses)",
      dishes: [
        { name: "Filet de loup de mer avec légumes fins", price: 20 },
        { name: "Gratin de poisson façon Chef Dries", price: 21.5 },
        { name: "Filet de saumon Mowi, coulis de poireaux, chou-fleur et brocoli", price: 22.5 },
        { name: "Roulades de sole avec sauce au vin blanc et crevettes", price: 27.5 }
      ]
    },
    {
      name: "Plats de viande et gibier",
      dishes: [
        { name: "Pour les enfants : Boulettes à la sauce tomate et purée", price: 10 },
        { name: "Filet de porc aux champignons des bois, légumes d'hiver et gratin", price: 16.5 },
        { name: "Filet de dinde à la sauce porto, légumes d'hiver et gratin", price: 14.5 },
        { name: "Civet de faisan au calvados, garniture de fête et purée de céleri-rave", price: 16.5 },
        { name: "Pintade fermière à la sauce ‘Fine Champagne’, garniture de fête et gratin", price: 22.5 },
        { name: "Noisettes de cerf ‘Grand Veneur’, garniture de fête et purée de céleri-rave", price: 29.5 }
      ]
    },
    {
      name: "Plats végétariens",
      dishes: [
        { name: "Quiche aux champignons des bois et truffe", price: 15 },
        { name: "Lasagne de brocoli, sauce tomate épicée et pignons de pin", price: 15 },
        { name: "Pinsa au fromage de chèvre, patate douce, céleri-rave et miel", price: 15 }
      ]
    },
    {
      name: "Desserts",
      dishes: [
        { name: "Bûche au chocolat", price: 5.5 },
        { name: "Tiramisu du Chef Dries", price: 5.5 },
        { name: "Cheesecake aux fraises", price: 5.5 }
      ]
    }
  ],
  dishMenus: []
};

