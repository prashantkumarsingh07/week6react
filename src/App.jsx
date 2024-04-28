  import React ,{Fragment} from "react";
import {  useState } from "react"

//  import React from "react";


function App() {
  const [title,setTitle] = useState("my  name is prashant"); 
 
 function updateTitle(){
  setTitle("my name is "+ Math.random());
 }
  
 return (
    <>
    <button onClick={updateTitle}>click here to change title</button>
    <Header title={title} />
    <Header title="prashant1"/>
    <Header title="prashant2"/>
    <Header title="prashant3"/>
    <Header title="prashant4"/>
    <Header title="prashant2"/>
    <Header title="prashant3"/>
  
    </>
  )
}

const Header = React.memo(function Header({title}){
  return <div>
       {title}
  </div>
})

export default App


