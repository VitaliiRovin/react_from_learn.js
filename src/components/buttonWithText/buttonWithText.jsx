import style from './buttonWithText.module.css'

export const ButtonWithText = ({type, text, onClick}) => {
  return (
      <button
        className={style.button}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
  )
}