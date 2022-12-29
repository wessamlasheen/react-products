import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
  }
);
export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
// export {}=productSlice.actions;
export default productSlice.reducer;
