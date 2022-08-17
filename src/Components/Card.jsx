import React from 'react'
import Button from './Button'

import cardImg from  '../Images/1.jpg'
import style from './Card.module.css'

const Card = () => {
  return (
    <div className={style['card']}>
        <img src={cardImg}/>
        <h3>Lorem, ipsum.</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <Button/>
    </div>
  )
}

export default Card