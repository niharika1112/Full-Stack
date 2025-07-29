import { useState } from 'react';
import './App.css'
import Card from './Components/Card';

function App() {
  // create state
  // manage state
  //change state
  // fer sbhi child  me state ko sync kra dege

  const[name,setName] = useState('');
  return (
    <>
    <Card  title="card1" name ={name} setName ={setName}/>
    {/* sibling of card1 using same state */}
    <Card  title="card2" name ={name} setName ={setName}/>
    </>
  )
}

export default App
