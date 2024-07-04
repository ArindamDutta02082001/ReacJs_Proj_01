import React, { forwardRef } from "react";

function ChildComp({ refs }) {
  return (
      <div>
        <input ref={refs} type="text" />
      </div>
  );
}

export default forwardRef(ChildComp);
