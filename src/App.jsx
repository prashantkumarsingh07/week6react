
 /// keys   whenever u are iteraring over an array u need unique id & a key
 // because it helps react to calculate  diffs  difference , and simplifies re -rendering logic.

import { useState } from "react"


function App() {
  
  const [todos,setTodos] = useState([{
    id:1,
    title: "go t gym",
    description: "go to  gym at 12 pm today",
  },
  {
    id:2,
    title: "go for cycling",
    description: "go to  cycling  at 7 pm today",
  },
  {
    id:3,
    title: "go to party",
    description: "go for  part  at 10 pm today",
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:Math.random(),
      description: Math.random(),
    }])
  }

 return <>
      <button onClick={addTodo}>add a todo</button>
     {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
  
    </>
    
  
}

function Todo({title,description})
{
  return <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
   </div>
  
}




export default App


