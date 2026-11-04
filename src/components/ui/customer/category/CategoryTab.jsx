import { useAppContext } from "@context/AppContext";
import { categories } from "@utils/categoriesData";
import { MoveLeft } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CategoryTab = () => {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useAppContext();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2.5 items-center text-[clamp(26px,2vw+1rem,44px)] font-semibold justify-center text-gray-800">
        <MoveLeft
          size={26}
          className="stroke-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        {categories.find((cat) => cat.slug === selectedCategory)?.name ||
          "All Categories"}
      </div>
      <div className="flex justify-start flex-wrap gap-5">
        {/* category filter here */}
        {categories.map((category) => (
          <NavLink
            to={category.path}
            key={category.id}
            className={({ isActive }) =>
              `px-8 py-4 rounded text-sm font-medium border-2 transition shrink-0 ${
                isActive
                  ? "border-2 border-blue-500/90  bg-linear-to-b from-blue-500/10 to-cyan-200/20"
                  : "border-gray-800/30 text-gray-800 hover:border-blue-500/60"
              }`
            }
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
