import {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => count < 5 && setCount(count + 1)
  const decrement = () => count > 0 && setCount(count - 1)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}