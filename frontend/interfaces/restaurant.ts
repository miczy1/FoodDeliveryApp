import {Dish} from "@/interfaces/dish";

export interface Restaurant {
    _id: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    type: {name: string};
    address: string;
    description: string;
    dishes: Dish[];
}