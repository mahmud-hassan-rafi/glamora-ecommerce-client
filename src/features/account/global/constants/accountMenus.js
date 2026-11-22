import {
  Clock3,
  CreditCard,
  Download,
  Heart,
  LayoutDashboard,
  MapPin,
  Package,
  ShoppingBag,
  Store,
  Truck,
  UserRound,
} from "lucide-react";

export const accountMenus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/account",
  },
  {
    title: "Orders",
    icon: Package,
    path: "/account/orders",
  },
  {
    title: "My Deliveries",
    icon: Truck,
    path: "/account/deliveries",
  },
  {
    title: "Address",
    icon: MapPin,
    path: "/account/address",
  },
  {
    title: "Profile",
    icon: UserRound,
    path: "/account/profile",
  },
  {
    title: "Wishlist",
    icon: Heart,
    path: "/account/wishlist",
  },
  {
    title: "Payments",
    icon: CreditCard,
    path: "/account/payments",
  },
];

// const actions = [
//   {
//     title: "Track Orders",
//     desc: "See shipping status",
//     icon: Package,
//   },
//   {
//     title: "Continue Shopping",
//     desc: "Browse products",
//     icon: ShoppingBag,
//   },
//   {
//     title: "Wishlist",
//     desc: "Saved items",
//     icon: Heart,
//   },
//   {
//     title: "Addresses",
//     desc: "Manage delivery",
//     icon: MapPin,
//   },
//   {
//     title: "Profile",
//     desc: "Edit account info",
//     icon: User,
//   },

// ];
