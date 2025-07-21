import React, { useContext } from "react";
import { userContext } from "./ContextAPI";

function CompC() {
  let {user} = useContext(userContext);
  return (
    <div>
      CompC <br />
      {user}
    </div>
  );
}

export default CompC;
