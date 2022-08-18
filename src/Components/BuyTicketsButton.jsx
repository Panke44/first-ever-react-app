import React from 'react'
import { Link } from 'react-router-dom'
import style from './BuyTicketsButton.module.css'

const BuyTicketsButton = (props) => {
  return (
    <Link to={props.link}>
    <button type='button' className={style['red-button']}>
      Buy Tickets <i class="fa-solid fa-up-right-from-square"></i>
    </button>
  </Link>
  )
}

{/* <RedButton btn="Buy Tickets" link="/new-york-city" alt="Box Truck" fa="fa-solid fa-up-right-from-square"></RedButton> */}

export default BuyTicketsButton