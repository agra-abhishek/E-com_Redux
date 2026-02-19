import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || []
};

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItem: (state , action) => {
           const cartData = state.items.filter((item) => item.id != action.payload.id);
           state.items=cartData;
           localStorage.setItem("cart",JSON.stringify(cartData))
         },
        clearAllItem: (state) => {
            state.value = 0;
        },


    }
});
export const { addItem, removeItem, clearAllItem } = addToCart.actions;
export default addToCart.reducer