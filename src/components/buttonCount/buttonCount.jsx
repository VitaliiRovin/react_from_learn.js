import style from './buttonCount.module.css';

export const ButtonCount = ({alt, img, onChange}) => {
  return (
    <button
      className={style.button}
      onClick={onChange}
      type='button'
    >
      <img
        src={img}
        alt={alt}
        width='18'
        height='18'
        loading='lazy'
      />
    </button>
  )
}