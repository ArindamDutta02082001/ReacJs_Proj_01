# ReacJs_Proj_01
This is a hub where I keep my practice projects
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/eb6a9d7d-676d-4500-9a26-0f378e1e6f54)

<h2>Interview Counter Qstn</h2>
<br/>
![ScreenShot](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/fb567e31-72b4-45d4-bd34-c2ac34cebc4c)

<hr/>

<h2>Password Gen</h2>
<br/>
how to use input Slider
<br/>
how to use useRef Hook
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/7799a023-17b4-411d-a223-05adeb5c3204)

<hr/>

<h2>React currency converter</h2>
<br/>
passing data from child to parent
<br/>
custom hooks -- nothing but reusable functions created by using other hooks with no return html like component does
<br/>
best style to write props in curly braces with default parameter i.e in destructured formats
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/59055b3c-6124-487e-b14b-dbdce54219df)

<hr/>

<h2>Router paths and Layout</h2>
<br/>
How to write route paths and create a common Layout
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/8149337e-5df6-476c-b67b-7cac0a4cb750)


<pre>
 <code>
**in Layout.js**

import { Outlet } from "react-router-dom";  // will be replaced by other comp
function Layout() {
  return (
    <>
      Header
      Outlet
      Footer
    <>
  );
}
export default Layout;
     
 </code>
</pre>

<pre>
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
</pre>
