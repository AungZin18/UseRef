import { useState } from "react";
import Form from "./components/Form";
import Students from "./components/Students"



function App() {
  const [students,setStudents]=useState("")
 const addNewMember=(memInfo)=>{
setStudents([...students,memInfo])
console.log(memInfo);
 }

  return (
    <>
    <Form addNewMember={addNewMember}/>
<section>
  {
    students.length<1?(<p>No Students yet</p>):(
      students.map(student=>(
        <Students name={student.name} live={student.live} email={student.email} key={student.name}/>
      ))
    )
  }
</section>
    </>
  )
 
}

export default App;
