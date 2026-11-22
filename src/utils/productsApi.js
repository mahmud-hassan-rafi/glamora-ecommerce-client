import { api } from "@services/api.js";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params = { limit: 8, page: 1 }) => {
        const url = `/products?limit=${params.limit}&page=${params.page}`;
        return url;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
