import {CartItem} from "@/interfaces/cartItem";

export interface GroupedItems {
    [key: string]: CartItem[];
}