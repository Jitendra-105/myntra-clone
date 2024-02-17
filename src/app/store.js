import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice";
import addReducer from "./slice"
import removeReducer from "./slice"
import addCartReducer from "./slice"
import removeCartReducer from "./slice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    addProducts: addReducer,
    removeProducts: removeReducer,
    addToCart: addCartReducer,
    removeFromCart: removeCartReducer,
  }
});
