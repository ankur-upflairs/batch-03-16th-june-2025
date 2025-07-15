import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactEvent from './ReactEvent'
import State from './State'
import Form from './Form'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ReactEvent /> */}
     {/* <State />  */}
     {/* <Form /> */}
     <Todo />
      </>
  )
}

export default App
