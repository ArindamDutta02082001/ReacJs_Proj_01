import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DashboardPageFour = () => {
  // Retrieve param variables from the URL
  let { name } = useParams();

  // Retrieve parameters from the query parameters
  const location = useLocation();
   const params = new URLSearchParams(location.search);
  const age = params.get("age");

  // Retrieve information from the state passed
  const { msg } = location.state;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard 3</h2>
        {
          <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Mssg : {msg}</p>
          </>
        }
      </div>
    </div>
  );
};

export default DashboardPageFour;
