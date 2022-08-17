import React from 'react'
import style from './Button.module.css'

const Button = (props) => {
  return (
    <div>
        <button type='button' className={style['btn']}>
           {props.btn}
        </button>
    </div>
  )
}

export default Button