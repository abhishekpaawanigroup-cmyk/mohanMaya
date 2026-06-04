import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import React from "react";
import WebsiteLayout from "../layouts/WebsiteLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          index: true,
          element: <h1 className="text-2xl font-bold">HOME PAGE</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
