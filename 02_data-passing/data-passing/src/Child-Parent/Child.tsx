import React, { ChangeEvent } from "react";


interface ChildComponentProps {
  updateList: (data: string) => void;
}

function ChildComponent({ updateList  } : ChildComponentProps ) {


  function handleChange (event: ChangeEvent<HTMLInputElement>) 
  {
    updateList(event.target.value); // Call the parent callback and pass the data to the parent
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default ChildComponent;
