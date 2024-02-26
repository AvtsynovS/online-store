export { store } from "./store";
export type { RootState, AppDispatch } from "./store";
export {
  filterProductsActions,
  filterProductsReducer,
} from "./slicies/filterProductsSlice";
export {
  searchProductsActions,
  searchProductsReducer,
} from "./slicies/searchProductsSlice";
export { useActions, useAppSelector, useAppDispatch } from "./hooks";
export {
  useProductsQuery,
  useLazyProductsQuery,
  useCategoriesQuery,
  useLazySearchProductsQuery,
  useProductQuery,
  useLazyProductQuery,
  useLazyGetProductsOfCategoryQuery,
  useUpdateProductMutation,
} from "./api/dummyjson.api";
