import { toast } from "react-toastify";

export const showToastr = (message, type) => {
  const options = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
    hideProgressBar: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    closeOnClick: true,
    className: "custom__toastr",
  };

  return toast[type](message, options);
};
