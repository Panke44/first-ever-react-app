import React from 'react'
import style from './Title.module.css'

const Title = (props) => {
  return (
    <div className={style['title']}>
        <h4> Dobrodosli na {props.naslov} stranicu </h4>
    </div>
  )
}

export default Title