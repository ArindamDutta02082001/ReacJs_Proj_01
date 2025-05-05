import React from "react";
import { useParams } from "react-router-dom";

/*
 * we an use useParams to get :id value from the url
 */

export default function User() {
  const result = 1 > 0 ? "large" : "small";
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
      <h1 className={result}>This is a User page with id {userId}</h1>
    </>
  );
}
