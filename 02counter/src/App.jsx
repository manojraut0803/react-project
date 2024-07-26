import React, {useState} from "react";

function App() {

  const [counter, setCounter] = useState(0);
  // let counter = 10;

  var addValue = ()=>{
    setCounter(counter + 1);
  }
  var removeValue = ()=>{
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={ addValue }>Add value</button>
      <button onClick={ removeValue }>remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
