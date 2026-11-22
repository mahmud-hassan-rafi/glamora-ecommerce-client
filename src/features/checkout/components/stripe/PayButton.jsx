// import { useAppContext } from "@context/AppContext";

const PayButton = ({ loading, stripe, paymentIntent }) => {
  // const { discountedPrice } = useAppContext();
  console.log("state of loading", loading);

  return (
    <button
      type="submit"
      disabled={!stripe || loading}
      className="w-full bg-black text-white py-2 rounded cursor-pointer"
    >
      {loading
        ? "Processing..."
        : `Pay ${paymentIntent?.amount / 100} ${paymentIntent?.currency.toUpperCase()}`}
    </button>
  );
};

export default PayButton;
