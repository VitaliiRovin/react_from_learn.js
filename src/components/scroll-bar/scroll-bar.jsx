import {useScrollPercentage} from './use-scroll.js';
import './scroll-bar.css';

export const ScrollBar = () => {
  const scrollPercentage = useScrollPercentage();

  return (
    <div className='scrollBar'>
      <div className='scrollBar__progress' style={{width: `${scrollPercentage}%`}}/>
    </div>
  );
};
