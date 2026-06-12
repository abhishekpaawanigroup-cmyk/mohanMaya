import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";

// Lazy-load pages so each route ships its own chunk (faster first paint).
const Home = lazy(() => import("../pages/website/Home/Home"));
const About = lazy(() => import("../pages/website/About/About"));
const Shop = lazy(() => import("../pages/website/Shop/Shop"));
const Contact = lazy(() => import("../pages/website/Contact/Contact"));
const NotFound = lazy(() => import("../pages/website/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
