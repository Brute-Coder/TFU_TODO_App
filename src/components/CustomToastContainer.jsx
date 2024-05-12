import React from "react";
import { ToastContainer } from "react-toastify";

function CustomToastContainer() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Flip
    />
  );
}

export default CustomToastContainer;
