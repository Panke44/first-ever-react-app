import React from 'react'
import style from './Title.module.css'

const Title = (props) => {
  return (
    <div className={style['title']}>
      {props.children}
    </div>
  )
}

export default Title