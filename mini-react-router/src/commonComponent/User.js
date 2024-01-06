import React from "react";
import { useParams } from "react-router-dom";


// we an use useParam to get the value
export default function User() {
  const { userId } = useParams();
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>User value coming from the :id : {userId}</h1>
        <h6>
          This userId is not restricted to any numbers , basically can be of any
          thing string , number etc
        </h6>
      </header>
    </>
  );
}
