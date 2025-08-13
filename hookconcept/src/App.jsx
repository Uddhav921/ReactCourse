import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  function addValue(){
    if(count>=20){
      alert("you can not add more than 20")
    }else{
       setCount(count+1)
    console.log("added value"+count)
  }
   
  }
   function RemoveValue(){
    if(count<=0){
      alert("you can not remove below 0")
    }else{
      setCount(count-1)
    console.log("removed value"+count)
    }
    
  }
  return (
    <>
   <h1>Hello from Hooks concept</h1>
   <button onClick={addValue}>Click here to add value {count}</button>
   <br/>
   <br/>
   <button onClick={RemoveValue}>Click here to remove value {count}</button>
    </>
  )
}

export default App
