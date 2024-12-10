import style from './counter.module.css'
import minus from '../../images/svg/minus.svg'
import plus from '../../images/svg/plus.svg'
import classNames from 'classnames';

export const Counter = ({increment, decrement, count, isLocation}) => {

  const className = classNames(
    style.wrapperCount,
    {[style.wrapperCountReview]: isLocation==='review'},
  )

  return (
    <div className={className}>
      <span className={style.count}>{count}</span>
      <div className={style.wrapperButtons}>
        <button
          className={style.button}
          onClick={decrement}
          type='button'
        >
          <img
            src={minus}
            alt='minus'
            width='18'
            height='18'
            loading='lazy'
          />
        </button>
        <button
          className={style.button}
          onClick={increment}
          type='button'
        >
          <img
            src={plus}
            alt='plus'
            width='18'
            height='18'
            loading='lazy'
          />
        </button>
      </div>
    </div>
  )
}