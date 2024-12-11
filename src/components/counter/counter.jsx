import style from './counter.module.css'
import minus from '../../images/svg/minus.svg'
import plus from '../../images/svg/plus.svg'
import classNames from 'classnames';
import {ButtonCount} from '../buttonCount/buttonCount.jsx';

export const Counter = ({increment, decrement, count, order}) => {
  return (
    <div className={classNames(
      style.wrapperCount,
      {[style.wrapperCountReverse]: order==='reverse'},
    )}>
      <span className={style.count}>{count}</span>
      <div className={style.wrapperButtons}>
        <ButtonCount alt='minus' img={minus} onChange={decrement}/>
        <ButtonCount alt='plus' img={plus} onChange={increment}/>
      </div>
    </div>
  )
}