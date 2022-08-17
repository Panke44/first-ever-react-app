import React, { Children } from 'react'
import cardImg from  '../Images/1.jpg'
import style from './Card.module.css'

const Card = (props) => {
  return (
    <div className={style['card']}>
      <img src={cardImg} alt="Dog on white freightliner cascadia truck"/>
      {props.Children}
    </div>
  )
}

export default Card