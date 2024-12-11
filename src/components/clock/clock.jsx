import {useEffect, useState} from 'react';
import style from './clock.module.css'

export const Clock = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className={style.wrapper}>
      {now.toLocaleTimeString()}
    </div>
  )
}