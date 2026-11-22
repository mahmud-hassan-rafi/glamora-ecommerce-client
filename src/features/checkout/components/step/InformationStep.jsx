function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-stone-500 tracking-wide">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "h-10 border border-stone-200 rounded-lg px-3 text-sm text-stone-800 bg-white placeholder:text-stone-300 focus:outline-none focus:border-stone-400 transition-colors";

export default function InformationStep({ data, onChange, onNext }) {
  const f = (field) => ({
    value: data[field],
    onChange: (e) => onChange("information", field, e.target.value),
  });

  const isValid =
    data.email &&
    data.firstName &&
    data.lastName &&
    data.phone &&
    data.address1 &&
    data.city &&
    data.district;

  return (
    <div className="space-y-5">
      {/* Contact */}
      <div className="bg-white border border-stone-100 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-medium text-stone-800">
          Contact information
        </h2>

        <Field label="Email address">
          <input
            className={inputCls}
            type="email"
            placeholder="you@example.com"
            {...f("email")}
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="First name">
            <input
              className={inputCls}
              placeholder="Rafi"
              {...f("firstName")}
            />
          </Field>
          <Field label="Last name">
            <input
              className={inputCls}
              placeholder="Ahmed"
              {...f("lastName")}
            />
          </Field>
        </div>

        <Field label="Phone number">
          <input
            className={inputCls}
            type="tel"
            placeholder="+880 1X00-000000"
            {...f("phone")}
          />
        </Field>
      </div>

      {/* Address */}
      <div className="bg-white border border-stone-100 rounded-2xl p-6 space-y-4">
        <h2 className="text-sm font-medium text-stone-800">Shipping address</h2>

        <Field label="Address line 1">
          <input
            className={inputCls}
            placeholder="House, road, area"
            {...f("address1")}
          />
        </Field>

        <Field label="Address line 2 (optional)">
          <input
            className={inputCls}
            placeholder="Apartment, floor"
            {...f("address2")}
          />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="City">
            <input className={inputCls} placeholder="Dhaka" {...f("city")} />
          </Field>
          <Field label="District">
            <input
              className={inputCls}
              placeholder="Comilla"
              {...f("district")}
            />
          </Field>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className="w-full h-11 bg-stone-800 text-white text-sm font-medium rounded-xl
          hover:bg-stone-700 active:scale-[0.98] transition-all
          disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue to shipping
      </button>
    </div>
  );
}
