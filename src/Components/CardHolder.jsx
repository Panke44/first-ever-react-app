import React from 'react'
import Card from './Card'
import style from './CardHolder.module.css'

const CardHolder = () => {
  return (
    <div className={style['card-holder']} >
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default CardHolder