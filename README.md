# ReacJs_Proj_01
This is a hub where I keep my practice projects

<h2>Interview Counter Qstn</h2>
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/0b44e312-7c05-4b03-bb1b-7cf30861297b)

<hr/>

<h2>Password Gen</h2>
<br/>
how to use input Slider
<br/>
how to use useRef Hook
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/8eb554d9-3d46-415d-a546-b3826b81ee71)

<hr/>

<h2>React currency converter</h2>
<br/>
passing data from child to parent
<br/>
custom hooks -- nothing but reusable functions created by using other hooks with no return html like component does
<br/>
best style to write props in curly braces with default parameter i.e in destructured formats
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/80de8be0-aa78-45f5-ba77-0af9b68f90e8)

<hr/>

<h2>Router paths and Layout</h2>
<br/>
How to write route paths and create a common Layout
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/f87276db-8074-49e1-8832-667c0d298c47)
<code>
 
  **in Layout.js**

import { Outlet } from "react-router-dom";  // will be replaced by other comp
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
</code>
<code>


  **in RoutePath.js**
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

function RouterPath() {
  return <RouterProvider router={routerPaths1} />;
}
export default RouterPath;
</code>
