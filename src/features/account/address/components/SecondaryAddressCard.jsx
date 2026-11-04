import { Pencil, Trash2 } from "lucide-react";

export default function SecondaryAddressCard({ title = "Office Address" }) {
  return (
    <div
      className="
        rounded-3xl
        border border-neutral-200
        bg-white
        p-6
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>

        <p className="mt-4 text-sm leading-6 text-neutral-600">
          House 12, Road 5
          <br />
          Dhaka, Bangladesh
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <button className="rounded-xl border px-3 py-2 text-sm hover:bg-neutral-50">
          <Pencil size={14} />
        </button>

        <button className="rounded-xl border px-3 py-2 text-sm text-red-500 hover:bg-red-50">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
