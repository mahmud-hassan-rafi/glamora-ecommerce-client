import AddAddressCard from "../components/AddAddressCard";
import FeaturedAddressCard from "../components/FeaturedAddressCard";
import SecondaryAddressCard from "../components/SecondaryAddressCard";

export default function AddressPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Address Book</h1>

        <p className="mt-2 text-neutral-500">
          Manage delivery destinations and billing locations.
        </p>
      </div>

      {/* Featured */}
      <FeaturedAddressCard />

      {/* Secondary */}
      <div>
        <h2 className="mb-5 text-lg font-semibold">Other Addresses</h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SecondaryAddressCard title="Office Address" />
          <SecondaryAddressCard title="Billing Address" />
          <AddAddressCard />
        </div>
      </div>
    </section>
  );
}
