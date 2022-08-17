import React, { Children } from 'react'
import style from './CardHolder.module.css'

const CardHolder = (props) => {
  return (
    <div className={style['card-holder']} >
      {props.Children}
    </div>
  )
}

export default CardHolder