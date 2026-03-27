export default function SortingDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    >
      <option value="latest">Latest</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="bestSelling">Best Selling</option>
      <option value="popular">Popular</option>
    </select>
  );
}
