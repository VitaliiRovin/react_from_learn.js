import {Counter} from '../counter/counter.jsx';
import {useCounter} from '../counter/use-counter.js';

export const MenuItem = ({item}) => {

  const {increment, decrement, count} = useCounter(0, 10);
  return (
    <>
      <div>{item.name}</div>
      <div>{item.ingredients.length > 0 && item.ingredients.join(', ')}</div>
      <Counter increment={increment} decrement={decrement} count={count} />
    </>
  )
}