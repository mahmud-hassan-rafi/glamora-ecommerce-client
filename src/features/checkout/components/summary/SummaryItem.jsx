export default function SummaryItem({ item }) {
  return (
    <div className="flex items-center gap-3">
      {/* Thumbnail */}
      <div className="w-12 h-12 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            className="w-5 h-5 text-stone-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-stone-800 truncate">{item.name}</p>
        <p className="text-xs text-stone-400 mt-0.5">
          {item.variant} · Qty {item.qty}
        </p>
      </div>

      {/* Price */}
      <span className="text-sm font-medium text-stone-800 flex-shrink-0">
        ৳{(item.price * item.qty).toLocaleString()}
      </span>
    </div>
  );
}
