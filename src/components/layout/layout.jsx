import {Header} from './header/header.jsx';
import {Footer} from './footer/footer.jsx';

export const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}