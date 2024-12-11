import {Counter} from '../counter/counter.jsx';
import {useCounter} from '../counter/use-counter.js';
import style from './menuItem.module.css'

export const MenuItem = ({item}) => {

  const {increment, decrement, count} = useCounter(0, 10);
  return (
    <>
      <div className={style.item}>
        <h4>{item.name}</h4>
        <p>{item.ingredients.length > 0 && item.ingredients.join(', ')}</p>
        <div className={style.price}>{item.price}</div>
      </div>

      <Counter increment={increment} decrement={decrement} count={count}/>
    </>
  )
}