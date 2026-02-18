import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems : JSON.parse(localStorage.getItem("cartItems")) || [],
    totalAmount : 0,
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const items = action.payload;
            const existingItem = state.cartItems.find(i => i.id === items.id);

            if(existingItem)
            {
                existingItem.quantity += 1;
            }
            else
            { 
                state.cartItems.push({ ...items, quantity : 1});
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
        },
        removeCart : (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter(i => i.id !== id);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }
     }
})

export const {addToCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;