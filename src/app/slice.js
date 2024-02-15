import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productList: []
}

const productsList = createSlice({
    name: "products",
    initialState,
    reducers: {
        productslist: (state, action) => {
            state.productList = action.payload
        }
    }
})

export const {productslist} = productsList.actions;
export default productsList.reducer;