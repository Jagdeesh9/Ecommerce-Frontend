import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductLIstApi";

const initialState = {
    products: await getProducts(),
}

const productListSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        
    }
})

export default productListSlice.reducer