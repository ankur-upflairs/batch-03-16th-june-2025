import React from 'react'
import { useParams } from 'react-router'

function UpdatePost() {
    let params = useParams()
  return (
    <div>
        updating post  with id {params.id}
    </div>
  )
}

export default UpdatePost