import React from 'react'

const Button = (props) => {
  return (
    // to access the function passed
   <button onClick={props.incrementcount}>
    {props.text}
  {props.children}
   </button>
  )
}

export default Button
