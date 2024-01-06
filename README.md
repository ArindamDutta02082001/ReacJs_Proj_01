# ReacJs_Proj_01
This is a hub where I keep my practice projects

<h2>Interview Counter Qstn</h2>
<br/>
![image](https://github.com/ArindamDutta02082001/ReacJs_Proj_01/assets/83761396/fb567e31-72b4-45d4-bd34-c2ac34cebc4c)

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
https://github-production-user-asset-6210df.s3.amazonaws.com/83761396/294701261-f87276db-8074-49e1-8832-667c0d298c47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240106T165116Z&X-Amz-Expires=300&X-Amz-Signature=86a3a2050fd6c02dad951266da39ee7adbfd65254464f2066b2662bfb9d7b3c7&X-Amz-SignedHeaders=host&actor_id=83761396&key_id=0&repo_id=719931090

<pre>
<code>
  **in Layout.js**

import { Outlet } from "react-router-dom";  // will be replaced by other comp
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;


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
</code>
</pre>

function RouterPath() {
  return <RouterProvider router={routerPaths1} />;
}
export default RouterPath;

