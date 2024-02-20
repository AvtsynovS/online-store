import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface IFilterCategory {
    filterProducts: IProduct[];
}

const initialState: IFilterCategory = {
    filterProducts: [],
}

export const filterProductsSlice = createSlice({
    name: "filterCategory",
    initialState,
    reducers: {
        changeFilterProducts(state, action: PayloadAction<IProduct[]>) {
            state.filterProducts = action.payload;
        },
        removeFilterProducts(state) {
            state.filterProducts = [];
        },
    }
})

export const  filterProductsActions = filterProductsSlice.actions;
export const  filterProductsReducer = filterProductsSlice.reducer;