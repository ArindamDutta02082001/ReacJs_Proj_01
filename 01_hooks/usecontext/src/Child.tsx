
import { useContext } from "react";

// importing the context
import { Context } from "./context-create/CreateContext";


function Child() {

  // using the useContext hook to access the data passed
  const dataFromContext = useContext(Context);

  return (
    <div className="">
      <input
        type="checkbox"
        onChange={(e) => {
          let checkVal = e.target.checked;
          checkVal === true
            ? dataFromContext?.darkTheme()
            : dataFromContext?.lightTheme();
        }}
      />
      <h1>{dataFromContext?.data.name}</h1>
      <h6>
        this is child component rendered that you are seeing , inside the parent
        (Parent ke andar child ko call kiya gya hai)
      </h6>
    </div>
  );
}

export default Child;
