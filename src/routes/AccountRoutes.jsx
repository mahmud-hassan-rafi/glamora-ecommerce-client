import AccountLayout from "@layouts/customer/AccountLayout";
import { AccountContextProvider } from "@context/AccountContext";
import Orders from "@features/account/orders/pages/Orders";
import Deliveries from "@features/account/pages/Deliveries";
import Profile from "@features/account/pages/Profile";
import Wishlist from "@pages/Wishlist";
import Dashboard from "@features/account/dashboard/pages/Dashboard";
import OrderDetailsPage from "@features/account/orders/pages/OrderDetailsPage";
import AddressPage from "@features/account/address/pages/AddressPage";
import PaymentsPage from "@features/account/payments/pages/PaymentsPage";

const AccountRoutes = {
  path: "account",
  element: (
    <AccountContextProvider>
      <AccountLayout />
    </AccountContextProvider>
  ),
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "orders/:id",
      element: <OrderDetailsPage />,
    },
    {
      path: "deliveries",
      element: <Deliveries />,
    },
    {
      path: "address",
      element: <AddressPage />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "wishlist",
      element: <Wishlist />,
    },
    {
      path: "payments",
      element: <PaymentsPage />,
    },
  ],
};

export default AccountRoutes;
