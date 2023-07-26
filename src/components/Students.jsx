import React, { useState } from 'react'

const Students = (props) => {
  const [name,setName]=useState(props.name)
  const [live,setLive]=useState(props.live)
  const [email,setEmail]=useState(props.email)
  return (
   <div>
    <p>{name}</p>
    <p>{live}</p>
    <p>{email}</p>
   </div>
  )
}

export default Students