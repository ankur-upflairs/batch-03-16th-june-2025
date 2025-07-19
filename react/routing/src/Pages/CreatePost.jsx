import React from 'react'
import { Outlet } from 'react-router'

function CreatePost() {
  return (
    <div>
        <h3 style={{textAlign:'center',textDecoration:'underline'}}>Create / Update Post</h3>
        <Outlet />
    </div>
  )
}

export default CreatePost