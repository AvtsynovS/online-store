import { searchProductsActions } from "./slicies/searchProductsSlice";
import { filterProductsActions } from "./slicies/filterProductsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...filterProductsActions,
  ...searchProductsActions,
};

// Типизируем dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Типизируем селектор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Типизируем action
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
