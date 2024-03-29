import React from "react";
import Header from "features/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UIContext, UIProvider } from "providers";
export const Layout = ({ children }) => {
  return (
    <UIProvider>
      <div className="home  text-[14px] h-screen font-nunitoSans ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Header />
        <div className="">{children}</div>
      </div>
    </UIProvider>
  );
};
