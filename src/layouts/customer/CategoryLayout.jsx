import CategoryTab from "@components/ui/customer/category/CategoryTab";
import React from "react";
import { Outlet } from "react-router-dom";

const CategoryLayout = () => {
  return (
    <div className="flex flex-col gap-8 w-full px-6 sm:px-8 md:px-12 xl:px-16">
      <CategoryTab />

      {/* category items */}
      <Outlet />
    </div>
  );
};

export default CategoryLayout;
