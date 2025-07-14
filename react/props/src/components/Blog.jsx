import React, { Fragment } from "react";
import './blog.css'

function Blog({title,content , image ,isVarified}) {
    
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {content}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <p style={{
            backgroundColor:isVarified ? 'blue' : 'red'
          }}>
          {isVarified ? <span>varified</span> : <span>not varified</span> }
          </p>

          {/* <p className={isVarified ? 'varified' : 'not-varified'}>
          {isVarified ? <span>varified</span> : <span>not varified</span> }
          </p> */}
        </div>
      </div>
    </>
  );
}

//make a list of expense and income , with conditional randering 
// {value, description}  

export default Blog;


// function Blog(props) {
//     let {title,content , image} = props 
//     // console.log(props)
//   return (
//     <>
//       <div className="card" style={{ width: "18rem" }}>
//         <img src={image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">
//            {content}
//           </p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Blog;
