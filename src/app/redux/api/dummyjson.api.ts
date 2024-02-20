import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IProductsResponse } from "../../types";

export const dummyjsonApi = createApi({
  reducerPath: "dummyjson/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (build) => ({
    // T - что мы получаем от сервера, E - какие типы параметров мы должны передать
    products: build.query<IProduct[], number>({
      query: (limit: number) => ({
        url: "products",
        params: {
          limit: limit,
        },
      }),
      transformResponse: (response: IProductsResponse<IProduct>) =>
        response.products,
    }),
    product: build.query<IProduct, number>({
      query: (id: number) => ({
        url: `products/${id}`,
      }),
    }),
    categories: build.query<string[], void>({
      query: () => ({
        url: "products/categories",
      }),
    }),
    searchProducts: build.query<IProduct[], string>({
      query: (search: string) => ({
        url: "products",
        params: {
          q: search,
        },
      }),
      transformResponse: (response: IProductsResponse<IProduct>) =>
        response.products,
    }),
    getProductsOfCategory: build.query<IProduct[], string>({
      query: (category: string) => ({
        url: `products/category/${category}`,
      }),
      transformResponse: (response: IProductsResponse<IProduct>) =>
        response.products,
    }),
  }),
});

export const {
  useProductsQuery,
  useLazyProductsQuery,
  useCategoriesQuery,
  useLazySearchProductsQuery,
  useProductQuery,
  useLazyProductQuery,
  useLazyGetProductsOfCategoryQuery,
} = dummyjsonApi;
