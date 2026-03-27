import { api } from "@services/api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => ({
        url: `/products?limit=${data.limit}&skip=${data.prevPage * data.limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetProductsQuery, useGetProductsQuery } = productApi;
