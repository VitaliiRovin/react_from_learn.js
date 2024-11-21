import {MenuItem} from '../menuItem/menuItem.jsx';

export const Menu = ({menu}) => (
  <>
    <h3>Menu</h3>
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <MenuItem key={item.id} item={item}></MenuItem>
        </li>
      ))}
    </ul>
  </>
)