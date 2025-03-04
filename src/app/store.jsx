import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/productList/productListSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productReducer,
        cart: cartReducer,
    }
})