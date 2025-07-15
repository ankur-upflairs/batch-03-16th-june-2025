import React from 'react'

function ReactEvent() {
    const handleClick=()=>{
        alert('button clicked')
    }
    function show(name){
        alert(`hello , my name is ${name}`)
    }
  return (
    <div>
        <button onClick={handleClick}>click</button>
        <br />
        <button onClick={()=>show('Ritesh')} >show msg</button>
    </div>
  )
}

export default ReactEvent