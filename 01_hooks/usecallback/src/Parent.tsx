import { useCallback, useState } from "react";
import MyList from "./MyList";

export default function ParentComponent() {
  const [state, setState] = useState(false);
  const [dep , setDep] = useState(false);
  console.log("Parent Component redered");

  const handler = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      console.log("You clicked ", event);
    },
    [dep]
  );

  // function handler(event: React.MouseEvent<HTMLDivElement>) {
  //   console.log("You clicked ", event);
  // }

  return (
    <>
      <button onClick={() => setState(!state)}>
        Change State Of Parent Component
      </button>
      <br />
      <button onClick={() => setDep(!dep)}>
        Change dep State
      </button>
      <MyList handler={handler} />
    </>
  );
}