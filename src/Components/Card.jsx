import style from './Card.module.css'

const Card = (props) => {
  return (
    <div className={style['card']}>
      <img src={props.cardImg} alt={props.alt}/>
      {props.children}
    </div>
  )
}

export default Card