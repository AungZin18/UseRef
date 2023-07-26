import React, { useRef, useState } from "react";

const Form = (props) => {
  const nameInputRef=useRef()
  const liveInputRef=useRef()
  const emailInputRef=useRef()

 
  const addData=(event)=>{
    event.preventDefault()
    const data={name:nameInputRef.current.value,live:liveInputRef.current.value,email:emailInputRef.current.value}
    if(nameInputRef.current.value.trim().length===0,liveInputRef.current.value.trim.length===0,emailInputRef.current.value.trim().length===0){
alert("Fucker")
    }else{
      props.addNewMember(data)
      nameInputRef.current.value=""
      liveInputRef.current.value=""
      emailInputRef.current.value=""
    }
  
   
  }

  return (
    <form onSubmit={addData}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"  ref={nameInputRef}/>
      </div>
      <div>
        <label htmlFor="live">Live</label>
        <input type="text"  ref={liveInputRef}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text"  ref={emailInputRef}/>
      </div>
      <button type="submit">Add New Member</button>
    </form>
  );
};

export default Form;
