import React, { createContext, useState } from "react";
import ComA from "./ComA";

export const userContext = createContext(null);

function ContextAPI({children}) {
  const [user, setUser] = useState("pankaj");

  return (
    <userContext.Provider value={{user,setUser}} >
      {children}
    </userContext.Provider>
  );
}

export default ContextAPI;
