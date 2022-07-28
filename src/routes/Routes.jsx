import React from "react";
import Home from "pages/home/Home";
import Details from "pages/details/Details";
export const routes = [
  {
    path: "",
    element: <Home />,
    private: false,
  },
  {
    path: "/details/:name",
    element: <Details />,
    private: false,
  },
];
