export default function PromoCode({
  value,
  onChange,
  onApply,
  error,
  discount,
}) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.trim().toUpperCase())}
          placeholder="Promo code"
          className="flex-1 h-9 border border-stone-200 rounded-lg px-3 text-sm text-stone-800
            placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-white"
        />
        <button
          onClick={onApply}
          className="h-9 px-4 text-sm font-medium border border-stone-200 rounded-lg text-stone-600
            hover:bg-stone-50 hover:border-stone-300 active:scale-[0.98] transition-all"
        >
          Apply
        </button>
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
      {discount > 0 && (
        <p className="text-xs text-emerald-600">
          ৳{discount.toLocaleString()} discount applied!
        </p>
      )}
    </div>
  );
}
