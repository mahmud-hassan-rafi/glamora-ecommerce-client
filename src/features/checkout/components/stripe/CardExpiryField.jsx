import { CardExpiryElement } from "@stripe/react-stripe-js";
import { useCallback } from "react";

const CardExpiryField = ({
  fieldError,
  setEmptyInput,
  setFieldErrors,
  inputBaseClass,
}) => {
  const handleOnChange = useCallback(
    (event) => {
      setEmptyInput((prev) => ({
        ...prev,
        cardExpiry: !event.complete,
      }));
      setFieldErrors((prev) => ({
        ...prev,
        cardExpiry: !event.complete,
      }));
    },
    [setEmptyInput, setFieldErrors],
  );

  return (
    <div className="flex flex-col gap-1.5 w-1/2">
      <label className="text-base text-gray-500">Expiry Date</label>

      <div className={inputBaseClass(fieldError)}>
        <CardExpiryElement className="w-full" onChange={handleOnChange} />
      </div>

      {fieldError && (
        <div className="min-h-5">
          <p className="text-red-500 text-sm">invalid expiry date.</p>
        </div>
      )}
    </div>
  );
};

export default CardExpiryField;
