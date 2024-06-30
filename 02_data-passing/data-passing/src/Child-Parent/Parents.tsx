import React, { useState } from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  const [parentData, setParentData] = useState<string[]>([]); // Array to store child data

  // function will be passed as the prop to get data from the child component
  const updateList = (data: string) => {
    setParentData([...parentData, data]); // Storing child data onChange
  };

  return (
    <div>
      <p>Data from child: {parentData.join(", ")}</p>
      <ChildComponent updateList={updateList} />
    </div>
  );
}

export default ParentComponent;
