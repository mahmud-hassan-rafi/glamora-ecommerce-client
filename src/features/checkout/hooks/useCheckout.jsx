import { useState } from "react";

const DUMMY_CART = [
  {
    id: "prod_001",
    name: "Premium linen shirt",
    variant: "Size M · Beige",
    price: 2400,
    qty: 1,
    image: null,
  },
  {
    id: "prod_002",
    name: "Classic leather sneakers",
    variant: "Size 42 · White",
    price: 5800,
    qty: 1,
    image: null,
  },
];

const SHIPPING_METHODS = [
  {
    id: "standard",
    label: "Standard delivery",
    days: "3–5 business days",
    cost: 0,
  },
  {
    id: "express",
    label: "Express delivery",
    days: "1–2 business days",
    cost: 120,
  },
  {
    id: "sameday",
    label: "Same day delivery",
    days: "Dhaka metro only · today",
    cost: 250,
  },
];

const INITIAL_FORM = {
  information: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    district: "",
  },
  shipping: {
    methodId: "standard",
  },
  payment: {
    method: "card", // "card" | "bkash" | "cod"
    card: { number: "", name: "", expiry: "", cvv: "" },
    bkash: { transactionId: "" },
  },
};

export function useCheckout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // ─── Navigation ───────────────────────────────────────────
  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const goToStep = (n) => setCurrentStep(n);

  // ─── Field updates ─────────────────────────────────────────
  const updateField = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], [field]: value },
    }));
  };

  // nested update for payment sub-fields (card/bkash)
  const updatePaymentField = (method, field, value) => {
    setFormData((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        [method]: { ...prev.payment[method], [field]: value },
      },
    }));
  };

  // ─── Totals ────────────────────────────────────────────────
  const selectedMethod = SHIPPING_METHODS.find(
    (m) => m.id === formData.shipping.methodId,
  );
  const subtotal = DUMMY_CART.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const shippingCost = selectedMethod?.cost ?? 0;
  const total = subtotal + shippingCost - promoDiscount;

  const totals = { subtotal, shippingCost, discount: promoDiscount, total };

  // ─── Promo code ────────────────────────────────────────────
  const applyPromo = () => {
    const VALID_CODES = { SAVE10: 820, WELCOME: 500 };
    if (VALID_CODES[promoCode.toUpperCase()]) {
      setPromoDiscount(VALID_CODES[promoCode.toUpperCase()]);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code.");
      setPromoDiscount(0);
    }
  };

  // ─── Place order ───────────────────────────────────────────
  const placeOrder = () => {
    // Here you'd call your API. For now, just mark as placed.
    setOrderPlaced(true);
  };

  return {
    // state
    currentStep,
    formData,
    cartItems: DUMMY_CART,
    shippingMethods: SHIPPING_METHODS,
    totals,
    promoCode,
    promoDiscount,
    promoError,
    orderPlaced,

    // actions
    goNext,
    goBack,
    goToStep,
    updateField,
    updatePaymentField,
    setPromoCode,
    applyPromo,
    placeOrder,
  };
}
