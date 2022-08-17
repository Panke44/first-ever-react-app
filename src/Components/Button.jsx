import React from 'react'
import { Link } from 'react-router-dom'
import style from './Button.module.css'

const Button = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <button type='button' className={style['btn']}>
          {props.btn}
        </button>
      </Link>
    </div>
  )
}

export default Button