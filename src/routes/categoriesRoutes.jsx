import CategoryLayout from "@layouts/customer/CategoryLayout";
import Category from "@pages/customer/Category";

//  categories router here.
const categoriesRoutes = {
  path: "categories/",
  element: <CategoryLayout />,
  children: [{ path: ":category", element: <Category /> }],
};

export default categoriesRoutes;
