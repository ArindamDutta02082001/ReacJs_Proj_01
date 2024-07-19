import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const info = { name: "John", age: "30" }; // Example info object
  const navigate = useNavigate();

  const handleDashFour = () => {
    navigate(`/dash-four/${info.name}?age=${info.age}`, {
      state: { msg: "state data passed" },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold">Choose an Option</h1>
        <div className="flex space-x-4">
          {/* dashboard one */}
          <NavLink
            to={`/dash-one/${info.name}/${info.age}`}
            className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Dashboard 1<p>passing values directly in path url</p>
            <div>
              <code>{`/dash-one/${info.name}/${info.age}`}</code>
            </div>
          </NavLink>

          {/* dashboard two */}
          <NavLink
            to={`/dash-two?name=${info.name}&age=${info.age}`}
            className="px-6 py-3 text-lg font-medium bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600">
            Dashboard 2<p>passing the query parameter  in url</p>
            <div>
              <code>{`/dash-two?name=${info.name}&age=${info.age}`}</code>
            </div>
          </NavLink>

          {/* dashboard three */}
          <NavLink
            to="/dash-three"
            state={{ myInfo: info }}
            className="px-6 py-3 text-lg font-medium bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Dashboard 3<p>Passing data through state</p>
            <div>
              <code>{`to="/dash-three" state={{ myInfo: info }}`}</code>
            </div>
          </NavLink>

          {/* dashboard four */}
          <button
            onClick={handleDashFour}
            className="px-6 py-3 text-lg font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
            Dashboard 4<p>Passing data through useNavigate</p>
            <div>
              <code>{`navigate("/dash-four/${info.name}/age=${info.age}", { state: { msg: "state data passed" } })`}</code>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
