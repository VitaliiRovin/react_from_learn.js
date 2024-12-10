import {Clock} from '../clock/clock.jsx';
import style from './header.module.css'
import anyFood from '../../images/svg/anyFood.svg'
import {Container} from '../container/container.jsx'

export const Header = () => (
  <header className={style.header}>
    <Container extraClass='header'>
      <div></div>
      <a href='/'>
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
    </Container>
  </header>
)