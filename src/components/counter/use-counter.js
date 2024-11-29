import {useState} from 'react';

export const useCounter = (min, max) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(Math.min(count + 1, max))
  const decrement = () => setCount(Math.max(count - 1, min))

  return {
    increment,
    decrement,
    count,
  }
}