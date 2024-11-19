import {Counter} from '../counter/counter.jsx';

export const MenuItem = ({item}) => (
  <li key={item.id}>
    <div>{item.name}</div>
    <div>{item.ingredients.length > 0 && item.ingredients.join(', ')}</div>
    <Counter/>
  </li>
)