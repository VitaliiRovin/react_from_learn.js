import {Clock} from '../clock/clock.jsx';
import style from './header.module.css'
import classNames from 'classnames'
import anyFood from '../../images/svg/anyFood.svg'

export const Header = () => (
  <header className={style.header}>
    <div className={classNames(style.wrapper, 'container')}>
      <div></div>
      <a href='/' className={style.logo}>
        <img
          src={anyFood}
          alt='AnyFood'
          width={115}
          height={21}
          loading='lazy'
        />
      </a>
      <div>
        <Clock/>
        <div></div>
      </div>
    </div>
  </header>
)