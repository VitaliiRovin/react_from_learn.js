import {useScrollPercentage} from './use-scroll.js';
import style from './scroll-bar.module.css'

export const ScrollBar = () => {
  const scrollPercentage = useScrollPercentage();

  return (
    <div className={style.wrapper}>
      <div className={style.progressLine} style={{width: `${scrollPercentage}%`}}/>
    </div>
  );
};
