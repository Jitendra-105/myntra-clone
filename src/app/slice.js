import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productList: [],
   wishlist: [],
   cartItems: []
}

const productsList = createSlice({
    name: "products",
    initialState,
    reducers: {
        productslist: (state, action) => {
            state.productList = action.payload
        },
        AddToWishlist: (state, action) => {
            const productToAdd = action.payload;
           if(!state.wishlist.some((item) => item.id === productToAdd.id)) {
            state.wishlist.push(productToAdd)
           }
        },
        removeFromWishlist: (state, action) => {
            const productToRemove = action.payload;
            state.wishlist = state.wishlist.filter((item) => item.id !== productToRemove);
        },
        AddToCart: (state, action) => {
            const productToAdd = action.payload;
           if(!state.cartItems.some((item) => item.id === productToAdd.id)) {
            state.cartItems.push(productToAdd)
           }
        },
        removeFromCart: (state, action) => {
            const productToRemove = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== productToRemove);
        }
    }
})

export const {productslist, AddToWishlist, removeFromWishlist, AddToCart, removeFromCart} = productsList.actions;
export default productsList.reducer;