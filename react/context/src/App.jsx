import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContextAPI from "./ContextAPI";
import ComA from "./ComA";

function App() {
  return (
    <>
      <ContextAPI>
        <ComA />
      </ContextAPI>
    </>
  );
}

export default App;
