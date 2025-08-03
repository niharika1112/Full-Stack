import React from 'react'
import image from '../assets/image.jpg'
import'./UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id ="user-name">{props.name}</p>
      <img id='user-img' src={image} alt="" />
      <p>description of Niharika</p>
    </div>
  )
}

export default UserCard
