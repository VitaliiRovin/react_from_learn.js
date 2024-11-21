import {useState} from 'react';

export const Counter = ({max = 5, min = 0}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(Math.min(count + 1, max))
  const decrement = () => setCount(Math.max(count - 1, min))

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}