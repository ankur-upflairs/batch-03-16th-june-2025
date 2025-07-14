import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Style from "./Style";
import Blog from "./components/Blog";
import { blogsData } from "./components/data";
import Event from "./components/Event";


function App() {

  return (
    <>
    {/* <div style={{
      display:'flex' ,flexWrap:'wrap',gap:'20px'
    }}>
    {blogsData.map((blog,index)=>{
      return <Blog {...blog} />
    })}
    </div> */}
    <Event /> 
    </>
  );
}

export default App;




// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//      <Blog {...blogsData[0]} />
//      <Blog {...blogsData[1]} />
//      <Blog {...blogsData[2]} />

//     </>
//   );
// }

// export default App;


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <Style /> */}
//       {/* <Blog /> */}
//       <Blog
//         title="pollution"
//         image="https://picsum.photos/200/200"
//         content={` Some quick example text to build on the card title and make up the
//             bulk of the card’s content.`}
//       />
//       <Blog
//         title="HTML"
//         image="https://picsum.photos/200/200"
//         content={` Some quick example text to build on the card title and make up the
//             bulk of the card’s content.`}
//       />
//       <Blog
//         title="CSS"
//         image="https://picsum.photos/200/200"
//         content={` Some quick example text to build on the card title and make up the
//             bulk of the card’s content.`}
//       />
//     </>
//   );
// }

// export default App;
