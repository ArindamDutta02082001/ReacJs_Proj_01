import React from "react";
import { useLocation } from "react-router-dom";

const DashboarPageThree = () => {
  // Retrieve information from the state passed
  const location = useLocation();
  const { myInfo } = location.state;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard 3</h2>
        {
          <>
            <p>Name: {myInfo?.name}</p>
            <p>Age: {myInfo?.age}</p>
          </>
        }
      </div>
    </div>
  );
};

export default DashboarPageThree;
