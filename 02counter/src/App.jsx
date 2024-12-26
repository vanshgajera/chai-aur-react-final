import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1,
    if(counter < 25) {
      setCounter(counter + 1)
      console.log("Clicked", counter);    
    }else{
      console.log("Maximum value reached!");
      
    }
  }

  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1)
      console.log("Value decreased", counter);
    }else{
      console.log("Counter cannot go below 0"); 
    }

  }

  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter value: {counter}</h2>

        <button
        onClick={addValue}
        >Add value {counter}</button>
        <br />
        <button
        onClick={removeValue}
        >remove value {counter}</button>
        <p>footer: {counter}</p>
    </>
  )
}

export default App
