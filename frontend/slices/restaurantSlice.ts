import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    restaurant: null
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action: PayloadAction<any>) => {
            state.restaurant = action.payload
        }
    }
})

export const { setRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state: { restaurant: { restaurant: any } }) => state.restaurant.restaurant;
export default restaurantSlice.reducer