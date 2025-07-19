import React from "react";
import { Link ,NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          width: "70%",
          margin: "10px auto",
          display: "flex",
          justifyContent:'center',
          gap:'30px'
        }}
      >
        <li>
          <NavLink to={"/"}> Home </NavLink>
        </li>
        <li>
          <NavLink to={"/create/new"}>Create Post</NavLink>
        </li>
      </ul>
    </div>
  );
}

// function Navbar() {
//   return (
//     <div>
//       <ul
//         style={{
//           listStyle: "none",
//           width: "70%",
//           margin: "10px auto",
//           display: "flex",
//           justifyContent:'center',
//           gap:'30px'
//         }}
//       >
//         <li>
//           <Link to={"/"}> Home </Link>
//         </li>
//         <li>
//           <Link to={"/create/new"}>Create Post</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default Navbar;
