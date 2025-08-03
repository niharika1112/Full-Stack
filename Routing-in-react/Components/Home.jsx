import React from 'react'
import { useNavigate, useNavigate } from 'react-router-dom'

const Home = () => {
   const  Navigate = useNavigate();
function handleClick(params) {
    Navigate('/about')
}
  return (
    <div>
      Home page
      <button onClick = {handleClick}>
Move to about page
      </button>
    </div>
  )
}

export default Home
