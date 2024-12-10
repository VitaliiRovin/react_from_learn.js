import style from './container.module.css'
import classNames from 'classnames';

export const Container = ({children, extraClass}) => {
  return (
    <div className={classNames(
      style.container,
      {[style.header]: extraClass === 'header'},
    )}>{children}</div>)
}