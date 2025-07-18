import React, { useState } from "react";
import GetData from "./components/GetData";

import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";

let tabs = ["get", "post", ];

function TabComp() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <> 
      <ul  className="row w-75 mx-auto my-1">
        {tabs.map((v, i) => {
          return <li className="col" onClick={()=>setSelectedTab(i)}>{v}</li>;
        })}
      </ul>
      {selectedTab == 0 && <GetData />}
      {selectedTab == 1 && <CreatePost />}
     
    </>
  );

  
}

export default TabComp;
