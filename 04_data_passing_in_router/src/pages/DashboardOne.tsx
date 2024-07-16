import React from "react";
import { useParams } from "react-router-dom";

const DashboardPageOne = () => {
  // Retrieve param variables from the URL
  let { name, age } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Dashboard Page</h2>
        <div className="mb-4">
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Age:</strong> {age}
        </div>
      </div>
    </div>
  );
};

export default DashboardPageOne;
