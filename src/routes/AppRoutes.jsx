import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import React from "react";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/website/Home/Home";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
