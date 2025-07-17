import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetching from './DataFetching'
import SingleProduct from './SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DataFetching /> */}
      <SingleProduct />
    </>
  )
}

export default App
