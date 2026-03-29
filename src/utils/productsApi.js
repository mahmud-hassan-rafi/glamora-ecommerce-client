import { api } from "@services/api.js";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params = { limit: 8, prevPage: 0 }) => {
        const skip = params.prevPage * params.limit;
        const url = `/products?limit=${params.limit}&skip=${skip}`;
        return url;
      },
    }),
  }),
});

export const { useLazyGetProductsQuery, useGetProductsQuery } = productApi;
