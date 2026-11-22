import { useLoadCustomerQuery } from "@features/auth/authAPI";
import AppRoutes from "@routes/AppRoutes";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const { isLoading, isFetching } = useLoadCustomerQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
