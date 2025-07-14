import React from 'react'
import './style.css'
function Style() {
    //for inline styling => provide {} (object) to style attribute
    //use property as key ,remove -(hyphen ) and convert camelcase
    //value must be in string
    let inlineStyle= {
        color:'blue',
        border: '1px solid blue',
        backgroundColor:'none',
        padding:'4px 8px',
        borderRadius:'8px'
    }
  return (
    <div>
        <p className='x'>
            hello
        </p>
        <button className='btn btn-outline-primary'>click here</button>
       <br />
        <button style={{
            backgroundColor:'blue',
            border:'1px solid blue'
        }}>inline style</button>
        <br /> <br />
        <button style={inlineStyle}>click here</button>
    </div>
  )
}

export default Style