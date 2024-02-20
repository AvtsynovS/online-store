import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dummyjsonApi } from "./api/dummyjson.api";
import { filterProductsReducer } from "./slicies/filterProductsSlice";
import { searchProductsReducer } from "./slicies/searchProductsSlice";

const rootReducer = combineReducers({
  [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
  filterProducts: filterProductsReducer,
  searchProducts: searchProductsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // Подключаем RTK Query к стандартным Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyjsonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
