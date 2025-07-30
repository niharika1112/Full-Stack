import { useState } from 'react'

import './App.css'

function App() {
  
 function handleClick(){
alert("btn is clicked");
 }
  return (
    <>
     <button onClick={handleClick}>
      click me
     </button>
    </>
  )
}

export default App
