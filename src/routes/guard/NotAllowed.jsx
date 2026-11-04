import { Navigate, Outlet } from "react-router-dom";

export default function NotAllowed({ ifRoleIs, children }) {
  if (ifRoleIs === "customer") {
    return <Navigate to={"/"} />;
  }

  return children ? children : <Outlet />;
}
