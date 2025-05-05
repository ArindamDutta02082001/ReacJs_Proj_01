import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import DashboardPageOne from "../pages/DashboardOne";
import DashboardPageTwo from "../pages/DashboardTwo";
import DashboardPageThree from "../pages/DashboardThree";
import DashboardPageFour from "../pages/DashboardFour";

/*
 * this router path is created here in seperate file just to make look index.js cleaner
 * the layout is created to provide a prototype , and the <outlet/> part will be replaced by the <Element/> in particular path
 */

const routerPaths1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dash-one",
    element: <Layout />,
    children: [
      {
        path: ":name/:age",
        element: <DashboardPageOne />,
      },
    ],
  },
  {
    path: "/dash-two",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <DashboardPageTwo />,
      },
    ],
  },
  {
    path: "/dash-three",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <DashboardPageThree />,
      },
    ],
  },
  {
    path: "/dash-four",
    element: <Layout />,
    children: [
      {
        path: ":name",
        element: <DashboardPageFour />,
      },
    ],
  },
  // wild-card route path for 404 not found
  {
    path: "*",
    element: <NotFound />,
  },
]);

// this  component is just created to render the router paths
function RouterPath() {
  return <RouterProvider router={routerPaths1} />;
}

export default RouterPath;
