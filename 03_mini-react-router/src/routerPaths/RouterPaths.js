import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../staticComponent/Home";
import Contact from "../staticComponent/Contact";
import About from "../staticComponent/About";

import Layout from "./Layout";
import User from "../staticComponent/User";
import NotFound from "../staticComponent/NotFound";

/*
 * this router path is created here in seperate file just to make look index.js cleaner
 * the layout is created to provide a prototype , and the <outlet> part will be replaced by home , about , contact materials as per required
 */

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
        path: "contactPath",
        element: <Contact />,
      },
      {
        path: "aboutPath",
        element: <About />,
      },
    ],
  },
  {
    path: "/userPath",
    element: <Layout />,
    children: [
      {
        path: ":userId",
        element: <User />,
      },
    ],
  },
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

/* method 2 - in index.js file only

* ReactDOM.render(
*   <React.StrictMode>
*     <Router>
*       <Switch>

*         <Route exact path="login">
*           <Login />
*         </Route>

*         <Route exact path="loginseller">
*           <LoginSeller />
*         </Route>

*         <Route exact path="/">
*           <Header />
*           <DropdownAdmin />
*           <Banner />
*           <BodyProduct />
*           <Footer />
*         </Route>

*         <Route exact path="checkout">
*           <Header />
*           <Checkout />
*           <Footer />
*         </Route>

*         <Route exact path="payment">
*           <Header />
*           <Elements stripe={promise}>
*             <Pay />
*           </Elements>
*           <Footer />
*         </Route>

*         <Route exact path="thanks">
*           <Header />
*           <Thank />
*           <Footer />
*         </Route>

*         <Route exact path="delivery">
*           <Header />
*           <Delivery />
*           <Footer />
*         </Route>

*         <Route exact path="admin">
*           <HeaderSeller />
*           <Admin />
*           <Footer />
*         </Route>

*         <Route exact path="Thankyou">
*           <Header />
*           <Thankyou />
*           <Footer />
*         </Route>

*         <Route exact path="returnandorder">
*           <Header />
*           <Return />
*           <Footer />
*         </Route>

*       </Switch>
*     </Router>
*   </React.StrictMode>,
*   document.getElementById("root")
* );
*/
