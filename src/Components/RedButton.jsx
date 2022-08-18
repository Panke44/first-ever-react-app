import React from 'react'
import { Link } from 'react-router-dom'
import style from './RedButton.module.css'

const RedButton = (props) => {
  return (
    <Link to={props.link}>
    <button type='button' className={style['red-button']}>
      {props.btn}
    </button>
  </Link>
  )
}

export default RedButton