import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    headers: { "Content-Type": "application/json" },
    credentials: "omit", // Changed from "include" to "omit" for public APIs
  }),
  endpoints: () => ({}),
  keepUnusedDataFor: 0,
});
