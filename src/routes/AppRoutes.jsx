import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import React from "react";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/website/Home/Home";
import About from "../pages/website/About/About";
import Shop from "../pages/website/Shop/Shop";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
         {
          path: "about",
          element: <About />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
