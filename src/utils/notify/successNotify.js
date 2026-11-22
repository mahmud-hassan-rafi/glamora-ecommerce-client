import { Bounce, toast } from "react-toastify";

export const successNotify = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};
