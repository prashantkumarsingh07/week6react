
import { useState } from "react";

 

function App() {
   return (
    <div>
    
    <HeaderWithButton/>
    <Header title="prashant1"/>
    <Header title="prashant2"/>
    <Header title="prashant3"/>
    <Header title="prashant4"/>
    </div>
  )
}
 // first way of avoiding unnecessary rendering .

 
// pushing the state down to avoid unnecessary rendering. 
// pushing down the state to lowest common ancestor.

 function HeaderWithButton(){
      
  const [firsttitle,setfirsttitle] = useState("my name is prashant");
 
   function changetitle(){
     setfirsttitle("My name is "+ Math.random())
   }
 
  return <>
     <button onClick={changetitle}>Click here to change the title</button>
     <Header title={firsttitle} />
  </>
 
 
 }

 function Header({title}){
  return<div>
      {title}
    </div>
  
}


export default App


