export default function ProductDescription({ product }) {
  return (
    <div className="max-w-3xl space-y-5">
      <h2 className="text-2xl font-bold text-neutral-900">
        About this product
      </h2>

      <p className="text-neutral-600 leading-7">{product.description}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {product.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
