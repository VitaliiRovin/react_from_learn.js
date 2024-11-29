import {Header} from '../header/header.jsx';
import {Footer} from '../footer/footer.jsx';
import {ScrollBar} from '../scroll-bar/scroll-bar.jsx';

export const Layout = ({children}) => {
  return (
    <>
      <ScrollBar/>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}