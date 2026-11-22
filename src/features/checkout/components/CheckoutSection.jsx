export default function CheckoutSection({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white p-7">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
}
