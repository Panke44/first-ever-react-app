import React from 'react'
import style from './Button.module.css'

const Button = () => {
  return (
    <div>
        <button type='button' className={style['btn']}>
            Submit
        </button>
    </div>
  )
}

export default Button