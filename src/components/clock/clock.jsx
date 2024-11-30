import {useEffect, useState} from 'react';

export const Clock = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      {now.toLocaleTimeString()}
    </div>
  )
}