import { CardCvcElement } from "@stripe/react-stripe-js";
import { useCallback } from "react";

const CardCvcField = ({
  fieldError,
  setEmptyInput,
  setFieldErrors,
  inputBaseClass,
}) => {
  const handleOnChange = useCallback(
    (event) => {
      setEmptyInput((prev) => ({
        ...prev,
        cardCvc: !event.complete,
      }));
      setFieldErrors((prev) => ({
        ...prev,
        cardCvc: !event.complete,
      }));
    },
    [setEmptyInput, setFieldErrors],
  );

  return (
    <div className="flex flex-col gap-1.5 w-1/2">
      <label className="text-base text-gray-500">CVC</label>

      <div className={inputBaseClass(fieldError)}>
        <CardCvcElement className="w-full" onChange={handleOnChange} />
      </div>

      {fieldError && (
        <div className="min-h-5">
          <p className="text-red-500 text-sm">invalid CVC.</p>
        </div>
      )}
    </div>
  );
};

export default CardCvcField;
