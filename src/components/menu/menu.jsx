import {MenuItem} from '../menuItem/menuItem.jsx';
import style from './menu.module.css'

export const Menu = ({menu}) => (
  <>
    <button
      className={style.title}
      type='button'
    >
      Menu
    </button>
    <ul className={style.list}>
      {menu.map((item) => (
        <li key={item.id} className={style.item}>
          <MenuItem key={item.id} item={item}></MenuItem>
        </li>
      ))}
    </ul>
  </>
)