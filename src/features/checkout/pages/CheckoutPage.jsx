import LoadingSpinner from "@components/common/LoadingSpinner";
import InformationStep from "../components/step/InformationStep";
import PaymentStep from "../components/step/PaymentStep";
import ShippingStep from "../components/step/ShippingStep";
import StepIndicator from "../components/StepIndicator";
import OrderSummary from "../components/summary/OrderSummary";
import { useCheckout } from "../hooks/useCheckout";
import { usePaymentIntentMutation } from "../checkoutApi";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { errorNotify } from "@utils/notify/errorNotify";
import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
        <svg
          className="w-7 h-7 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-xl font-medium text-stone-800 mb-2">Order placed!</h1>
      <p className="text-sm text-stone-400 max-w-xs">
        You'll receive a confirmation email shortly. Track your order from your
        profile.
      </p>
      <a
        href="/profile/orders"
        className="mt-6 h-10 px-6 bg-stone-800 text-white text-sm font-medium rounded-xl
          hover:bg-stone-700 transition-colors inline-flex items-center"
      >
        View orders
      </a>
    </div>
  );
}

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  const [createPaymentIntent, { isLoading }] = usePaymentIntentMutation();

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  useEffect(() => {
    (async () => {
      try {
        const res = await createPaymentIntent({
          price: 10,
          productId: "62170c5af3d27e919f30b100",
          userId: "62170c5af3d27e919f30b100",
        });
        console.log(res);
        setClientSecret(
          res?.data?.data?.client_secret || res.data.client_secret,
        );
      } catch {
        setPaymentError("Failed to create payment intent. Please try again.");
      }
    })();
  }, [createPaymentIntent]);

  console.log("client secret:", clientSecret);

  const {
    currentStep,
    formData,
    cartItems,
    shippingMethods,
    totals,
    promoCode,
    promoDiscount,
    promoError,
    orderPlaced,
    goNext,
    goBack,
    updateField,
    updatePaymentField,
    setPromoCode,
    applyPromo,
    placeOrder,
  } = useCheckout();

  if (isLoading) return <LoadingSpinner />;
  if (!isLoading && paymentError) {
    errorNotify("Failed to create payment intent. Please try again.");
    navigate(-1);
    return;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/"
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            ← Back to cart
          </a>
          <h1 className="text-2xl font-medium text-stone-800 mt-3">Checkout</h1>
        </div>

        <StepIndicator currentStep={currentStep} />

        {/* Layout: left (steps) + right (summary) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Left — step content */}
          <div>
            {currentStep === 1 && (
              <InformationStep
                data={formData.information}
                onChange={updateField}
                onNext={goNext}
              />
            )}
            {currentStep === 2 && (
              <ShippingStep
                data={formData.shipping}
                shippingMethods={shippingMethods}
                onChange={updateField}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {currentStep === 3 && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentStep
                  clientSecret={clientSecret}
                  data={formData.payment}
                  onChange={updateField}
                  onFieldChange={updatePaymentField}
                  onNext={placeOrder}
                  onBack={goBack}
                />
              </Elements>
            )}
          </div>

          {/* Right — sticky order summary */}
          <OrderSummary
            cartItems={cartItems}
            totals={totals}
            promoCode={promoCode}
            promoDiscount={promoDiscount}
            promoError={promoError}
            setPromoCode={setPromoCode}
            applyPromo={applyPromo}
          />
        </div>
      </div>
    </div>
  );
}
