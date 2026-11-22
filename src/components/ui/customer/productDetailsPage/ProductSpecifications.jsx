export default function ProductSpecifications({ product }) {
  return (
    <div className="max-w-4xl space-y-8">
      <h2 className="text-2xl font-bold text-neutral-900">
        Technical Specifications
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <Spec label="Brand" value={product.brand} />
        <Spec label="Category" value={product.category} />
        <Spec label="SKU" value={product.sku} />
        <Spec label="Stock" value={product.stock} />
        <Spec label="Warranty" value={product.warrantyInformation} />
        <Spec label="Return Policy" value={product.returnPolicy} />
      </div>

      {/* Dimensions */}
      <div className="rounded-2xl border border-neutral-200 p-6">
        <p className="text-sm text-neutral-500">Dimensions</p>

        <p className="mt-2 text-lg font-semibold">
          {product.dimensions?.width} × {product.dimensions?.height} ×{" "}
          {product.dimensions?.depth} cm
        </p>
      </div>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 font-semibold text-neutral-900">{value}</p>
    </div>
  );
}
