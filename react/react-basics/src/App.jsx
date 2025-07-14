import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx' 
import Footer , { A,name } from './Content.jsx'


function App() {


 
  let element1= <div>
    <h1 className='a' >hello world</h1> 
    <p>this is sample react</p>
    <p>hi ,<br></br> my name is {name} and my age is {12+6} </p>
    <input type="text" />
  </div>

  return (
    <>
    {element1}
    <Header></Header>
    {/* <Content /> */}
    <A /> 
    <Footer />
    <Footer />
    <Footer />

    </>
  )
}

export default App

// //functional component are normal function that name starts with capital letter
// //and always return jsx
// //to use the functional component call it as a tag 
// function Header(){
//   return <div className='x'>
//     this is header
//   </div>
// }
// function Content() {
//   return <div>
//     this is content container 
//   </div>
// }
// function Footer() {
//   return <div>
//     this is footer 
//   </div>
// }



// function App() {
//   const [count, setCount] = useState(0)
//   //jsx => javascript xtension 
//   //complete jsx must wrap in a single element
//   //every element must be closed 
//   //use className insteed of class 
//   //{ } in jsx => to write js inside jsx
//   //do not use loop or if-else inside curly brackets
//   let name = 'gagan'
//   let element1= <div>
//     <h1 className='a' >hello world</h1> 
//     <p>this is sample react</p>
//     <p>hi ,<br></br> my name is {name} and my age is {12+6} </p>
//     <input type="text" />
//   </div>

//   return (
//     <>
//     {element1}
//     <Header></Header>
//     <Content />
//     <Footer />
//     <Footer />
//     <Footer />

//     </>
//   )
// }

// export default App
