import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import productSlice from "./slices/product-slice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
