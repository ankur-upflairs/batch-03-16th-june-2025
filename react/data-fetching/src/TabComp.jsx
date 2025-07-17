import React, { useState } from "react";
import GetData from "./components/GetData";
import PostData from "./components/PostData";

let tabs = ["get", "post"];

function TabComp() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <> 
      <ul>
        {tabs.map((v, i) => {
          return <li onClick={()=>setSelectedTab(i)}>{v}</li>;
        })}
      </ul>
      {selectedTab == 0 && <GetData />}
      {selectedTab == 1 && <PostData />}

    </>
  );

  
}

export default TabComp;
