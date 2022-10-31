export interface Menu {
    dishSets: DishSet[];
}

export interface DishSet {
    name: string;
    dishes: Dish[];
}

export interface Dish {
    name: string;
    description: string;
    price: number;
}