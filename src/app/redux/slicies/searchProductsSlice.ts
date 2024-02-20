import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface IFilterCategory {
  searchProducts: IProduct[];
}

const initialState: IFilterCategory = {
  searchProducts: [],
};

export const searchProductsSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    changeSearchProducts(state, action: PayloadAction<IProduct[]>) {
      state.searchProducts = action.payload;
    },
  },
});

export const searchProductsActions = searchProductsSlice.actions;
export const searchProductsReducer = searchProductsSlice.reducer;
