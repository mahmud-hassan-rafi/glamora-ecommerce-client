import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Home from "@pages/Home";
import Shop from "@pages/Shop";
import Contact from "@pages/Contact";
import Wishlist from "@pages/Wishlist";
import Login from "@features/auth/pages/Login";
import Register from "@features/auth/pages/Register";
import ProductDetail, { ProductDetailLoader } from "@pages/ProductDetails";
import Cart from "@features/cart/page/Cart";
import NotFoundPage from "@pages/NotFound";
import FlashSalesSection from "@pages/Test";
import categoriesRoutes from "./categoriesRoutes";
import AboutUsPage from "@pages/About";
import PrivacyPolicyPage from "@features/legal/pages/PrivacyPolicy";
import ReturnsPolicyPage from "@features/legal/pages/ReturnPolicy";
import TermsConditionsPage from "@features/legal/pages/TermsAndConditions";
import HelpCenterPage from "@features/helpCenter/pages/HelpCenter";
import OrdersShippingPage from "@features/helpCenter/pages/OrderShippingPage";
import ReturnsRefundsPage from "@features/helpCenter/pages/ReturnRefundsPage";
import HelpCenterPaymentsPage from "@features/helpCenter/pages/HelpCenterPaymentPage";
import HelpCenterAccountSecurityPage from "@features/helpCenter/pages/HelpCenterAccountSecurity";
import HelpCenterProductsInfoPage from "@features/helpCenter/pages/HelpCenterProductsInfo";
import HelpCenterGeneralSupportPage from "@features/helpCenter/pages/HelpCenterGeneralSupport";
import { useSelector } from "react-redux";
import NotAllowed from "./guard/NotAllowed";
import AccountRoutes from "./AccountRoutes";
import CheckoutPage from "@features/checkout/pages/CheckoutPage";

const AppRoutes = () => {
  const userData = useSelector((state) => state?.auth?.user?.data?.user);

  console.log(userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "shop", element: <Shop /> },
        {
          path: "shop/:id",
          element: <ProductDetail />,
          loader: ProductDetailLoader,
          errorElement: <div className="py-4">No product data</div>,
        },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "contact-us", element: <Contact /> },
        { path: "about-us", element: <AboutUsPage /> },
        { path: "privacy-policy", element: <PrivacyPolicyPage /> },
        { path: "returns-policy", element: <ReturnsPolicyPage /> },
        { path: "terms-and-conditions", element: <TermsConditionsPage /> },
        { path: "help-center", element: <HelpCenterPage /> },
        { path: "help-center/order-shipping", element: <OrdersShippingPage /> },
        { path: "help-center/return-refund", element: <ReturnsRefundsPage /> },
        { path: "help-center/payments", element: <HelpCenterPaymentsPage /> },
        {
          path: "help-center/account-security",
          element: <HelpCenterAccountSecurityPage />,
        },
        {
          path: "help-center/products",
          element: <HelpCenterProductsInfoPage />,
        },
        {
          path: "help-center/general-support",
          element: <HelpCenterGeneralSupportPage />,
        },
        {
          path: "login",
          element: (
            <NotAllowed ifRoleIs={userData?.role}>
              <Login />
            </NotAllowed>
          ),
        },
        {
          path: "register",
          element: (
            <NotAllowed ifRoleIs={userData?.role}>
              <Register />
            </NotAllowed>
          ),
        },
        AccountRoutes,
        categoriesRoutes,
      ],
    },
    { path: "test", element: <FlashSalesSection /> },
    { path: "/*", element: <NotFoundPage /> },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default AppRoutes;
