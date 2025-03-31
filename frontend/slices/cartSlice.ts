import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    id: number;
    // Add other properties if needed
}


const initialState: any = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
           let newCart = [...state.items];
           let itemIndex = state.items.findIndex((item: { _id: number; }) => item._id === action.payload.id);
           if(itemIndex >= 0){
                newCart.splice(itemIndex, 1)
           } else{
               console.log("Can't remove the item that is not added to cart!")
           }
           state.items = newCart;
        },
        emptyCart: (state, action: PayloadAction<number>) => {
            state.items = [];
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export const selectCartItems = (state: { cart: { items: any } }) => state.cart.items;

export const selectCartItemsById = (state: any, id: any) => state.cart.items.filter((item: { _id: any }) => item._id === id);

export const selectCartTotal = (state: { cart: { items: any[]; }; }) => state.cart.items.reduce((total, item) => total = total + item.price, 0)
export default cartSlice.reducer