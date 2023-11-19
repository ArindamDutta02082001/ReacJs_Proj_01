import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../staticComponent/Home";
import Contact from "../staticComponent/Contact";
import About from "../staticComponent/About";

import Layout from "./Layout";
import User from "../componentToLearn/User";

//this router path is created here in seperate file just to make look index.js cleaner
// the layout is created to provide a prototype , and the outlet part will be replaced by home , about , contact materials as per required
// method 1 :
const routerPaths1 = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/contactPath",
        element: <Contact />,
      },
      {
        path: "/aboutPath",
        element: <About />,
      },
      {
        path: "/userPath/:userId",
        element: <User />,
      },
    ],
  },
]);

// this  component is just created to render the router paths
function RouterPath() {
  return <RouterProvider router={routerPaths1} />;
}

export default RouterPath;
