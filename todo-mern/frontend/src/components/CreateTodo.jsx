import { useState } from "react";


export function CreateTodo(props){
   
    const [title, setTitle]= useState("")
    const [des, setDes]= useState("")

    return(
     


        <div>
  <input style={{padding: 10, margin: 10}} type="text" placeholder="titile" onChange={(e)=>{
    setTitle(e.target.value)
  }}/>
  <input style={{padding: 10, margin: 10}} type="text" placeholder="description" onChange={(e)=>{
    setDes(e.target.value)}}/>
  <button onClick= {()=>{
   fetch("http://localhost:3000/todo", {
    method: "POST",

    body: JSON.stringify({
        title: title,
        des: des
    }),

    headers: {
        "content-type" : "application/json"
    }

   })
   .then(async (res)=>{
     const json = await res.json();
     alert("Todo added")
   })


  }
  }style={{padding: 10, margin: 10}} >Add a todo</button>
  </div>
    )
}