import SummaryItem from "./SummaryItem";
import PromoCode from "./PromoCode";

export default function OrderSummary({
  cartItems,
  totals,
  promoCode,
  promoDiscount,
  promoError,
  setPromoCode,
  applyPromo,
}) {
  return (
    <div className="bg-white border border-stone-100 rounded-2xl p-6 sticky top-30 space-y-5">
      <h2 className="text-sm font-medium text-stone-800">Order summary</h2>

      {/* Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <SummaryItem key={item.id} item={item} />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-stone-100" />

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-stone-500">
          <span>Subtotal</span>
          <span>৳{totals.subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm text-stone-500">
          <span>Shipping</span>
          <span className={totals.shippingCost === 0 ? "text-emerald-600" : ""}>
            {totals.shippingCost === 0 ? "Free" : `৳${totals.shippingCost}`}
          </span>
        </div>
        {totals.discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Discount</span>
            <span className="text-red-500">
              −৳{totals.discount.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-stone-100" />

      {/* Total */}
      <div className="flex justify-between">
        <span className="text-sm font-medium text-stone-800">Total</span>
        <span className="text-base font-semibold text-stone-800">
          ৳{totals.total.toLocaleString()}
        </span>
      </div>

      {/* Promo */}
      <PromoCode
        value={promoCode}
        onChange={setPromoCode}
        onApply={applyPromo}
        error={promoError}
        discount={promoDiscount}
      />
    </div>
  );
}
