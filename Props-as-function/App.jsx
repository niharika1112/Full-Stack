import { useState } from "react"
import Button from "./Components/asFunction/Button"
import Card from "./Components/asChildren/Card"



function App() {
// props As Function
 const[count, setCount ] = useState(0);

function handleClick(){
  setCount(count+1);
}

 return (
    <>
    {/* passing prop as function */}

    <Button incrementcount={handleClick} text="Click me ">
      <h1>{count}</h1>
      </Button>

      {/* to access it go to component.jsx */}




    {/* Props as Children */}


      {/* <Card name="niharika">
        <h1>BEST person</h1>
        <p>Try to maintain that</p>
        </Card> */}
    </>
  )
}

export default App
