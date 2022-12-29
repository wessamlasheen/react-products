import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findedProduct = state.find((ele) => ele.id === action.payload.id);
      if (findedProduct) {
        findedProduct.quantity += 1;
      } else {
        const clonedProduct = { ...action.payload, quantity: 1 };
        state.push(clonedProduct);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload.id);
    },
    clear: (state, action) => {
      return (state = []);
    },
  },
});
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
