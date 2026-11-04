import { CardNumberElement } from "@stripe/react-stripe-js";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";

const CARD_BRAND_ICONS = {
  visa: <FaCcVisa size={20} className="text-blue-600" />,
  mastercard: <FaCcMastercard size={20} className="text-red-600" />,
  amex: <FaCcAmex size={20} className="text-green-600" />,
  discover: <FaCcDiscover size={20} className="text-yellow-600" />,
};

const CardNumberField = ({
  fieldError,
  cardBrand,
  onChange,
  inputBaseClass,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base text-gray-500">Card Number</label>

      <div className={inputBaseClass(fieldError)}>
        <CardNumberElement className="w-full" onChange={onChange} />

        <div className="ml-2 size-5 flex items-center">
          {!cardBrand ? (
            <BsCreditCard size={20} className="text-gray-500" />
          ) : (
            CARD_BRAND_ICONS[cardBrand]
          )}
        </div>
      </div>

      {fieldError && (
        <p className="text-red-500 text-sm">
          Please enter a valid card number.
        </p>
      )}
    </div>
  );
};

export default CardNumberField;
