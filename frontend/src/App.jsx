import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import ProductDetail, { ProductDetailLoader } from "./pages/ProductDetail";
import ShopOutlet from "./layout/ShopOutlet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NetwotkError from "./errors/NetwotkError";
import Cart from "./pages/Cart";
import ProductsProvider from "./context/ProductContext";
import { FunctionalitiesProvider } from "./context/Functionalities";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, errorElement: <NotFound /> },
      { path: "home", element: <Home /> },
      {
        path: "shop",
        element: <ShopOutlet />,
        errorElement: <NotFound />,
        children: [
          { index: true, element: <Shop />, errorElement: <NetwotkError /> },
          {
            path: ":id",
            element: <ProductDetail />,
            loader: ProductDetailLoader,
          },
        ],
      },
      { path: "cart", element: <Cart /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // keep data fresh for 5 minutes and keep cache for 15 minutes
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 15,
      // do not refetch on window focus or when component mounts if cached
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductsProvider>
            <FunctionalitiesProvider>
              <RouterProvider router={router} />
            </FunctionalitiesProvider>
          </ProductsProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
