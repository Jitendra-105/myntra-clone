import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice";
import addReducer from "./slice"
import removeReducer from "./slice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    addProducts: addReducer,
    removeProducts: removeReducer
  }
});
