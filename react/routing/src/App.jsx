import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Navbar from "./components/Navbar";
import CreateNewPost from "./Pages/CreateNewPost";
import UpdatePost from "./Pages/UpdatePost";
import Page404 from "./Pages/Page404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="create" element={<CreatePost />}>
            <Route path="new" element={<CreateNewPost />} />
            <Route path="update/:id" element={<UpdatePost />} />
          </Route>
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
