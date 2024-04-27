import { useState } from "react"
import { Header } from "./Header"
function App() {
  const [title,setTitle] = useState("my  name is prashant"); 
 
 function updateTitle(){
  setTitle("my name is "+ Math.random());
 }
  

  return (
    <>
    <button  onClick={updateTitle }> Click here to change the title</button>
    <Header title={title}/>
    <Header title="prashant1"/>
    <Header title="prashant2"/>
    <Header title="prashant3"/>
    <Header title="prashant4"/>
    </>
  )
}

export default App


