export default function SidebarFilter() {
  return (
    <div className="hidden md:flex flex-col md:w-64 p-4 border rounded-lg mb-6 sm:mb-0">
      <h2 className="font-semibold mb-3">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-1">
          {["Skin Care", "Makeup", "Body Care", "Hair Care"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Price</h3>
        <input type="range" min="0" max="500" className="w-full" />
      </div>

      {/* Brand */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Brand</h3>
        <ul className="space-y-1">
          {["Brand A", "Brand B", "Brand C"].map((brand) => (
            <li key={brand}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Rating</h3>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <li key={star}>
              <label className="flex items-center space-x-2">
                <input type="radio" name="rating" className="form-radio" />
                <span>{star} Stars & Up</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
