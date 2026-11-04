import { api } from "@services/api";
import { clearUser, setUser } from "./authSlice";

export const authApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    customerLogin: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Login"]));
        } catch {
          //
        }
      },
    }),

    customerRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(api.util.invalidateTags(["Signup"]));
        } catch {
          //
        }
      },
    }),

    loadCustomer: builder.query({
      query: () => "/auth/me",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);

          if (data) {
            dispatch(setUser(data.user || data));
          }
        } catch {
          dispatch(clearUser());
        }
      },
      providesTags: ["Login", "Signup"],
    }),

    customerLogout: builder.mutation({
      query: "/auth/logout",
    }),
  }),
});

export const {
  useCustomerLoginMutation,
  useCustomerRegisterMutation,
  useLoadCustomerQuery,
  useCustomerLogoutMutation,
} = authApiEndpoints;
