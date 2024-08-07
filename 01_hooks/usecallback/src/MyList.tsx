import React, { memo } from "react";

type MyListProps = {
  handler: (event: React.MouseEvent<HTMLDivElement>) => void;
};

function MyList({ handler }: MyListProps) {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Child Component rendered");

  return (
    <>
      {items.map((item, index) => (
        <div
          style={{ border: "2px solid red", width:"20%", margin: "auto" }}
          key={index}
          onClick={handler}>
          {item}
        </div>
      ))}
    </>
  );
}

export default memo(MyList);
