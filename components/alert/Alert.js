import { toast } from "react-toastify";

const Toast = (message, type) => {
  const option = type === "success" ? "success" : "error";
  return toast(message, {
    type: option,
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export default Toast;
