import { configureStore } from '@reduxjs/toolkit'
import {restaurantSlice} from "@/slices/restaurantSlice";
import {cartSlice} from "@/slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        restaurant: restaurantSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

