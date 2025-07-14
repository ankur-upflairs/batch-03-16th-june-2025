import React from 'react'

function Event() {
    const handleClick=()=>{
        alert('clicked')
    }
    function show(name) {
        alert(`hello ${name}`)
    }
  return ( 
    <div>
        <button onClick={handleClick} >click here</button><br />
        <button onClick={()=>show('gagan')}>function with argument</button>
        <button onClick={(e)=>{console.log(e)}}>event</button>
    </div>
  )
}

export default Event