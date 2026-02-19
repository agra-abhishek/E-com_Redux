import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import ProductReducer from './productSlice'
const store = configureStore({
    reducer :{
        cart : cartReducer,
        product: ProductReducer
    }
})
export default store;