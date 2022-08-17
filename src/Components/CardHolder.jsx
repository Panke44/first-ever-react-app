import style from './CardHolder.module.css'

const CardHolder = (props) => {
  return (
    <div className={style['card-holder']} >
      {props.children}
    </div>
  )
}

export default CardHolder