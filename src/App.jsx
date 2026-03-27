import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Login from "@features/auth/pages/Login";
import Register from "@features/auth/pages/Register";
import CustomerDashboard from "@features/auth/pages/CustomerDashBoard";
import ProductDetail, { ProductDetailLoader } from "@pages/ProductDetails";
import Cart from "@features/cart/page/Cart";
import NotFoundPage from "@pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        {
          path: "/shop/:id",
          element: <ProductDetail />,
          loader: ProductDetailLoader,
        },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/me", element: <CustomerDashboard /> },
      ],
    },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
