import { Bounce, toast } from "react-toastify";

export const errorNotify = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};
