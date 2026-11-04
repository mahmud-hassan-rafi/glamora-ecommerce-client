import { Plus } from "lucide-react";

export default function AddAddressCard() {
  return (
    <button
      className="
        flex min-h-55
        flex-col items-center
        justify-center
        rounded-3xl
        border-2 border-dashed
        border-neutral-300
        bg-neutral-50
        transition-all
        hover:border-black
        hover:bg-white
      "
    >
      <div className="rounded-2xl bg-white p-3 shadow-sm">
        <Plus size={22} />
      </div>

      <h3 className="mt-4 font-semibold">Add New Address</h3>

      <p className="mt-1 text-sm text-neutral-500">
        Save another delivery location
      </p>
    </button>
  );
}
