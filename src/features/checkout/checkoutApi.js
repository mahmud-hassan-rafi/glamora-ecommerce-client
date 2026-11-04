import { api } from "@services/api";

const checkoutApiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    paymentIntent: builder.mutation({
      query: (data) => ({
        url: "/payment/stripe/create-payment-intent",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePaymentIntentMutation } = checkoutApiEndpoints;
